import React, {Component} from 'react'

class Signin extends Component {
    render() {
        return (
            <div className="col-sm col-sm-4 col-sm-offset-4">
                <form>
                    <div className="form-group">
                        <label for="name">Name: </label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Number phone:</label>
                        <input type="text" maxLength={10} className="form-control" id='phone'/>
                    </div>
                    <div className="form-group">
                        <label for="address">Email: </label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="address">Address: </label>
                        <input type="text" className="form-control" id="address"/>
                    </div>
                    <div className="form-group">
                        <label for="user">User name: </label>
                        <input type="text" className="form-control" id="user"/>
                    </div>
                    <div className="form-group">
                        <label for="pass">Password: </label>
                        <input type="password" className="form-control" id="pass"/>
                    </div>
                    <button className="btn btn-success" type="submit">Đăng ký</button>
                </form>
            </div>
        )
    }
} 

export default Signin