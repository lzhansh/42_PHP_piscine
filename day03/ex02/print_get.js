var http = require('http');
var url = require('url');

port = 8100

const server = http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    for (i in q.query) {
  	   res.write(i + ': ' + q.query[i] + '\n');
    }
    res.end();
});

server.listen(port);
