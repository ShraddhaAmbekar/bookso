import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

const CustomerReviews = () => {
  const carouselRef = useRef(null); 

  const reviews = [
    {
      text: '"This bookstore is a hidden gem! The collection of classic literature and modern novels is incredible. The staff is always ready to help with recommendations, and the reading corner is my favorite place to unwind."',
      rating: 5,
      name: 'Sophia Miller',
    },
    {
      text: '"I love this bookstore! Their selection of children’s books is fantastic, and my kids always find something they enjoy. It’s the perfect place for family visits and cultivating a love for reading."',
      rating: 5,
      name: 'Liam Brown',
    },
    {
      text: '"The online ordering system is so convenient. I was impressed with the fast delivery and how carefully the books were packaged. Highly recommend for book lovers!"',
      rating: 5,
      name: 'Olivia Taylor',
    },
    {
      text: '"The staff at this bookstore truly know their books! They helped me find the perfect gift for my friend who’s an avid reader. Exceptional customer service and a great atmosphere."',
      rating: 5,
      name: 'James Wilson',
    },
    {
      text: '"I attended one of their book signing events and had such a wonderful time. This bookstore has become my go-to spot for discovering new authors and connecting with fellow readers."',
      rating: 5,
      name: 'Emily Davis',
    },
  ];

  useEffect(() => {
    if (carouselRef.current) {
    
      new bootstrap.Carousel(carouselRef.current);
    }
  }, []);

  const handleNext = () => {
    if (carouselRef.current) {
      const carousel = bootstrap.Carousel.getInstance(carouselRef.current);
      carousel.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const carousel = bootstrap.Carousel.getInstance(carouselRef.current);
      carousel.prev();
    }
  };

  return (
    <section
      id="customers-reviews"
      className="position-relative padding-large"
      style={{
        backgroundImage: `url(/assets/images/banner-image-bg-1.jpg)`,
        backgroundSize: "cover",
        backgroundColor:"pink",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
      }}>
      <div className="container">
        <div className="section-title mb-4 text-center">
          <h3 className="mb-4">Customer Reviews</h3>
        </div>
        <div
          id="customerReviewsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          ref={carouselRef} 
        >
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="card text-left p-5 border rounded-3 mx-auto" style={{ maxWidth: '600px' }}>
                  <blockquote>{review.text}</blockquote>
                  <div className="rating text-warning d-flex align-items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <h5 className="mt-1 fw-normal">{review.name}</h5>
                </div>
              </div>
            ))}
          </div>
          
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev} 
          >
            <span className="carousel-control-prev-icon visually-hidden">Previous</span>
            <i className="bi bi-arrow-left-circle fs-3 text-dark"></i> {/* Left Arrow Icon */}
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext} 
          >
            <span className="carousel-control-next-icon visually-hidden">Next</span>
            <i className="bi bi-arrow-right-circle fs-3 text-dark"></i> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
