// OrderConfirmation.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-container">
      <h3>Thank You for Your Order!</h3>
      <p>Your order has been successfully placed. We are processing it and will notify you once it's on the way.</p>
      <div className="order-details">
        <h4>Order Summary</h4>
      
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="order-summary">
        <p>If you have any questions about your order, please feel free to contact us.</p>
      </div>
      <Link to="/shop" className="continue-shopping-btn">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;  // Default export
