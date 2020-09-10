import React from 'react'
// import Axios from 'axios'

class FormFilter extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            name: '',
            email: '',
            phone: '',
            address: '',
            status: 'Gold'
        }
    }
    handerForm = (event) =>{
        const target = event.target
        const name= target.name
        const value = target.value
        this.setState({
            [name]:value
        })
    }

    submitForm = (event)=>{
        //event.preventDefault()
        var user = {
            name: this.state.name,
            email:  this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            status: this.state.status
            
        }
        //alert(JSON.stringify(user))
        console.log(user)
        //this.props.handle(user)
        //return user
    }

    render() {
        return(
            <div className="form-filter-customer">
                <h3>Form Filter</h3>
                <form className="form">
                    <div className="form-group">
                        <label>Name :</label>
                        <input type="text" name="name" onChange={this.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" name="email" onChange={this.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Phone :</label>
                        <input type="text" name="phone" onChange={this.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Address :</label>
                        <input type="text" name="address" onChange={this.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <select name="status" onChange={this.handerForm}>
                            <option defaultValue>Gold</option>
                            <option>Sliver</option>
                            <option>Platinum</option>
                            <option>Copper</option>
                        </select>
                    </div>

                    <button onClick={this.submitForm} className="btn btn-success">Filter</button>
                </form>
            </div>
        )
    }
}
// var user = FormFilter.submitForm
// export default user
export default FormFilter