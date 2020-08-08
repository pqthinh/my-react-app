import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from './menu'
import routes from './routes'

class ContentMenu extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu/>
                    <Switch>
                        {this.showContent(routes)}
                    </Switch>
                </div>
            </Router>
        )
    }
    showContent = (routes) =>{
        var res = null
        if(routes.length>0) {
            res= routes.map((route, index)=>{
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return res
    }
}
export default ContentMenu