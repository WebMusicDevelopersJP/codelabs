/* sw.js */
var CACHE_NAME = 'codelabs-mocolufa-cache';
var urlsToCache = [
    './images/arduino-mocolufa-144x144.png',
    './step.ja-jp.html',
    './index.html',
    './index.html?ja-jp',
    './manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(function(cache) {
              //console.log('Opened cache', cache);
              return cache.addAll(urlsToCache);
          })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request)
          .then(function(response) {
              if (response) {
                  //console.log("[return cache] ", (response.url).split("/").pop());
                  return response;
              }
              var fetchRequest = event.request.clone();

              return fetch(fetchRequest)
                  .then(function(response) {
                      if (!response || response.status !== 200 || response.type !== 'basic') {
                          return response;
                      }
                      
                      var responseToCache = response.clone();

                      caches.open(CACHE_NAME)
                          .then(function(cache) {
                              cache.put(event.request, responseToCache);
                          });
                      
                      return response;
                  });
          })
  );
});

