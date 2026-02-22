'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="Skills section"
    >
      {/* Background blob */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A broad toolkit built over 4+ years of hands-on development across mobile, web, and backend domains."
          tag="What I Know"
        />

        {/* Category filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeCategory === null
                ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/40'
                : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-brand-primary/30'
              }`}
          >
            All
          </button>
          {skillCategories.map(({ category }) => (
            <button
              key={category}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === category
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/40'
                  : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-brand-primary/30'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {skillCategories
              .filter((cat) => activeCategory === null || cat.category === activeCategory)
              .map((cat, i) => (
                <motion.div
                  key={cat.category}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-5 rounded-2xl border border-[var(--border)]
                    bg-[var(--bg-surface)] hover:border-brand-primary/30
                    hover:shadow-xl hover:shadow-brand-primary/10
                    transition-all duration-300 cursor-default"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                      bg-gradient-to-br ${cat.colorClass} bg-opacity-10 shadow-sm`}
                      style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.1))` }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[var(--text-primary)]">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        {cat.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + si * 0.04 }}
                        whileHover={{ scale: 1.08 }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium
                          ${cat.bgClass} ${cat.textClass}
                          border border-current/20 cursor-default select-none`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Gradient bar at bottom */}
                  <div className={`mt-4 h-0.5 w-0 group-hover:w-full rounded-full
                    bg-gradient-to-r ${cat.colorClass}
                    transition-all duration-500`}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* All skills as a flat tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl border border-[var(--border)]
            bg-[var(--bg-surface)]"
        >
          <h3 className="text-center text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-6">
            Full Tech Stack at a Glance
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((c) => c.skills).map((skill, i) => (
              <motion.span
                key={`${skill}-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-default select-none
                  bg-[var(--bg-card)] border border-[var(--border)]
                  text-[var(--text-secondary)] hover:text-brand-primary-light
                  hover:border-brand-primary/30 hover:bg-brand-primary/5
                  transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
