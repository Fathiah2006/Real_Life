import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './CloudSolution.css'
import ContactModal from "../../../components/layouts/contact modal/ContactModal";

const CloudSolution = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="cloud-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link>{" "}
          &gt;
          <span className="active"> Cloud Solutions</span>
        </div>

        <h1 className="cloud-title">
          Powerful <span className="highlight">Cloud Solutions</span> to Scale
          Your Business
        </h1>

        <p className="cloud-subtitle">
          We design, build, and optimize cloud infrastructure that delivers high
          availability, enhanced security, and efficient performance for
          businesses of all sizes.
        </p>

        <button className="cloud-btn" onClick={() => setOpen(true)}>
          Get Free Consultation
        </button>
      </section>

      <section className="cloud-about container">
        <div className="cloud-about-left">
          <img src="/images/cloud1.jpg" alt="cloud" />
        </div>

        <div className="cloud-about-right">
          <h2>Modern Cloud Solutions for Modern Businesses</h2>
          <p>
            Our team helps you leverage cloud technology to build scalable,
            secure, and cost-effective infrastructures.
          </p>

          <ul>
            <li>Cloud migration & modernization</li>
            <li>Infrastructure setup & automation</li>
            <li>Security, DevOps & optimization</li>
            <li>Private, public & hybrid cloud support</li>
          </ul>
        </div>
      </section>

      <section className="cloud-benefits container">
        <h2 className="section-title">Why Cloud Solutions?</h2>

        <div className="grid-3">
          <div className="card">
            <h3>High Scalability</h3>
            <p>Scale your infrastructure instantly as your business grows.</p>
          </div>

          <div className="card">
            <h3>Better Security</h3>
            <p>Advanced cloud security, backups, and real-time monitoring.</p>
          </div>

          <div className="card">
            <h3>Reduced Costs</h3>
            <p>Save up to 40% on infrastructure and maintenance.</p>
          </div>
        </div>
      </section>

      <section className="cloud-services container">
        <h2 className="section-title1">Our Cloud Services</h2>

        <div className="grid-3">
          <div className="service-box">
            <img src="/images/cloud-mig.jpg" alt="" />
            <h3>Cloud Migration</h3>
            <p>Move your system to the cloud with zero downtime.</p>
          </div>

          <div className="service-box">
            <img src="/images/cloud-arch.png" alt="" />
            <h3>Cloud Architecture</h3>
            <p>We design secure and scalable cloud infrastructure.</p>
          </div>

          <div className="service-box">
            <img src="/images/devepos.jpg" alt="" />
            <h3>DevOps & Automation</h3>
            <p>Automate deployment, performance, and server tasks.</p>
          </div>
        </div>
      </section>

      <section className="cloud-process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>

          <div className="process-grid">
            <div className="step">
              <span>01</span>
              <h3>Discovery & Assessment</h3>
              <p>Understanding your current system and cloud requirements.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Cloud Planning</h3>
              <p>We design the right cloud strategy for your business.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Migration / Deployment</h3>
              <p>Move data and applications securely to the cloud.</p>
            </div>

            <div className="step">
              <span>04</span>
              <h3>Optimization</h3>
              <p>Improving cloud performance, cost, and automation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-cta">
        <h2>Ready to Scale with Cloud?</h2>
        <p>
          Let our experts help you deploy secure, scalable cloud infrastructure.
        </p>

        <button onClick={() => setOpen(true)}>Talk to an Expert</button>
      </section>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CloudSolution;
