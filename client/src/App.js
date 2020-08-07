import React, {Component} from 'react';
import './App.css';
//import Menu from './menu'
import Customer from './component/customer';
import About from './component/about';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <About/>,
        <Customer/>
      </div>
    )
  }
}

export default App