import React from "react";
import "./Blog.css"; // Custom CSS file for styling

const Blog = () => {
  const posts = [
    {
      title: "The Future of Book Reading",
      date: "December 22, 2024",
      author: "John Doe",
      content:
        "In this post, we will explore how technology is reshaping the way we read books...",
      tags: ["Technology", "Books", "Reading"],
    },
    {
      title: "Top 5 Books for 2025",
      date: "December 21, 2024",
      author: "Jane Smith",
      content:
        "Looking for books to read in 2025? Here are the top 5 books to add to your list...",
      tags: ["Books", "Recommendations", "Reading List"],
    },
  ];

  return (
    <div className="blog-container">
      <h1>Book House Blog</h1>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <div className="post-meta">
              <span className="author">By {post.author}</span>
              <span className="date">{post.date}</span>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
