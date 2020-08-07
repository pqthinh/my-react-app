import React, {Component} from 'react';
import './App.css';
//import Menu from './menu'
// import Customer from './component/customer';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu/>
      </div>
    )
  }
}

export default App