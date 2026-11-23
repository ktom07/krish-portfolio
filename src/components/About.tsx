import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, ShieldCheck, Compass } from 'lucide-react';
import { portfolioData } from '../data/content';
import TiltCard from './TiltCard';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      title: 'Geopolitical & Debate Acumen',
      desc: 'Extensive circuit experience participating in 30+ Model UN conferences.',
      icon: Compass,
      color: 'from-sky-500/20 to-sky-500/5',
      borderColor: 'border-sky-500/30'
    },
    {
      title: 'National Endurance Mindset',
      desc: '3 continuous skating endurance records spanning 3 consecutive days.',
      icon: ShieldCheck,
      color: 'from-amber-500/20 to-amber-500/5',
      borderColor: 'border-amber-500/30'
    },
    {
      title: 'Strategic & Marketing Instinct',
      desc: '1st place victor at VESTRA – The Last Market collegiate business challenge.',
      icon: UserCheck,
      color: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'border-cyan-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-sky-400 font-semibold mb-2"
          >
            Profile & Philosophy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight"
          >
            About <span className="bg-gradient-to-r from-sky-400 to-amber-300 bg-clip-text text-transparent">Krish Tomar</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-5 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {personal.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-sky-300 font-mono mb-4">
                  Core Attributes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personal.about.traits.map((trait, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <TiltCard key={idx} maxTilt={6}>
                  <div className={`p-6 rounded-2xl glass-panel border ${item.borderColor} bg-gradient-to-br ${item.color} relative group`}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-slate-900/90 text-sky-400 border border-slate-700/60 shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-sky-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-heading text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
