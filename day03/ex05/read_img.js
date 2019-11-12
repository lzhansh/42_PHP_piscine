var http = require('http')
const fs = require('fs')

port = 8100

fs.readFile(__dirname +'/img/42.png', function(err, data) {
  if (err) throw err
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/png', 'Server': 'Nodejs'})
    res.end(data)
  }).listen(port)
});
