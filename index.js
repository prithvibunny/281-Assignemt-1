var http = require("http");

http.createServer(function (request, response) {

           response.writeHead(200, {'Content-Type': 'text/plain'});

           response.end("Content is visible");          

}).listen(8080);

console.log('Server Running');