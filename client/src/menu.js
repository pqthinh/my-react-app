import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './component/home'
import Customer from './component/customer'
import About from './component/about'

function Menu() {
    return (
        <div>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/customer">
                    <Customer />
                </Route>
{/* 
                <Route path='/customer/:id'>
                    <Customer />
                </Route> */}

                <Route path='/about'>
                    <About/>
                </Route>
            </Switch>
        </div>
    )
}
// ReactDOM.render(
//     <Router>
//         <Menu/>
//     </Router>,
//     document.getElementById('demo')
// )
export default Menu