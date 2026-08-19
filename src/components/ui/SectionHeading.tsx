import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = '',
  light = false,
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded border ${
          light 
            ? 'text-gold-light border-gold/30 bg-gold/10' 
            : 'text-terracotta border-terracotta/20 bg-terracotta/5'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
        light ? 'text-ivory' : 'text-charcoal-dark'
      }`}>
        {title}
      </h2>
      <div className={`h-0.5 w-16 mb-4 ${center ? 'mx-auto' : ''} ${
        light ? 'bg-gold' : 'bg-terracotta'
      }`} />
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${
          light ? 'text-ivory/80' : 'text-charcoal/70'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
