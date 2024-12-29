import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import BestSellingItems from "./components/Item/BestSellingItem";
import Cart from "./Pages/Shop/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation";

const App = () => {
  const [cart, setCart] = useState([]); 


  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);

      if (itemExists) {
        // Update quantity if the item exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to the cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
          // If quantity is 1, omit the item
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <Router>
      <Navbar cartItems={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/shop"
          element={<BestSellingItems addToCart={addToCart} cartItems={cart} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/checkout" element={<Checkout cartItems={cart} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
