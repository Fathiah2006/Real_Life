import React from 'react';

import Hero from './hero/Hero';
import Services from './services/Services';
import About from './about/about';
import Partners from './partners/Partners';
import TechStack from './teckstack/TechStack';
import Industry from './industry/industry';
import AdvancedTech from './advancetech/AdvancedTech';
import WhyVonCross from './whyvoncross/WhyVoncross';
import ValuesSection from './values/ValuesSection';
import LetsStartForm from './form/LetsStartForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <TechStack />
      <Industry />
      <AdvancedTech />
      <WhyVonCross />
      <ValuesSection />
      <LetsStartForm />
    </>
  );
};

export default Home;
