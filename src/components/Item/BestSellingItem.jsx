import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BestSellingItem.css";

const BestSellingItems = () => {
  const products = [
    {
      id: 1,
      image: "/assets/images/product-item1.png",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "₹870",
      discount: "10% off",
    },
    {
      id: 2,
      image: "/assets/images/product-item2.png",
      title: "The Two Towers",
      author: "J.R.R. Tolkien",
      price: "₹870",
      discount: null,
    },
    {
      id: 3,
      image: "/assets/images/product-item3.png",
      title: "Goal Planner",
      author: "Brian Tracy",
      price: "₹870",
      discount: null,
    },
    {
      id: 4,
      image: "/assets/images/product-item4.png",
      title: "Stupore E Tremori",
      author: "Amélie Nothomb",
      price: "₹870",
      discount: "10% off",
    },
    {
      id: 5,
      image: "/assets/images/product-item5.png",
      title: "The Diary of Anne Frank",
      author: "Anne Frank",
      price: "₹870",
      discount: null,
    },
    {
      id: 6,
      image: "/assets/images/product-item6.png",
      title: "Company of One",
      author: "Paul Jarvis",
      price: "₹870",
      discount: null,
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(4);
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    console.log(existingItem)
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
     console.log("Updated Cart: ", cart);
    alert(`${item.title} added to cart!`);
  };

  const handleViewMore = () => {
    setVisibleProducts((prev) => (prev === products.length ? 4 : products.length));
  };

  return (
    <section
      id="best-selling-items"
      className="py-5"
      style={{
        backgroundImage: `url(/assets/images/banner-image-bg-2.jpg)`,
        backgroundSize: "cover",
        backgroundColor: "pink",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="section-title mb-4">
          <h3 className="text-center">Best Selling Items</h3>
        </div>

        <div className="row g-4">
          {products.slice(0, visibleProducts).map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="card position-relative h-100 border rounded-3 shadow-lg">
                {item.discount && (
                  <div className="position-absolute top-0 start-0 m-2">
                    <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                      {item.discount}
                    </p>
                  </div>
                )}
                <img
                  src={item.image}
                  className="img-fluid card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <Link to="/product-details" className="text-dark text-decoration-none">
                      {item.title}
                    </Link>
                  </h6>
                  <p className="card-author text-muted">{item.author}</p>
                  <span className="price text-primary fw-bold mb-2 fs-5">{item.price}</span>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to cart"
                    onClick={() => addToCart(item)} // Add to cart when clicked
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                  <button
                    className="btn btn-dark"
                    title="Add to wishlist"
                    onClick={() => alert(`Added ${item.title} to wishlist`)}
                  >
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleViewMore}>
            {visibleProducts === products.length ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellingItems;
