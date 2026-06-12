const CACHE_NAME = "summer-catalog-v2026-06-12-v294";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./workshops.html",
  "./course-page.html",
  "./opening.html",
  "./tour.html",
  "./catalog-generator.html",
  "./catalog/index.html",
  "./catalog-data.json",
  "./activities.json",
  "./tashpaz/catalogtashpaz.html",
  "./tashpaz/catalog_programs_tashpaz.json",
  "./tashpaz/taasiyeda-logo.png",
  "./logo.png",
  "./signature-logo.png",
  "./image/course-page-tech-bg.webp",
  "./image/summer-fantasy-bg-2.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache =>
        Promise.all(
          CORE_ASSETS.map(asset =>
            cache.add(asset).catch(err => {
              console.warn("Failed to cache:", asset, err);
            })
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function cacheFresh(request) {
  return fetch(request, { cache: "no-store" })
    .then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    })
    .catch(() =>
      caches.match(request).then(cached => {
        return cached || caches.match("./index.html");
      })
    );
}

function cacheOnDemand(request) {
  return caches.match(request).then(cached => {
    if (cached) return cached;

    return fetch(request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    });
  });
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (
    event.request.mode === "navigate" ||
    url.pathname.endsWith(".html") ||
    url.pathname === "/" ||
    url.pathname.endsWith("/summer/")
  ) {
    event.respondWith(cacheFresh(event.request));
    return;
  }

  if (
    url.pathname.endsWith("/activities.json") ||
    url.pathname.endsWith("/catalog-data.json") ||
    url.pathname.endsWith("/catalog_programs_tashpaz.json")
  ) {
    event.respondWith(cacheFresh(event.request));
    return;
  }

  event.respondWith(cacheOnDemand(event.request));
});
