import React, { useEffect, useState } from 'react';
import './AboutHero.css';
import { FaPlus, FaPercent } from 'react-icons/fa';

const stats = [
  { label: 'Satisfaction rate', value: 98, icon: <FaPercent /> },
  { label: 'Successful projects', value: 250, icon: <FaPlus /> },
  { label: 'Countries', value: 25, icon: <FaPlus />            },
  { label: 'Senior specialists', value: 70, icon: <FaPercent /> },
  { label: 'Сlient engagement', value: 3, icon: <FaPlus />},
  { label: 'Years on the market', value: 7, icon: <FaPlus /> },
];

const AboutHero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, index) =>
          count < stats[index].value ? count + 1 : count
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-hero">
      <div className="about-hero-container">
        <div className="about-intro">
          <h2>About VonCross</h2>
          <p>We are a leading software development company.</p>
        </div>

        <div className="stats-wrapper">
          {stats.map((item, index) => (
            <div className="stat-box" key={index}>
              <h2>
                {counts[index]} <span className="icon">{item.icon}</span>
              </h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
