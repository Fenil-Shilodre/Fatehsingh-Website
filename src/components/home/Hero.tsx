"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronDown, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-end items-center pt-28 pb-16 sm:pb-24 bg-[#080D1A] overflow-hidden text-ivory text-center">
      {/* 1. Full-Bleed Background Image (High Visibility & Brightness) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-speech.jpg"
          alt="Shri Fatehsinh Mohansinh Chauhan"
          fill
          priority
          className="object-cover object-[center_18%] md:object-[center_12%] filter brightness-100 contrast-100"
          sizes="100vw"
        />

        {/* Soft, Non-intrusive Lower Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-[#060A14]/70 via-35% to-transparent" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#060A14]/60 to-transparent" />
      </div>

      {/* 2. Centered Content (Always Fully Visible & High Contrast) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-3 w-full"
        >
          {/* 2-Line Headline (Refined Small Font Sizing) */}
          <motion.h1 
            variants={itemVariants} 
            className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-bold tracking-wider text-white uppercase leading-snug drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]"
          >
            <span>FATEHSINH’S VISION.</span>
            <br />
            <span className="text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
              DADRA & NAGAR HAVELI’S FUTURE.
            </span>
          </motion.h1>

          {/* Small Single-Line Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-gold-light uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            A LIFETIME OF DEDICATED PUBLIC SERVICE.
          </motion.p>

          {/* 2 CTA Buttons */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <motion.a
              href="#service"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-xs sm:text-sm shadow-xl transition-all gap-1.5 group w-full sm:w-auto"
            >
              <span>Explore Public Record</span>
              <ChevronDown className="w-3.5 h-3.5 text-white group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#institutions"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-gold/70 bg-[#0B1120]/85 hover:bg-gold/25 text-gold font-semibold text-xs sm:text-sm backdrop-blur-md shadow-xl transition-all gap-1.5 w-full sm:w-auto"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-light" />
              <span>Educational Legacy</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
