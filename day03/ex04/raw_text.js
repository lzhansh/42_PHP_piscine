var http = require('http');
var url = require('url');

port = 8100

const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<html><body>Hello</body></html>')
    res.end();
});

server.listen(port);
