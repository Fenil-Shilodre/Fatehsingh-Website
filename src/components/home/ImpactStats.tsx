"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

interface StatItem {
  target: number;
  start?: number;
  suffix?: string;
  labelKey: string;
  defaultLabel: string;
  formatNumber?: boolean;
}

const AnimatedCounter: React.FC<{
  target: number;
  start?: number;
  suffix?: string;
  duration?: number;
  formatNumber?: boolean;
  isVisible: boolean;
}> = ({ target, start = 0, suffix = '', duration = 2000, formatNumber = true, isVisible }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + easeProgress * (target - start));

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, start, duration]);

  const formattedValue = formatNumber ? count.toLocaleString() : count.toString();

  return (
    <span>
      {formattedValue}{suffix}
    </span>
  );
};

export const ImpactStats: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    { target: 45, start: 0, suffix: "+", labelKey: "stat_years_label", defaultLabel: "Years of Public Life" },
    { target: 1983, start: 1900, suffix: "", labelKey: "stat_institutions_label", defaultLabel: "Foundational Year", formatNumber: false },
    { target: 7000, start: 0, suffix: "+", labelKey: "stat_students_label", defaultLabel: "Students Nurtured", formatNumber: true },
    { target: 21, start: 0, suffix: "+", labelKey: "stat_roles_label", defaultLabel: "Civic & Standing Roles" },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-14 bg-[#060A14] text-ivory relative overflow-hidden"
    >
      {/* Seamless Ambient Lighting - No Hard Top Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] via-[#080E1E] to-[#060A14] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-32 bg-royal-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle Category Pill */}
        <div className="text-center mb-8">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold px-4 py-1 rounded-full bg-gold/10 border border-gold/25 backdrop-blur-md"
          >
            {t('stat_tag')}
          </motion.span>
        </div>

        {/* Clean, Seamless Counter Ribbon (No harsh box borders) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gold/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="text-center px-4 py-3 group cursor-default"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light mb-1.5 tracking-tight min-h-[3rem] flex items-center justify-center group-hover:scale-105 group-hover:text-gold transition-all duration-300 drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                <AnimatedCounter
                  target={stat.target}
                  start={stat.start}
                  suffix={stat.suffix}
                  formatNumber={stat.formatNumber}
                  isVisible={isVisible}
                />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-ivory/70 uppercase tracking-[0.14em] font-sans group-hover:text-ivory transition-colors">
                {t(stat.labelKey as any, stat.defaultLabel)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
