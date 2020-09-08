// https://www.npmjs.com/package/react-responsive-carousel
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

// var DemoCarousel = React.createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//                 <div>
//                     <img src="images/user.png" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="images/user_1.png" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="images/user-admin.png" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src="images/user.png" />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src="images/user_1.png" />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src="images/user-admin.png" />
//                     <p className="legend">Legend 6</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });
// ReactDOM.render(<DemoCarousel />, document.querySelector('#demo'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="images/user.png" alt="image 1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/user_1.png" alt="image 2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/user-admin.png" alt="image 3"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
 
//ReactDOM.render(<DemoCarousel />, document.querySelector('#demo'));
 
export default DemoCarousel