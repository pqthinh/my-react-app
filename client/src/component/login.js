import React, {Component} from 'react'
//Tham khao bootstrap " https://stackoverflow.com/questions/18153234/center-a-column-using-twitter-bootstrap-3"
class Login extends Component{
    render() {
        return (
            <div>
                <div className="col-md col-md-4 col-md-offset-4">
                    <form> 
                        <div className="form-group">
                            <label for="username">User name:</label>
                            <input type="text" className="form-control" id="username"/>
                        </div>
                        <div className="form-group">
                            <label for="pass">Password:</label>
                            <input type="password" className="form-control" id="pass"/>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"/> Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login