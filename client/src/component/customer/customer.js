import React from 'react'
//import ReactDOM from 'react-dom'
import Axios from 'axios'
// import logo from '../logo.svg'
import CustomerDetail from './customerDetail'
//import Dialog from './dialog'

class Customer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: [],
      send: '',
      message: ''
    }
  }

  showCustomer = (item)=> {
    return
    //ReactDOM.render(<Dialog section={'Customer '+ item.id} title={item.name} content={item.email}/>, document.getElementById('demo'));
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

    // Axios.post('/customer', this.props.dataFilter)
    //   .then(
    //     res=> {
    //       const cus = res.data
    //       this.setState({
    //         customer: cus.customer
    //       })
    //     }
    //   )
    //   .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="demo">
        <p>List of Customer : {this.state.customer.length}</p>
        <div>
          <div className="customer">
            {
              this.state.customer.map(item=>(    
                <div onClick={this.showCustomer(item)}><CustomerDetail customer={item}/></div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
 
}

export default Customer