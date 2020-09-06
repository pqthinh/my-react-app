import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
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

    render() {
        console.log(this.props)
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.someContents}</p>
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
}
