import React from "react";
import "./ValuesSection.css";
import { FaCheck } from "react-icons/fa";
import valuesImg from "/images/lena.jpg"; // replace with your image path

const ValuesSection = () => {
  const values = [
    {
      title: "Sustainability commitment.",
      text: "SumatoSoft integrates eco-friendly practices into software development, aligning with environmental responsibility.",
    },
    {
      title: "Client-centric approach.",
      text: "We prioritize long-term partnerships and align our solutions with Clients’ business goals.",
    },
    {
      title: "Agility and adaptability.",
      text: "SumatoSoft’s agile processes ensure swift adaptation to changing Client needs and market demands.",
    },
    {
      title: "Integrity and transparency.",
      text: "We foster trust through honest communication, ethical practices, and transparent interactions.",
    },
    {
      title: "Security and confidentiality.",
      text: "Stringent data protection measures safeguard Client information, ensuring security and peace of mind.",
    },
    {
      title: "Cultural sensitivity.",
      text: "We respect and incorporate the cultural diversity of our clients, ensuring globally applicable and culturally aware solutions.",
    },
  ];

  return (
    <section className="values-section">
      <h2 className="values-heading">
        Our <span>Values</span>
      </h2>

      <div className="values-container">
        <div className="values-list">
          {values.map((item, index) => (
            <div key={index} className="value-item">
              {/* <FaCheck className="check-icon" /> */}
              <p>
                <strong>{item.title}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="values-image">
          <img src={valuesImg} alt="Team discussion" />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
