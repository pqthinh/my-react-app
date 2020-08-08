// const { default: Home } = require("./component/home");
// const { default: About } = require("./component/about");
// const { default: Customer } = require("./component/customer");
import React from 'react'
import Home from './component/home'
import About from './component/about'
import Customer from './component/customer'
import Login from './component/login'
import Signin from './component/signin'
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
    },
    {
        path: '/login',
        exact: false,
        main: ()=> <Login/>
    },
    {
        path: '/signin',
        exact :false,
        main: ()=> <Signin/>
    }
]
export default routes