import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

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


class App extends Component {
  state = {
    message: '',
    send: '',
    customer: {
      name: '',
      phone:'',
      email:'',
      status:'',
      address:'',
      image: ''
    }
  }

  componentDidMount() {
    Axios.get('/test')
      .then(result => this.setState({message: result.data.message}))
    Axios.get('/')
      .then(res => this.setState({send: res.status}))
    Axios.get('/customer')
      .then(result => this.setState({customer: result.data.customer[0]}))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <img src={logo} className="App-logo" alt="logo react"/>
            <p>
              pqthinh
            </p>
        </header>

        <div className="demo">
          <p>{this.state.send}</p>
        </div>

        
          <h3>List of customer</h3>
          <div className="list">
            <div className="cus"> Name: {this.state.customer.name} </div>
            <div className="cus"> Phone: {this.state.customer.phone} </div>
            <div className="cus"> Status: {this.state.customer.status} </div>
            <div className="cus"> Email: {this.state.customer.email} </div>
            <div className="cus">  Address: {this.state.customer.address} </div>
            <img src={logo} alt="avatar of user"/>
        </div>
      </div>
    )
  }
}

export default App