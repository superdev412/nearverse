import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import $ from 'jquery';

import gallery1 from '../../assets/img/gallery1.png';
import gallery2 from '../../assets/img/gallery2.png';
import gallery3 from '../../assets/img/gallery3.png';
import gallery4 from '../../assets/img/gallery4.png';
import gallery5 from '../../assets/img/gallery5.png';

// const Slide = () => {

//   const settings_team = {
//     arrows: true,
//     dots: false,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: false,
//       autoplaySpeed: 200
//   };
//   return (
//     <div style={{marginTop:'50px'}}>
//         <Slider {...settings_team} style={{margin:'auto'}}>
//             <div>
//                 <img src={gallery1}  alt=""/>
//                 <p className="gallery-description">This is a Sample text.</p>
//             </div>
//             <div>
//                 <img src={gallery2}  alt=""/>
//                 <p className="gallery-description">This is a Sample text.</p>
//             </div>
//             <div>
//                 <img src={gallery3}  alt=""/>
//                 <p className="gallery-description">This is a Sample text.</p>
//             </div>
//             <div>
//                 <img src={gallery4}  alt=""/>
//                 <p className="gallery-description">This is a Sample text.</p>
//             </div>
//             <div>
//                 <img src={gallery5}  alt=""/>
//                 <p className="gallery-description">This is a Sample text.</p>
//             </div>
//         </Slider>
//     </div>
//   )
// }

class Slide extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={gallery1} />
                    <p className="legend">This is a Sample text.</p>
                </div>
                <div>
                    <img src={gallery2} />
                    <p className="legend">This is a Sample text.</p>
                </div>
                <div>
                    <img src={gallery3} />
                    <p className="legend">This is a Sample text.</p>
                </div>
                <div>
                    <img src={gallery4} />
                    <p className="legend">This is a Sample text.</p>
                </div>
                <div>
                    <img src={gallery5} />
                    <p className="legend">This is a Sample text.</p>
                </div>
            </Carousel>
        );
    }
};


export default Slide;