'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalInfo } from '@/lib/data';

// Animated role text with crossfade
function AnimatedRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span
      className="inline-block gradient-text font-bold transition-opacity duration-400"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
    >
      {roles[index]}
    </span>
  );
}

// Floating particle dot
function Particle({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-brand-primary/30 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

const particles = [
  { x: '10%', y: '20%', delay: 0, size: 4 },
  { x: '85%', y: '15%', delay: 1.2, size: 6 },
  { x: '75%', y: '65%', delay: 0.5, size: 4 },
  { x: '15%', y: '70%', delay: 2, size: 5 },
  { x: '50%', y: '85%', delay: 1, size: 3 },
  { x: '90%', y: '45%', delay: 1.8, size: 5 },
  { x: '30%', y: '10%', delay: 0.3, size: 4 },
  { x: '60%', y: '30%', delay: 2.5, size: 3 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-dark-base dark:bg-dark-base bg-light-base"
      style={{ background: 'var(--bg)' }}
      aria-label="Hero section"
    >
      {/* ── Animated gradient orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {/* Primary orb */}
        <motion.div
          className="blob absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-30"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, #8b5cf6 40%, transparent 70%)',
            top: '-15%',
            left: '-10%',
            filter: 'blur(60px)',
          }}
        />
        {/* Secondary orb */}
        <motion.div
          className="blob blob-delay-2 absolute w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-20"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 40%, transparent 70%)',
            bottom: '-20%',
            right: '-10%',
            filter: 'blur(60px)',
          }}
        />
        {/* Tertiary orb */}
        <motion.div
          className="blob blob-delay-4 absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #f43f5e 0%, #ec4899 40%, transparent 70%)',
            top: '40%',
            left: '50%',
            filter: 'blur(70px)',
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-100" />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-brand-primary/10 border border-brand-primary/30
            text-brand-primary-light text-sm font-medium backdrop-blur-sm">
            <Sparkles size={14} className="animate-pulse" />
            Available for opportunities
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="font-black leading-none mb-4">
          <span className="block text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] mb-2">
            Hi, I&apos;m
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl gradient-text-shimmer whitespace-nowrap">
            Arun Prasad
          </span>
        </motion.h1>

        {/* Animated role */}
        <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 h-10 flex items-center justify-center">
          <span className="text-[var(--text-secondary)] mr-2">I&apos;m a</span>
          <AnimatedRole roles={personalInfo.roles} />
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
          <br className="hidden sm:block" />
          <span className="text-[var(--text-muted)] text-sm mt-1 block">
            Based in {personalInfo.location}
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-semibold text-white text-lg
              bg-gradient-to-r from-brand-primary via-brand-purple to-brand-primary
              bg-size-200 hover:bg-pos-100
              shadow-xl shadow-brand-primary/30 transition-all duration-300"
          >
            View My Work
          </motion.button>

          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-semibold text-lg
              border-2 border-brand-primary/50 text-brand-primary-light
              hover:bg-brand-primary/10 hover:border-brand-primary
              transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-16">
          {[
            { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: <Github size={20} />, href: personalInfo.github, label: 'GitHub' },
            { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center
                bg-[var(--bg-card)] border border-[var(--border)]
                text-[var(--text-secondary)] hover:text-brand-primary-light
                hover:border-brand-primary/40 hover:bg-brand-primary/10
                transition-all duration-200 shadow-md"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">Scroll</span>
          <motion.button
            onClick={scrollDown}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center
              text-[var(--text-muted)] hover:text-brand-primary-light hover:border-brand-primary/40
              transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={14} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── Scroll progress bar ── */}
      <ScrollProgress />
    </section>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] z-[9999]
        bg-gradient-to-r from-brand-primary via-brand-purple to-brand-accent"
      style={{ width }}
    />
  );
}
