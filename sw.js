    // Verifique se o serviceWorker está disponível
if ('serviceWorker' in navigator) {
  // Adicionar o cache para os recursos estáticos
  const cache = await caches.open('pwa-cache');
  await cache.addAll(['index.html', 'tyle.css', '.jpg', 'images/logo.png']);

  // Registrar o evento fetch
  self.addEventListener('fetch', async (event) => {
    // Verificar se o recurso está no cache
    const cacheEntry = await cache.match(event.request);

    // Se o recurso estiver no cache, responda com ele
    if (cacheEntry) {
      event.respondWith(cacheEntry.response);
    }
  });
}
