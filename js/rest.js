// function add(a,b,...args){
//     let sum = 0;
//     for(let arg of args){
//         sum+=arg
//     }
//     console.log(args instanceof Array)
//     return sum+=(a+b)
// }

// console.log(add(2,3,4,5,6,7))

//arguments: array like

// function add(){
//     let sum = 0;
//     for(let arg of arguments){
//         sum+=arg
//     }
//     console.log(arguments instanceof Array)
//     //arguments.map()
//     return sum
// }

// console.log(add(2,3,4,5,6,7))


//Spread
// let arr = [12,34,11]
// console.log(Math.max(...arr))

let arr = [12,34,11]
let arr1 = [2,3,1]
let newArr = [...arr, ...arr1]

console.log(Math.max(...arr, ...arr1))

let obj = {name:"John", id:123}
let obj1 = {...obj}
console.log(obj1)