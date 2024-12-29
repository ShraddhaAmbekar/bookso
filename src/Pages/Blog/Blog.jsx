import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      category: 'Romance',
      title: 'Top 5 Romance Novels You Must Read',
      excerpt: 'Discover the most captivating romance novels that will steal your heart and emotions...',
      image: '/assets/images/category1.jpg',
    },
    {
      category: 'Lifestyle',
      title: 'The Ultimate Guide to a Healthier Lifestyle',
      excerpt: 'Start living your best life with these simple but effective lifestyle changes...',
      image: '/assets/images/category2.jpg',
    },
    {
      category: 'Recipe',
      title: 'Delicious Breakfast Recipes for a Good Start',
      excerpt: 'Looking for healthy and easy breakfast ideas? Here are some mouthwatering recipes...',
      image: '/assets/images/category3.jpg',
    },
    {
      category: 'Science Fiction',
      title: 'Best Science Fiction Books of All Time',
      excerpt: 'Explore the best sci-fi books that will take you on thrilling adventures through time and space...',
      image: '/assets/images/category4.jpg',
    },
    {
      category: 'Fantasy',
      title: 'Must-Read Fantasy Books for All Ages',
      excerpt: 'Dive into magical worlds with these fantastic fantasy books that will transport you...',
      image: '/assets/images/category5.jpg',
    },
    {
      category: 'Self-Help',
      title: 'How to Achieve Your Goals in 2025',
      excerpt: 'Set realistic goals and take actionable steps to make this your most productive year...',
      image: '/assets/images/category6.jpg',
    },
    {
      category: 'Technology',
      title: 'Top 10 Tech Innovations of the Decade',
      excerpt: 'Stay ahead of the curve with the top technological advancements that have changed the world...',
      image: '/assets/images/category7.jpg',
    },
  ];

  return (
    <section id="blog" className="padding-large pt-0">
      <div className="container">
        <div className="section-title overflow-hidden mb-4">
          <h3 className="d-flex align-items-center">Latest Blog Posts</h3>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="card text-center mb-4 border-0 rounded-3 position-relative">
                <img
                  src={post.image}
                  className="img-fluid rounded-3"
                  alt={post.category}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.excerpt}</p>
                  <button className="btn btn-primary" onClick={() => alert('Feature coming soon')}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
