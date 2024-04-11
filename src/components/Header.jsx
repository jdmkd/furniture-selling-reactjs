import {Link} from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import login_icon from '../assets/images/auth/user.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/js/dist/dropdown';

// import '../assets/js/theme-change.js';
export default function Header(){
        useEffect(() => {
            const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
            const currentTheme = localStorage.getItem('theme');
            
            if (currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);
              
                if (currentTheme === 'dark') {
                    toggleSwitch.checked = true;
                }
            }
            
            function switchTheme(e) {
                if (e.target.checked) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                }
                else {        
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                }    
            }
            
            // toggleSwitch.addEventListener('change', switchTheme, false);
            const handleResize = () => {
                if (window.innerWidth > 991) {
                    document.querySelector("header").classList.remove("active");
                }
            };
    
        handleResize();
          return () => {
            toggleSwitch.addEventListener('change', switchTheme, false);
            window.removeEventListener("resize", handleResize);
          }
        }, [])


        $(".navbar-toggler").on("ready", function () {
                if ($(window).width() > 991) {
                    $("header").removeClass("active");
                }
                $(window).on("resize", function () {
                    if ($(window).width() > 991) {
                        $("header").removeClass("active");
                    }
                });
            });
        
        let addHeaderActive = () =>{
            document.querySelector(".navbar-collapse").classList.toggle("collapse");

            if(document.querySelector("header").classList.contains("active")){
                document.querySelector("header").classList.remove("active");
            }
            else{
                document.querySelector("header").classList.add("active");
                // document.querySelector(".navbar-collapse").classList.remove("zz");
            }
        };

        $(window).on("scroll",  () => {
            var scroll = $(window).scrollTop();

            if (scroll >= 80) {
                $("#site-header").addClass("nav-fixed");
            } else {
                $("#site-header").removeClass("nav-fixed");
            }
        });
        

        //Main navigation Active Class Add Remove
        // document.querySelector(".navbar-toggler").addEventListener("click", () => {
        //     document.querySelector(".collapse").addClass(".active");
            // $(window).removeClass("collapse");
            // $(window).addClass("navbar-collapse");
            // if($("collapse").hasClass("navbar-collapse")){
            //         console.log("xx ::",$("collapse").hasClass("navbar-collapse"));
            //         $("collapse").removeClass("collapse");
            //     }
            //     else{
            //         $("collapse").addClass("navbar-collapse");
            //         // $("collapse").addClass("navbar-collapse");
            //     }
            
        // });

    return (
        <>
            <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg stroke">
                    <h1>
                        <Link to="/" className="navbar-brand">Starlette</Link>
                    </h1>
                    
                    <button className="navbar-toggler bg-gradient " type="button" 
                        data-bs-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={addHeaderActive}>
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        
                    </button>

                    <div className="collapse navbar-collapse pl-xxl-5 mr-xl-1" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About-Us" className='nav-link'>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Services' className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Products' className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Gallary' className="nav-link">Gallary</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Contact-us' className="nav-link">Contact us</Link>
                            </li>
                            <div className="search-right">
                                <a href='#' className="btn" title="search"><span className="fa fa-search"
                                        aria-hidden="true"></span></a>
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <h4 className="search-pop-text-w3 text-white text-center mb-4">Search Now</h4>
                                        <form action="#error" method="GET" className="search-box">
                                            <div className="input-search"> <span className="fa fa-search mr-2"
                                                    aria-hidden="true"></span><input type="search"
                                                    placeholder="Enter Keyword" name="search" required="required"
                                                    autoFocus=""/>
                                            </div>
                                            <button type="submit" className="btn button-style">Search</button>
                                        </form>
                                    </div>
                                    <a className="close" href="#close">×</a>
                                </div>
                            </div>

                        </ul>
                        
                    </div>
                    <div className="cont-ser-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox"/>
                                    <div className="mode-container">
                                        <i className="gg-sun"></i>
                                        <i className="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                    <li className="nav-item" style={{"backgroudColor":"red",}}>
                        
                        <Link to='/login' className="nav-link"><img src={login_icon} alt="login" width={"50rem"} height={"50rem"}/></Link>
                    </li>
                </nav>
            </div>
        </header>
        
        </>
    );
}