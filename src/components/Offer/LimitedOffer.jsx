import React, { useEffect, useState } from 'react';

// Import images correctly
import bannerImageBg from '../../assets/images/banner-image-bg-1.jpg';
import bannerImage3 from '../../assets/images/banner-image3.png';

const LimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      const endDate = new Date('2024-12-25T00:00:00'); // Set your end date for the countdown here
      const currentDate = new Date();
      const diff = endDate - currentDate;

      if (diff <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown); // Cleanup the interval on component unmount
  }, []);

  return (
    <section
      id="limited-offer"
      className="padding-large"
      style={{
        backgroundImage: `url(${bannerImageBg})`, // Corrected path
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '800px',
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 text-center">
            <div className="image-holder">
              <img
                src={bannerImage3} // Corrected path
                className="img-fluid"
                alt="banner"
              />
            </div>
          </div>
          <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
            <h2>30% Discount on all items. Hurry Up !!!</h2>
            <div id="countdown-clock" className="text-dark d-flex align-items-center my-3">
              <div className="time d-grid pe-3">
                <span className="days fs-1 fw-normal">{timeLeft.days}</span>
                <small>Days</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid pe-3 ps-3">
                <span className="hours fs-1 fw-normal">{timeLeft.hours}</span>
                <small>Hrs</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid pe-3 ps-3">
                <span className="minutes fs-1 fw-normal">{timeLeft.minutes}</span>
                <small>Min</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid ps-3">
                <span className="seconds fs-1 fw-normal">{timeLeft.seconds}</span>
                <small>Sec</small>
              </div>
            </div>
            <a href="index.html" className="btn mt-3">
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
