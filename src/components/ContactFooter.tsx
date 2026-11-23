import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/content';
import TiltCard from './TiltCard';

// SVG Icons for GitHub, LinkedIn, Instagram
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.54a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const ContactFooter: React.FC = () => {
  const { socials, personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialButtons = [
    {
      name: 'GitHub',
      handle: '@ktom07',
      url: socials.github,
      icon: GithubIcon,
      color: 'hover:text-white hover:border-slate-400'
    },
    {
      name: 'LinkedIn',
      handle: 'Connect on LinkedIn',
      url: socials.linkedin,
      icon: LinkedinIcon,
      color: 'hover:text-sky-400 hover:border-sky-400/50'
    },
    {
      name: 'Instagram',
      handle: 'Follow on Instagram',
      url: socials.instagram,
      icon: InstagramIcon,
      color: 'hover:text-pink-400 hover:border-pink-400/50'
    },
    {
      name: 'Direct Email',
      handle: socials.email,
      url: `mailto:${socials.email}`,
      icon: Mail,
      color: 'hover:text-amber-400 hover:border-amber-400/50'
    }
  ];

  return (
    <footer id="contact" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-sky-400/20 text-xs font-mono font-medium text-sky-300 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Connect & Collaborate
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight mb-4"
          >
            Let's Build the <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Open to diplomatic delegations, collegiate leadership initiatives, marketing advisory, and high-impact collaborative ventures.
          </motion.p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {socialButtons.map((soc, idx) => {
            const Icon = soc.icon;
            return (
              <motion.a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="block"
              >
                <TiltCard maxTilt={8}>
                  <div className={`p-6 rounded-2xl glass-panel border border-slate-800 transition-all duration-300 h-full flex flex-col justify-between group ${soc.color}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Send className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-heading text-white mb-1">
                        {soc.name}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">
                        {soc.handle}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">{personal.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-500">Designed with 3D & Precision</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
