import React from 'react'
// import Axios from 'axios'

class FormFilter extends React.Component{
    // constructor(props){
    //     super(props)
        // this.props.state= {
        //     name: '',
        //     email: '',
        //     phone: '',
        //     address: '',
        //     status: 'Gold'
        // }
    //}
    // handerForm = (event) =>{
    //     const target = event.target
    //     const name= target.name
    //     const value = target.value
    //     this.props.setState({
    //         [name]:value
    //     })
    // }

    // submitForm = (event)=>{
    //     event.preventDefault()
    //     var user = {
    //         name: this.props.state.name,
    //         email:  this.props.state.email,
    //         phone: this.props.state.phone,
    //         address: this.props.state.address,
    //         status: this.props.state.status
            
    //     }
    //     alert(JSON.stringify(user))
    //     console.log(user)
    //     this.props.props.handle(user)
    //     //return user
    // }

    render() {
        return(
            <div className="form-filter-customer">
                <h3>Form Filter</h3>
                <form className="form" onSubmit={this.props.submitForm} >
                    <div className="form-group">
                        <label>Name :</label>
                        <input type="text" name="name" onChange={this.props.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" name="email" onChange={this.props.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Phone :</label>
                        <input type="text" name="phone" onChange={this.props.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Address :</label>
                        <input type="text" name="address" onChange={this.props.handerForm}/>
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <select name="status" onChange={this.props.handerForm}>
                            <option defaultValue value="1">Gold</option>
                            <option value="2">Sliver</option>
                            <option value="3">Platinum</option>
                            <option value="4">Copper</option>
                        </select>
                    </div>

                    <button className="btn btn-success">Filter</button>
                </form>
            </div>
        )
    }
}
// var user = FormFilter.submitForm
// export default user
export default FormFilter