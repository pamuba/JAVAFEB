//bind
//call
//apply

var pokemon = {
    firstname:'Pika',
    lastname:'Chu',
    getPokeName:function(){
        var fullname = this.firstname + " " + this.lastname
        return fullname
    }
}

var pokemonName = function(snack, hobby){
    console.log(this.getPokeName() + ' loves '+snack+' and '+hobby)
}

// pokemonName('sushi','Math');

let newFn = pokemonName.bind(pokemon,'sushi','Math')
newFn();
pokemonName.call(pokemon,'sushi','Math')
pokemonName.apply(pokemon,['sushi','Math'])