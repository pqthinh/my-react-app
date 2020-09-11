import {Component} from 'react'
import React from 'react'
import FormDataCustomer from '../form/crud-data'
class CustomerDetail extends Component {
    // constructor(props) {
    //     super(props)
        // this.state={customer: props.customer}
        // console.log(props.props)
        // console.log(this.state.customer)
    // }
    
    render () {
        var customer = this.props.customer;
        return (
            
            <div>
                <div>
                <FormDataCustomer customer={customer} visible={false} section={
                    <div className='list' style={{color:'#000', cursor: "pointer"}}>  
                    <h2>ID: {customer.id}</h2>
                    <div>Name: {customer.name} </div>
                    <div>Phone: {customer.phone} </div>
                    <div>Status: {customer.status} </div>
                    <div>Email: {customer.email} </div>
                    <div>Address {customer.address} </div>
                    <img src='../images/user.png' alt="avatar of user"/>
                </div>
                }/>
                </div>
                
            </div>
        )
    }
}

export default CustomerDetail