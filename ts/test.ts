// var employee:[number, string, boolean] = [123, "John Wick", false]
// employee.push(2, 'Mary', true)
// console.log(employee)

//Enums  1:Sunday

// function dis(){
//     return 99
// }
// enum fruits {
//     mango = 100,
//     grapes = 12,
//     papaya = "ABC",
//     tomato = "Ha"
// }

// console.log(fruits.papaya)

// let a:(string|number) = 12
// a = "Hii"

// function dis(id:(string|number)){
//     if(typeof(id)==="number"){

//     }
//     else{

//     }
// }
// dis("11")

// let c:void = null;
// let d:never;

// function fn():void{

// }

//
 


function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a:string, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("Hello", "Hii")
add(11,22)


//interface
//class
//modules