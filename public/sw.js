const staticCacheName = 'meetings-map-cache-v2';

const cacheAssets = [
    '/',
    'index.html'
];



//Install Service Worker
self.addEventListener('install', event => {
    console.log("Service Worker: Installed");

    event.waitUntil(
        caches
        .open(staticCacheName)
        .then(cache => {
            console.log("Service Worker: Caching Files");
            return cache.addAll(cacheAssets);
        })
    );
});

//Activate Service Worker
self.addEventListener('activate', event => {
    console.log("Service Worker: Activated");
    // Deleting old caches
    event.waitUntil(
        caches.keys().then(staticCacheNames => {
            return Promise.all(
                staticCacheNames.map(cache => {
                    if (cache !== staticCacheName) {
                        console.log("Service Worker: Deleting Old Cache");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});


// Fetch pages

self.addEventListener('fetch', (event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
}));
