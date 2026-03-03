'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Download, Briefcase, GraduationCap, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo, stats, education, certifications } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
      aria-label="About section"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 dark:opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer who loves turning complex problems into elegant digital solutions."
          tag="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* ── Left — Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar placeholder */}
            <div className="relative group">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden relative
                border border-brand-primary/20 shadow-2xl shadow-brand-primary/20">
                {/* Profile photo */}
                <Image
                  src="/avatar.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0
                  group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-[var(--bg-surface)] border border-[var(--border)]
                  rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-[var(--text-primary)]">Available</span>
              </motion.div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <MapPin size={16} className="text-brand-primary-light" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Linkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
                { icon: <Github size={18} />, href: personalInfo.github, label: 'GitHub', color: 'hover:text-white' },
                { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-rose-400' },
              ].map(({ icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center
                    bg-[var(--bg-card)] border border-[var(--border)]
                    text-[var(--text-secondary)] ${color}
                    hover:border-brand-primary/40 transition-all duration-200`}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            {/* Download resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm
                bg-gradient-to-r from-brand-primary to-brand-purple
                shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50
                transition-shadow duration-300"
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* ── Right — Bio & details ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Summary */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Building with passion, delivering with precision
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl text-center
                    bg-[var(--bg-card)] border border-[var(--border)]
                    hover:border-brand-primary/30 transition-colors"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education highlights */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--text-primary)] mb-3">
                <GraduationCap size={18} className="text-brand-primary-light" />
                Education
              </h4>
              <div className="space-y-2">
                {education.slice(0, 2).map((edu) => (
                  <div key={edu.degree}
                    className="flex items-center justify-between p-3 rounded-xl
                      bg-[var(--bg-card)] border border-[var(--border)]">
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">{edu.degree}</p>
                      <p className="text-xs text-[var(--text-muted)]">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-brand-primary-light font-medium bg-brand-primary/10
                      border border-brand-primary/20 px-2 py-1 rounded-lg">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--text-primary)] mb-3">
                <Briefcase size={18} className="text-brand-accent" />
                Certifications
              </h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <div key={cert.title}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                      bg-gradient-to-r ${cert.color} bg-opacity-10 text-white
                      border border-white/10`}
                    style={{
                      background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.15))`,
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                  >
                    <span>{cert.icon}</span>
                    <div>
                      <p className="text-[var(--text-primary)] font-semibold text-xs">{cert.title}</p>
                      <p className="text-[var(--text-muted)] text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
