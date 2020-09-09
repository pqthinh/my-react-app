import React from 'react'
import Axios from 'axios'

class FormFilter extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            name: '',
            email: '',
            phone: '',
            address: '',
            status: 0
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
                if(this.state.username==='admin' & this.state.pass==='admin') res.json("Success!!!")
                else res.json('Fail!!!')
            })
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div className="form-filter-customer">
                <h3>Form Filter</h3>
                <form className="form">
                    <div class="form-group">
                        <label>Name :</label>
                        <input type="text" name="name"/>
                    </div>
                    <div class="form-group">
                        <label>Email : </label>
                        <input type="text" name="email"/>
                    </div>
                    <div class="form-group">
                        <label>Phone :</label>
                        <input type="text" name="phone"/>
                    </div>
                    <div class="form-group">
                        <label>Address :</label>
                        <input type="text" name="address"/>
                    </div>
                    <div class="form-group">
                        <label>Status: </label>
                        <select name="status">
                            <option>Gold</option>
                            <option>Sliver</option>
                            <option>Platinum</option>
                            <option>Copper</option>
                        </select>
                    </div>

                    <button onClick={this.submitForm} className="btn btn-success">Filter</button>
                </form>
            </div>
        )
    }
}

export default FormFilter