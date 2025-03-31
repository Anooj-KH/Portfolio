import React, { useEffect, useState } from 'react';
import Navbar from './layout/Navbar';
import HeroSection from './components/Home/Hero';
import About from './components/About/About';
import Skills from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Loader from './components/loading'; 

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out',
      offset: 100,
    });

    const handleScroll = () => {
      AOS.refreshHard();
    };

    window.addEventListener('scroll', handleScroll);

    const timeout = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout); 
    };
  }, []);

  return (
    <div className="bg-[url('./assets/bg/1.jpg')] bg-cover bg-center bg-fixed min-h-screen overflow-y-scroll scrollbar-hide">
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Project />
          <Contact />
        </>
      )}
    </div>
  );
}
