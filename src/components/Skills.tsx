import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Trophy, Flame, Timer, Compass, ShieldAlert, Award } from 'lucide-react';
import { portfolioData } from '../data/content';
import TiltCard from './TiltCard';

export const Skills: React.FC = () => {
  const { skating } = portfolioData;

  const qualityIcons = [Flame, Zap, Trophy, ShieldAlert, Timer, Compass];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold mb-2"
          >
            Athletic Discipline & High-Performance
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-4"
          >
            National Skater & <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-sky-400 bg-clip-text text-transparent">Endurance Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            {skating.headline}
          </motion.p>
        </div>

        {/* National Record Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <TiltCard maxTilt={4}>
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider font-mono">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    National Benchmark
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    3 Continuous Records Over 3 Consecutive Days
                  </h3>

                  <div className="space-y-3 pt-2">
                    {skating.records.map((rec, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-200 text-sm sm:text-base">
                        <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm italic pt-3 border-t border-slate-800">
                    "{skating.reflection}"
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-amber-500/20 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/20 animate-pulse">
                    <Award className="w-8 h-8 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-3xl font-black font-heading text-white">3 Days</div>
                    <div className="text-xs uppercase tracking-widest text-amber-400 font-mono">Continuous Trial</div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Demonstrating extreme physical conditioning, pacing strategy, and mental grit.
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* 6 Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skating.qualities.map((qual, idx) => {
            const Icon = qualityIcons[idx % qualityIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TiltCard maxTilt={8}>
                  <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-400/30 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-amber-300" />
                      </div>
                      <h4 className="text-lg font-bold font-heading text-white group-hover:text-amber-200 transition-colors mb-2">
                        {qual.name}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {qual.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
