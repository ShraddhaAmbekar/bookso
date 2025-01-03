import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Billboard.css";
import { Link } from "react-router-dom";

const Billboard = () => {
  return (
    <section
      id="billboard"
      className="position-relative d-flex align-items-center py-5 bg-light-gray"
      style={{
        backgroundImage: `url(/assets/images/banner-image-bg-1.jpg)`,
        backgroundSize: "cover",
        backgroundColor:"pink",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "700px",
      
      }}
    >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                  <div className="banner-content">
                    <h2>The Fine Print Book Collection</h2>
                    <p>Best Offer Save 30%. Grab it now!</p>
                    <Link to="/shop" className="btn btn-primary mt-3">
                      Shop Collection
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="image-holder">
                    <img
                      src="/assets/images/banner-image2.png"
                      className="img-fluid"
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                  <div className="banner-content">
                    <h2>How Innovation Works</h2>
                    <p>Discount available. Grab it now!</p>
                    <Link to="/shop" className="btn btn-primary mt-3">
                      Shop Product
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="image-holder">
                    <img
                      src="/assets/images/banner-image1.png"
                      className="img-fluid"
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                  <div className="banner-content">
                    <h2>Your Heart is the Sea</h2>
                    <p>Limited stocks available. Grab it now!</p>
                    <Link to="/shop" className="btn btn-primary mt-3">
                      Shop Collection
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="image-holder">
                    <img
                      src="/assets/images/banner-image.png"
                      className="img-fluid"
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Billboard;
