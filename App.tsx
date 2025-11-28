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
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
      <Hero />
      <Concept />
      <WhyTelegram />
      <AiList />
      <HowItWorks />
      <Curriculum />
      <Pricing />
      <Footer />
      
      {/* Sticky Mobile CTA - Glassmorphism & Slide Up Animation */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-[#0B0F19]/80 backdrop-blur-xl border-t border-white/10 md:hidden z-50 animate-in slide-in-from-bottom-20 duration-700">
        <a 
          href="#pricing"
          className="block w-full py-3.5 bg-brand-accent text-brand-dark font-black text-center text-lg rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 transition-transform"
        >
            Занять место
        </a>
      </div>
    </div>
  );
}

export default App;