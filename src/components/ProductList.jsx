// import '../assets/css/style-starter.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import prod1 from '../assets/images/prod1.jpg';
import prod2 from '../assets/images/prod2.jpg';
import prod3 from '../assets/images/prod3.jpg';
import prod4 from '../assets/images/prod4.jpg';


export default function ProductList(){
    return (
    <>
        <section className="w3l-products py-5">
        <div className="container py-lg-5 py-md-4 py-3">
            <div className="mx-auto">
                <h3 className="title-style mb-md-5 mb-4">New Products</h3>
                <div className="row text-center">
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod1} alt="" className="img-responsive img-fluid" />
                            <h5> Accessories </h5>
                        </a>
                    </div>
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod2} alt="" className="img-responsive img-fluid" />
                            <h5> Lighting</h5>
                        </a>
                    </div>
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod3} alt="" className="img-responsive img-fluid" />
                            <h5> Furniture</h5>
                        </a>
                    </div>
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod3} alt="" className="img-responsive img-fluid" />
                            <h5> Furniture</h5>
                        </a>
                    </div>
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod2} alt="" className="img-responsive img-fluid" />
                            <h5> Furniture</h5>
                        </a>
                    </div>
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod1} alt="" className="img-responsive img-fluid" />
                            <h5> Furniture</h5>
                        </a>
                    </div>
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod2} alt="" className="img-responsive img-fluid" />
                            <h5> Furniture</h5>
                        </a>
                    </div>
                    <div className="col-3 product-content">
                        <a href="http://">
                            <img src={prod2} alt="" className="img-responsive img-fluid" />
                            <h5> Furniture</h5>
                        </a>
                    </div>
                    
                </div>
                
                <div className="row align-items-center pt-lg-5 pt-sm-4 mt-5">
                    <div className="col-lg-5 col-md-6 product-content-bottom">
                        <h6 className="same-style-top">Your Dream Home</h6>
                        <h4 className="theme-style-top">Perfect finish, best materials</h4>
                        <p className="mt-3">We are a reputable company that manufactures, supplies,
                             wholesales, and trades furniture. All of our products are guaranteed
                              to be dimensionally precise, long-lasting, and exceptionally
                              high-quality because they are all made using high-quality
                              raw materials. </p>

                        <p className="mt-3">All of our items are created using high-quality raw 
                            materials and cutting-edge technology. Our quality analysts closely
                            monitor every step of the production and execution process.</p>
                    </div>
                    <div className="col-lg-7 col-md-6 product-content-bottom pl-lg-5 mt-md-0 mt-4">
                        <img src={prod4} alt="" className="img-responsive img-fluid" />
                    </div>
                </div>
                <div className="row align-items-center pt-lg-5 pt-sm-4 mt-5">
                    <div className="col-lg-5 col-md-6 product-content-bottom">
                        <h6 className="same-style-top">Your Dream Home</h6>
                        <h4 className="theme-style-top">Perfect finish, best materials</h4>
                        <p className="mt-3">We are a reputable company that manufactures, supplies,
                             wholesales, and trades furniture. All of our products are guaranteed
                              to be dimensionally precise, long-lasting, and exceptionally
                              high-quality because they are all made using high-quality
                              raw materials. </p>

                        <p className="mt-3">All of our items are created using high-quality raw 
                            materials and cutting-edge technology. Our quality analysts closely
                            monitor every step of the production and execution process.</p>
                    </div>
                    <div className="col-lg-7 col-md-6 product-content-bottom pl-lg-5 mt-md-0 mt-4">
                        <img src={prod4} alt="" className="img-responsive img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>    
    );

}