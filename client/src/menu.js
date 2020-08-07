import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link, 
    NavLink
} from 'react-router-dom'
import Home from './component/home'
import Customer from './component/customer'
import About from './component/about'

function Menu() {
    return (
        <div>
            <Router>
                <div className="demo">
                    <div>
                        <nav><Link to="/">Home</Link></nav>
                            <Route path="/" component={Home} />
                        <nav><Link to="/about">About</Link></nav>
                            <Route path="/about" component={About} />
                        <nav><Link to="/customer">Customer</Link></nav>
                            <Route path="/customer" component={Customer} />
                    </div>
                </div>
            </Router>
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