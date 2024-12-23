import React from 'react';
import category1 from '../../assets/images/category1.jpg'; // Import images
import category2 from '../../assets/images/category2.jpg';
import category3 from '../../assets/images/category3.jpg';

const Categories = () => {
  const categories = [
    {
      name: 'Romance',
      imgSrc: category1, // Use imported images here
      link: 'index.html',
    },
    {
      name: 'Lifestyle',
      imgSrc: category2,
      link: 'index.html',
    },
    {
      name: 'Recipe',
      imgSrc: category3,
      link: 'index.html',
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
            <div key={index} className="col-md-4">
              <div className="card text-center mb-4 border-0 rounded-3 position-relative">
                <a href={category.link}>
                  <img
                    src={category.imgSrc} // This will now reference the imported image
                    className="img-fluid rounded-3"
                    alt={`category ${category.name}`}
                  />
                  <h6 className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3">
                    <a href={category.link} className="text-white">
                      {category.name}
                    </a>
                  </h6>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
