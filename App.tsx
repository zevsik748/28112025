import React from 'react';
import Hero from './components/Hero';
import Concept from './components/Concept';
import HowItWorks from './components/HowItWorks';
import WhyTelegram from './components/WhyTelegram';
import AiList from './components/AiList';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Hero />
      <Concept />
      <WhyTelegram />
      <AiList />
      <HowItWorks />
      <Curriculum />
      <Pricing />
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 md:hidden z-50">
        <a 
          href="#pricing"
          className="block w-full py-3 bg-brand-accent text-brand-dark font-bold text-center rounded-lg shadow-lg"
        >
            Занять место
        </a>
      </div>
    </div>
  );
}

export default App;