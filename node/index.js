var http = require('http');
var server = http.createServer();
server.listen(4567);
server.on('request', function(request, response) {
  response.end('pong');
});
console.log('node http server listening on 4567');
