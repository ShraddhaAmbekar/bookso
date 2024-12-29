import React from 'react';
import { Link } from 'react-router-dom';

const LatestPosts = () => {
  const posts = [
    {
      image: '/assets/images/post-item1.jpg',
      category: 'Books',
      title: '10 Must-Read Classics: Timeless Stories You Can’t Miss',
      description: 'Step into the enchanting world of literature with our curated list of 10 must-read classic books.',
      link: '/blog',
    },
    {
      image: '/assets/images/post-item2.jpg',
      category: 'Books',
      title: 'The Evolution of Mystery Novels: From Whodunits to Psychological Thrillers',
      description: 'Discover how mystery novels have evolved over the years, captivating readers with gripping tales.',
      link: '/blog',
    },
    {
      image: '/assets/images/post-item3.jpg',
      category: 'Books',
      title: 'Romance Reads: Finding Love in the Pages of a Novel',
      description: 'Delve into the heartwarming stories of love and connection through our recommended romance reads.',
      link: '/blog',
    },
    {
      image: '/assets/images/post-item4.jpg',
      category: 'Books',
      title: 'The Healing Power of Books: Reading for Mental Wellness',
      description: 'Explore how books can serve as a therapeutic escape, offering comfort and inspiration.',
      link: '/blog',
    },
  ];

  return (
    <section id="latest-posts" className="padding-large mt-5">
      <div className="container" >
        <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
          <h3 className="d-flex align-items-center">Latest Posts</h3>
          <Link to="/blog" className="btn">View All</Link>
        </div>
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-md-12 mb-4">
              <div className="card flex-row align-items-center p-3 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="img-fluid rounded-start"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <Link to={post.link} className="fs-6 text-primary">{post.category}</Link>
                  <h4 className="card-title mb-2 text-capitalize text-dark">
                    <Link to={post.link}>{post.title}</Link>
                  </h4>
                  <p className="mb-0 text-muted">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
