const C='lernapp-0.2611-4';
const F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png','./img/fussgaenger.png','./img/fahrrad.png','./img/bus.png','./img/sackgasse.png','./img/halteverbot.png','./img/fussweg.png','./img/ampel.png','./img/autobahn.png','./img/vorfahrtgew.png','./img/einfahrt.png','./img/wild.png','./img/schleuder.png','./img/gegenverkehr.png','./img/baustelle.png','./img/ueberholen.png','./img/kreuzung.png','./img/parken.png','./img/tempo60.png','./img/stop.png','./img/vorfahrtstr.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html'))))});
