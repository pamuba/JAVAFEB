import React from 'react'

//props a=1,b=2,c=3
function Hero({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
