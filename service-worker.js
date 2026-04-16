const CACHE_NAME = "alpha-stack-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/app.js",
  "./js/auth.js",
  "./js/jwt.js",
  "./js/fetch.js",
  "./js/cache.js",
  "./js/logger.js",
  "./js/image.js",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});