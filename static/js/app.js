if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/classical-mechanics/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful!');
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}