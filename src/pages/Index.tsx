
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ShivaPowers from '../components/ShivaPowers';
import Donations from '../components/Donations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Hero />
      <About />
      <ShivaPowers />
      <Donations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
