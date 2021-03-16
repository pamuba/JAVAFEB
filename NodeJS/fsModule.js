// var fs = require('fs')

//sync , async

// var readMe = fs.readFileSync('data.txt', 'utf-8')
// console.log(readMe)
// fs.writeFileSync('writeData.txt', readMe)

//5 secs
// fs.readFile('data.txt', 'utf-8', function(err, data){
//     if(err){
//         console.log(err.message)
//     }
//     else if(data)
//     {
//         console.log(data)
//         fs.writeFile('new.txt', data, function(err){
//             if(err){
//                 console.log(err.message)
//             }
//         })
//     }
// })
// console.log('after the read fn')
// //read the original data first, then apeend new data to original data and write to file

// fs.unlink('new.txt', function(err){
//     if(err)
//         console.log(err.message)
//     else
//         console.log("File Deleted")
// })

//create directory
// fs.mkdir('newDir', (err)=>{
//     if(err)
//         console.log(err.message)
// })

// var fs = require('fs').promises
// //promisify
// fs.rmdir('tmp', {recursive:true})
//     .then(()=>console.log("Dir removed"))

var fs = require('fs')

fs.readdir(__dirname, {withFileTypes:true,recursive:true}, (err, files)=>{
    files.forEach(file=>{
        console.log(file)
    })
})