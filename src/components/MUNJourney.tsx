import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Shield, FileText, CheckCircle2, Quote, Star, Sparkles, Building2 } from 'lucide-react';
import { portfolioData } from '../data/content';
import AnimatedCounter from './AnimatedCounter';
import TiltCard from './TiltCard';

export const MUNJourney: React.FC = () => {
  const { mun } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'Best Delegate' | 'Best Parliamentarian' | 'High Commendation'>('all');

  const filteredAwards = filter === 'all'
    ? mun.awards
    : mun.awards.filter(a => a.award === filter);

  return (
    <section id="mun-journey" className="py-24 relative overflow-hidden bg-slate-950/70">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-sky-400 font-semibold mb-2"
          >
            The Centerpiece Portfolio Section
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight mb-4"
          >
            My <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">MUN Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            {mun.headline}
          </motion.p>
        </div>

        {/* Animated Counter Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {mun.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={5}>
                <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden group hover:border-sky-400/40 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />
                  <div className="text-3xl sm:text-5xl font-black font-heading text-transparent bg-gradient-to-r from-sky-300 via-white to-amber-300 bg-clip-text mb-2">
                    <AnimatedCounter
                      to={stat.value}
                      suffix={stat.suffix || ''}
                      duration={2.2}
                    />
                  </div>
                  <div className="text-sm font-semibold font-heading text-white mb-1">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-xs text-slate-400">
                      {stat.description}
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Committees Represented & Diplomatic Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Committees */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-panel p-7 sm:p-8 rounded-3xl border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Committees Represented</h3>
                <span className="text-xs text-slate-400">High-level national & international assemblies</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {mun.committees.map((com, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/90 text-sky-200 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-800/80 transition-all flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-sky-400" />
                  {com}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills Built */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-panel p-7 sm:p-8 rounded-3xl border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Skills Built Through Diplomacy</h3>
                <span className="text-xs text-slate-400">Synthesized through 30+ parliamentary simulations</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mun.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Secretariat & Leadership Spotlight (OSIRIS MUN) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <TiltCard maxTilt={3}>
            <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-amber-950/30 border border-sky-400/30 glass-panel-glow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-mono font-semibold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5 text-sky-400" />
                    Executive Leadership
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {mun.leadership.role} — {mun.leadership.conference}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                    {mun.leadership.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center p-5 rounded-2xl bg-slate-950/90 border border-slate-700/80 text-center">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Transition</span>
                    <div className="text-base font-bold font-heading text-amber-300">Delegate → Mentor</div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Awards Grid with Filter */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">Awards & Recognitions</h3>
              <p className="text-xs text-slate-400">Decorated circuit portfolio across premier institutions</p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'Best Delegate', 'Best Parliamentarian', 'High Commendation'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filter === cat
                      ? 'bg-sky-400 text-slate-950 font-bold shadow-md shadow-sky-400/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat === 'all' ? 'All Accolades' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAwards.map((item, idx) => {
              const isBestDel = item.award === 'Best Delegate';
              const isBestParl = item.award === 'Best Parliamentarian';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <TiltCard maxTilt={6}>
                    <div
                      className={`p-6 rounded-2xl glass-panel border transition-all duration-300 h-full flex flex-col justify-between ${
                        isBestDel
                          ? 'border-amber-400/40 bg-gradient-to-br from-amber-500/10 via-slate-900/60 to-slate-900/90 shadow-[0_4px_25px_rgba(251,191,36,0.1)]'
                          : isBestParl
                          ? 'border-sky-400/40 bg-gradient-to-br from-sky-500/10 via-slate-900/60 to-slate-900/90 shadow-[0_4px_25px_rgba(56,189,248,0.1)]'
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-heading ${
                              isBestDel
                                ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                                : isBestParl
                                ? 'bg-sky-400/20 text-sky-300 border border-sky-400/40'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            <Award className="w-3.5 h-3.5" />
                            {item.award}
                          </span>
                          {item.year && (
                            <span className="text-xs font-mono font-medium text-slate-400">
                              {item.year}
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg font-bold font-heading text-white mb-1">
                          {item.conference}
                        </h4>

                        {item.committee && (
                          <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
                            <FileText className="w-3 h-3 text-slate-500" />
                            {item.committee}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>Circuit Achievement</span>
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/40" />
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Reflection & Philosophy Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden"
        >
          <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-800/40 pointer-events-none" />
          
          <div className="max-w-4xl space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider text-sky-400 font-semibold">
              The Diplomatic Philosophy
            </div>
            <p className="text-xl sm:text-2xl font-serif italic text-slate-100 leading-relaxed">
              "{mun.reflection.quote}"
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
              {mun.reflection.philosophy}
            </p>
            <div className="pt-4 border-t border-slate-800">
              <span className="text-sm font-semibold font-heading text-amber-300">
                "{mun.reflection.closing}"
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MUNJourney;
