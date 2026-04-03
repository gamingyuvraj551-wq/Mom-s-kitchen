const CACHE_NAME = 'moms-kitchen-v10'; // Ise v10 kar diya hai taaki refresh ho jaye
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
