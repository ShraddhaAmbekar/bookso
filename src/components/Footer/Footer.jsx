import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="footer-top-area">
            <div className="row d-flex flex-wrap justify-content-between">
             
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu">
                  <img src="/assets/images/logo.png" alt="logo" className="img-fluid mb-2" />
                  <p>
                    Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
                  </p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                      <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                      <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                      <li><a href="#"><i className="bi bi-linkedin"></i></a></li> 
                      <li><a href="#"><i className="bi bi-youtube"></i></a></li> 
                    </ul>
                  </div>
                </div>
              </div>

             
              <div className="col-lg-2 col-sm-6 pb-3">
                <div className="footer-menu text-capitalize">
                  <h5 className="widget-title pb-2">Quick Links</h5>
                  <ul className="menu-list list-unstyled text-capitalize">
                    <li className="menu-item mb-1"><Link to="/">Home</Link></li>
                    <li className="menu-item mb-1"><Link to="/about">About</Link></li>  
                    <li className="menu-item mb-1"><Link to="/shop">Shop</Link></li>  
                    <li className="menu-item mb-1"><Link to="/blogs">Blogs</Link></li>  
                    <li className="menu-item mb-1"><Link to="/contact">Contact</Link></li>  
                  </ul>
                </div>
              </div>

              
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu text-capitalize">
                  <h5 className="widget-title pb-2">Help & Info Help</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item mb-1"><Link to="/">Track Your Order</Link></li>
                    <li className="menu-item mb-1"><Link to="/">Returns Policies</Link></li>  
                    <li className="menu-item mb-1"><Link to="/">Shipping + Delivery</Link></li>  
                    <li className="menu-item mb-1"><Link to="/contact">Contact Us</Link></li> 
                    <li className="menu-item mb-1"><Link to="/">Faqs</Link></li>  
                  </ul>
                </div>
              </div>

              {/* Footer Menu Section 4 */}
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-capitalize pb-2">Contact Us</h5>
                  <p>
                    Do you have any queries or suggestions? <a href="mailto:yourinfo@gmail.com" className="text-decoration-underline">yourinfo@gmail.com</a>
                  </p>
                  <p>
                    If you need support? Just give us a call. <a href="tel:+5511122233344" className="text-decoration-underline">+55 111 222 333 44</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
