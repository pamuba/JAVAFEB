import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComponent1 from './PureComponent1'

export class ParentComponent1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"John"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"John"
            })
        }, 2000)
    }
    render() {
        console.log("-----------------Parent Comp render----------------")
        return (
            <div>
                Parent Component
                <RegComponent name={this.state.name}></RegComponent>
                <PureComponent1 name={this.state.name}></PureComponent1>
            </div>
        )
    }
}

export default ParentComponent1
