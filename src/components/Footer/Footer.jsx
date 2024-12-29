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
                    Explore a vast collection of books from various genres. Whether you're looking for fiction, non-fiction, or academic books, we have something for every reader.
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
                    <li className="menu-item mb-1"><Link to="/about">About Us</Link></li>  
                    <li className="menu-item mb-1"><Link to="/shop">Shop Books</Link></li>  
                    <li className="menu-item mb-1"><Link to="/blogs">Book Reviews</Link></li>  
                    <li className="menu-item mb-1"><Link to="/contact">Contact Us</Link></li>  
                  </ul>
                </div>
              </div>

              
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu text-capitalize">
                  <h5 className="widget-title pb-2">Help & Information</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item mb-1"><Link to="/">Track Your Order</Link></li>
                    <li className="menu-item mb-1"><Link to="/">Returns and Exchanges</Link></li>  
                    <li className="menu-item mb-1"><Link to="/">Shipping Information</Link></li>  
                    <li className="menu-item mb-1"><Link to="/contact">Customer Support</Link></li> 
                    <li className="menu-item mb-1"><Link to="/">FAQ</Link></li>  
                  </ul>
                </div>
              </div>

              {/* Footer Menu Section 4 */}
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-capitalize pb-2">Contact Us</h5>
                  <p>
                    Have a question or need assistance? Reach out to us at <a href="mailto:support@bookstore.com" className="text-decoration-underline">support@bookstore.com</a>
                  </p>
                  <p>
                    For immediate support, give us a call at <a href="tel:+1234567890" className="text-decoration-underline">+1 (234) 567-890</a>
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
