import React, { useRef, useEffect } from 'react';
import backgroundImage from '../../assets/images/banner-image-bg.jpg'; // Adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

const CustomerReviews = () => {
  const carouselRef = useRef(null); // Reference for the carousel

  const reviews = [
    {
      text: '"I stumbled upon this bookstore while visiting the city, and it instantly became my favorite spot. The cozy atmosphere, friendly staff, and wide selection of books make every visit a delight!"',
      rating: 5,
      name: 'Emma Chamberlin',
    },
    {
      text: '"As an avid reader, I\'m always on the lookout for new releases, and this bookstore never disappoints. They always have the latest titles, and their recommendations have introduced me to some incredible reads!"',
      rating: 5,
      name: 'Thomas John',
    },
    {
      text: '"I ordered a few books online from this store, and I was impressed by the quick delivery and careful packaging. It\'s clear that they prioritize customer satisfaction, and I\'ll definitely be shopping here again!"',
      rating: 5,
      name: 'Kevin Bryan',
    },
    {
      text: '“I stumbled upon this tech store while searching for a new laptop, and I couldn\'t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
      rating: 5,
      name: 'Stevin',
    },
    {
      text: '“I stumbled upon this tech store while searching for a new laptop, and I couldn\'t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
      rating: 5,
      name: 'Roman',
    },
  ];

  // Initialize carousel when component mounts
  useEffect(() => {
    if (carouselRef.current) {
      // Create a carousel instance
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '600px',
      }}
    >
      <div className="container">
        <div className="section-title mb-4 text-center">
          <h3 className="mb-4">Customer Reviews</h3>
        </div>
        <div
          id="customerReviewsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          ref={carouselRef} // Reference for the carousel
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
          {/* Carousel Controls with Icons */}
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev} // Attach previous handler
          >
            <span className="carousel-control-prev-icon visually-hidden">Previous</span>
            <i className="bi bi-arrow-left-circle fs-3 text-dark"></i> {/* Left Arrow Icon */}
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext} // Attach next handler
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
