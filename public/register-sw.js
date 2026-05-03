if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ai-eastern-wisdom/sw.js')
      .then((registration) => {
        console.log('PWA ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((err) => {
        console.log('PWA ServiceWorker registration failed: ', err);
      });
  });
}
