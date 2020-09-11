import React from 'react'
import Customer from './customer'
import FormFilter from './formFilter'
import Axios from 'axios'

class ViewCustomer extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            //user:{
                name: '',
                email: '',
                phone: '',
                address: '',
                status: '1',
            //},
            customer:[],
            user: {
                name: '',
                email: '',
                phone: '',
                address: '',
                status: '1',
            }
        }
    }
    // handle = (val) =>{
    //     console.log(typeof val)
    //     console.log(typeof this.state.user)
    //     this.setState( val => { 
    //         let user = Object.assign({}, val.user);  // creating copy of state variable jasper
    //         // user.name = 'someothername';  
    //         user.name = val.name
    //         user.email = val.email
    //         user.phone = val.phone
    //         user.address = val.address
    //         user.status = val.status                   // update the name property, assign a new value                 
    //         return { user };
            
            
    //     })
    //     console.log(this.state.user)
    //     console.log(val)
    // }

    handerForm = (event) =>{
        const target = event.target
        const name= target.name
        const value = target.value
        this.setState({
            [name]:value
        })
    }

    submitForm = (event)=>{
        event.preventDefault()
        var user0 = {
            name: this.state.name,
            email:  this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            status: this.state.status
            
        }
        this.setState( user0 => { 
            let user = Object.assign({}, user0.user);  // creating copy of state variable jasper
            // user.name = 'someothername';  
            user.name = user0.name
            user.email = user0.email
            user.phone = user0.phone
            user.address = user0.address
            user.status = user0.status                   // update the name property, assign a new value                 
            return { user };
            
        })
        alert(JSON.stringify(user0))
        console.log(this.state.user)
        console.log(user0)
        //this.props.handle(user)
        // return user
        //this.componentDidMount()
        Axios.post('/customer', {name: this.state.name, phone: this.state.phone, email: this.state.email, address: this.state.address, status: this.state.status})
          .then(
            res=> {
              // console.log(this.props.user)
              const cus = res.data
              this.setState({
                customer: cus.customer
              })
            //   console.log(cus.customer)
               console.log('posted data')
               console.log(this.state.customer)
            }
          )
          .catch(err => {console.log(err)})
    }

    componentDidMount(){
        // Axios.get('/')
        //   .then(res=> this.setState({send: res.data.send}))
        //   .catch(err=> {throw err})
        // Axios.get('/test')
        //   .then(res=> this.setState({message: res.data.message}))
        //   .catch(err=> {throw err})
        Axios.get('/customer')
          .then(
            res=>{
              const cus = res.data
              this.setState({
                customer: cus.customer
              })
            }
          )
          .catch(err=> {console.log(err)})
    
        // Axios.post('/customer', {name: this.state.name, phone: this.state.phone, email: this.state.name, address: this.state.name, status: this.state.status})
        //   .then(
        //     res=> {
        //       // console.log(this.props.user)
        //       const cus = res.data
        //       this.setState({
        //         customer: cus.customer
        //       })
        //       console.log('posted data')
        //     }
        //   )
        //   .catch(err => {console.log(err)})
      }
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
                        <FormFilter handerForm={this.handerForm} submitForm={this.submitForm}/>
                    </div>
                   
                </div>
                <div className="main-body-customer col-md col-md-10">
                    <Customer user={this.state.user} customer={this.state.customer}/>
                </div>
            </div>
        )
    }
}

export default ViewCustomer