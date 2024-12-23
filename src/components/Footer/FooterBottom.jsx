import React from 'react';

const FooterBottom = () => {
  return (
    <div id="footer-bottom" className="mb-2">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="ship-and-payment d-flex gap-md-5 flex-wrap">
     
            <div className="shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src="/assets/images/dhl.png" alt="DHL" />
                <img src="/assets/images/shippingcard.png" alt="Shipping Card" />
              </div>
            </div>
         
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
                <img src="/assets/images/visa.jpg" alt="Visa" />
                <img src="/assets/images/mastercard.jpg" alt="Mastercard" />
                <img src="/assets/images/paypal.jpg" alt="PayPal" />
              </div>
            </div>
          </div>
        
          <div className="copyright">
            <p>© Copyright 2024 book house. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
