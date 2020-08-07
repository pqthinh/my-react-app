import React from 'react'
//import ReactDOM from 'react-dom'
import Axios from 'axios'
import logo from '../logo.svg'

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
          <div className="customer">
            {
              this.state.customer.map(item=>(    
                <div className='list'>  
                  <div>Name: {item.name} </div>
                  <div>Phone: {item.phone} </div>
                  <div>Status: {item.status} </div>
                  <div>Email: {item.email} </div>
                  <div>Address {item.address} </div>
                  <img src='./images/user.png' alt="avatar of user"/>
                </div>
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