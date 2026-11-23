import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Cpu, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/content';
import TiltCard from './TiltCard';

export const Academics: React.FC = () => {
  const { academic } = portfolioData;

  const getIcon = (category: string) => {
    switch (category) {
      case 'Academic':
        return GraduationCap;
      case 'Leadership':
        return Users;
      case 'Technology':
        return Cpu;
      default:
        return Award;
    }
  };

  return (
    <section id="academics" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold mb-2"
          >
            Intellectual Rigor & Student Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-4"
          >
            Academic <span className="bg-gradient-to-r from-amber-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Achievement</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            {academic.summary}
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {academic.achievements.map((item, index) => {
            const Icon = getIcon(item.category);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard maxTilt={6}>
                  <div className="glass-panel p-7 rounded-3xl border border-slate-800/80 hover:border-sky-500/30 transition-all duration-300 relative group h-full flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-sky-950/60 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-400 transition-all">
                            <Icon className="w-6 h-6 text-sky-300" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
                              {item.category}
                            </span>
                            {item.organization && (
                              <div className="text-xs text-sky-400 font-medium">
                                {item.organization}
                              </div>
                            )}
                          </div>
                        </div>

                        {item.badge && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Main Title & Highlight */}
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-sky-200 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-300 font-semibold text-sm mb-4">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        {item.highlight}
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.details}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Leadership & Excellence</span>
                      <span className="text-sky-400 group-hover:translate-x-1 transition-transform">Verified →</span>
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

export default Academics;
