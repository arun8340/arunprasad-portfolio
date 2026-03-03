'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
      aria-label="Experience section"
    >
      {/* Decorative blob */}
      <div className="absolute top-1/3 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(70px)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey — from quality assurance to full-stack development over 5+ years."
          tag="Career Path"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px
            bg-gradient-to-b from-brand-primary via-brand-purple to-brand-accent
            opacity-40" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 sm:pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                  className={`absolute left-0 sm:left-4 w-8 h-8 sm:w-9 sm:h-9 rounded-xl
                    flex items-center justify-center
                    ${exp.isCurrent
                      ? 'bg-gradient-to-br from-brand-primary to-brand-purple shadow-lg shadow-brand-primary/40 animate-pulse-glow'
                      : 'bg-[var(--bg-card)] border-2 border-brand-primary/40'
                    }`}
                >
                  <Briefcase
                    size={exp.isCurrent ? 16 : 14}
                    className={exp.isCurrent ? 'text-white' : 'text-brand-primary-light'}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(99,102,241,0.1)' }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-8 rounded-2xl border border-[var(--border)]
                    bg-[var(--bg-surface)] hover:border-brand-primary/30
                    transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                            bg-emerald-500/10 border border-emerald-500/30 text-emerald-400
                            text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-brand-primary-light font-semibold mt-1">
                        {exp.company}
                      </p>
                      {exp.companyNote && (
                        <p className="text-xs text-[var(--text-muted)] mt-0.5 italic">
                          {exp.companyNote}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                      <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                        <Calendar size={13} className="text-brand-primary-light" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                        <MapPin size={13} className="text-brand-accent" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-brand-primary/20 to-transparent mb-4" />

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((point, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + pi * 0.04 }}
                        className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-brand-primary-light shrink-0 mt-0.5"
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium
                          bg-brand-primary/10 text-brand-primary-light
                          border border-brand-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
