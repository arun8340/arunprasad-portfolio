'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { playground } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

export default function Playground() {
  return (
    <section
      id="playground"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="Playground section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Playground"
          subtitle="Small personal experiments built for fun."
          tag="Side Projects"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playground.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden border border-[var(--border)]
                bg-[var(--bg-surface)] hover:border-brand-primary/30
                transition-colors duration-300"
            >
              <div className={`h-20 bg-gradient-to-br ${item.gradient}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-brand-primary-light
                    transition-colors pr-2 leading-tight">
                    {item.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-brand-primary-light shrink-0" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-xs font-medium
                      bg-[var(--bg-card)] border border-[var(--border)]
                      text-[var(--text-muted)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
