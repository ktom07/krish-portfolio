import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Skills from './components/Skills';
import MUNJourney from './components/MUNJourney';
import CollegeAchievement from './components/CollegeAchievement';
import ContactFooter from './components/ContactFooter';
import { portfolioData } from './data/content';

export function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the user has prefers-reduced-motion set
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar name={portfolioData.personal.name} />

      {/* Main Flow: Ordered Sections */}
      <main>
        {/* 1. Hero */}
        <Hero reducedMotion={reducedMotion} />

        {/* 2. About */}
        <About />

        {/* 3. Academic Achievement */}
        <Academics />

        {/* 4. Skills (Skating) */}
        <Skills />

        {/* 5. My MUN Journey (The Centerpiece) */}
        <MUNJourney />

        {/* 6. College Achievement */}
        <CollegeAchievement />
      </main>

      {/* 7. Contact / Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;
