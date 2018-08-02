var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/img/*.png'
    // '/assets/icons/**',
    // '/shirts/swatch/**',
    // '/shirts/**'
];

self.addEventListener('install', function(event) {
    // 설치 과정 실행
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// self.addEventListener('fetch', event => {
//     if (event.request.mode === 'navigate') {
//         event.respondWith(fetch('/pwa'));
//
//         // 즉시 실제 리소스를 다운로드하기 시작합니다.
//         fetch(event.request.url);
//     }
//
// });

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.open('mysite').then(function(cache) {
//             return cache.match(event.request).then(function(response) {
//                 var fetchPromise = fetch(event.request).then(function(networkResponse) {
//                     cache.put(event.request, networkResponse.clone());
//                     return networkResponse;
//                 })
//
//                 // 응답을 반환하기 전에 여기에서 수정하세요..
//             ...
//
//                 return response || fetchPromise;
//             })
//         })
//     );
// });