import React from 'react';

import Hero from './hero/Hero';
import Services from './services/Services';
import Partners from './partners/Partners';
import About from './about1/Home_About';
import TechStack from './teckstack/TechStack';
import AdvancedTech from './advancetech/AdvancedTech';
import WhyVonCross from './whyvoncross/WhyVoncross';
import ValuesSection from './values/ValuesSection';
import LetsStartForm from './form/LetsStartForm';
// import Industry from './industry/Industry'; 
import { Import } from 'lucide-react';
const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      {/* <Industry /> */}
      <TechStack />
      <AdvancedTech />
      <WhyVonCross />
      <ValuesSection />
      <LetsStartForm />
    </>
  );
};

export default Home;
