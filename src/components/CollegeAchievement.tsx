import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/content';
import TiltCard from './TiltCard';

export const CollegeAchievement: React.FC = () => {
  const { collegeAchievement } = portfolioData;

  return (
    <section id="college-achievement" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold mb-2"
          >
            Business Acumen & Collegiate Honors
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-4"
          >
            College <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-sky-400 bg-clip-text text-transparent">Achievement</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            {collegeAchievement.title}
          </motion.p>
        </div>

        {/* Main Winner Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard maxTilt={4}>
            <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-amber-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left details */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      1st Place / Winner
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                      Cash Prize: {collegeAchievement.prize}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black font-heading text-white">
                    {collegeAchievement.event}
                  </h3>

                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    {collegeAchievement.description}
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {collegeAchievement.impact}
                  </p>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-xs uppercase tracking-wider font-semibold font-mono text-sky-300 mb-3">
                      Core Demonstrated Competencies
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {collegeAchievement.coreCompetencies.map((comp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Trophy Badge Panel */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/20">
                    <Trophy className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-2xl font-black font-heading text-white">Top Honor</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-amber-400">Marketing & Strategy</div>
                  </div>
                  <div className="w-full pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span>Event:</span>
                      <span className="text-white font-medium">VESTRA</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Reward:</span>
                      <span className="text-emerald-400 font-semibold">{collegeAchievement.prize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Execution:</span>
                      <span className="text-sky-300 font-medium">High-Pressure Decision Making</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CollegeAchievement;
