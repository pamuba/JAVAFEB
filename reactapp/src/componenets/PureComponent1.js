import React, { PureComponent } from 'react'

export class PureComponent1 extends PureComponent {
    render() {
        console.log("Pure Component Render")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComponent1
