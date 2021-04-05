import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'Will',
             comments:'',
             topic:'vue'
        }
    }
    handler = (event)=>{
       this.setState({
            username:event.target.value
       })
    }
    handlerArea = (event)=>{
        this.setState({
             comments:event.target.value
        })
    }
    handlerTopic = event => {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                 <div>
                     <labeL>Username</labeL>
                     <input value={this.state.username} type='text' onChange={this.handler}/>
                 </div>
                 <div>
                     <label>Comments</label>
                     <textarea value={this.state.comments} onChange={this.handlerArea}></textarea>
                 </div>
                 <div>
                     <label>Topic</label>
                     <select value={this.state.topic} onChange={this.handlerTopic}>
                         <option value="react">React</option>
                         <option value="angular">Angular</option>
                         <option value="vue">Vue</option>
                     </select>
                 </div>
                 <button type="submit">Submit</button>
            </form>
         )
    }
}

export default Form
