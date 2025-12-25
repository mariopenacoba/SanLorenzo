self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cuentaatras-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './sw.js'
    ]))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
