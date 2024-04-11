import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style-starter.css';
// import {Link} from 'react-router-dom';

import "../assets/js/bslider.js";
// import banner3 from '../assets/images/banner3.jpg';

export default function ImageSlider() {
    return (
        <>
            <div className="demo-cont">

                <div className="fnc-slider example-slider">
                    <div className="fnc-slider__slides">
                        <div className="fnc-slide m--blend-green m--active-slide">
                            <div className="fnc-slide__inner">
                                <div className="fnc-slide__mask">
                                    <div className="fnc-slide__mask-inner"></div>
                                </div>
                                <div className="fnc-slide__content">
                                    <h2 className="fnc-slide__heading">
                                        <div className="fnc-slide__heading-line">
                                            <span>Everything</span>
                                        </div>
                                        <div className="fnc-slide__heading-line">
                                            <span>for home</span>
                                        </div>
                                    </h2>
                                    <p className="pl-3 banner-para  text-white">Furniture Design Studio</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );

}