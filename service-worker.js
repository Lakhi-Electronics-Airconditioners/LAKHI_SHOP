const CACHE_NAME = 'lakhi_airconditioners_cache_v3.2';
const OFFLINE_URL = 'offline.html';

const FILES_TO_CACHE = [
  'https://shop.lakhiairconditioners.com/offline.html',
  'https://shop.lakhiairconditioners.com/style-min.css',
  'https://shop.lakhiairconditioners.com/game.js',
  'https://shop.lakhiairconditioners.com/img/1x1-logo.png',
  'https://shop.lakhiairconditioners.com/img/NABR/log.jpg',
  'https://shop.lakhiairconditioners.com/img/NABR/SCI.png',
  'https://shop.lakhiairconditioners.com/img/NABR/menu.png',
  'https://shop.lakhiairconditioners.com/img/NABR/apk-down.jpeg',
  'https://shop.lakhiairconditioners.com/img/log-w.png',
  'https://shop.lakhiairconditioners.com/menubar.js',
  'https://shop.lakhiairconditioners.com/DOWNLOADED CSS/fontawesome-free-6.7.2-web/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
];

// Install event: cache all required files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const cachePromises = FILES_TO_CACHE.map(url => {
        const request = new Request(url, { mode: 'no-cors' });
        return cache.add(request);
      });
      return Promise.all(cachePromises);
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