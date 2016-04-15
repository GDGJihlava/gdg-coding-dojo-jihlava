socket = io.connect();
socket.on('reload', function(data) {
  location.reload()
});