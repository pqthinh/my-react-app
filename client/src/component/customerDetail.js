import {Component} from 'react'
import React from 'react'

class CustomerDetail extends Component {
    constructor(props) {
        super(props)
        this.state={customer: props.customer}
        //console.log(props.props)
        console.log(this.state.customer)
    }
    
    render () {
        var customer = this.state.customer;
        return (
            <div className='list' style={{color:'red', cursor: "pointer"}}>  
                  <div>Name: {customer.name} </div>
                  <div>Phone: {customer.phone} </div>
                  <div>Status: {customer.status} </div>
                  <div>Email: {customer.email} </div>
                  <div>Address {customer.address} </div>
                  <img src='../images/user.png' alt="avatar of user"/>
            </div>
        )
    }
}

export default CustomerDetail