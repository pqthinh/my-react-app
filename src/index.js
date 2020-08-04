import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './car/car.js'
import Model from './car/car.js';
import Car from './car/car.js';

const myFirstElement = <h1>Hello React</h1>


let myCar =  new Model("Ford","abc")
const intro = <p>{myCar.show()}</p>

let myCar0 = new Car("abc");


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  //intro,
  myCar0.present(),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
