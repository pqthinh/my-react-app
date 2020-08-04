import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Model from './car/car.js';
import Car from './car/car.js';
import './car/CarEx.js';
const myFirstElement = <h1>Hello React</h1>


let myCar =  new Model("Ford","abc")
const intro = <p>{myCar.show()}</p>

let myCar0 = new Car("abc");

let temp = <text>` {intro}  {myCar0.present()}  {myFirstElement}`</text>
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  temp, document.getElementById('test')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
