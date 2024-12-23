import React from 'react';
import "./ItemListing.css";

const ItemsListing = () => {
  const products = [
    {
      title: 'Echoes of the Ancients',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item2.png',
      rating: 5,
    },
    {
      title: 'The Midnight Garden',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item1.png',
      rating: 5,
    },
    {
      title: 'Shadow of the Serpent',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item3.png',
      rating: 5,
    },
    {
      title: 'Whispering Winds',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item4.png',
      rating: 5,
    },
    {
      title: 'The Forgotten Realm',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item5.png',
      rating: 5,
    },
    {
      title: 'Moonlit Secrets',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item6.png',
      rating: 5,
    },
    {
      title: 'The Crystal Key',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item7.png',
      rating: 5,
    },
    {
      title: 'Starlight Sonata',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item8.png',
      rating: 5,
    },
    {
      title: 'Tales of the Enchanted Forest',
      author: 'Lauren Asher',
      price: '₹870',
      imgSrc: '/assets/images/product-item9.png',
      rating: 5,
    },
    {
      title: 'The Phoenix Chronicles',
      author: 'Lauren Asher',
      price: '₹999',
      originalPrice: '₹1666',
      imgSrc: '/assets/images/product-item10.png',
      rating: 5,
    },
    {
      title: 'Dreams of Avalon',
      author: 'Lauren Asher',
      price: '₹410',
      originalPrice: '₹500',
      imgSrc: '/assets/images/product-item11.png',
      rating: 5,
    },
    {
      title: 'Legends of the Dragon Isles',
      author: 'Lauren Asher',
      price: '₹500',
      originalPrice: '₹600',
      imgSrc: '/assets/images/product-item12.png',
      rating: 5,
    },
  ];

  const renderRating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">
          {i < rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="items-listing" className="padding-large">
      <div className="container">
        <div className="row">

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="featured border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-5 mt-2">
                <h3 className="d-flex flex-column mb-0">Featured</h3>
              </div>
              <div className="items-lists">
                {products.slice(0, 3).map((product, index) => (
                  <div key={index} className="item d-flex">
                    <img src={product.imgSrc} className="img-fluid shadow-sm" alt="product item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="index.html">{product.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{product.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(product.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="latest-items border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-5 mt-2">
                <h3 className="d-flex flex-column mb-0">Latest items</h3>
              </div>
              <div className="items-lists">
                {products.slice(3, 6).map((product, index) => (
                  <div key={index} className="item d-flex">
                    <img src={product.imgSrc} className="img-fluid shadow-sm" alt="product item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="index.html">{product.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{product.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(product.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="best-reviewed border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-5 mt-2">
                <h3 className="d-flex flex-column mb-0">Best reviewed</h3>
              </div>
              <div className="items-lists">
                {products.slice(6, 9).map((product, index) => (
                  <div key={index} className="item d-flex">
                    <img src={product.imgSrc} className="img-fluid shadow-sm" alt="product item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="index.html">{product.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{product.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(product.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* On Sale Section */}
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="on-sale border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-5 mt-2">
                <h3 className="d-flex flex-column mb-0">On sale</h3>
              </div>
              <div className="items-lists">
                {products.slice(9).map((product, index) => (
                  <div key={index} className="item d-flex">
                    <img src={product.imgSrc} className="img-fluid shadow-sm" alt="product item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="index.html">{product.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{product.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(product.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">
                        {product.originalPrice && <s className="text-black-50">{product.originalPrice}</s>}
                        {product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsListing;
