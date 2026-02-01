import React from "react";
import "./CustomWebApps.css";

const CustomWebApps = () => {
  return (
    <section className="custom-section">
      <div className="custom-container">
        <h1 className="custom-title">
          Why make custom web apps with{" "}
          <span className="highlight">SumatoSoft?</span>
        </h1>
        <p className="custom-subtext">
          Our team, comprising 70% senior web developers, brings extensive
          experience to businesses on all continents. We select our web
          technology stack with a deep understanding of business needs, focusing
          on scalability and the resources required for maintaining future
          products.
        </p>

        <div className="custom-stats">
          <div className="stat">
            <h3>30% less time to market</h3>
            <p>with custom web development</p>
          </div>
          <div className="stat">
            <h3>25% reduction in project</h3>
            <p>overhead through web consulting</p>
          </div>
          <div className="stat">
            <h3>90% success</h3>
            <p>in reviving stalled projects through rescue missions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomWebApps;
