import React from 'react';
import Dialog from './dialog';
import About from './about';

class Home extends React.Component {
  render() {
    return (
    <Dialog section={'Home dialog'} title={'Hello World'} someContents={<About/>}/>
    )
  }
}

// ReactDOM.render(<Home />, document.getElementById('demo'));

export default Home