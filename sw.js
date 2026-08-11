// Минимальный service worker. Он не занимается офлайн-кэшированием — только
// делает страницу "устанавливаемой" на телефон (это требование Android/Chrome).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {
  // намеренно пусто: все запросы идут напрямую в сеть как обычно
});
