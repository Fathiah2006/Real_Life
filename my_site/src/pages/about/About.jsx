import React from 'react'
import AboutHero from './abouthero/AboutHero'
import AboutPartners from './aboutpatners/AboutPartners'
import AboutWho from './aboutwho/AboutWho'
import TeamSection from './managementTeam/TeamSection'
import WorkSection from './workSection/WorkSection'
import ValuesSection from './Values/ValuesSection'
import LetsStartForm from '../home/form/LetsStartForm'
import VideoSection from './videoSection/VideoSection'


const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutPartners />
      <AboutWho />
      <TeamSection />
      <WorkSection />
      <VideoSection />
      <ValuesSection />
      <LetsStartForm />
    </div>
  );
}

export default About
