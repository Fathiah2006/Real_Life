import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./CoursesTraining.css";
import ContactModal from "../../../components/layouts/contact modal/ContactModal";

const CoursesTraining = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="courses-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link>{" "}
          &gt; <span className="active">Courses & Training</span>
        </div>

        <h1 className="courses-title">
          Empower Your Team with Expert-Led Training Programs
        </h1>

        <p className="courses-subtitle">
          From beginner bootcamps to advanced certifications, we offer
          comprehensive training programs designed to upskill your team and
          accelerate career growth.
        </p>

        <button className="courses-btn" onClick={() => setOpen(true)}>
          Explore Programs
        </button>
      </section>

      <section className="courses-about container">
        <div className="courses-about-left">
          <img src="/images/ui-ux.avif" alt="Training illustration" />
        </div>

        <div className="courses-about-right">
          <h2>Learn From Industry Experts</h2>
          <p>
            Our training programs are designed and delivered by experienced
            professionals with real-world expertise. We focus on practical,
            hands-on learning that you can apply immediately in your work.
          </p>

          <ul>
            <li>Interactive live sessions and workshops</li>
            <li>Real-world projects and case studies</li>
            <li>Flexible learning schedules (online & in-person)</li>
            <li>Certification upon completion</li>
            <li>Lifetime access to course materials</li>
            <li>Post-training support and mentorship</li>
          </ul>
        </div>
      </section>

      <section className="courses-benefits container">
        <h2 className="section-title">Why Train With Us?</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Expert Instructors</h3>
            <p>
              Learn from industry veterans with years of practical experience in
              their fields.
            </p>
          </div>

          <div className="card">
            <h3>Hands-On Learning</h3>
            <p>
              Work on real projects and build a portfolio that showcases your
              new skills.
            </p>
          </div>

          <div className="card">
            <h3>Career Support</h3>
            <p>
              Get guidance on career development, job placement, and interview
              preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="courses-programs container">
        <h2 className="section-title">Our Training Programs</h2>

        <div className="programs-grid">
          <div className="program-card">
            <div className="program-header">
              <span className="program-badge">Popular</span>
              <h3>Web Development Bootcamp</h3>
              <p className="program-duration">12 Weeks • Full-time/Part-time</p>
            </div>
            <div className="program-body">
              <p>
                Master modern web development with HTML, CSS, JavaScript, React,
                and Node.js.
              </p>
              <ul>
                <li>Frontend & Backend Development</li>
                <li>Database Design & Management</li>
                <li>API Development & Integration</li>
                <li>Deployment & DevOps Basics</li>
              </ul>
              <button className="program-btn" onClick={() => setOpen(true)}>
                Learn More
              </button>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <span className="program-badge featured">Featured</span>
              <h3>Data Science & Analytics</h3>
              <p className="program-duration">16 Weeks • Part-time</p>
            </div>
            <div className="program-body">
              <p>
                Dive into data analysis, machine learning, and visualization
                with Python.
              </p>
              <ul>
                <li>Python for Data Science</li>
                <li>Statistical Analysis & ML Algorithms</li>
                <li>Data Visualization & Storytelling</li>
                <li>Real-world Business Case Studies</li>
              </ul>
              <button className="program-btn" onClick={() => setOpen(true)}>
                Learn More
              </button>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <h3>Mobile App Development</h3>
              <p className="program-duration">10 Weeks • Full-time</p>
            </div>
            <div className="program-body">
              <p>
                Build native and cross-platform mobile apps for iOS and Android.
              </p>
              <ul>
                <li>React Native & Flutter</li>
                <li>Mobile UI/UX Best Practices</li>
                <li>App Store Deployment</li>
                <li>Performance Optimization</li>
              </ul>
              <button className="program-btn" onClick={() => setOpen(true)}>
                Learn More
              </button>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <h3>UI/UX Design Masterclass</h3>
              <p className="program-duration">8 Weeks • Part-time</p>
            </div>
            <div className="program-body">
              <p>
                Create beautiful, user-centered designs that drive engagement
                and conversions.
              </p>
              <ul>
                <li>Design Thinking & Research</li>
                <li>Wireframing & Prototyping</li>
                <li>Figma & Design Tools</li>
                <li>Usability Testing & Iteration</li>
              </ul>
              <button className="program-btn" onClick={() => setOpen(true)}>
                Learn More
              </button>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <h3>Cloud Computing & AWS</h3>
              <p className="program-duration">6 Weeks • Online</p>
            </div>
            <div className="program-body">
              <p>
                Master cloud architecture and earn AWS certification with
                hands-on labs.
              </p>
              <ul>
                <li>AWS Core Services</li>
                <li>Cloud Architecture & Security</li>
                <li>Containerization & Serverless</li>
                <li>AWS Certification Prep</li>
              </ul>
              <button className="program-btn" onClick={() => setOpen(true)}>
                Learn More
              </button>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <h3>Digital Marketing</h3>
              <p className="program-duration">8 Weeks • Online</p>
            </div>
            <div className="program-body">
              <p>
                Learn SEO, social media marketing, content strategy, and
                analytics.
              </p>
              <ul>
                <li>SEO & Content Marketing</li>
                <li>Social Media Strategy</li>
                <li>Google Ads & Analytics</li>
                <li>Email Marketing & Automation</li>
              </ul>
              <button className="program-btn" onClick={() => setOpen(true)}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-corporate container">
        <div className="corporate-content">
          <div className="corporate-left">
            <h2>Corporate Training Solutions</h2>
            <p>
              Upskill your entire team with customized training programs
              designed specifically for your organization's needs.
            </p>
            <ul>
              <li>Customized curriculum for your team</li>
              <li>On-site or remote training options</li>
              <li>Flexible scheduling to minimize disruption</li>
              <li>Progress tracking and reporting</li>
              <li>Discounted group rates</li>
            </ul>
            <button className="corporate-btn" onClick={() => setOpen(true)}>
              Request Corporate Training
            </button>
          </div>
          <div className="corporate-right">
            <img src="/images/mobile.avif" alt="Corporate training" />
          </div>
        </div>
      </section>

      <section className="courses-testimonials">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "The Web Development Bootcamp transformed my career. The
                instructors were knowledgeable and supportive throughout the
                entire journey."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Frontend Developer</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Excellent hands-on training with real-world projects. I landed
                a data analyst role within 2 months of completing the course."
              </p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>Data Analyst</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "The UI/UX program gave me the skills and confidence to
                transition into design. The portfolio projects were invaluable."
              </p>
              <div className="testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>UX Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-process">
        <div className="container">
          <h2 className="section-title">How It Works</h2>

          <div className="process-grid">
            <div className="step">
              <span>01</span>
              <h3>Choose Your Program</h3>
              <p>
                Browse our training programs and select the one that fits your
                career goals.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Enroll & Get Started</h3>
              <p>
                Complete enrollment and receive access to all learning materials
                and resources.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Learn & Build</h3>
              <p>
                Attend live sessions, complete projects, and build your
                professional portfolio.
              </p>
            </div>

            <div className="step">
              <span>04</span>
              <h3>Get Certified</h3>
              <p>
                Earn your certificate and leverage career support to land your
                dream job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-cta">
        <h2>Ready to Transform Your Career?</h2>
        <p>
          Join thousands of students who have successfully upskilled with our
          programs.
        </p>

        <button onClick={() => setOpen(true)}>Enroll Now</button>
      </section>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CoursesTraining;
