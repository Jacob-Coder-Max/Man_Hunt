self.addEventListener('install', event => {
  event.waitUntil(caches.open('manhunt-v1').then(cache => cache.addAll(['./', 'manhunt.html', 'styles.css'])));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});