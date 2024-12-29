import React from 'react';
import "./ItemListing.css";

const ItemsListing = () => {
  const books = [
    {
      title: 'The Two Towers',
      author: 'J.R.R. Tolkien',
      price: '₹870',
      imgSrc: '/assets/images/product-item2.png',
      rating: 5,
    },
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      price: '₹870',
      imgSrc: '/assets/images/product-item1.png',
      rating: 5,
    },
    {
      title: 'Goal Planner',
      author: 'Brian Tracy', 
      price: '₹870',
      imgSrc: '/assets/images/product-item3.png',
      rating: 5,
    },
    {
      title: 'Stupore E Tremori',
      author: 'Amélie Nothomb',
      price: '₹870',
      imgSrc: '/assets/images/product-item4.png',
      rating: 5,
    },
    {
      title: 'The Diary of Anne Frank',
      author: 'Anne Frank',
      price: '₹870',
      imgSrc: '/assets/images/product-item5.png',
      rating: 5,
    },
    {
      title: 'Company of One',
      author: 'Paul Jarvis',
      price: '₹870',
      imgSrc: '/assets/images/product-item6.png',
      rating: 5,
    },
    {
      title: 'Twisted Love',
      author: 'Ana Huang', 
      price: '₹870',
      imgSrc: '/assets/images/product-item7.png',
      rating: 5,
    },
    {
      title: 'A New Testament Biblical Theology',
      author: 'Thomas R. Schreiner', 
      price: '₹870',
      imgSrc: '/assets/images/product-item8.png',
      rating: 5,
    },
    {
      title: 'Your Heart is the Sea',
      author: 'Nikita Gill', 
      price: '₹870',
      imgSrc: '/assets/images/product-item9.png',
      rating: 5,
    },
    {
      title: 'How to Stop Worrying and Start Living',
      author: 'Dale Carnegie', 
      price: '₹999',
      originalPrice: '₹1666',
      imgSrc: '/assets/images/product-item10.png',
      rating: 5,
    },
    {
      title: 'All the Letters I Should Have Written',
      author: 'Charlotte Lee', 
      price: '₹410',
      originalPrice: '₹500',
      imgSrc: '/assets/images/product-item11.png',
      rating: 5,
    },
    {
      title: 'Progress Not Perfection',
      author: 'Harper Mason', 
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
    <section id="items-listing" className="padding-large" >
      <div className="container">
        <div className="row">

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="featured border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-5 mt-2">
                <h3 className="d-flex flex-column mb-0">Featured Books</h3>
              </div>
              <div className="items-lists">
                {books.slice(0, 3).map((book, index) => (
                  <div key={index} className="item d-flex">
                    <img src={book.imgSrc} className="img-fluid shadow-sm" alt="book item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="">{book.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{book.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(book.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">{book.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="latest-items border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-5 mt-2">
                <h3 className="d-flex flex-column mb-4">Latest Books</h3>
              </div>
              <div className="items-lists">
                {books.slice(3, 6).map((book, index) => (
                  <div key={index} className="item d-flex">
                    <img src={book.imgSrc} className="img-fluid shadow-sm" alt="book item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="">{book.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{book.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(book.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">{book.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="best-reviewed border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-4 mt-2">
                <h3 className="d-flex flex-column mb-0">Best reviewed Books</h3>
              </div>
              <div className="items-lists">
                {books.slice(6, 9).map((book, index) => (
                  <div key={index} className="item d-flex">
                    <img src={book.imgSrc} className="img-fluid shadow-sm" alt="book item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="">{book.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{book.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(book.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">{book.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="on-sale border rounded-3 p-4">
              <div className="section-title overflow-hidden mb-5 mt-2">
                <h3 className="d-flex flex-column mb-0">Books On Sale</h3>
              </div>
              <div className="items-lists">
                {books.slice(9).map((book, index) => (
                  <div key={index} className="item d-flex">
                    <img src={book.imgSrc} className="img-fluid shadow-sm" alt="book item" />
                    <div className="item-content ms-3">
                      <h6 className="mb-0 fw-bold">
                        <a href="">{book.title}</a>
                      </h6>
                      <div className="review-content d-flex">
                        <p className="my-2 me-2 fs-6 text-black-50">{book.author}</p>
                        <div className="rating text-warning d-flex align-items-center">
                          {renderRating(book.rating)}
                        </div>
                      </div>
                      <span className="price text-primary fw-bold mb-2 fs-5">
                        {book.originalPrice && <s className="text-black-50">{book.originalPrice}</s>}
                        {book.price}
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
