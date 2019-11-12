const http     = require('http');
const nodeinfo = require('nodejs-info');

port = 8100

const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(nodeinfo(req))
});

server.listen(port);

//node phpinfo.js
//curl "127.0.0.1:8100/day03/ex01/phpinfo.js"
