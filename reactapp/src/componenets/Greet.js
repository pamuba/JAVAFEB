import React from 'react'

// function Greet() {
//     return (
//        <h1>Hello World</h1>
//     )
// }

const Greet = (props) => <h1>Hello {props.name} a.k.a {props.heroName}   {props.children}</h1>

export default Greet
