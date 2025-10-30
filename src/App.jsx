import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MethodSection from './components/MethodSection';
import FunnelSection from './components/FunnelSection';
import StepsSection from './components/StepsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-300 antialiased">
      <Header />
      <main>
        <Hero />
        <MethodSection />
        <FunnelSection />
        <StepsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

