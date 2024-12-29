import React from 'react';
import "./Categories.css";


const Categories = () => {
  const categories = [
    {
      name: 'Romance',
      imgSrc: '/assets/images/category1.jpg', 
    
    },
    {
      name: 'Lifestyle',
      imgSrc: '/assets/images/category2.jpg',
      
    },
    {
      name: 'Recipe',
      imgSrc: '/assets/images/category3.jpg',
      
    },
  ];

  return (
    <section id="categories" className="padding-large pt-0">
      <div className="container">
        <div className="section-title overflow-hidden mb-4">
          <h3 className="d-flex align-items-center">Categories</h3>
        </div>
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-md-4 col-lg-4">
              <div className="card text-center mb-4 border-0 rounded-3 position-relative">
                <img
                  src={category.imgSrc}
                  className="img-fluid rounded-3"
                  alt={`category ${category.name}`}
                />
                <span>
                  <h6 className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3">
                    {category.name}
                  </h6>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
