// function add(a,b){
//     return a+b;
// }

let add = (a,b) => a+b

//it doesnt have the this keyword, it point to the outer scope
//it doesnt have arguments
//cannt run with new, cannt be used as ctrs
//it doesnt have super


let student = {
    name:"John",
    subjects:["science", "maths", "social st"],

    showList(){
        this.subjects.forEach(
            // sub => console.log(this.name+ " " +sub)
            function(sub){
                console.log(this.name+ " " +sub)
            }
        )
    }
}

student.showList()

