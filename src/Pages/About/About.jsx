import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h2 className="about-title mb-4">Welcome to Bookso</h2>
            <p className="about-description mb-4">
              At Bookso, we are passionate about bringing the best books
              to readers worldwide. From thrilling novels to inspiring
              non-fiction, we curate a collection that will captivate and
              educate. Whether you're looking for a new adventure or just
              seeking the perfect gift, our team is dedicated to making
              your reading experience unforgettable.
            </p>
            <p className="about-description mb-5">
              Our mission is to make books accessible to everyone. We believe
              that books have the power to transform lives and open minds, and
              we're committed to delivering the latest titles, classics, and
              exclusive editions to our customers.
            </p>

            <div className="about-stats d-flex justify-content-center">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Genres</p>
              </div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Books in Stock</p>
              </div>
              <div className="stat-item">
                <h3>10K+</h3>
                <p>Happy Readers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
