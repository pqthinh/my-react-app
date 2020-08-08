// const { default: Home } = require("./component/home");
// const { default: About } = require("./component/about");
// const { default: Customer } = require("./component/customer");
import React from 'react'
import Home from './component/home'
import About from './component/about'
import Customer from './component/customer'
const routes = [
    {
        path :'/',
        exact: true,
        main : () => <Home/>
    },
    {
        path:'/about',
        exact: false,
        main: ()=> <About/>
    },
    {
        path:'/customer',
        exact: false,
        main: ()=> <Customer/>
    }
]
export default routes