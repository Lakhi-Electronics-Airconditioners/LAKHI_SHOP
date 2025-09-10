const CACHE_NAME = 'lakhi_airconditioners_cache_v3.1';
const OFFLINE_URL = 'offline.html';

const FILES_TO_CACHE = [
  'offline.html',
  'style-min.css',
  'game.js',
  'img/1x1-logo.png',
  'img/NABR/log.jpg',
  'img/NABR/SCI.png',
  'img/NABR/menu.png',
  'img/NABR/apk-down.jpeg',
  'img/log-w.png',
  'DOWNLOADED CSS/fontawesome-free-6.7.2-web/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
];

// Install event: cache all required files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event: serve cached content or offline page
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Optionally update cache with new response
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // If fetch fails, try cache or offline page
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
        });
      })
  );
});