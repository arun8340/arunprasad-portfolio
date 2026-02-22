'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tag?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  tag,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-brand-primary/10 border border-brand-primary/20
            text-brand-primary-light text-sm font-medium mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
      >
        {title.split(' ').map((word, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="gradient-text"> {word}</span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent
          ${align === 'center' ? 'mx-auto' : ''}`}
        style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
      />
    </div>
  );
}
