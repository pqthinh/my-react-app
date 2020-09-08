import React, {Component} from 'react';
import './App.css';
import ContentMenu from './contentMenu';
import DemoCarousel from './component/demoCarousel'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ContentMenu/>
        
      </div>
    )
  }
}

export default App