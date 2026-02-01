import React from "react";
import "./WorkSection.css"; // import the css file
import { FaShieldAlt, FaSearch, FaUsers } from "react-icons/fa";

const WorkSection = () => {
  return (
    <section className="work-section">
      <h2 className="work-heading">
        The way <span>we work</span>
      </h2>

      <div className="work-grid">
        <div className="work-card">
          <FaShieldAlt className="work-icon" />
          <h3>Secure and quality</h3>
          <p>
            Our senior developers and CTO always participate in the Code Review
            process regardless of the project size to ensure code quality.
          </p>
        </div>

        <div className="work-card">
          <FaSearch className="work-icon" />
          <h3>Full transparency</h3>
          <p>
            We use Jira and Confluence as the main project management systems,
            allowing our Clients to track the development online in real-time,
            24/7, without any hidden work and payments.
          </p>
        </div>

        <div className="work-card">
          <FaUsers className="work-icon" />
          <h3>Easy communication and personal assistance</h3>
          <p>
            Constant contact with project managers and full transparency help to
            quickly resolve emerging issues and make decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
