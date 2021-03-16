//NodeJS
var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.end("<b>Hello World</b>")

    // ReadStream returned inherits from eventemitter
    var myReadStream = fs.createReadStream(__dirname+'/data.txt','utf-8')

    // myReadStream.on('data', function(chunk){
    //     console.log("++++++++++++++++++++++++++New CHUNK+++++++++++++++++++")
    //     console.log(chunk)
    // })

    //combine the chunks into a buffer array
    res.end(myReadStream)

});

server.listen(3000,'127.0.0.1');
console.log("server is running on 3000")