const http = require('http');
const url = require('url');

port = 8100
let cookie = {}

const server = http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let qdata = q.query
    let k = qdata.name
    if (qdata.action === 'set') {
      cookie[`${k}`] = qdata.value
    }
    else if (qdata.action === 'get') {
      res.write(cookie[`${k}`] || '');
    }
    else if (qdata.action === 'del') {
      cookie[`${k}`] = null
    }
   res.end();
});

server.listen(port);
