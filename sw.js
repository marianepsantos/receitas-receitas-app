let cacheName = "receitas-receitas-pwa";
let filesToCache = ["/",
    "/index.html",
    "/carness",
    "/docess",
    "/massass",
    "/css/style.css",
    "/js/main.js",
    "/manifest.json"  
];


self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("Service Worker: Arquivos em cache");
      return cache.addAll(filesToCache);  
    })
  );
});


self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      
      return response || fetch(e.request);
    })
  );
});