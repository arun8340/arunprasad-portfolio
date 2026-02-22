'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'py-3 backdrop-blur-xl bg-[var(--bg-surface)]/80 border-b border-[var(--border)]/50 shadow-xl shadow-black/10'
            : 'py-5 bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-purple
              flex items-center justify-center text-white font-bold text-sm
              shadow-lg shadow-brand-primary/40 group-hover:shadow-brand-primary/60 transition-shadow">
              AP
            </div>
            <span className="font-bold text-lg text-[var(--text-primary)] hidden sm:block">
              Arun<span className="text-brand-primary-light">.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${activeSection === href
                      ? 'text-brand-primary-light'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                >
                  {activeSection === href && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-lg bg-brand-primary/10 border border-brand-primary/20"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center
                bg-[var(--bg-card)] border border-[var(--border)]
                text-[var(--text-secondary)] hover:text-brand-primary-light
                hover:border-brand-primary/40 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA - desktop */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-brand-primary to-brand-purple text-white
                shadow-md shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-shadow"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileOpen((p) => !p)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                bg-[var(--bg-card)] border border-[var(--border)]
                text-[var(--text-secondary)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72
                bg-[var(--bg-surface)] border-l border-[var(--border)]
                flex flex-col p-6 pt-20"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNav(href)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all
                        ${activeSection === href
                          ? 'bg-brand-primary/10 text-brand-primary-light border border-brand-primary/20'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]'
                        }`}
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                  className="block w-full text-center px-4 py-3 rounded-xl font-semibold
                    bg-gradient-to-r from-brand-primary to-brand-purple text-white"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
