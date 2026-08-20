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
      { threshold: 0.25 }
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
    <section ref={sectionRef} className="py-16 bg-forest text-ivory border-y border-gold/30 relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-radial-gradient from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-gold-light font-semibold px-3 py-1 rounded bg-gold/10 border border-gold/20 backdrop-blur-md"
          >
            {t('stat_tag')}
          </motion.span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                y: -6, 
                backgroundColor: "rgba(212, 175, 55, 0.08)",
                borderColor: "rgba(212, 175, 55, 0.4)",
              }}
              className="text-center p-6 rounded-lg border border-gold/15 bg-charcoal-dark/40 backdrop-blur-sm transition-all duration-300 shadow-md group cursor-default"
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-2 tracking-tight min-h-[3.5rem] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter
                  target={stat.target}
                  start={stat.start}
                  suffix={stat.suffix}
                  formatNumber={stat.formatNumber}
                  isVisible={isVisible}
                />
              </div>
              <div className="text-xs sm:text-sm font-medium text-ivory/80 uppercase tracking-wider font-sans group-hover:text-gold-light transition-colors">
                {t(stat.labelKey as any, stat.defaultLabel)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
