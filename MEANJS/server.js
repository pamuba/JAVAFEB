var express = require('express')
var app = express()
var mongojs = require('mongojs')
var bodyParser = require('body-parser')

var db = mongojs("contactlist",["contactlist"])

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
    console.log("I have received a request")
    
    db.contactlist.find(function(err, docs){
        if(err){
            console.log(err)
        }
        console.log(docs)
        res.json(docs)
    });

});

app.post('/contactlist', function(req, res){
    console.log(req.body)
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc);
    })
})


app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id)
    db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
        if(err){
            console.log(err.message)
        }
        res.json(doc);
    })
});

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id)
    db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc)
    })
})

app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({query: {_id:mongojs.ObjectId(id)},
        update:{$set:{name:req.body.name, email:req.body.email, number:req.body.number}},
        new:true}, function(err, doc){
            res.json(doc);
        }
    )
})

app.listen(3000);
console.log("Server running @PORT:3000")


// var express = require("express");
// var app = express();
// var mongojs = require("mongojs");
// var db = mongojs("contactlist", ["contactlist"]);

// app.use(express.static(__dirname + "/public"));

// app.get("/contactlist", function (req, res) {
//     console.log("I have received a reqeust");

//     db.contactlist.find(function (err, docs) {
//         console.log(docs);
//         res.json(docs);
//     });
// });

// app.listen(3000);
// console.log("Server running at port 3000");