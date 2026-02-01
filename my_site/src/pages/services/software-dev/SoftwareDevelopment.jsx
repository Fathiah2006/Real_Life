import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SoftwareDevelopment.css";
import ContactModal from "../../../components/layouts/contact modal/ContactModal";

const SoftwareDevelopment = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="software-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link>{" "}
          &gt; <span className="active">Software Development</span>
        </div>

        <h1 className="software-title">
          Custom Software Development That Scales With Your Business
        </h1>

        <p className="software-subtitle">
          We build powerful, scalable software solutions tailored to your unique
          business needs — from web applications to enterprise systems.
        </p>

        <button className="software-btn" onClick={() => setOpen(true)}>
          Start Your Project
        </button>
      </section>

      <section className="software-about container">
        <div className="software-about-left">
          <img
            src="/images/web-dev.avif"
            alt="Software Development illustration"
          />
        </div>

        <div className="software-about-right">
          <h2>Building Solutions That Drive Results</h2>
          <p>
            Our experienced development team creates custom software solutions
            that solve real business problems. We focus on quality, performance,
            and maintainability to ensure your software grows with your
            business.
          </p>

          <ul>
            <li>Custom web and mobile application development</li>
            <li>Enterprise software solutions</li>
            <li>API development and integration</li>
            <li>Cloud-native architecture and deployment</li>
            <li>Legacy system modernization</li>
          </ul>
        </div>
      </section>

      <section className="software-benefits container">
        <h2 className="section-title">Why Choose Custom Software?</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Tailored Solutions</h3>
            <p>
              Built specifically for your business processes and requirements,
              not generic off-the-shelf products.
            </p>
          </div>

          <div className="card">
            <h3>Competitive Edge</h3>
            <p>
              Stand out with unique features and capabilities your competitors
              don't have.
            </p>
          </div>

          <div className="card">
            <h3>Scalable Growth</h3>
            <p>
              Software that adapts and scales as your business evolves and
              grows.
            </p>
          </div>
        </div>
      </section>

      <section className="software-technologies container">
        <h2 className="section-title">Technologies We Work With</h2>

        <div className="tech-grid">
          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-list">
              <span>React</span>
              <span>Vue.js</span>
              <span>Angular</span>
              <span>Next.js</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Backend</h3>
            <div className="tech-list">
              <span>Node.js</span>
              <span>Python</span>
              <span>.NET</span>
              <span>Java</span>
              <span>PHP</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Database</h3>
            <div className="tech-list">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Redis</span>
              <span>Firebase</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Cloud & DevOps</h3>
            <div className="tech-list">
              <span>AWS</span>
              <span>Azure</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      <section className="software-services container">
        <h2 className="section-title">Our Development Services</h2>

        <div className="grid-3">
          <div className="service-box">
            <img src="/images/web-dev.avif" alt="web development" />
            <h3>Web Applications</h3>
            <p>
              Responsive, fast, and secure web applications built with modern
              frameworks and best practices.
            </p>
          </div>

          <div className="service-box">
            <img src="/images/mobile.avif" alt="mobile development" />
            <h3>Mobile Apps</h3>
            <p>
              Native and cross-platform mobile applications for iOS and Android.
            </p>
          </div>

          <div className="service-box">
            <img src="/images/digital market.avif" alt="enterprise solutions" />
            <h3>Enterprise Systems</h3>
            <p>
              Robust enterprise software including CRM, ERP, and business
              management systems.
            </p>
          </div>

          <div className="service-box">
            <img src="/images/ui-ux.avif" alt="api development" />
            <h3>API Development</h3>
            <p>
              RESTful and GraphQL APIs for seamless integration and data
              exchange.
            </p>
          </div>

          <div className="service-box">
            <img src="/images/web-dev.avif" alt="cloud solutions" />
            <h3>Cloud Solutions</h3>
            <p>
              Cloud-native applications and migration services for AWS, Azure,
              and GCP.
            </p>
          </div>

          <div className="service-box">
            <img src="/images/mobile.avif" alt="maintenance" />
            <h3>Support & Maintenance</h3>
            <p>
              Ongoing support, updates, and performance optimization for your
              software.
            </p>
          </div>
        </div>
      </section>

      <section className="software-process">
        <div className="container">
          <h2 className="section-title">Our Development Process</h2>

          <div className="process-grid">
            <div className="step">
              <span>01</span>
              <h3>Discovery & Planning</h3>
              <p>
                We analyze your requirements, define project scope, and create a
                detailed development roadmap.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Design & Architecture</h3>
              <p>
                Creating user-friendly designs and robust technical architecture
                for scalability.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Development</h3>
              <p>
                Agile development with regular sprints, code reviews, and
                continuous integration.
              </p>
            </div>

            <div className="step">
              <span>04</span>
              <h3>Testing & QA</h3>
              <p>
                Comprehensive testing including unit, integration, and user
                acceptance testing.
              </p>
            </div>

            <div className="step">
              <span>05</span>
              <h3>Deployment</h3>
              <p>
                Smooth deployment to production with zero-downtime strategies
                and monitoring.
              </p>
            </div>

            <div className="step">
              <span>06</span>
              <h3>Support & Iteration</h3>
              <p>
                Ongoing maintenance, feature enhancements, and continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="software-cta">
        <h2>Ready to Build Your Custom Software?</h2>
        <p>
          Let's discuss your project and how we can help bring your vision to
          life.
        </p>

        <button onClick={() => setOpen(true)}>Schedule a Consultation</button>
      </section>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SoftwareDevelopment;
