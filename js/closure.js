function parent(a){
    var outermost = 123;
    function outer(a,b){
        var outer_name = "John";
        function inner(){
            console.log(outer_name)
            console.log(a+b)
            console.log(outermost)
        }
        return inner;
    }
    return outer(1,2);
}
a = parent();
a();