import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Award, Send } from 'lucide-react';
import { portfolioData } from '../data/content';

// Lazy load 3D Canvas for performance and Lighthouse optimization
const HeroScene3D = lazy(() => import('./HeroScene3D'));

interface HeroProps {
  reducedMotion?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ reducedMotion }) => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* 3D Background with Light Fallback */}
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/20 via-slate-950 to-[#030712] pointer-events-none" />
        }
      >
        <HeroScene3D reducedMotion={reducedMotion} />
      </Suspense>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-sky-400/20 text-xs sm:text-sm font-medium text-sky-300 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Diplomacy • Strategic Marketing • Endurance Athletics</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight text-white mb-6"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 bg-clip-text mb-6 tracking-wide"
        >
          {personal.tagline}
        </motion.p>

        {/* Sub-tagline description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-10"
        >
          {personal.subTagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#mun-journey"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-heading font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 hover:from-sky-300 hover:to-cyan-200 transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5"
          >
            <Award className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>View Achievements</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-heading font-semibold text-sm text-slate-200 glass-panel border border-slate-700/80 hover:border-sky-400/40 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-slate-800/60"
          >
            <Send className="w-4 h-4 text-sky-400" />
            <span>Contact Krish</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-sky-300 transition-colors"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
