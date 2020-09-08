import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'


class CarouselComponent extends Component {

    setIndex = () => {
    //Implement method
    }

     setDirection = () =>  {
        //Implement method
     }

   handleSelect = (selectedIndex, e) => {
    this.setIndex(selectedIndex);
    this.setDirection(e.direction);
    }

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            setIndex: 0,
            direction: null,
            setDirection: null
        };
    }

    render() {
        const {index, direction} =  this.state;
        return (
            <div>
                <Carousel interval={false} activeIndex={index} direction={direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>

            </div>
        );
    }

}


export default CarouselComponent;