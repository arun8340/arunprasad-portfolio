'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Linkedin, Github,
  Send, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';
import { personalInfo } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submit failed');
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/30' },
    { icon: <Github size={20} />, href: personalInfo.github, label: 'GitHub', color: 'hover:text-white hover:border-white/30' },
    { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-rose-400 hover:border-rose-400/30' },
  ];

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl text-sm font-medium
     bg-[var(--bg-card)] border text-[var(--text-primary)]
     placeholder:text-[var(--text-muted)]
     focus:outline-none focus:ring-2 transition-all duration-200
     ${hasError
      ? 'border-rose-500/50 focus:ring-rose-500/30 focus:border-rose-500'
      : 'border-[var(--border)] focus:ring-brand-primary/30 focus:border-brand-primary/50'
    }`;

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
      aria-label="Contact section"
    >
      {/* Blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', filter: 'blur(70px)' }}
      />
      <div className="absolute top-0 left-0 w-80 h-80 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          tag="Contact Me"
        />

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
          {/* ── Left — Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Headline */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                Let&apos;s build something{' '}
                <span className="gradient-text">amazing</span> together
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                I&apos;m currently open to freelance projects and full-time opportunities.
                Whether you have a question, a proposal, or just want to say hi —
                my inbox is always open.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl
                    bg-[var(--bg-card)] border border-[var(--border)]
                    hover:border-brand-primary/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center
                    bg-brand-primary/10 text-brand-primary-light shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-medium">{item.label}</p>
                    {item.href ? (
                      <a href={item.href}
                        className="text-sm font-medium text-[var(--text-primary)]
                          hover:text-brand-primary-light transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-widest mb-3">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center
                      bg-[var(--bg-card)] border border-[var(--border)]
                      text-[var(--text-secondary)] ${color}
                      transition-all duration-200`}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right — Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border)]
              bg-[var(--bg-surface)] relative overflow-hidden">
              {/* Decorative top edge */}
              <div className="absolute top-0 left-0 right-0 h-px
                bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30
                        flex items-center justify-center"
                    >
                      <CheckCircle size={36} className="text-emerald-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">Message Sent!</h3>
                    <p className="text-[var(--text-secondary)] text-sm max-w-xs">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Error banner */}
                    <AnimatePresence>
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl
                            bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-medium"
                        >
                          <AlertCircle size={16} className="shrink-0" />
                          Something went wrong. Please try again or email me directly.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className={inputClass(!!errors.name)}
                          {...register('name', {
                            required: 'Name is required',
                            minLength: { value: 2, message: 'At least 2 characters' },
                          })}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                            <AlertCircle size={11} /> {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                          Email Address <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className={inputClass(!!errors.email)}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
                          })}
                        />
                        {errors.email && (
                          <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                            <AlertCircle size={11} /> {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                        Subject <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Project Inquiry / Collaboration / Other"
                        className={inputClass(!!errors.subject)}
                        {...register('subject', { required: 'Subject is required' })}
                      />
                      {errors.subject && (
                        <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                          <AlertCircle size={11} /> {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project or idea..."
                        className={`${inputClass(!!errors.message)} resize-none`}
                        {...register('message', {
                          required: 'Message is required',
                          minLength: { value: 20, message: 'At least 20 characters please' },
                        })}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                          <AlertCircle size={11} /> {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6
                        rounded-xl font-semibold text-white
                        bg-gradient-to-r from-brand-primary to-brand-purple
                        shadow-lg shadow-brand-primary/30
                        hover:shadow-brand-primary/50
                        disabled:opacity-70 disabled:cursor-not-allowed
                        transition-all duration-300"
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-[var(--text-muted)]">
                      I typically respond within 24 hours.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
