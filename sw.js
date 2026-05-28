const CACHE = 'wealthos-v9';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Always network first — never serve stale files
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, {cache: 'no-store'})
      .then(res => {
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
