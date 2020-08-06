import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Menu from './menu'
// import ReactDOM from 'react-dom'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// class App extends Component {
//   state = {
//     message: '',
//     send: '',
//     customer: {
//       name: '',
//       phone:'',
//       email:'',
//       status:'',
//       address:'',
//       image: ''
//     }
//   }

//   componentDidMount() {
//     Axios.get('/test')
//       .then(result => this.setState({message: result.data.message}))
//     Axios.get('/')
//       .then(res => this.setState({send: res.data.send}))
//     // Axios.get('/customer')
//     //   .then(result => this.setState({customer: result.data}))
//   }

//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>{this.state.message}</h1>
//           <img src={logo} className="App-logo" alt="logo react"/>
//             <p>
//               pqthinh
//             </p>
//         </header>

//         <div className="demo">
//           <p>{this.state.send}</p>
//         </div>
// {/*         
//         <h3>List of customer</h3>
//         <div className="list">
//           <div className="cus"> Name: {this.state.customer.name} </div>
//           <div className="cus"> Phone: {this.state.customer.phone} </div>
//           <div className="cus"> Status: {this.state.customer.status} </div>
//           <div className="cus"> Email: {this.state.customer.email} </div>
//           <div className="cus">  Address: {this.state.customer.address} </div>
//           <img src='./images/user.png' alt="avatar of user"/>
//         </div> */}
        
//       </div>
//     )
//   }
// }

class App extends Component {
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
      <div className='App'>
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <img src={logo} className="App-logo" alt="logo react"/>
            <p>
              pqthinh
            </p>
        </header>

        <div className='demo'>REqust: {this.state.send}</div>
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
        <div><Menu/></div>
      </div>
    )
  }
}
// ReactDOM.render(
//   <React.StrictMode>
//     <Menu />
//   </React.StrictMode>,
//   document.getElementById('demo')
// );
export default App