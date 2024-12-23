import React from 'react'; 
import "./Instagram.css"

const InstagramSection = () => {
  const instagramItems = [
    { image: '/assets/images/insta-item1.jpg', link: 'https://templatesjungle.com/' },
    { image: '/assets/images/insta-item2.jpg', link: 'https://templatesjungle.com/' },
    { image: '/assets/images/insta-item3.jpg', link: 'https://templatesjungle.com/' },
    { image: '/assets/images/insta-item4.jpg', link: 'https://templatesjungle.com/' },
    { image: '/assets/images/insta-item5.jpg', link: 'https://templatesjungle.com/' },
    { image: '/assets/images/insta-item6.jpg', link: 'https://templatesjungle.com/' },
  ];

  return (
    <section id="instagram">
      <div className="container">
        <div className="text-center mb-4">
          <h3>Instagram</h3>
        </div>
        <div className="row">
          {instagramItems.map((item, index) => (
            <div key={index} className="col-md-2">
              <figure className="instagram-item position-relative rounded-3">
                <a href={item.link} className="image-link position-relative">
                  <div className="icon-overlay position-absolute d-flex justify-content-center">
                    <span className="instagram-icon">Instagram</span>
                  </div>
                  <img
                    src={item.image}
                    alt="instagram"
                    className="img-fluid rounded-3 insta-image"
                  />
                </a>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
