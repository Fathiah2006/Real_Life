import React from 'react';
import './Web_Development.css';
import HeroSection from './herosection/HeroSection';
import AboutPartners from '../../about/aboutpatners/AboutPartners';
import CustomWebApps from './customwebapp/CustomWebApps';
import ConsultationBanner from './consultation/ConsultationBanner';
import Tabs from './tab/Tabs';
const Web_Development = () => {
  return (
    <div>
      <HeroSection />
      <AboutPartners />
      <CustomWebApps />
      <Tabs />
      <ConsultationBanner />
    </div>
  );
}

export default Web_Development
