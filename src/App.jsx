import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MethodSection from './components/MethodSection';
import FunnelSection from './components/FunnelSection';
import StepsSection from './components/StepsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const link = e.target.closest('a');

      if (!link || !link.href) return;

      if (link.href.includes('#') && !link.href.endsWith('#')) {
        e.preventDefault();

        const id = link.hash;
        const targetElement = document.querySelector(id);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

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