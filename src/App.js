import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import BestSellingItems from "./components/Item/BestSellingItem"
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Shop/Cart";
import Checkout from "./Pages/Checkout/Checkout"
import OrderConfirmation from "./Pages/OrderConfirmation"

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<BestSellingItems setCartItems={setCartItems} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation/>} />
      </Routes>
    </Router>
  );
};

export default App;
