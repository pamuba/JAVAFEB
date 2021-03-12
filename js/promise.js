
//pending
// resolve fulfilled
// reject rejected
//callback

// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>{resolve('hello world'), 2000})
// });

// promise.then((data)=>console.log(data))

// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>{reject('hello world'), 2000})
// });

// promise.then((data)=>console.log(data + '1'))
//         .catch(err=>{console.log('Error:'+err)})
//         .finally()
// // promise.then((data)=>console.log(data + '2'))
// //        .catch(err=>{console.log(err)})
// // promise.then(function(data){
// //      console.log(data + '3')
// //     },
// //     function error(data){
// //         console.log(data)
// //     });

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('hello world 1')
        resolve('hello world 2')
        resolve('hello world 3')
        resolve('hello world 4')
        resolve('hello world 5')
    }, 2000)
});

promise.then((data)=>console.log(data))