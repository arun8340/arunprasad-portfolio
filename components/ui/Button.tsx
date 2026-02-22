'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  icon,
  iconPosition = 'right',
  disabled,
  type = 'button',
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl',
    'transition-all duration-300 cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
    disabled && 'opacity-50 pointer-events-none',
    // Sizes
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-base',
    size === 'lg' && 'px-8 py-4 text-lg',
    // Variants
    variant === 'primary' && [
      'bg-gradient-to-r from-brand-primary to-brand-purple text-white',
      'shadow-lg shadow-brand-primary/30',
      'hover:shadow-xl hover:shadow-brand-primary/50 hover:scale-105',
    ],
    variant === 'outline' && [
      'border-2 border-brand-primary text-brand-primary-light',
      'hover:bg-brand-primary/10 hover:scale-105',
    ],
    variant === 'ghost' && [
      'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
      'hover:bg-white/5',
    ],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
