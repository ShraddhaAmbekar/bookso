import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems = [], removeFromCart }) => {  // Set default value for cartItems
  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));  // Remove non-numeric characters
    return total + (isNaN(price) ? 0 : price);
  }, 0).toFixed(2); // Ensure two decimal places

  return (
    <div className="cart-container">
      <h3>Shopping Cart</h3>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>  // Message when cart is empty
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h5>{item.title}</h5>
                <span>{item.price}</span>
              </div>
              <button
                className="remove-item"
                onClick={() => removeFromCart(item.id)} // Using item.id to remove the item
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h5>Total: ₹{totalPrice}</h5> {/* Showing total price in INR */}
        <Link to="/checkout" className="checkout-button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
