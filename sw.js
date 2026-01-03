const CACHE_NAME = "guard-cache-v18"; 

/* 캐시할 파일 목록 */
const urlsToCache = [
  "/keen-web/",
  "/keen-web/index.html",
  "/keen-web/index.css",

  "/keen-web/loading.css",
  "/keen-web/loading.js",

  "/keen-web/rule.html",
  "/keen-web/terms.html",
  "/keen-web/calendar.html",

  "/keen-web/team.html",
  "/keen-web/team.css",
  "/keen-web/team.js"
];

/* 설치 */
self.addEventListener("install", event => {
  self.skipWaiting(); // 즉시 활성화
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

/* 활성화 */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

/* fetch: HTML/JS는 항상 최신 우선 */
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
