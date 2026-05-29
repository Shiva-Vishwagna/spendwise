// SpendWise Service Worker v2
const CACHE = 'spendwise-v2';
const APP_SHELL = ['./index.html', './manifest.json'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(APP_SHELL);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  // Only handle GET
  if (e.request.method !== 'GET') return;

  var url = e.request.url;

  // Never intercept Anthropic API calls
  if (url.indexOf('api.anthropic.com') !== -1) return;

  // Never intercept chrome-extension or non-http
  if (url.indexOf('http') !== 0) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      // Always try network first, fall back to cache
      var networkFetch = fetch(e.request).then(function(response) {
        // Only cache valid same-origin or CORS responses, and only clone once
        if (response && response.status === 200 &&
            (response.type === 'basic' || response.type === 'cors')) {
          var toCache = response.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(e.request, toCache);
          });
        }
        return response;
      }).catch(function() {
        // Network failed — return cache if available
        return cached;
      });

      // Return cache immediately if we have it, but still refresh in background
      return cached || networkFetch;
    })
  );
});
