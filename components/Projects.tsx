'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowUpRight, Info } from 'lucide-react';
import { projects } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

type Project = typeof projects[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal panel */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden
          bg-[var(--bg-surface)] border border-[var(--border)]
          shadow-2xl shadow-black/40"
      >
        {/* Gradient header */}
        <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black text-white/10 select-none">{project.category}</span>
          </div>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm
              text-white text-xs font-medium border border-white/20">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm
              flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-[var(--text-primary)] pr-4">
              {project.title}
            </h3>
            {project.isPlaceholder && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-lg
                bg-amber-500/10 border border-amber-500/30 text-amber-400
                text-xs font-medium shrink-0">
                <Info size={11} />
                Placeholder
              </span>
            )}
          </div>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
            {project.longDescription}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-medium
                  bg-brand-primary/10 text-brand-primary-light border border-brand-primary/20">
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl
                font-semibold text-sm text-white
                bg-gradient-to-r from-brand-primary to-brand-purple
                hover:opacity-90 transition-opacity">
              <ExternalLink size={15} />
              Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl
                font-semibold text-sm border border-[var(--border)]
                text-[var(--text-secondary)] hover:border-brand-primary/40
                hover:text-brand-primary-light transition-all">
              <Github size={15} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden border border-[var(--border)]
        bg-[var(--bg-surface)] hover:border-brand-primary/30
        hover:shadow-2xl hover:shadow-brand-primary/15
        transition-all duration-300 cursor-pointer"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} details`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Gradient header */}
      <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        {/* Sheen effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-transform duration-700 skew-x-12" />

        <div className="absolute inset-0 flex items-end p-4 bg-black/20">
          <div className="flex items-center gap-2 flex-wrap">
            {project.featured && (
              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm
                text-white text-[10px] font-semibold border border-white/20 uppercase tracking-wide">
                Featured
              </span>
            )}
            {project.isPlaceholder && (
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20
                text-amber-200 text-[10px] font-semibold border border-amber-400/30">
                Placeholder
              </span>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur-sm
            text-white text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-brand-primary-light
            transition-colors pr-2 leading-tight">
            {project.title}
          </h3>
          <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-brand-primary-light
            shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md text-xs font-medium
              bg-[var(--bg-card)] border border-[var(--border)]
              text-[var(--text-muted)]">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium
              bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom action row */}
      <div className="px-5 py-3 border-t border-[var(--border)]
        flex items-center justify-between">
        <span className="text-xs text-[var(--text-muted)]">Click to view details</span>
        <div className="flex gap-2">
          <span aria-label="External link" className="text-[var(--text-muted)] hover:text-brand-primary-light
            transition-colors">
            <ExternalLink size={14} />
          </span>
          <span aria-label="GitHub" className="text-[var(--text-muted)] hover:text-brand-primary-light
            transition-colors">
            <Github size={14} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="Projects section"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of work — personal experiments, freelance builds, and professional highlights."
          tag="Portfolio"
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${filter === cat
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/40'
                  : 'bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-brand-primary/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Placeholder note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-[var(--text-muted)]"
        >
          <Info size={13} className="inline mr-1 text-amber-400" />
          Projects marked &quot;Placeholder&quot; are representative of professional work. Live links are placeholders — update them in{' '}
          <code className="text-brand-primary-light text-xs">lib/data.ts</code>.
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
