// import '../assets/css/style-starter.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// Routes,Route,
import rover from '../assets/images/Product-images/rover.jpeg';
import ballons from '../assets/images/Product-images/ballons.jpeg';
import city from '../assets/images/Product-images/city.jpeg';

import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

// let vid = require('https://player.vimeo.com/video/98979515');
// import prod2 from '../assets/images/prod2.jpg';
// import prod3 from '../assets/images/prod3.jpg';
// import prod4 from '../assets/images/prod4.jpg';


export default function MainProductList(){
    return (
    <>
        <section className="product-page">
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <img src={rover} alt="rover" />
                </div>
                <div className="card-body">
                    <span className="tag tag-teal">Technology</span>
                    <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                    <p>An exploration into the truck's polarising design.</p>
                    
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <img src={city} alt="ballons" />
                </div>
                <div className="card-body">
                    <span className="tag tag-purple">Popular</span>
                    <h4>How to Keep Going When You Don't Know What's Next</h4>
                    <p>
                        The future can be scary, but there are ways to deal with that fear.
                    </p>
                    
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <img src={ballons} alt="ballons" />
                </div>
                <div className="card-body">
                    <span className="tag tag-purple">Popular</span>
                    <h4>How to Keep Going When You Don't Know What's Next</h4>
                    <p>
                        The future can be scary, but there are ways to deal with that fear.
                    </p>
                   
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <img src={city} alt="ballons" />
                </div>
                <div className="card-body">
                    <span className="tag tag-purple">Popular</span>
                    <h4>How to Keep Going When You Don't Know What's Next</h4>
                    <p>
                        The future can be scary, but there are ways to deal with that fear.
                    </p>
                    
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <img src={city} alt="city" />
                </div>
                <div className="card-body">
                    <span className="tag tag-pink">Design</span>
                    <h4>10 Rules of Dashboard Design</h4>
                    <p>Dashboard Design Guidelines</p>
                    
                </div>
            </div>
        </div>
    </section>


    <section className="w3l-text-6">
        <div className="text-6-mian bottom-space py-5">
            <div className="container py-lg-5 py-md-4 py-3">
                <div className="row top-cont-grid align-items-center">
                    <div className="col-lg-5 right-img sec-img-ab">
                        <img src={image1} alt="" className="img-responsive img-fluid" />
                    </div>
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-6 left-cont mb-lg-0 mb-5">
                        <h6>Best Decoration</h6>
                        <h4>Open the Door to Better kind of Interior</h4>
                        <p>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.</p>
                        <p>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit, sed do eiusmod tempor incididunt ut.</p>
                        <a href="about.html" className="btn button-style"> View Project</a>
                    </div>
                </div>
                <div className="row top-cont-grid top-space align-items-center">
                    <div className="col-lg-6 left-cont mb-lg-0 mb-5">
                        <h6>Best Designs</h6>
                        <h4>Dream Home might be closer than you think</h4>
                        <p>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.</p>
                        <p>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit, sed do eiusmod tempor incididunt ut.</p>
                        <a href="about.html" className="btn button-style"> View Project </a>
                    </div>
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-5 right-img">
                        <img src={image2} alt="" className="img-responsive img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <section className="w3l-covers-14">
        <div className="covers14-block py-5">
            <div className="container py-sm-5 py-4">
                <div className="covers14-text text-center mx-auto py-lg-5">
                    <h4>Perfection in every inch of our products</h4>
                    <div className="video-section">
                        <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center">
                            <span className="video-play-icon mt-sm-5 mt-4">
                                <span className="fa fa-play"></span>
                            </span>
                        </a>
                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                            <iframe src='https://player.vimeo.com/video/98979515' title='productinfo' frameBorder="0"
                                allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>    
    );
}