import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
    render() {
        return (
            <div>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
