// import '../assets/css/style-starter.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// Routes,Route,

export default function QuoteSection(){
    return(
    <>
        <section className="w3-bottom-stats py-1">
        <div className="container py-lg-1 py-md-3 py-3">
            <div className="mx-auto ">
                <div className="row">
                    {/* <div className="col-md-4 mb-md-0 mb-3">
                        <div className="counter p-md-3 text-center">
                            <div className="timer count-title count-number" data-to="370" data-speed="1500"></div>
                            <p className="count-text mt-2">happy customer's</p>
                        </div>
                    </div> */}
                    <div className="col-md-12 pl-6">
                        <blockquote className="mb-0">
                            <p className="quote-main position-relative pt-4 text-center">
                            If you want to live a luxurious life with your family. we are here to fulfill your desires.
                                
                            </p>
                        </blockquote>
                        <a href="http://" className="text-end mt-1 pl-5 blockquote-footer">werewolf</a>
                    </div>
                </div>
            </div>
        </div>
    </section>        
    </>    
    );
}