import React from 'react'
import Customer from './customer'
import FormFilter from './formFilter'

class ViewCustomer extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state= {
    //         user:{}
    //     }
    // }
    // handle = (val) =>{
    //     this.setState({ 
    //         user: val
    //     })
    //     console.log(this.state)
    //     console.log(val)
    // }

    // submitForm = (event)=>{
    //     event.preventDefault()
    //     var user = {
    //         name: this.state.name,
    //         email:  this.state.email,
    //         phone: this.state.phone,
    //         address: this.state.address,
    //         status: this.state.status
            
    //     }
    //     alert(user)
    //     return user
    // }
    render() {
        return (
            <div className="body mt-5 container">
                <div className="filter-form col-md col-md-2">
                    <div className="border border-dark">
                        <FormFilter/>
                    </div>
                   
                </div>
                <div className="main-body-customer col-md col-md-10">
                    <Customer/>
                </div>
            </div>
        )
    }
}

export default ViewCustomer