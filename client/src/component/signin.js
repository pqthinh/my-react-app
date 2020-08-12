import React, {Component} from 'react'
import Axios from 'axios'

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:'',
            phone:'',
            email:'',
            address:'',
            status: 'Copper'
        }
    }
    handleFormInputChange = (event)=>{
        const target= event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
        //console.log(this.state[name])
    }
    handleFormSubmit = (event)=>{
        event.preventDefault()

        const cus = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            status: this.state.status
        }
        // alert(cus.name)
        //event.preventDefault()
        Axios.post('/customer/add', cus)
            .then(res=>{
                // let customers = this.state.customer
                // customers = [cus, ...customers]
                // this.setState({customer: customers})
                this.setState(
                    {
                        name: cus.name,
                        phone: cus.phone,
                        email: cus.email,
                        address: cus.address,
                        status: cus.status
                        // name:"t",
                        // phone: '1',
                        // email: "a",
                        // address:"tb",
                        // status:
                    }
                )
                // alert(this.state.name)
            })
            .catch(err=> console.log(err))
    }
    render() {
        return (
            <div className="col-sm col-sm-4 col-sm-offset-4">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleFormInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Number phone:</label>
                        <input type="text" maxLength={10} className="form-control" name="phone" id='phone' onChange={this.handleFormInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Email: </label>
                        <input type="email" className="form-control" id="email" name="email" onChange={this.handleFormInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address: </label>
                        <input type="text" className="form-control" id="address" name="address" onChange={this.handleFormInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user">User name: </label>
                        <input type="text" className="form-control" id="user" onChange={this.handleFormInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password: </label>
                        <input type="password" className="form-control" id="pass" onChange={this.handleFormInputChange}/>
                    </div>
                    <button className="btn btn-success" type="submit">Đăng ký</button>
                </form>
            </div>
        )
    }
} 

export default Signin