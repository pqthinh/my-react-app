import React from 'react';
import Modal from 'react-awesome-modal';
import Axios from 'axios';

export default class FormDataCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : this.props.visible,
            name: this.props.customer.name,
            phone: this.props.customer.phone,
            email: this.props.customer.email,
            address: this.props.customer.address,
            status: this.props.customer.status
        }
    }
    
    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    handleForm = (event) =>{
        const target = event.target
        const name= target.name
        const value = target.value
        this.setState({
            [name]:value
        })
    }
    AddData = (event)=>{
        event.preventDefault()
        var custom = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            status: this.state.status
        }
        
        Axios.post('/customer/add', custom)
            .then(
                res=> {
                    console.log(res)
                    console.log(custom)
                }
                
            )
            .catch(err=> console.log(err))
    }

    EditData = (event) =>{
        event.preventDefault()
        event.preventDefault()
        var custom = {
            id: this.props.customer.id,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            status: this.state.status
        }
        
        Axios.post('/customer/edit', custom)
            .then(
                res=> {
                    console.log(res)
                    console.log(custom)
                }
                
            )
            .catch(err=> console.log(err))
    }

    DeleteData = (event) => {
        event.preventDefault()
        Axios.delete('/customer/delete', {data :{id:this.props.customer.id}})
            .then(res=>{console.log(res)})
            .catch(err=>console.log(err))
    }
    render() {
        // console.log(this.props)
        return (
            <section>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <div>{this.props.section? this.props.section: 'Form Customer' }</div>
                
                <Modal visible={this.state.visible} width="500" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <div className="action">
                            <input type="button" value="Them" onClick={ this.AddData} />
                            <input type="button" value="Sua" onClick={ this.EditData} />
                            <input type="button" value="Xoa" onClick={ this.DeleteData} />
                        </div>
                        <div className="content-data-customer">
                            <h2>ID: {this.props.customer.id}</h2>
                            <form>
                                <div className="form-group">
                                    <label>Name: </label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleForm}/>
                                </div>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleForm}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone: </label>
                                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleForm}/>
                                </div>
                                <div className="form-group">
                                    <label>Address: </label>
                                    <input type="text" name="address" value={this.state.address} onChange={this.handleForm}/>
                                </div>
                                <div className="form-group">
                                    <label>Status: </label>
                                    <select name="status" value={this.state.status} onChange={this.handleForm}>
                                        <option value="1">Gold</option>
                                        <option value="2">Sliver</option>
                                        <option value="3">Platinum</option>
                                        <option value="4">Copper</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
}
