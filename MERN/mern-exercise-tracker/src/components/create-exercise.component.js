import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

class CreateExercises extends Component {
    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
             username:'',
             description:'',
             duration:0,
             date:new Date(),
             users:[]
        }
    }

    componentDidMount(){
        // this.setState({
        //     users:['test user'],
        //     username: 'test user'
        // })

        axios.get('http://localhost:5000/users/')
        .then(res => {
            if(res.data.length > 0){
                this.setState({
                    users:res.data.map(u => u.username),
                    username:res.data[0].username
                })
            }
        });
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }
    
    onChangeDuration(e) {
        this.setState({
          duration: e.target.value
        })
      }
    
      onChangeDate(date) {
        this.setState({
          date: date
        })
      }

      onSubmit(e){
        e.preventDefault();
        //new exercise object
        const exercise = {
            username:this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date:this.state.date
        }
        console.log(exercise)
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));
        window.location = '/'
    }
    render() {
        return (
            <div>
                 <h3>Create New Exercise Log</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                        <label>Username: </label>
                        <select
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                return <option 
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                        </div>
                        <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                        </div>
                        <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                        </div>
                        <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                        </div>

                        <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                        </div>
                    </form>
            </div>
        )
    }
}

export default CreateExercises
