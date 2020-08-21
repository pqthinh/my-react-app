import React from 'react'
//import ReactDOM from 'react-dom'
import Axios from 'axios'
import logo from '../logo.svg'
import CustomerDetail from './customerDetail'

class Customer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: [],
      send: '',
      message: ''
    }
  }

  componentDidMount(){
    Axios.get('/')
      .then(res=> this.setState({send: res.data.send}))
      .catch(err=> {throw err})
    Axios.get('/test')
      .then(res=> this.setState({message: res.data.message}))
      .catch(err=> {throw err})
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
  }

  render() {
    return (
      <div className="demo">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <img src={logo} className="App-logo" alt="logo react"/>
            <p>
              pqthinh
            </p>
        </header>

        {/* <div className='test'>REqust: {this.state.send}</div> */}
        <p>List of Customer : {this.state.customer.length}</p>
        <div>
          <div className="customer" /*onClick={()=> alert(CustomerDetail)}*/>
            {
              this.state.customer.map(item=>(    
                <CustomerDetail customer={item}/>
              ))
            }
          </div>
        </div>
        
      </div>
    )
  }
  // render() {
  //   return <h2>Customer!</h2>;
  // }
}

//ReactDOM.render(<Customer />, document.getElementById('demo'));

export default Customer