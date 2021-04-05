import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)// set the this keyword
    
        this.state = {
             message:'Welcome Iron Man'
        }
    }
    changeMessage(){
        this.setState({
            message:'The new Message'
        })
    }
    render() {
        return (
              <div>
                    <h1>Welcome {this.state.message}</h1>
                    <button onClick={()=>this.changeMessage()}>Change</button>
              </div>
        )
    }
}

export default Message
