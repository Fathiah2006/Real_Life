import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import "./Tabs.css";
const tabs = [
  {
    id: "r&d",
    title: "R&D & Analysis",
    icon: <FaSearch />,
    image: "/images/R&D.avif",
    content:
      "We conduct comprehensive research and strategic business analysis to validate your ideas, identify opportunities, and anticipate challenges. By leveraging data-driven insights, we develop clear roadmaps that guide your project from concept to execution, minimizing risks and ensuring alignment with your business objectives.",
  },
  {
    id: "ux-ui",
    title: "UX/UI design",
    icon: <FaPencilRuler />,
    image: "/images/ui-ux.avif",
    content:
      "Our team crafts clean, user-centric designs that not only provide seamless and intuitive user experiences but also strategically align with your business objectives. We combine functionality with aesthetics to ensure every interaction adds value and drives measurable results.",
  },
  {
    id: "web-dev",
    title: "Web development",
    icon: <FaCode />,
    image: "/images/web-dev.avif",
    content:
      "We develop scalable, secure, and modern web applications built on best-in-class technologies and frameworks. Our solutions are designed for high performance, long-term growth, and seamless integration, ensuring your digital platform remains reliable and future-ready.",
  },
  {
    id: "qa",
    title: "QA & Testing",
    icon: <FaCheckCircle />,
    image: "/images/Qa&Testing.jpg",
    content:
      "Our rigorous QA process ensures your product is stable, reliable, and delivers a seamless user experience across all platforms and devices. We follow industry best practices, conduct thorough testing at every stage, and address potential issues early to guarantee top-notch performance and quality.",
  },
  {
    id: "staff",
    title: "Staff augmentation",
    icon: <FaUsers />,
    image: "/images/sel.avif",
    content:
      "Scale your team effortlessly with our experienced specialists who integrate seamlessly into your existing workflow. We provide the right talent to strengthen your capabilities, accelerate delivery, and maintain operational efficiency without disrupting your processes",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState("r&d");
  const activeTab = tabs.find((tab) => tab.id === active);

  return (
    <div className="services-tabs-section">
      <h2 className="services-heading">
        Custom web application development <span>services</span>
      </h2>

      {/* Top Tabs */}
      <div className="services-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`tab-button ${active === tab.id ? "active" : ""}`}
          >
            <div className="tab-icon">{tab.icon}</div>
            <div className="tab-title">{tab.title}</div>
            {active === tab.id && <div className="tab-marker"></div>}
          </button>
        ))}
      </div>

      {/* Content area: Image Left - Text Right */}
      <div className="tab-content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
            className="tab-content"
          >
            <div className="tab-text">
              <h3>{activeTab.title}</h3>
              <p>{activeTab.content}</p>
            </div>
            <div className="tab-image">
              <img src={activeTab.image} alt={activeTab.title} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
