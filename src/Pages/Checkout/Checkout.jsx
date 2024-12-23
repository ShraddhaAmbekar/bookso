import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for programmatic navigation
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "credit-card",
  });
  
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Calculate total price of items in the cart
  const totalPrice = cartItems
    .reduce((total, item) => {
      const price = parseFloat(item.price.slice(1)); // Remove ₹ sign and parse to float
      return total + (isNaN(price) ? 0 : price); // Handle any potential parsing errors
    }, 0)
    .toFixed(2); // Ensure two decimal places

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process payment here (optional)
    // Simulate successful payment
    navigate("/order-confirmation");  // Redirect to Order Confirmation page
  };

  return (
    <div className="checkout-container">
      <h3>Checkout</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="checkout-items">
            <h4>Cart Items</h4>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="checkout-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="checkout-item-image"
                  />
                  <div className="checkout-item-details">
                    <h5>{item.title}</h5>
                    <p>{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="checkout-summary">
            <h5>Total: ₹{totalPrice}</h5>
            <div className="checkout-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Shipping Address</label>
                  <textarea
                    id="address"
                    rows="3"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Enter your shipping address"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="payment">Payment Method</label>
                  <select
                    id="payment"
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="upi">UPI</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Confirm and Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Link to="/shop" className="continue-shopping-btn">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Checkout;
