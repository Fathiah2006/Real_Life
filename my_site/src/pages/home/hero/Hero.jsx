import React, { useEffect, useState } from "react";
import "./hero.css";
import ContactModal from "../../../components/layouts/contact modal/ContactModal";
const Hero = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;
    const interval = setInterval(() => {
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      index = (index + 1) % slides.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-page-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-inner">
            <h1>
              Your reliable partner in{" "}
              <span className="highlight">digital</span> transformation
            </h1>
            <p className="hero-subtext">
              Empowering businesses with intelligent technologies: custom
              software, the Internet of Things solutions, AI apps, and more.
            </p>
            <div className="hero-buttons">
              <button className="btn outline" onClick={() => setOpen(true)}>
                Book Consultation
              </button>
              <a href="/services" className="btn outline">
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;
