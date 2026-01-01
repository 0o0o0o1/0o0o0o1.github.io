const CACHE_NAME = "guard-cache-v2";

/* 캐시할 파일 목록 */
const urlsToCache = [
  "/keen-web/",
  "/keen-web/index.html",
  "/keen-web/style.css",

  "/keen-web/rule.html",
  "/keen-web/terms.html",
  "/keen-web/calendar.html",
  "/keen-web/team.html"
];

/* 설치 단계 */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

/* 🔥 활성화 단계: 이전 캐시 전부 삭제 */
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

/* 요청 가로채기 */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener('install', event => {
  self.skipWaiting();  // 새 서비스 워커가 바로 활성화되도록
});
