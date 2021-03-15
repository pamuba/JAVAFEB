console.log(__dirname)
console.log(__filename)

function mainFunction(fn){
    fn()
}

var fn = function(){
    console.log("Hello")
}

mainFunction(fn);