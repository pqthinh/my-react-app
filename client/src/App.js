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
    send: ''
  }

  componentDidMount() {
    Axios.get('/customer')
    .then(result => this.setState({message: result.data.message}))
    Axios.get('/')
      .then(res => this.setState({send: res.data}))
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
      </div>
    )
  }
}

export default App