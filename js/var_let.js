//Scoping
// function run(){
//     var foo = "Foo"
//     let bar = "Bar"
//     console.log(foo, bar)

//     {
//         var moo = "Moo"
//         let baz = "Baz"
//         console.log(moo, baz)
//     }
//     console.log(moo)
//     // console.log(baz)
// }
// console.log(foo)
// run();

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//     funcs[i] = function(){
//         console.log("My Value: "+ i)
//     }   
// }

// for (let j = 0; j < 3; j++) {
//     funcs[j]();
// }

//HOISTING
// function run(){
//     // var foo;
   
//     console.log(foo)
//     let foo = "Foo"
//     console.log(foo)
// }
// run();

//redecleration
let foo = "first"
let foo = "second"

//4 differences