// Period. Service Worker — network-first for app files, cache-first for images
// Version stamp auto-busts on each deploy (injected at build time or on activate)
const CACHE_VERSION = 'period-v' + new Date().toISOString().slice(0,10).replace(/-/g,'');
const STATIC_CACHE  = CACHE_VERSION + '-static';
const IMAGE_CACHE   = 'period-images-v1';

const APP_SHELL = ['/', '/index.html', '/styles.css', '/app.js', '/manifest.json'];
const IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];

// ── Install: pre-cache app shell ──────────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(STATIC_CACHE)
      .then(c => c.addAll(APP_SHELL))
      .then(() => self.skipWaiting())   // activate immediately — don't wait for old tabs
  );
});

// ── Activate: delete ALL old caches ──────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== STATIC_CACHE && k !== IMAGE_CACHE)
          .map(k => { console.log('[SW] Deleting old cache:', k); return caches.delete(k); })
      )
    ).then(() => self.clients.claim())  // take control of all open tabs immediately
  );
});

// ── Fetch: smart routing ──────────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip non-GET and cross-origin (Firebase, EmailJS, Stripe, etc.)
  if (e.request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  const isImage = IMAGE_EXTS.some(ext => url.pathname.endsWith(ext));

  if (isImage) {
    // Images: cache-first (they rarely change)
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(IMAGE_CACHE).then(c => c.put(e.request, clone));
          }
          return response;
        }).catch(() => cached); // fallback to cache if offline
      })
    );
  } else {
    // HTML, CSS, JS — network first so updates always reach users
    e.respondWith(
      fetch(e.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then(c => c.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(e.request)) // offline fallback to cache
    );
  }
});
