import React from 'react'
import ReactDOM from 'react-dom'

class CarEx extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>
    }
}

ReactDOM.render( <CarEx /> , document.getElementById('demo'))
