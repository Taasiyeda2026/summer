const CACHE_NAME = "summer-catalog-v2026-06-07-v203";
const ASSETS = [
  "./",
  "./sw.js",
  "./index.html",
  "./workshops.html",
  "./course-page.html",
  "./opening.html",
  "./tour.html",
  "./catalog-generator.html",
  "./catalog-data.json",
  "./activities.json",
  "./tashpaz/catalogtashpaz.html",
  "./tashpaz/catalog_programs_tashpaz.json",
  "./tashpaz/taasiyeda-logo.png",
  "./logo.png",
  "./signature-logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate" ||
      url.pathname.endsWith(".html") ||
      url.pathname === "/") {
    event.respondWith(
      fetch(event.request, { cache: "no-store" }).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  if (url.pathname.endsWith("/activities.json") ||
      url.pathname.endsWith("/catalog-data.json") ||
      url.pathname.endsWith("/catalog_programs_tashpaz.json")) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" }).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
