const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Video = require('../models/video')


const db = "mongodb://localhost:27017/videoplayer"
mongoose.Promise = global.Promise

//Connect
mongoose.connect(db, function(err){
    if(err){
        console.log("Error:"+err)
    }
    else{
        console.log("Mongodb Connected")
    }
});

//get all videos
router.get('/videos', function(req, res){
    console.log('Get Request for all videos')

    Video.find({})
        .exec(function(err, videos){
            if(err){
                console.log('Error retrieving videos')
            }
            else{
                res.json(videos)
            }
        })
});
//get a video by id
router.get('/videos/:id', function(req, res){
    console.log('Get Request for one video')
    Video.findById(req.params.id)
        .exec(function(err, videos){
            if(err){
                console.log('Error retrieving videos')
            }
            else{
                res.json(videos)
            }
        })
});
// post a video
router.post('/video', function(req, res){
    console.log("Post a Video");

    var newVideo = new Video();
    newVideo.title  = req.body.title
    newVideo.url  = req.body.url
    newVideo.description  = req.body.description

    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('Error retrieving videos')
        }
        else{
            res.json(insertedVideo)
        }
    })

})
//Update a video
router.put('/videos/:id', function(req, res){
    console.log('Updating a video')

    Video.findByIdAndUpdate(req.params.id,
        {
            $set:{title:req.body.title, url:req.body.url, description:req.body.description}
        },
        {
            new:true
        },
        function(err, updatedVideo){
            if(err){
                console.log('Error retrieving videos')
            }
            else{
                res.json(updatedVideo)
            }
        })
});
//delete a video
router.delete('/videos/:id', function(req, res){
    console.log('Deleting a video')

    Video.findByIdAndRemove(req.params.id,
        function(err, deletedVideo){
            if(err){
                console.log('Error retrieving videos')
            }
            else{
                res.json(deletedVideo)
            }
        })
});




router.get('/', function(req, res){
    res.send("API WORKS")
});

module.exports = router;