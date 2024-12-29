import React from "react";
import "./CompanyServices.css";

const services = [
  {
    iconClass: "cart-outline",
    title: "Free Shipping on Books",
    description: "Get free delivery on all orders of books across the country.",
  },
  {
    iconClass: "quality",
    title: "Quality Guarantee",
    description: "We ensure that every book we sell is of the highest quality.",
  },
  {
    iconClass: "price-tag",
    title: "Exclusive Book Offers",
    description: "Enjoy daily offers on a wide range of books at unbeatable prices.",
  },
  {
    iconClass: "shield-plus",
    title: "Secure Online Payment",
    description: "Make secure payments online and enjoy shopping without any worries.",
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
