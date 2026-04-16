import React from 'react';
import FloatingHeader from './components/FloatingHeader';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingHeader />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Stats />
        <Projects />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
