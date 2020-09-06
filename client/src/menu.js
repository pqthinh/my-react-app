import React , {Component} from 'react'
import {Route, Link} from 'react-router-dom'

const menu = [
    {
        name: 'Trang chủ',
        to  : '/',
        exact: true
    },
    {
        name: 'Giới thiệu',
        to  : 'about',
        exact: true
    },
    {
        name: 'Liên hệ',
        to  : '/contact',
        exact: true
    },
    {
        name : 'Sản phẩm',
        to   : '/product',
        exact: true
    },
    {
        name : 'Thành viên',
        to   : '/customer',
        exact: true
    },
    {
        name : "Đăng nhập",
        to   : '/login',
        exact: true
    },
    {
        name :'Đăng ký',
        to   :'./signin',
        exact: true
    }
]

const MenuLink = ({
    label,
    to,
    activeOnlyWhenExact 
}) =>{
    return (
        <Route
            path= {to}
            exact = {activeOnlyWhenExact}
            children = { ({match}) => {
                var active = match ? 'active' :''
                return (
                    <li className= {`my-li ${active}` }>
                        <Link to= {to} className="my-link">{label}</Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="col-md-8 col-sm-10 col-xs-12">
                    <ul className="nav navbar-nav">
                        {this.showMenu(menu)}
                    </ul>
                </div>
                <div className="col-md-4 col-sm-10 col-xs-12">
                    <form className="form-inline ml-auto" method="GET" style={{margin: '9px'}}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm..."/>
                        <button className="btn btn-success" type="submit">Tìm kiếm</button>
                    </form>
                </div>
                
            </nav>
        )
    }
    showMenu = (menus) => {
        var result = null
        if(menu.length > 0) {
            result = menus.map((menu, index)=> {
                return (
                    <MenuLink
                        key={index}
                        label= {menu.name}
                        to = {menu.to}
                        activeOnlyWhenExact = {menu.exact}
                    />
                )
            })
        }
        return result
    }
    search = () =>{

    }
}


export default Menu