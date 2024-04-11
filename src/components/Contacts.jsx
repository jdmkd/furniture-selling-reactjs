import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
export default function Contacts() {
    // console.log(document.documentElement.setAttribute('data-theme', 'dark'))
  return (
    <>
        <section className="w3l-contacts-12 py-5 border-top border-bottom mx-2">
        <div className="container py-lg-5 py-md-4 py-3">
            <h3 className="title-style mb-4">Contact Us</h3>
            <div className="row contact-grids border rounded-2 py-sm-5">
                <div className="col-lg-7 col-md-12  px-4 px-sm-4 py-3 ml-lg-5 contacts12-main">
                    <form action="" method="post" className="signin-form">
                        <div className="row input-grids">
                            <div className="col-sm-6 ">
                                <input type="text" name="w3lName" placeholder="Full name" className="contact-input hover-overly border rounded-2 fw-bold pl-2" />
                            </div>
                            <div className="col-sm-6 mt-sm-0 mt-4">
                                <input type="email" name="w3lSender" placeholder="Your email" className="contact-input border rounded-2 fw-bold pl-2" />
                            </div>
                        </div>
                        <div className="row input-grids my-4">
                            <div className="col-sm-6">
                                <input type="text" name="w3lSubect" placeholder="Subject" className="contact-input border rounded-2 fw-bold pl-2" />
                            </div>
                            <div className="col-sm-6 mt-sm-0 mt-4">
                                <input type="text" name="w3lName" placeholder="Phone number" className="contact-input border rounded-2 fw-bold pl-2" />
                            </div>
                        </div>
                        <textarea name="w3lMessage" placeholder="Type your message here" className='border rounded-2 fw-bold pl-2' required=""></textarea>
                        <button className="btn d-grid gap-2 mt-5 col-12 col-sm-6  mx-auto button-style">Send Message</button>
                    </form>
                </div>
                <div className="fs-6 col-lg-4 contact-right pt-3 pl-xl-5 mt-lg-2 mt-5 ml-lg-4">
                    <div className="details-style d-flex">
                        <span className="fa fa-map"></span>
                        <div className="location-info">
                            <span>Location</span>
                            <p>792, Aaryan Euphoria,</p>
                            <p>Chanakyapuri, Ahmedabad,</p>
                            <p>Gujarat, India.</p>
                        </div>
                    </div>
                    <div className="details-style d-flex">
                        <span className="fa fa-envelope-open"></span>
                        <div className="email-info">
                            <span>Have any Questions?</span>
                            <a href="mailto:wolf@gmail.com"> wolf@gmail.com</a>
                        </div>
                    </div>
                    <div className="details-style d-flex">
                        <span className="fa fa-phone"></span>
                        <div className="email-info">
                            <span>Phone Number</span>
                            <a href="tel:(+91) 6376094539"> 6376094539</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map border rounded-1 px-3 py-3 mx-2">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42635.485833610175!2d72.59555023932813!3d23.033121995761157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666037649432!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border:"0"}}></iframe>
            </div>
        </div>
    </section>
    
    </>
  )
}
