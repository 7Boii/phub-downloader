// Service worker for PHub Downloader
// Made by @7Boi.999 on IG

const activeDownloads = new Map();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'download') {
    handleDownload(msg.url, msg.filename, msg.tabId)
      .then(result => sendResponse(result))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true;
  }
  if (msg.action === 'cancelDownload') {
    const entry = activeDownloads.get(msg.filename);
    if (entry) {
      entry.cleanup();
      activeDownloads.delete(msg.filename);
      chrome.runtime.sendMessage({ action: 'dlProgress', filename: msg.filename, phase: 'cancelled' });
    }
    sendResponse({ success: true });
    return false;
  }
});

async function handleDownload(videoUrl, filename, sourceTabId) {
  try {
    const [{ result: iframeId }] = await chrome.scripting.executeScript({
      target: { tabId: sourceTabId },
      world: 'MAIN',
      func: createHiddenIframe,
      args: [videoUrl]
    });
    
    if (!iframeId) {
      return { success: false, error: 'Could not inject iframe (page may have CSP).' };
    }
    
    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      removeIframe(sourceTabId, iframeId);
      activeDownloads.delete(filename);
    };
    activeDownloads.set(filename, { tabId: sourceTabId, iframeId, cleanup });
    
    const frameId = await waitForFrameId(sourceTabId, videoUrl, 20000);
    if (!frameId) {
      cleanup();
      return { success: false, error: 'Iframe never loaded the CDN URL.' };
    }
    
    await new Promise(r => setTimeout(r, 500));
    
    await chrome.scripting.executeScript({
      target: { tabId: sourceTabId, frameIds: [frameId] },
      func: streamDownload,
      args: [videoUrl, filename]
    });
    
    const onCreated = () => {
      chrome.downloads.onCreated.removeListener(onCreated);
      setTimeout(cleanup, 5000);
    };
    chrome.downloads.onCreated.addListener(onCreated);
    setTimeout(() => {
      chrome.downloads.onCreated.removeListener(onCreated);
      cleanup();
    }, 600000);
    
    return { success: true, message: 'Download started in background — staying on this page.' };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

function createHiddenIframe(url) {
  try {
    const id = 'phub-dl-iframe-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    const iframe = document.createElement('iframe');
    iframe.id = id;
    iframe.src = url;
    iframe.setAttribute('aria-hidden', 'true');
    iframe.style.cssText = 'position:fixed;width:1px;height:1px;border:0;opacity:0;pointer-events:none;left:-9999px;top:-9999px;z-index:-1;';
    (document.body || document.documentElement).appendChild(iframe);
    return id;
  } catch (e) {
    return null;
  }
}

async function waitForFrameId(tabId, targetUrl, timeoutMs) {
  const u = new URL(targetUrl);
  const host = u.hostname;
  const file = u.pathname.split('/').pop();
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const frames = await chrome.webNavigation.getAllFrames({ tabId });
      const f = frames?.find(fr => fr.url && fr.url.includes(host) && fr.url.includes(file));
      if (f) return f.frameId;
    } catch (_) { /* tab may be transitioning */ }
    await new Promise(r => setTimeout(r, 250));
  }
  return null;
}

function removeIframe(tabId, iframeId) {
  chrome.scripting.executeScript({
    target: { tabId },
    world: 'MAIN',
    func: (id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    },
    args: [iframeId]
  }).catch(() => {});
}

function streamDownload(url, filename) {
  // Runs in ISOLATED world of the iframe; has chrome.runtime access.
  (async () => {
    const send = (data) => {
      try { chrome.runtime.sendMessage(Object.assign({ action: 'dlProgress', filename }, data)); } catch (_) {}
    };
    try {
      send({ phase: 'start' });
      const resp = await fetch(url, { credentials: 'omit' });
      if (!resp.ok) { send({ phase: 'error', error: 'HTTP ' + resp.status }); return; }
      
      const total = parseInt(resp.headers.get('content-length') || '0', 10) || 0;
      send({ phase: 'fetching', received: 0, total });
      
      const reader = resp.body.getReader();
      const chunks = [];
      let received = 0;
      let lastReport = 0;
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        const now = Date.now();
        if (now - lastReport > 150) {
          send({ phase: 'fetching', received, total });
          lastReport = now;
        }
      }
      
      send({ phase: 'fetching', received, total });
      send({ phase: 'saving', received, total });
      
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      a.style.display = 'none';
      (document.body || document.documentElement).appendChild(a);
      a.click();
      
      send({ phase: 'done', received, total });
      
      setTimeout(() => {
        try { a.remove(); } catch (_) {}
        URL.revokeObjectURL(blobUrl);
      }, 30000);
    } catch (err) {
      try { chrome.runtime.sendMessage({ action: 'dlProgress', filename, phase: 'error', error: err.message }); } catch (_) {}
    }
  })();
}
