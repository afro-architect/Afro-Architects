/* ==========================================================================
   Afro-Architects — App Logic
   Handles: mobile nav, carousels (Embla), modal + accordion rendering,
   discussion board (in-memory), and file upload/download (in-memory).
   Note: browser storage (localStorage/sessionStorage) is intentionally NOT used
   because it is blocked inside sandboxed preview iframes. State below lives only
   for the current page session and resets on reload — this is expected for a
   static, backend-free site.
   ========================================================================== */

const MEMORY_STORE = {};

const ICONS = {
  compass: '<circle cx="12" cy="12" r="9"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  "graduation-cap": '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
  route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>',
  "pencil-ruler": '<path d="m14.5 12.5 8-8a2.12 2.12 0 1 0-3-3l-8 8"/><path d="m4 20 1.5-1.5"/><path d="m9 15 6 6"/><path d="m14 10 6 6"/><path d="m6 18 2.5-2.5"/><path d="M4 20 8 8l4-4 8 8-4 4Z"/>',
  "heart-handshake": '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
  "layout-grid": '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  "square-stack": '<path d="M4 10c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M4 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2"/>',
  library: '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  ruler: '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/>',
  "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z"/>',
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="16" cy="5" r="3" style="fill:none"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
  send: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/>',
  "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  "upload-cloud": '<path d="M4 14.9A5 5 0 0 1 6 5.3 6 6 0 0 1 17.7 7 4.5 4.5 0 0 1 20 16"/><path d="M12 12v9"/><path d="m9 15 3-3 3 3"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v6h6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3" fill="currentColor" stroke="none"/>',
  "check-circle": '<path d="M21.8 10A10 10 0 1 1 17 3.3"/><polyline points="9 11 12 14 21 5"/>'
};

function icon(name, size = 18) {
  const paths = ICONS[name] || ICONS.compass;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.innerHTML = icon('menu', 22);
  toggle.addEventListener('click', () => {
    links.classList.toggle('is-open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('is-open')));
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  items.forEach(i => obs.observe(i));
}

/* ---------- Carousel rendering ---------- */
function buildTopicTile(mod, topic, topicIndex) {
  return `
    <div class="embla__slide">
      <button class="tile" type="button" data-open-module="${mod.id}" data-open-topic="${topicIndex}">
        <span class="tile__icon">${icon(mod.icon, 18)}</span>
        <span class="tile__num">${mod.label} · Topic ${topicIndex + 1}</span>
        <span class="tile__title">${topic.title}</span>
        <span class="tile__meta"><span>Open lesson</span>${icon('arrow-right', 14)}</span>
      </button>
    </div>`;
}

function buildModuleTile(mod) {
  return `
    <div class="embla__slide">
      <button class="tile tile--module" type="button" data-open-module="${mod.id}">
        <span class="tile__icon">${icon(mod.icon, 18)}</span>
        <span class="tile__num">${mod.label}</span>
        <span class="tile__title">${mod.title}</span>
        <span class="tile__desc">${mod.topics.length} topic${mod.topics.length > 1 ? 's' : ''} · ${mod.kicker}</span>
        <span class="tile__meta"><span>Open module</span>${icon('arrow-right', 14)}</span>
      </button>
    </div>`;
}

function renderCarouselRow(container, { moduleId, moduleIds, mode }) {
  const mods = moduleId ? [MODULES[moduleId]] : moduleIds.map(id => MODULES[id]);
  let slides = '';
  if (mode === 'topics') {
    const mod = mods[0];
    slides = mod.topics.map((t, i) => buildTopicTile(mod, t, i)).join('');
  } else {
    slides = mods.map(buildModuleTile).join('');
  }

  const rowId = container.dataset.rowId;
  const headTitle = mode === 'topics'
    ? `<span class="tag">${mods[0].label}</span> ${mods[0].title}`
    : mods.map(m => `<span class="tag">${m.label}</span>`).join(' ') + ' ' + (mods.length > 1 ? 'Explore the modules' : mods[0].title);

  container.innerHTML = `
    <div class="carousel-row__head">
      <h3 class="carousel-row__title">${headTitle}</h3>
      <div class="carousel-row__nav">
        <button class="carousel-btn" data-prev aria-label="Previous">${icon('arrow-left', 16)}</button>
        <button class="carousel-btn" data-next aria-label="Next">${icon('arrow-right', 16)}</button>
      </div>
    </div>
    <div class="embla" id="embla-${rowId}">
      <div class="embla__viewport">
        <div class="embla__container">${slides}</div>
      </div>
    </div>`;

  const viewport = container.querySelector('.embla__viewport');
  const embla = EmblaCarousel(viewport, { align: 'start', dragFree: true, containScroll: 'trimSnaps' });
  const prevBtn = container.querySelector('[data-prev]');
  const nextBtn = container.querySelector('[data-next]');
  prevBtn.addEventListener('click', () => embla.scrollPrev());
  nextBtn.addEventListener('click', () => embla.scrollNext());
  const updateBtns = () => {
    prevBtn.disabled = !embla.canScrollPrev();
    nextBtn.disabled = !embla.canScrollNext();
  };
  embla.on('select', updateBtns);
  embla.on('init', updateBtns);
  updateBtns();

  container.querySelectorAll('[data-open-module]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modId = Number(btn.dataset.openModule);
      const topicIdx = btn.dataset.openTopic !== undefined ? Number(btn.dataset.openTopic) : null;
      openModuleModal(modId, topicIdx);
    });
  });
}

/* ---------- Modal + accordion ---------- */
let modalRoot;

function ensureModalRoot() {
  if (modalRoot) return modalRoot;
  modalRoot = document.createElement('div');
  modalRoot.className = 'modal-overlay';
  modalRoot.innerHTML = `<div class="modal-card" role="dialog" aria-modal="true"></div>`;
  document.body.appendChild(modalRoot);
  modalRoot.addEventListener('click', (e) => { if (e.target === modalRoot) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  return modalRoot;
}

function closeModal() {
  if (!modalRoot) return;
  modalRoot.classList.remove('is-open');
  document.body.style.overflow = '';
}

function renderEngagementPanel(moduleKey) {
  return `
    <div class="engage">
      <div class="engage__block">
        <h3>${icon('message-circle', 18)} Class Discussion</h3>
        <form class="discussion-form" data-discuss-form>
          <textarea placeholder="Share a thought or ask a question about this module…" required></textarea>
          <button type="submit" class="btn-send">${icon('send', 15)} Post</button>
        </form>
        <div class="discussion-list" data-discuss-list></div>
      </div>
      <div class="engage__block">
        <h3>${icon('upload-cloud', 18)} Shared Files</h3>
        <label class="upload-drop" data-upload-drop>
          ${icon('upload-cloud', 22)}
          <div>Drop a file here or click to upload<br><span style="opacity:.7">Stored on this device · downloadable by classmates using this browser</span></div>
          <input type="file" data-upload-input>
        </label>
        <div class="file-list" data-file-list></div>
      </div>
    </div>`;
}

function loadJSON(key, fallback) {
  try {
    const val = MEMORY_STORE[key];
    return val ? JSON.parse(JSON.stringify(val)) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, val) {
  try { MEMORY_STORE[key] = JSON.parse(JSON.stringify(val)); } catch (e) { /* unserializable value */ }
}

function renderDiscussion(moduleKey, listEl) {
  const posts = loadJSON(`bia_discussion_${moduleKey}`, []);
  if (!posts.length) {
    listEl.innerHTML = `<p class="discussion-empty">No posts yet — be the first to start the conversation.</p>`;
    return;
  }
  listEl.innerHTML = posts.slice().reverse().map(p => `
    <div class="discussion-item">
      <div class="discussion-item__meta"><span>${p.author}</span><span>${p.ts}</span></div>
      <div>${escapeHtml(p.message)}</div>
    </div>`).join('');
}

function renderFiles(moduleKey, listEl) {
  const files = loadJSON(`bia_files_${moduleKey}`, []);
  if (!files.length) {
    listEl.innerHTML = `<p class="files-empty">No files uploaded yet for this module.</p>`;
    return;
  }
  listEl.innerHTML = files.map((f, i) => `
    <div class="file-item">
      <span class="file-item__name">${icon('file', 16)} <span title="${escapeAttr(f.name)}">${escapeHtml(f.name)}</span></span>
      <a href="${f.dataUrl}" download="${escapeAttr(f.name)}">${icon('download', 14)}</a>
    </div>`).join('');
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}
function escapeAttr(str) { return escapeHtml(str); }

function wireEngagement(root, moduleKey) {
  const form = root.querySelector('[data-discuss-form]');
  const list = root.querySelector('[data-discuss-list]');
  renderDiscussion(moduleKey, list);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = form.querySelector('textarea');
    const message = textarea.value.trim();
    if (!message) return;
    const posts = loadJSON(`bia_discussion_${moduleKey}`, []);
    posts.push({ author: 'You', message, ts: new Date().toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) });
    saveJSON(`bia_discussion_${moduleKey}`, posts);
    textarea.value = '';
    renderDiscussion(moduleKey, list);
  });

  const dropLabel = root.querySelector('[data-upload-drop]');
  const input = root.querySelector('[data-upload-input]');
  const fileList = root.querySelector('[data-file-list]');
  renderFiles(moduleKey, fileList);

  const handleFiles = (fileArr) => {
    const files = loadJSON(`bia_files_${moduleKey}`, []);
    let remaining = fileArr.length;
    fileArr.forEach(file => {
      if (file.size > 4 * 1024 * 1024) {
        alert(`"${file.name}" is larger than 4MB. Please choose a smaller file for this local prototype storage.`);
        remaining--;
        if (remaining === 0) renderFiles(moduleKey, fileList);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        files.push({ name: file.name, size: file.size, dataUrl: reader.result });
        saveJSON(`bia_files_${moduleKey}`, files);
        renderFiles(moduleKey, fileList);
      };
      reader.readAsDataURL(file);
    });
  };

  input.addEventListener('change', () => { if (input.files.length) handleFiles(Array.from(input.files)); input.value = ''; });
  ['dragenter', 'dragover'].forEach(evt => dropLabel.addEventListener(evt, (e) => { e.preventDefault(); dropLabel.classList.add('is-drag'); }));
  ['dragleave', 'drop'].forEach(evt => dropLabel.addEventListener(evt, (e) => { e.preventDefault(); dropLabel.classList.remove('is-drag'); }));
  dropLabel.addEventListener('drop', (e) => { if (e.dataTransfer.files.length) handleFiles(Array.from(e.dataTransfer.files)); });
}

function openModuleModal(moduleId, focusTopicIndex = null) {
  const mod = MODULES[moduleId];
  if (!mod) return;
  const root = ensureModalRoot();
  const card = root.querySelector('.modal-card');

  const navHtml = mod.topics.map((t, i) => `
    <button class="lesson-nav__item" type="button" data-idx="${i}">
      <span class="lesson-nav__num">${String(i + 1).padStart(2, '0')}</span>
      <span class="lesson-nav__title">${t.title}</span>
    </button>`).join('');

  card.innerHTML = `
    <div class="modal-card__header">
      <div class="modal-card__heading">
        <span class="modal-card__kicker">${mod.label} · ${mod.kicker}</span>
        <h2 class="modal-card__title">${mod.title}</h2>
        <p class="modal-card__intro">${mod.intro}</p>
      </div>
      <button class="modal-close" type="button" aria-label="Close">${icon('x', 18)}</button>
    </div>
    <div class="modal-card__body">
      <div class="lesson-layout">
        <nav class="lesson-nav">${navHtml}</nav>
        <div class="lesson-viewer">
          <div class="video-viewport">
            <span class="video-viewport__badge">${mod.label}</span>
            <button class="video-viewport__play" type="button" aria-label="Play lesson video">${icon('play', 26)}</button>
            <span class="video-viewport__title" data-video-title></span>
          </div>
          <div class="lesson-text" data-lesson-text></div>
        </div>
      </div>
      ${renderEngagementPanel('module-' + mod.id)}
    </div>`;

  card.querySelector('.modal-close').addEventListener('click', closeModal);

  const navItems = card.querySelectorAll('.lesson-nav__item');
  const videoTitleEl = card.querySelector('[data-video-title]');
  const videoBtn = card.querySelector('.video-viewport__play');
  const lessonTextEl = card.querySelector('[data-lesson-text]');

  const selectTopic = (idx, scrollIntoView) => {
    const topic = mod.topics[idx];
    if (!topic) return;
    navItems.forEach(el => el.classList.toggle('is-active', Number(el.dataset.idx) === idx));
    videoTitleEl.textContent = topic.title;
    videoBtn.setAttribute('aria-label', `Play video: ${topic.title}`);
    lessonTextEl.innerHTML = topic.body;
    if (scrollIntoView) navItems[idx].scrollIntoView({ block: 'nearest' });
  };

  navItems.forEach(el => {
    el.addEventListener('click', () => selectTopic(Number(el.dataset.idx), false));
  });
  videoBtn.addEventListener('click', () => {
    alert('Video coming soon — this lesson\'s recording will play here once it\'s uploaded.');
  });

  wireEngagement(card, 'module-' + mod.id);

  root.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  const bodyEl = card.querySelector('.modal-card__body');
  bodyEl.scrollTop = 0;
  const initialIdx = focusTopicIndex !== null && mod.topics[focusTopicIndex] ? focusTopicIndex : 0;
  selectTopic(initialIdx, focusTopicIndex !== null);
}

/* Expose for inline nav wiring if needed */
window.openModuleModal = openModuleModal;
window.renderCarouselRow = renderCarouselRow;
window.initNav = initNav;
window.initReveal = initReveal;
window.icon = icon;

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
});
