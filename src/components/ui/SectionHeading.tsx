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
        <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase mb-4 px-4 py-1.5 rounded-full border shadow-sm ${
          light 
            ? 'text-gold-3 border-gold-3/40 bg-ink-deep/60 backdrop-blur-md' 
            : 'text-gold border-gold-2/70 bg-white/80'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3 leading-[1.15] ${
        light ? 'text-ivory' : 'text-ink'
      }`}>
        {title}
      </h2>
      
      {/* Reference site ornate underline with centered diamond */}
      <div className={`relative h-[2px] w-20 my-4 ${center ? 'mx-auto' : ''} bg-gradient-to-r from-gold via-gold-3 to-gold rounded-full`}>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold ${
          light ? 'ring-2 ring-ink-deep' : 'ring-2 ring-ivory'
        }`} />
      </div>

      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed mt-4 font-sans ${
          light ? 'text-ivory/80' : 'text-slate-body'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
