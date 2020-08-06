import React from 'react';
import ReactDOM from 'react-dom';

class Customer extends React.Component {
  render() {
    return <h2>Customer!</h2>;
  }
}

ReactDOM.render(<Customer />, document.getElementById('demo'));

export default Customer