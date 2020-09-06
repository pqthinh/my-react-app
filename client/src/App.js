import React, {Component} from 'react';
import './App.css';
import ContentMenu from './contentMenu';
// import Menu from './menu'
// import Customer from './component/customer';
// import Menu from './menu';
import Dialog from './component/dialog'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <ContentMenu/>,
        <Dialog title={'title'} someContents={"Customer"}/>
      </div>
    )
  }
}

export default App