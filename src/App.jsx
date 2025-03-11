import React, { useEffect } from 'react';
import Navbar from './layout/Navbar';
import HeroSection from './components/Home/Hero';
import About from './components/About/About';
import Skills from './components/Skill/Skill';

import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out',
      offset: 100,
      // disable: "mobile",
    });

    const handleScroll = () => {
      AOS.refreshHard(); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[url('./assets/bg/1.jpg')] bg-cover bg-center bg-fixed min-h-screen">
      <Navbar/>
      <HeroSection />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
    </div>

  );
}
