// Popup script for PHub Downloader
// Made by @7Boi.999 on IG

const translations = {
  en: {
    loading: 'Loading',
    analyzing: 'Analyzing page',
    noTab: 'No active tab found.',
    openPhub: 'Please open a PornHub video page first.',
    openVideo: 'Open a video page (view_video.php) to extract download links.',
    noData: 'Could not extract video data.',
    noFormats: 'No downloadable formats found.',
    download: 'Download',
    refresh: 'Refresh',
    qualitiesAvailable: n => `${n} qualities available`,
    error: 'Error',
    completed: 'Completed',
    saving: 'Saving',
    connecting: 'Connecting to CDN',
    preparing: 'Preparing',
    downloadFailed: 'Download failed',
    unknownError: 'Unknown error occurred.',
    mbSaved: n => `${n} MB saved`,
    speed: s => `${s} MB/s`,
    cancel: 'Cancel download',
    cancelled: 'Cancelled',
  },
  it: {
    loading: 'Caricamento',
    analyzing: 'Analisi pagina',
    noTab: 'Nessuna scheda attiva trovata.',
    openPhub: 'Apri prima una pagina video di PornHub.',
    openVideo: 'Apri una pagina video (view_video.php) per estrarre i link di download.',
    noData: 'Impossibile estrarre i dati del video.',
    noFormats: 'Nessun formato scaricabile trovato.',
    download: 'Download',
    refresh: 'Aggiorna',
    qualitiesAvailable: n => `${n} qualità disponibili`,
    error: 'Errore',
    completed: 'Completato',
    saving: 'Salvataggio',
    connecting: 'Connessione al CDN',
    preparing: 'Preparazione',
    downloadFailed: 'Download fallito',
    unknownError: 'Errore sconosciuto.',
    mbSaved: n => `${n} MB salvati`,
    speed: s => `${s} MB/s`,
    cancel: 'Annulla download',
    cancelled: 'Annullato',
  },
  fr: {
    loading: 'Chargement',
    analyzing: 'Analyse de la page',
    noTab: "Aucun onglet actif trouvé.",
    openPhub: "Veuillez d'abord ouvrir une page vidéo PornHub.",
    openVideo: 'Ouvrez une page vidéo (view_video.php) pour extraire les liens de téléchargement.',
    noData: "Impossible d'extraire les données vidéo.",
    noFormats: 'Aucun format téléchargeable trouvé.',
    download: 'Télécharger',
    refresh: 'Actualiser',
    qualitiesAvailable: n => `${n} qualités disponibles`,
    error: 'Erreur',
    completed: 'Terminé',
    saving: 'Enregistrement',
    connecting: 'Connexion au CDN',
    preparing: 'Préparation',
    downloadFailed: 'Échec du téléchargement',
    unknownError: 'Erreur inconnue.',
    mbSaved: n => `${n} Mo enregistrés`,
    speed: s => `${s} MB/s`,
    cancel: 'Annuler le téléchargement',
    cancelled: 'Annulé',
  },
  es: {
    loading: 'Cargando',
    analyzing: 'Analizando página',
    noTab: 'No se encontró ninguna pestaña activa.',
    openPhub: 'Primero abre una página de video de PornHub.',
    openVideo: 'Abre una página de video (view_video.php) para extraer los enlaces de descarga.',
    noData: 'No se pudieron extraer los datos del video.',
    noFormats: 'No se encontraron formatos descargables.',
    download: 'Descargar',
    refresh: 'Actualizar',
    qualitiesAvailable: n => `${n} calidades disponibles`,
    error: 'Error',
    completed: 'Completado',
    saving: 'Guardando',
    connecting: 'Conectando al CDN',
    preparing: 'Preparando',
    downloadFailed: 'Descarga fallida',
    unknownError: 'Error desconocido.',
    mbSaved: n => `${n} MB guardados`,
    speed: s => `${s} MB/s`,
    cancel: 'Cancelar descarga',
    cancelled: 'Cancelado',
  },
  de: {
    loading: 'Laden',
    analyzing: 'Seite wird analysiert',
    noTab: 'Kein aktiver Tab gefunden.',
    openPhub: 'Bitte zuerst eine PornHub-Videoseite öffnen.',
    openVideo: 'Öffne eine Videoseite (view_video.php) um Download-Links zu extrahieren.',
    noData: 'Videodaten konnten nicht extrahiert werden.',
    noFormats: 'Keine herunterladbaren Formate gefunden.',
    download: 'Herunterladen',
    refresh: 'Aktualisieren',
    qualitiesAvailable: n => `${n} Qualitäten verfügbar`,
    error: 'Fehler',
    completed: 'Abgeschlossen',
    saving: 'Speichern',
    connecting: 'Verbindung zum CDN',
    preparing: 'Vorbereitung',
    downloadFailed: 'Download fehlgeschlagen',
    unknownError: 'Unbekannter Fehler.',
    mbSaved: n => `${n} MB gespeichert`,
    speed: s => `${s} MB/s`,
    cancel: 'Download abbrechen',
    cancelled: 'Abgebrochen',
  },
  pt: {
    loading: 'Carregando',
    analyzing: 'Analisando página',
    noTab: 'Nenhuma aba ativa encontrada.',
    openPhub: 'Abra primeiro uma página de vídeo do PornHub.',
    openVideo: 'Abra uma página de vídeo (view_video.php) para extrair os links de download.',
    noData: 'Não foi possível extrair os dados do vídeo.',
    noFormats: 'Nenhum formato para download encontrado.',
    download: 'Baixar',
    refresh: 'Atualizar',
    qualitiesAvailable: n => `${n} qualidades disponíveis`,
    error: 'Erro',
    completed: 'Concluído',
    saving: 'Salvando',
    connecting: 'Conectando ao CDN',
    preparing: 'Preparando',
    downloadFailed: 'Download falhou',
    unknownError: 'Erro desconhecido.',
    mbSaved: n => `${n} MB salvos`,
    speed: s => `${s} MB/s`,
    cancel: 'Cancelar download',
    cancelled: 'Cancelado',
  },
  ru: {
    loading: 'Загрузка',
    analyzing: 'Анализ страницы',
    noTab: 'Активная вкладка не найдена.',
    openPhub: 'Сначала откройте страницу видео на PornHub.',
    openVideo: 'Откройте страницу видео (view_video.php) для извлечения ссылок.',
    noData: 'Не удалось извлечь данные видео.',
    noFormats: 'Загружаемые форматы не найдены.',
    download: 'Скачать',
    refresh: 'Обновить',
    qualitiesAvailable: n => `${n} доступных качеств`,
    error: 'Ошибка',
    completed: 'Завершено',
    saving: 'Сохранение',
    connecting: 'Подключение к CDN',
    preparing: 'Подготовка',
    downloadFailed: 'Ошибка загрузки',
    unknownError: 'Неизвестная ошибка.',
    mbSaved: n => `${n} МБ сохранено`,
    speed: s => `${s} MB/s`,
    cancel: 'Отменить загрузку',
    cancelled: 'Отменено',
  },
  jp: {
    loading: '読み込み中',
    analyzing: 'ページを分析中',
    noTab: 'アクティブなタブが見つかりません。',
    openPhub: 'まずPornHubの動画ページを開いてください。',
    openVideo: 'ダウンロードリンクを抽出するには動画ページ (view_video.php) を開いてください。',
    noData: '動画データを抽出できませんでした。',
    noFormats: 'ダウンロード可能な形式が見つかりません。',
    download: 'ダウンロード',
    refresh: '更新',
    qualitiesAvailable: n => `${n}つの画質が利用可能`,
    error: 'エラー',
    completed: '完了',
    saving: '保存中',
    connecting: 'CDNに接続中',
    preparing: '準備中',
    downloadFailed: 'ダウンロード失敗',
    unknownError: '不明なエラー。',
    mbSaved: n => `${n} MB保存済み`,
    speed: s => `${s} MB/s`,
    cancel: 'ダウンロードをキャンセル',
    cancelled: 'キャンセル済み',
  },
  nl: {
    loading: 'Laden',
    analyzing: 'Pagina analyseren',
    noTab: 'Geen actief tabblad gevonden.',
    openPhub: 'Open eerst een PornHub-videopagina.',
    openVideo: 'Open een videopagina (view_video.php) om downloadlinks te extraheren.',
    noData: 'Videogegevens konden niet worden geëxtraheerd.',
    noFormats: 'Geen downloadbare formaten gevonden.',
    download: 'Downloaden',
    refresh: 'Vernieuwen',
    qualitiesAvailable: n => `${n} kwaliteiten beschikbaar`,
    error: 'Fout',
    completed: 'Voltooid',
    saving: 'Opslaan',
    connecting: 'Verbinden met CDN',
    preparing: 'Voorbereiden',
    downloadFailed: 'Download mislukt',
    unknownError: 'Onbekende fout.',
    mbSaved: n => `${n} MB opgeslagen`,
    speed: s => `${s} MB/s`,
    cancel: 'Download annuleren',
    cancelled: 'Geannuleerd',
  },
};

let currentLocale = 'en';

function detectLocale(url) {
  try {
    const sub = new URL(url).hostname.split('.')[0];
    if (sub === 'www' || sub === 'pornhub') return 'en';
    return translations[sub] ? sub : 'en';
  } catch {
    return 'en';
  }
}

function t(key, ...args) {
  const lang = translations[currentLocale] || translations.en;
  const val = lang[key] ?? translations.en[key];
  return typeof val === 'function' ? val(...args) : val;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadVideoInfo();
  document.getElementById('refreshBtn').addEventListener('click', loadVideoInfo);
});

async function loadVideoInfo() {
  const statusEl = document.getElementById('status');
  const titleEl = document.getElementById('videoTitle');
  const listEl = document.getElementById('qualityList');
  
  statusEl.className = 'status glass';
  statusEl.innerHTML = t('analyzing') + '<span class="loading-dots"><span></span><span></span><span></span></span>';
  titleEl.classList.add('hidden');
  listEl.innerHTML = '';
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab || !tab.url) {
      showError(t('noTab'));
      return;
    }
    
    currentLocale = detectLocale(tab.url);
    applyTranslations();
    
    if (!tab.url.includes('pornhub.com')) {
      showError(t('openPhub'));
      return;
    }
    
    if (!tab.url.includes('view_video.php')) {
      showError(t('openVideo'));
      return;
    }
    
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      world: 'MAIN',
      func: extractFlashvarsFromPage
    });
    
    if (!results || !results[0] || !results[0].result) {
      showError(t('noData'));
      return;
    }
    
    const info = results[0].result;
    
    if (!info.success) {
      showError(info.error || t('noData'));
      if (info.debug) {
        console.log('Debug info:', info.debug);
        const dbg = document.createElement('pre');
        dbg.style.cssText = 'font-size:10px;background:rgba(0,0,0,0.3);padding:8px;border-radius:4px;overflow:auto;max-height:200px;';
        dbg.textContent = JSON.stringify(info.debug, null, 2);
        document.getElementById('qualityList').appendChild(dbg);
      }
      return;
    }
    
    titleEl.textContent = info.title;
    titleEl.classList.remove('hidden');
    
    if (info.formats.length === 0) {
      showError(t('noFormats'));
      return;
    }
    
    info.formats.forEach(format => {
      const item = document.createElement('div');
      item.className = 'quality-item';
      
      const meta = document.createElement('div');
      meta.className = 'quality-meta';
      
      const badge = document.createElement('span');
      badge.className = 'quality-badge';
      badge.textContent = format.quality;
      
      const fmt = document.createElement('span');
      fmt.className = 'quality-format';
      fmt.textContent = format.format;
      
      meta.appendChild(badge);
      meta.appendChild(fmt);
      
      const btn = document.createElement('button');
      btn.className = 'download-btn';
      btn.textContent = t('download');
      btn.addEventListener('click', () => downloadVideo(format, info.title));
      
      item.appendChild(meta);
      item.appendChild(btn);
      listEl.appendChild(item);
    });
    
    statusEl.className = 'status glass success';
    statusEl.textContent = t('qualitiesAvailable', info.formats.length);
    
  } catch (err) {
    console.error('Error:', err);
    showError(err.message || t('unknownError'));
  }
}

let activeDownloadFilename = null;

async function downloadVideo(format, title) {
  const safeTitle = title.replace(/[<>:"/\\|?*\n\r\t]/g, '_').substring(0, 100).trim();
  const ext = format.format === 'm3u8' ? 'm3u8' : 'mp4';
  const filename = `${safeTitle}_${format.quality}.${ext}`;
  activeDownloadFilename = filename;
  
  renderDownloadStatus(filename, format.quality, { phase: 'starting' });
  
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.runtime.sendMessage({
    action: 'download',
    url: format.url,
    filename: filename,
    tabId: tab.id
  }, (res) => {
    if (chrome.runtime.lastError || !res) return;
    if (!res.success) {
      renderDownloadStatus(filename, format.quality, { phase: 'error', error: res.error });
    }
  });
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action !== 'dlProgress') return;
  if (!activeDownloadFilename) return;
  const qMatch = msg.filename && msg.filename.match(/_(\d+p)\.[^.]+$/);
  const quality = qMatch ? qMatch[1] : '';
  renderDownloadStatus(msg.filename, quality, msg);
});

let lastProgress = { received: 0, time: 0 };
let currentPhase = null;

document.getElementById('status').addEventListener('click', (e) => {
  if (e.target.id === 'cancelBtn' && activeDownloadFilename) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) chrome.tabs.reload(tabs[0].id);
    });
    activeDownloadFilename = null;
    currentPhase = null;
    const statusEl = document.getElementById('status');
    statusEl.className = 'status glass error';
    statusEl.innerHTML = `<strong>${t('cancelled')}</strong>`;
  }
});

function renderDownloadStatus(filename, quality, info) {
  const statusEl = document.getElementById('status');
  const phase = info.phase || 'starting';
  
  if (phase === 'error') {
    statusEl.className = 'status glass error';
    statusEl.innerHTML = `<strong>${t('error')}</strong> · ${info.error || t('downloadFailed')} (${quality})`;
    activeDownloadFilename = null;
    currentPhase = null;
    return;
  }
  
  if (phase === 'cancelled') {
    statusEl.className = 'status glass error';
    statusEl.innerHTML = `<strong>${t('cancelled')}</strong> · ${quality}`;
    activeDownloadFilename = null;
    currentPhase = null;
    return;
  }
  
  if (phase === 'done') {
    activeDownloadFilename = null;
  }
  
  const received = info.received || 0;
  const total = info.total || 0;
  const pct = total > 0 ? Math.min(100, (received / total) * 100) : 0;
  const recMB = (received / 1024 / 1024).toFixed(1);
  const totMB = total > 0 ? (total / 1024 / 1024).toFixed(1) : '?';
  
  let speedStr = '';
  if (phase === 'fetching' && lastProgress.time > 0) {
    const now = Date.now();
    const dt = (now - lastProgress.time) / 1000;
    if (dt > 0) {
      const dBytes = received - lastProgress.received;
      const mbps = (dBytes / 1024 / 1024 / dt).toFixed(1);
      if (mbps > 0) speedStr = ' · ' + t('speed', mbps);
    }
    lastProgress = { received, time: now };
  } else if (phase === 'start' || phase === 'starting') {
    lastProgress = { received: 0, time: Date.now() };
  }
  
  const showBar = (phase === 'fetching' || phase === 'saving' || phase === 'done') && total > 0;
  const showCancel = activeDownloadFilename && (phase === 'fetching' || phase === 'saving' || phase === 'start' || phase === 'starting');
  
  let cls = 'status glass';
  if (phase === 'done') cls = 'status glass success';
  statusEl.className = cls;
  
  if (phase !== currentPhase) {
    currentPhase = phase;
    let label;
    if (phase === 'done') {
      label = `<strong>${t('completed')}</strong> · ${t('mbSaved', recMB)} (${quality})`;
    } else if (phase === 'saving') {
      label = `<strong>${t('saving')}</strong> · <span class="dl-text">${recMB} / ${totMB} MB</span>`;
    } else if (phase === 'fetching') {
      label = `<strong>${quality}</strong> · <span class="dl-text">${recMB} / ${totMB} MB · ${pct.toFixed(0)}%${speedStr}</span>`;
    } else if (phase === 'start') {
      label = `<strong>${quality}</strong> · ${t('connecting')}<span class="loading-dots"><span></span><span></span><span></span></span>`;
    } else {
      label = `<strong>${quality}</strong> · ${t('preparing')}<span class="loading-dots"><span></span><span></span><span></span></span>`;
    }
    statusEl.innerHTML = `${label}${showBar ? '<div class="progress-wrap"><div class="progress-bar"></div></div>' : ''}${showCancel ? `<button class="cancel-btn" id="cancelBtn" title="${t('cancel')}">✕</button>` : ''}`;
  }
  
  if (showBar) {
    const bar = statusEl.querySelector('.progress-bar');
    if (bar) bar.style.width = pct + '%';
    const textEl = statusEl.querySelector('.dl-text');
    if (textEl) {
      if (phase === 'saving') {
        textEl.textContent = `${recMB} / ${totMB} MB`;
      } else if (phase === 'fetching') {
        textEl.textContent = `${recMB} / ${totMB} MB · ${pct.toFixed(0)}%${speedStr}`;
      }
    }
  }
}

function showError(msg) {
  const statusEl = document.getElementById('status');
  statusEl.className = 'status glass error';
  statusEl.innerHTML = `<strong>${t('error')}</strong> · ${msg}`;
}

// This function runs in the MAIN world (page context) to access window.flashvars_*
async function extractFlashvarsFromPage() {
  try {
    let flashvars = null;
    
    for (const key in window) {
      if (key.startsWith('flashvars_')) {
        flashvars = window[key];
        break;
      }
    }
    
    if (!flashvars) {
      return { success: false, error: 'flashvars not found in page' };
    }
    
    const title = flashvars.video_title || flashvars.video_url_text || document.title;
    let mediaDefinitions = flashvars.mediaDefinitions || [];
    
    const formats = [];
    const seen = new Set();
    
    // First pass: collect direct MP4 URLs
    for (const m of mediaDefinitions) {
      if (!m.videoUrl) continue;
      if (m.format && m.format !== 'mp4') continue;
      
      let q = m.quality;
      if (Array.isArray(q)) continue; // skip master entries here
      
      const qStr = String(q);
      if (seen.has(qStr)) continue;
      seen.add(qStr);
      
      formats.push({
        quality: qStr + 'p',
        url: m.videoUrl,
        format: m.format || 'mp4'
      });
    }
    
    // Check if URL looks like a direct CDN video URL
    function isDirectVideoUrl(url) {
      if (!url) return false;
      // get_media / get_media_quality endpoints are API redirects, not direct
      if (url.includes('/video/get_media')) return false;
      if (url.includes('get_media_h264')) return false;
      // phncdn.com paths to .mp4 files are direct
      if (/\.mp4(\?|$)/i.test(url)) return true;
      // If it's a phncdn URL without get_media in path, probably direct
      if (url.includes('phncdn.com') && !url.includes('get_media')) return true;
      return false;
    }
    
    async function resolveToDirect(url, depth = 0) {
      if (depth > 4) return null;
      if (isDirectVideoUrl(url)) return url;
      
      try {
        // HEAD first to check final URL after redirects without downloading body
        let resp;
        try {
          resp = await fetch(url, { credentials: 'include', method: 'HEAD', redirect: 'follow' });
        } catch (e) {
          resp = null;
        }
        
        if (resp && resp.ok && isDirectVideoUrl(resp.url)) {
          return resp.url;
        }
        
        const ct = resp ? (resp.headers.get('content-type') || '') : '';
        
        if (resp && resp.ok && ct.startsWith('video/')) {
          return resp.url;
        }
        
        const getResp = await fetch(url, { credentials: 'include' });
        if (!getResp.ok) return null;
        
        if (isDirectVideoUrl(getResp.url)) return getResp.url;
        const getCt = getResp.headers.get('content-type') || '';
        if (getCt.startsWith('video/')) return getResp.url;
        
        const text = await getResp.text();
        let data;
        try { data = JSON.parse(text); } catch (e) { data = null; }
        
        if (data) {
          const items = Array.isArray(data) ? data : (data.mediaDefinitions || [data]);
          for (const item of items) {
            if (!item.videoUrl) continue;
            if (item.format && item.format !== 'mp4') continue;
            if (Array.isArray(item.quality)) continue;
            const resolved = await resolveToDirect(item.videoUrl, depth + 1);
            if (resolved) return resolved;
          }
        }
        return null;
      } catch (e) {
        console.error('Resolve error:', e);
        return null;
      }
    }
    
    // No direct formats found, resolve master entries to real URLs
    if (formats.length === 0) {
      for (const m of mediaDefinitions) {
        if (!m.videoUrl) continue;
        if (!Array.isArray(m.quality)) continue;
        
        try {
          const resp = await fetch(m.videoUrl, { credentials: 'include' });
          if (!resp.ok) continue;
          
          const text = await resp.text();
          
          let data;
          try { data = JSON.parse(text); } catch (e) { data = null; }
          
          if (data) {
            const items = Array.isArray(data) ? data : (data.mediaDefinitions || []);
            for (const item of items) {
              if (!item.videoUrl) continue;
              if (item.format && item.format !== 'mp4') continue;
              let q = item.quality;
              if (Array.isArray(q)) continue;
              const qStr = String(q);
              if (seen.has(qStr)) continue;
              
              const directUrl = await resolveToDirect(item.videoUrl);
              if (!directUrl) continue;
              
              seen.add(qStr);
              formats.push({
                quality: qStr + 'p',
                url: directUrl,
                format: 'mp4'
              });
            }
          } else if (text.includes('#EXTM3U')) {
            // HLS master playlist
            const m3u8Formats = parseMasterM3u8(text, m.videoUrl);
            for (const f of m3u8Formats) {
              if (seen.has(f.quality)) continue;
              seen.add(f.quality);
              formats.push(f);
            }
          }
        } catch (e) {
          console.error('Failed to fetch master:', e);
        }
      }
    }
    
    formats.sort((a, b) => parseInt(b.quality) - parseInt(a.quality));
    
    if (formats.length === 0) {
      return {
        success: false,
        error: 'No download URLs found. Video may be HLS-only or restricted.',
        debug: { mediaCount: mediaDefinitions.length, mediaSample: mediaDefinitions[0] }
      };
    }
    
    return {
      success: true,
      title: title,
      formats: formats
    };
  } catch (e) {
    return { success: false, error: e.message, stack: e.stack };
  }
  
  function parseMasterM3u8(text, baseUrl) {
    const results = [];
    const lines = text.split('\n');
    const base = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('#EXT-X-STREAM-INF:')) {
        const resMatch = line.match(/RESOLUTION=\d+x(\d+)/);
        const urlLine = (lines[i + 1] || '').trim();
        if (urlLine && resMatch) {
          const height = resMatch[1];
          const url = urlLine.startsWith('http') ? urlLine : base + urlLine;
          results.push({ quality: height + 'p', url: url, format: 'm3u8' });
        }
      }
    }
    return results;
  }
}
