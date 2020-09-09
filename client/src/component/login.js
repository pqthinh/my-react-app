import React, {Component} from 'react'
import Axios from 'axios'

//Tham khao bootstrap " https://stackoverflow.com/questions/18153234/center-a-column-using-twitter-bootstrap-3"
class Login extends Component{
    constructor(props) {
        super(props)
        this.state ={
            username :'',
            pass: ''
        }
    }

    handerForm = (event) =>{
        const target = event.target
        const name= target.id
        const value = target.value
        this.setState({
            [name]:value
        })
    }
    submitForm = (event)=>{
        event.preventDefault()
        var user = {
            username: this.state.username,
            pass:  this.state.pass
        }
        Axios.post('/login', user)
            .then(res =>{
                this.setState({
                    username: user.username,
                    pass: user.pass
                })
                console.log(res)
                // if(this.state.username==='admin' & this.state.pass==='admin') res.json("Success!!!")
                // else res.json('Fail!!!')
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <div className="col-md col-md-4 col-md-offset-4">
                    <form onSubmit={this.submitForm}> 
                        <div className="form-group">
                            <label for="username">User name:</label>
                            <input type="text" onChange={this.handerForm} className="form-control" id="username"/>
                        </div>
                        <div className="form-group">
                            <label for="pass">Password:</label>
                            <input type="password" onChange={this.handerForm} className="form-control" id="pass"/>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"/> Remember me</label>
                        </div>
                        <button class="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login