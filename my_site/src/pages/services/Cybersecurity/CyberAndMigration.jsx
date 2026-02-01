import React from "react";
import { Link } from "react-router-dom";
import ContactModal from "../../../components/layouts/contact modal/ContactModal";
import { useState } from "react";
import './CyberAndMigration.css'

const CyberAndMigration = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="cyber-migration-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link>{" "}
          &gt;
          <span className="active"> Cybersecurity & Cloud Migration</span>
        </div>

        <h1 className="hero-title">
          Complete <span className="highlight">Cybersecurity</span> &{" "}
          <span className="highlight-alt">Cloud Migration</span> Solutions
        </h1>

        <p className="hero-subtitle">
          Secure your infrastructure and seamlessly migrate to the cloud with
          our comprehensive cybersecurity and migration services.
        </p>

        <button className="hero-btn" onClick={() => setOpen(true)}>
          Get Started Today
        </button>
      </section>

      {/* Cybersecurity Section */}
      <section className="cybersecurity-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Cybersecurity</span>
            <h2>Advanced Security Solutions</h2>
            <p>
              Protect your business from evolving cyber threats with
              enterprise-grade security
            </p>
          </div>

          <div className="cyber-content">
            <div className="cyber-image">
              <img src="/images/security.jpeg" alt="cybersecurity" />
            </div>

            <div className="cyber-features">
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <h3>Threat Monitoring & Detection</h3>
                  <p>
                    24/7 real-time monitoring to detect and prevent cyber
                    attacks before they impact your business.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <h3>Data Encryption & Protection</h3>
                  <p>
                    End-to-end encryption for sensitive data in transit and at
                    rest with advanced security protocols.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🚨</div>
                <div className="feature-text">
                  <h3>Incident Response</h3>
                  <p>
                    Rapid response team to contain and recover from security
                    breaches with minimal downtime.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">👁️</div>
                <div className="feature-text">
                  <h3>Security Audits & Compliance</h3>
                  <p>
                    Regular assessments to ensure compliance with GDPR, HIPAA,
                    PCI-DSS, and ISO 27001.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-services-grid">
            <div className="service-card">
              <h3>Network Security</h3>
              <p>
                Firewall configuration, VPN setup, and network segmentation.
              </p>
            </div>

            <div className="service-card">
              <h3>Endpoint Protection</h3>
              <p>
                Comprehensive security for all devices accessing your network.
              </p>
            </div>

            <div className="service-card">
              <h3>Cloud Security</h3>
              <p>Secure cloud environments with advanced access controls.</p>
            </div>

            <div className="service-card">
              <h3>Security Training</h3>
              <p>Employee awareness programs to prevent social engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Cloud Migration Section */}
      <section className="migration-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label-alt">
              Cloud Migration
            </span>
            <h2>Seamless Cloud Migration</h2>
            <p>
              Move your infrastructure to the cloud with zero downtime and
              maximum efficiency
            </p>
          </div>

          <div className="migration-content">
            <div className="migration-features">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h3>Zero Downtime Migration</h3>
                  <p>
                    Advanced migration strategies ensure your business
                    operations continue without interruption.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-text">
                  <h3>Complete Assessment</h3>
                  <p>
                    Thorough analysis of your infrastructure to create the
                    optimal migration roadmap.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <div className="feature-text">
                  <h3>Data Integrity Guaranteed</h3>
                  <p>
                    Rigorous testing and validation to ensure all data migrates
                    safely and accurately.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <h3>Post-Migration Optimization</h3>
                  <p>
                    Fine-tune performance and optimize costs after migration for
                    maximum ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="migration-image">
              <img src="/images/migration.jpg" alt="cloud migration" />
            </div>
          </div>

          <div className="migration-strategies">
            <h3 className="strategies-title">
              Migration Strategies We Support
            </h3>

            <div className="strategies-grid">
              <div className="strategy-card">
                <div className="strategy-tag">Fast</div>
                <h4>Rehosting (Lift & Shift)</h4>
                <p>
                  Quick migration with minimal changes for rapid cloud adoption.
                </p>
              </div>

              <div className="strategy-card">
                <div className="strategy-tag">Balanced</div>
                <h4>Replatforming</h4>
                <p>Optimize applications using cloud-managed services.</p>
              </div>

              <div className="strategy-card">
                <div className="strategy-tag">Advanced</div>
                <h4>Refactoring</h4>
                <p>
                  Redesign applications to be cloud-native for maximum benefits.
                </p>
              </div>

              <div className="strategy-card">
                <div className="strategy-tag">Flexible</div>
                <h4>Hybrid Approach</h4>
                <p>Combine strategies based on your specific requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title1">Why Choose Our Services?</h2>

          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-number">01</div>
              <h3>Expert Team</h3>
              <p>
                Certified professionals with years of experience in
                cybersecurity and cloud migration.
              </p>
            </div>

            <div className="benefit-box">
              <div className="benefit-number">02</div>
              <h3>Proven Methodology</h3>
              <p>
                Battle-tested processes that ensure successful implementation
                every time.
              </p>
            </div>

            <div className="benefit-box">
              <div className="benefit-number">03</div>
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock monitoring and support to keep your systems
                secure and running.
              </p>
            </div>

            <div className="benefit-box">
              <div className="benefit-number">04</div>
              <h3>Cost Efficiency</h3>
              <p>
                Reduce infrastructure costs by up to 40% while improving
                security and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="combined-cta">
        <h2>Ready to Secure and Modernize Your Infrastructure?</h2>
        <p>
          Let's discuss how we can help protect your business and migrate to the
          cloud seamlessly.
        </p>

        <button onClick={() => setOpen(true)}>Schedule a Consultation</button>
      </section>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CyberAndMigration;