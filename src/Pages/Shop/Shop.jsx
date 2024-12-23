import React from 'react';
import './Shop.css'; // Add custom styles for the shop page if needed

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Book 1',
      price: '$19.99',
      imgSrc: '/assets/images/product-item1.png', // Replace with your actual image paths
      description: 'A thrilling mystery novel.'
    },
    {
      id: 2,
      name: 'Book 2',
      price: '$15.99',
      imgSrc: '/assets/images/book2.jpg',
      description: 'An inspiring self-help book.'
    },
    {
      id: 3,
      name: 'Book 3',
      price: '$12.99',
      imgSrc: '/assets/images/book3.jpg',
      description: 'A deep dive into history.'
    }
    // Add more products as needed
  ];

  return (
    <div className="shop-container">
      <h1 className="shop-title">Our Shop</h1>
      <div className="shop-items">
        {products.map((product) => (
          <div className="shop-item" key={product.id}>
            <img src={product.imgSrc} alt={product.name} className="shop-item-image" />
            <h3 className="shop-item-name">{product.name}</h3>
            <p className="shop-item-description">{product.description}</p>
            <span className="shop-item-price">{product.price}</span>
            <button className="shop-item-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
