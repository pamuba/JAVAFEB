var events = require('events')
var util = require('util')
var fs = require('fs')

var Person = function(name){
    this.name = name
}

process.on('uncaughtException', function(err){
    console.log("Uncaught Exception")
    process.exit(1);
})

//not defined
try{
    nofun()
}
catch(ex){
    console.log(ex.message)
}



util.inherits(Person, events.EventEmitter);

var john = new Person("john")
var mary = new Person("mary")
var jim = new Person("jim")

var people = [john, mary, jim]

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name+' said:'+msg)
    })
})

john.emit('speak', 'ru ok??')
mary.emit('speak', 'ru talking to me??')

process.on('exit', function(){
    fs.writeFileSync('./tmp/myFile', "The process has ended")
})
