'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo, navLinks } from '@/lib/data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative border-t border-[var(--border)] overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px
        bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-purple
                flex items-center justify-center text-white font-bold text-sm">
                AP
              </div>
              <span className="font-bold text-xl text-[var(--text-primary)]">
                Arun<span className="text-brand-primary-light">.</span>
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-2">
              {[
                { icon: <Linkedin size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <Github size={16} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center
                    bg-[var(--bg-surface)] border border-[var(--border)]
                    text-[var(--text-muted)] hover:text-brand-primary-light
                    hover:border-brand-primary/30 transition-all duration-200"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-[var(--text-secondary)] hover:text-brand-primary-light
                      transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-4 h-px bg-brand-primary/0 group-hover:bg-brand-primary/60
                      transition-all duration-200 group-hover:w-5" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <a href={`mailto:${personalInfo.email}`}
                className="block hover:text-brand-primary-light transition-colors">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`}
                className="block hover:text-brand-primary-light transition-colors">
                {personalInfo.phone}
              </a>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border)] mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)] flex items-center gap-1.5 flex-wrap justify-center">
            Made with{' '}
            <Heart size={13} className="text-rose-400 fill-rose-400 animate-pulse" />
            {' '}in Visakhapatnam by{' '}
            <span className="text-brand-primary-light font-medium">Arun Prasad</span>
            {' '}· © {new Date().getFullYear()}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm text-[var(--text-muted)]
              hover:text-brand-primary-light transition-colors"
            aria-label="Scroll to top"
          >
            Back to top
            <div className="w-7 h-7 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)]
              flex items-center justify-center hover:border-brand-primary/40 transition-colors">
              <ArrowUp size={13} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
