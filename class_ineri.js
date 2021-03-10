class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still`)
    }
}

// let animal = new Animal("My animal")
// animal.run(100)
// animal.stop();

class Rabbit extends Animal{
    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }
    hide(){
        console.log(`${this.name} hides!`)
    }
    //overriding
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still(from the rabbit class)`)
        // super.stop();
        // setTimeout(()=>super.stop(), 1000); //no super, gets from outer fn
        // setTimeout(function(){super.stop()},1000);
    }
}

let rabbit = new Rabbit("White Rabbit", "100");
rabbit.run(10)
rabbit.stop()