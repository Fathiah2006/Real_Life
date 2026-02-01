import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      {/* ===== BLOG HERO ===== */}
      <section className="blog-hero">
        <h1>Tech Insights & Latest Trends</h1>
        <p>
          Stay updated with the latest news, insights, and innovations in
          technology, cloud computing, cybersecurity, AI, and software
          development.
        </p>
      </section>

      {/* ===== FEATURED BLOG ===== */}
      <section className="featured-blog container">
        <div className="featured-image">
          <img src="/images/cloud1.jpg" alt="AI & Cloud" />
        </div>

        <div className="featured-content">
          <span className="tag">Featured</span>
          <h2>The Future of Cloud Computing in 2025</h2>
          <p>
            Cloud computing continues to evolve rapidly with AI-driven
            automation, enhanced security, and scalable infrastructure shaping
            modern businesses.
          </p>
          
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section className="blog-list container">
        <h2 className="section-title">Latest Articles</h2>

        <div className="blog-grid">
          <div className="blog-card">
            <img src="/images/security.jpeg" alt="Cybersecurity" />
            <div className="blog-content">
              <span className="category">Cybersecurity</span>
              <h3>Top Cybersecurity Threats to Watch in 2025</h3>
              <p>
                Learn about the most dangerous cyber threats and how businesses
                can protect themselves.
              </p>
              <Link to="https://www.cm-alliance.com/cybersecurity-blog">
                Read More
              </Link>
            </div>
          </div>

          <div className="blog-card">
            <img src="/images/ai.jpeg" alt="Artificial Intelligence" />
            <div className="blog-content">
              <span className="category">Artificial Intelligence</span>
              <h3>How AI is Transforming Software Development</h3>
              <p>
                From code generation to bug detection, AI is redefining how
                developers work.
              </p>
              <Link to="https://webwave.me/blog/ai-blogs">Read More</Link>
            </div>
          </div>

          <div className="blog-card">
            <img src="/images/devpos.jpg" alt="DevOps" />
            <div className="blog-content">
              <span className="category">DevOps</span>
              <h3>Why DevOps is Essential for Modern Businesses</h3>
              <p>
                Discover how DevOps improves deployment speed, reliability, and
                collaboration.
              </p>
              <Link to="https://draft.dev/learn/devops-blogs">Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
