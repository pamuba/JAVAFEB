import React from 'react'

function Hello() {
    // return (
    //     <h1>JSX</h1>
    // )
    return React.createElement('h1', {id:'hello', class:'dummyClas'}, 'Hello World')
}

export default Hello
