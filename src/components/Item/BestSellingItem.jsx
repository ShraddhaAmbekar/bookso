import React from "react";
import { Link } from "react-router-dom";
import "./BestSellingItem.css";

const BestSellingItems = ({ setCartItems }) => {
  const products = [
    {
      image: "/assets/images/product-item1.png",
      title: "The Psychology of Money",
      price: "₹870",
      discount: "10% off",
    },
    {
      image: "/assets/images/product-item2.png",
      title: "The Two Towers",
      price: "₹870",
      discount: null,
    },
    {
      image: "/assets/images/product-item3.png",
      title: "Goal Planner",
     
      price: "₹870",
      discount: null,
    },
    {
      image: "/assets/images/product-item4.png",
      title: "Stupore E Tremori",
     
      price: "₹870",
      discount: "10% off",
    },
    {
      image: "/assets/images/product-item5.png",
      title: "The Diary of Anne Frank",
      
      price: "₹870",
      discount: null,
    },
    {
      image: "/assets/images/product-item6.png",
      title: "Company of One",
   
      price: "₹870",
      discount: null,
    },
  ];
  

  const addToCart = (product) => {
    if (setCartItems) {
      setCartItems((prevItems) => [...prevItems, product]); // Adding item to cart
      alert(`${product.title} added to cart`);
    } else {
      console.error("setCartItems is not a function");
    }
  };

  return (
    <section id="best-selling-items" className="py-5">
      <div className="container">
        <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
          <h3 className="d-flex align-items-center">Best Selling Items</h3>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((item, index) => (
            <div className="col" key={index}>
              <div className="card position-relative h-100 border rounded-3">
                {item.discount && (
                  <div className="position-absolute top-0 start-0 m-2">
                    <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                      {item.discount}
                    </p>
                  </div>
                )}
                <img
                  src={item.image}
                  className="img-fluid shadow-sm card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h6 className="card-title">
                    <Link to="/product-details">{item.title}</Link>
                  </h6>
                  <span className="price text-primary fw-bold mb-2 fs-5">
                    {item.price}
                  </span>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to cart"
                    onClick={() => addToCart(item)} // Correct function call
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                  <button
                    className="btn btn-dark"
                    title="Add to wishlist"
                    onClick={() => alert(`Added ${item.title} to wishlist`)} // Placeholder for wishlist action
                  >
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingItems;
