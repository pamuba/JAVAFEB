// var http = require('http');
// var fs = require('fs');

// //inherits from eventemitter
// var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8');
// //on receiving some data
// myReadStream.on('data', function(chunk){
//     console.log("New chunk received");
//     console.log(chunk)
// })

// var http = require('http');
// var fs = require('fs');

// //inherits from eventemitter
// var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writedata.txt');
// //on receiving some data
// myReadStream.on('data', function(chunk){
//     console.log("New chunk received");
//     console.log(chunk)
//     myWriteStream.write(chunk);
// })

//PIPE
// var http = require('http');
// var fs = require('fs');

// //inherits from eventemitter
// var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writedata.txt');

// myReadStream.pipe(myWriteStream);


var http = require('http');
var fs = require('fs');

//create a server to send some data to the browser
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf8');    
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');    
    myReadStream.pipe(res);
    
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');