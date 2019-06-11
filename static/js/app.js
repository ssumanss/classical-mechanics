if ('serviceWorker' in navigator) {
  const newLocal = '/classical-mechanics/sw.js';
  navigator.serviceWorker.register(newLocal).then(function(registration) {
    console.log('ServiceWorker registration successful!');
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}