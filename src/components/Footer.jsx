import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <>
        <section className="w3l-footer-22 mt-5">
        <div className=" ">
            <div className="container px-1 py-2 ">
                <div className="row footer-tophny py-1 mx-1">
                    <div className="col-xl-4 col-lg-5 left-side px-4 py-4 border">
                        <h2><a href="index.html" className="footer-logo"><span>Starlette</span></a></h2>
                        <p>Lorem Ipsum Sed luctus orci sit amet tempor lutus. Nullam non felis massa. Phasellus vitae
                            fringilla sapien, quis dictum mi.</p>
                        <p className="mt-2">Nullam non felis massa fringilla sapien.</p>
                        <div className="subscride-link mt-lg-5 mt-4">
                            <h4>Get Discount Upto 20% OFF</h4>
                            <form action="#" className="subscribe-footer-19 mt-5" method="post">
                                <input type="email" name="email" placeholder="Enter Your email" required=""/>
                                <button><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-1"></div>
                    <div className="col-lg-3 col-sm-6 mt-lg-0 mt-sm-5 mt-5">
                        <div className="sub-one-left">
                            <h6 className='fw-bold'>Useful Links</h6>
                            <ul className="list-footer">
                                <li><a href="#contact"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>Contact Us</a></li>
                                <li><a href="#about"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>Help & About us</a></li>
                                <li><a href="#shipping"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>Shipping & Returns</a></li>
                                <li><a href="#refund"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>Refund Policy</a></li>
                            </ul>
                            <h6 className="fw-bold mt-sm-5 mt-4">Delivery</h6>
                            <ul className="list-footer">
                                <li><a href="#how"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>How it Works</a></li>
                                <li><a href="#delivery"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>Free Delivery</a></li>
                                <li><a href="#faqs"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>FAQ's</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-lg-0 mt-sm-5 mt-4">
                        <div className="sub-one-left">
                            <h6 className='fw-bold'>Services</h6>
                            <ul className="list-footer">
                                <li><a href="#services"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>Architecture</a></li>
                                <li><a href="#services"><i className="fa fa-angle-right" aria-hidden="true"></i>Interior
                                        Design</a></li>
                                <li><a href="#services"><i className="fa fa-angle-right" aria-hidden="true"></i>Lighting
                                        Decoration</a></li>
                                <li><a href="#services"><i className="fa fa-angle-right" aria-hidden="true"></i>LED
                                        Lighting</a></li>
                                <li><a href="#services"><i className="fa fa-angle-right" aria-hidden="true"></i>Floor
                                        Planning</a></li>
                                <li><a href="#services"><i className="fa fa-angle-right"
                                            aria-hidden="true"></i>Decorating</a></li>
                                <li><a href="#services"><i className="fa fa-angle-right" aria-hidden="true"></i>All
                                        Services</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="row below-section row py-1">
                    <div className="col-md-12 columns text-md-center text-center">
                        <p className="font-monospace copy-right-bst">© 2023 Starlette. All rights reserved.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
