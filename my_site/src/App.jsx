import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../Scrolltotop';
import Home from './pages/home/Home';
import './App.css'; // Assuming you have some global styles
import Navbar from './components/layouts/navbar/Navbar';
import Footer from './components/layouts/footer/Footer';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Web_Development from './pages/services/web-development/Web_Development';
import CloudSolution from './pages/services/cloud-solution/CloudSolution';
import CyberAndMigration from './pages/services/Cybersecurity/CyberAndMigration';
import AiAndMachine from './pages/services/aiandmachine learning/Ai_and_Machine';
import SoftwareDevelopment from './pages/services/software-dev/SoftwareDevelopment';
import CoursesTraining from './pages/services/courses-training/CoursesTraining';
import Blog from './pages/insight/blog/Blog';// import Testimonials from './pages/testimonials/Testimonials'; // Importing the Navbar component


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<Web_Development />} />
          <Route path="/services/cloud-solution" element={<CloudSolution />} />
          <Route path="/services/cybersecurity-cloud-migration" element={<CyberAndMigration />} />
          <Route path="/services/ai-and-machine-learning" element={<AiAndMachine />} />   
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/courses-training" element={<CoursesTraining />} /> 
          <Route path="/blog" element={<Blog />} />               
          {/* <Route path="/testimonials" element={<Testimonials />} />  */}
          
          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App