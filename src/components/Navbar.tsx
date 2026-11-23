import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Award, Globe, BookOpen, Activity, Mail } from 'lucide-react';

interface NavbarProps {
  name: string;
}

export const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', icon: BookOpen },
    { label: 'Academics', href: '#academics', icon: Award },
    { label: 'Skills & Athletics', href: '#skills', icon: Activity },
    { label: 'MUN Journey', href: '#mun-journey', icon: Globe },
    { label: 'College Honors', href: '#college-achievement', icon: Award },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-amber-400 origin-left z-50 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Branding */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-lg font-bold font-heading tracking-wider text-white"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-amber-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              KT
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              {name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-heading tracking-wide shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pt-3 pb-6 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-sky-400" />
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-heading"
              >
                Contact Krish
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Navbar;
