// Period. Service Worker — Auto-versioned, always fresh
// Version is generated automatically at install time — never bump manually again
const CACHE_NAME = 'period-v' + Date.now();
const STATIC = ['/', '/index.html', '/app.js', '/styles.css', '/manifest.json'];

// Install: cache fresh copies under the new auto-generated version name
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(STATIC))
      .then(() => self.skipWaiting())
  );
});

// Activate: nuke ALL old caches immediately — every deploy is a clean slate
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Fetch: NETWORK FIRST — always try network, fall back to cache only if offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Update cache with fresh response
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request)) // offline fallback only
  );
});
