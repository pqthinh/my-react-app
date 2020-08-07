import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Menu from './menu';
// import Customer from './component/customer';
// import Home from './component/home';
// import About from './component/about';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <Menu />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Customer />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <About />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
serviceWorker.unregister();
