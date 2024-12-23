import React from "react";
import "./CompanyServices.css"; // Optional: Add custom styles if required.

const services = [
  {
    iconClass: "cart-outline",
    title: "Free delivery",
    description: "Consectetur adipi elit lorem ipsum dolor sit amet.",
  },
  {
    iconClass: "quality",
    title: "Quality guarantee",
    description: "Dolor sit amet orem ipsu mcons ectetur adipi elit.",
  },
  {
    iconClass: "price-tag",
    title: "Daily offers",
    description: "Amet consectetur adipi elit loreme ipsum dolor sit.",
  },
  {
    iconClass: "shield-plus",
    title: "100% secure payment",
    description: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
  },
];

const CompanyServices = () => {
  return (
    <section id="company-services" className="padding-large pb-0">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 pb-3 pb-lg-0">
              <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                  <svg className={service.iconClass}>
                    <use xlinkHref={`#${service.iconClass}`} />
                  </svg>
                </div>
                <div className="icon-box-content">
                  <h4 className="card-title mb-1 text-capitalize text-dark">
                    {service.title}
                  </h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
