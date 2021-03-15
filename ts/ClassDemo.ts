// class Car{
//     //field
//     engine:string;

//     //ctr
//     constructor(engine:string){
//         this.engine = engine
//     }

//     //
//     disp():void{
//         console.log("Fn always displays: "+ this.engine)
//     }
// }

// var obj = new Car("ABC")
// obj.disp()

class test{}

class Shape {
    Area:number
    constructor(a:number){
        this.Area = a
    }
}

// class Circle extends Shape{
//     disp():void{
//         console.log("Area of Circle:"+this.Area)
//     }
// }

// var obj = new Circle(123)
// obj.disp()

interface ILoan{
    interest:number
}

interface Itest{
    pricipal:number
}

class ArgLoan extends Shape implements ILoan, Itest{
    interest: number;
    rebate:number;

    constructor(interest:number, rebate:number){
        super(123);
        this.interest = interest
        this.rebate = rebate
    }
    pricipal: number;
}