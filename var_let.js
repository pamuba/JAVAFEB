//Scoping
function run(){
    var foo = "Foo"
    let bar = "Bar"
    console.log(foo, bar)

    {
        var moo = "Moo"
        let baz = "Baz"
        console.log(moo, baz)
    }
    console.log(moo)
    // console.log(baz)
}
console.log(foo)
run();

