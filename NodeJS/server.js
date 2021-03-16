//NodeJS
var http = require('http')

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<b>Hello World</b>")
});

server.listen(3000,'127.0.0.1');
console.log("server is running on 3000")