/* sw.js */

const VERSION='v1.0.1';
const CACHE_NAME = 'codelabs-webaduio-cache'+'_'+VERSION;
const ASSETS = [
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

self.addEventListener('install', event => {
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then( cache => {
              return cache.addAll(ASSETS);
          })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request)
          .then(response => {
              if (response) {
                  return response;
              }
              var fetchRequest = event.request.clone();

              return fetch(fetchRequest)
                  .then( response => {
                      if (!response || response.status !== 200 || response.type !== 'basic') {
                          return response;
                      }
                      
                      var responseToCache = response.clone();

                      caches.open(CACHE_NAME)
                          .then( cache => {
                              cache.put(event.request, responseToCache);
                          });
                      
                      return response;
                  });
          })
  );
});

self.addEventListener('activate', event => {
    const cacheWhiteList=[];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then( cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if(cacheWhiteList.indexOf(cacheName)===-1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
