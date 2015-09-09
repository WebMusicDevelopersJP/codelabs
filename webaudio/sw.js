/* sw.js */
var CACHE_NAME = 'codelabs-webaduio-cache';
var urlsToCache = [
    './images/webaudio-js-144x144.png',
    './images/webmidi-js-144x144.png',
    './step.en-us.html',
    './step.ja-jp.html',
    './step.zh-cn.html',
    './index.html',
    './index.html?en-us',
    './index.html?ja-jp',
    './index.html?zh-cn',
    './manifest.json',
    './contents/snare.wav',
    './contents/ir/s1_r1_bd.wav',
    './contents/loop.wav'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(function(cache) {
              //console.log('Opened cache');
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

