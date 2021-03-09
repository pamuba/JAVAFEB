//STRING FNS
//slice, search, substr,substring, spilt, replace, concat

// console.log(MAX_VAL)
// console.log(MIN_VAL)
// NaN
// isNaN
// console.log(POSITIVE_INFINITY)
// console.log(NEGATIVE_INFINITY)

var ob = {}

//person()
var person = {
    firstName : "John",
    lastName : "Smith",
    getFullName: function(){
        return this.firstName + " " + this.lastName
    }
}

console.log(person.getFullName())



var person1 = new Object();
person1.firstName = "Mary"
person1.lastName = "Joe"
person1.getFullName = function(){}

//func
var date = new Date(Date.now())
console.log(date.getFullYear())
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

// var date1 = new Date("10 march 2021")

//Functions are first class Objects.
//Functions can be stored in variables, objects, arrays, pass them as arguments
//to other functions
//or returned from functions

//arrow
//promises
//ajax calls
//prototypes
//class concepts

//es6 features(6)

