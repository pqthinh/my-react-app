import React from 'react'
//import ReactDOM from 'react-dom'
// import Axios from 'axios'
// import logo from '../logo.svg'
import CustomerDetail from './customerDetail'
// import FormDataCustomer from '../form/crud-data'
//import Dialog from './dialog'

class Customer extends React.Component {
  // constructor(props) {
  //   super(props)
    // this.state = {
      // customer: [],
      // send: '',
      // message: ''
    // }
    // console.log(this.props.customer)
    // console.log(this.props)
  // }
  
  // showCustomer = (item)=> {
  //   return
    //ReactDOM.render(<Dialog section={'Customer '+ item.id} title={item.name} content={item.email}/>, document.getElementById('demo'));
  // }

  // componentDidMount(){
  //   // Axios.get('/')
  //   //   .then(res=> this.setState({send: res.data.send}))
  //   //   .catch(err=> {throw err})
  //   // Axios.get('/test')
  //   //   .then(res=> this.setState({message: res.data.message}))
  //   //   .catch(err=> {throw err})
  //   Axios.get('/customer')
  //     .then(
  //       res=>{
  //         const cus = res.data
  //         this.setState({
  //           customer: cus.customer
  //         })
  //       }
  //     )
  //     .catch(err=> {console.log(err)})

  //   Axios.post('/customer', this.props.user)
  //     .then(
  //       res=> {
  //         console.log(this.props.user)
  //         // const cus = res.data
  //         // this.setState({
  //         //   customer: cus.customer
  //         // })
  //         console.log('posted data')
  //       }
  //     )
  //     .catch(err => {console.log(err)})
  // }

  render() {
    return (
      <div className="demo">
        <p>List of Customer : {this.props.customer.length}</p>
        <div>
          <div className="customer">
            {
              this.props.customer.map(item=>(    
                <div><CustomerDetail customer={item}/></div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
 
}

export default Customer