self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : "Neue Preise!";
  
  event.waitUntil(
    self.registration.showNotification("⛽ Diesel Alarm", {
      body: data,
      icon: "/icon-192.png"
    })
  );
});