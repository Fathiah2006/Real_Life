import React from "react";
import "./HeroSection.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">

<div className="breadcrumb">
  <Link to="/">Home</Link> &gt; 
  <Link to="/services">Services</Link> &gt; 
  <span>Web Development</span>
</div>

        <h1 className="hero-title">
          Custom <span className="highlight">web development</span> services
        </h1>

        <p className="hero-subtitle">
          Using best IT innovations, we develop custom web and mobile applications 
          that increase our customers’ competitive advantage and improve their business efficiency.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Book Free Consultation</button>
          <button className="btn-outline">About us</button>
        </div>
{/* 
        <div className="hero-rating">
          <p>Clients rate our services</p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
            <span className="rating">5.0</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
