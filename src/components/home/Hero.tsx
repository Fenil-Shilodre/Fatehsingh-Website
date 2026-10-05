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
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-end items-center pb-12 sm:pb-16 lg:pb-20 pt-28 bg-[#1A0A1F] overflow-hidden text-[#FAF5EB]">
      {/* 1. Full-Bleed Background Image & Atmospheric Aura */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Warm Saffron & Royal Cloudscape Background"
          fill
          priority
          className="object-cover object-center pointer-events-none"
          sizes="100vw"
        />
        {/* Gentle top gradient for transparent navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* 2. Centered Portrait Image (Enlarged) */}
      <div className="absolute inset-x-0 bottom-0 top-4 sm:top-6 lg:top-8 z-10 flex justify-center items-end pointer-events-none">
        <div className="relative w-full max-w-2xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-[88%] sm:h-[92%] lg:h-[96%] flex justify-center items-end transform scale-105 sm:scale-110 lg:scale-115 origin-bottom">
          <Image
            src="/images/hero-photo.png"
            alt="Shri Fatehsinh Mohansinh Chauhan"
            fill
            priority
            className="object-contain object-bottom filter brightness-100 contrast-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 95vw, 1400px"
          />
        </div>
      </div>

      {/* 3. Subtle Soft Torso Gradient for Text Contrast (Reduced) */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 via-black/10 to-transparent z-20 pointer-events-none" />

      {/* 5. Centered Foreground Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-30 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-3 sm:space-y-4 w-full"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight text-[#FAF5EB] leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            Fatehsinh Mohansinh Chauhan
          </motion.h1>

          {/* Subtitle / Tagline */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.22em] sm:tracking-[0.25em] uppercase text-[#E4C77A] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mt-2"
          >
            A LIFETIME OF DEDICATED PUBLIC SERVICE.
          </motion.p>

          {/* 2 CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="pt-4 sm:pt-6 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
          >
            <motion.a
              href="#service"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-lg bg-[#164B3D] hover:bg-[#1E5D4C] text-[#FAF5EB] border border-[#2D7360]/70 font-medium text-xs sm:text-sm shadow-xl shadow-black/50 transition-all gap-1.5 group"
            >
              <span>Explore Public Record</span>
              <ChevronDown className="w-4 h-4 text-[#FAF5EB] group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#institutions"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-lg border border-[#C69749]/70 hover:border-[#E4C77A] bg-[#0A1612]/60 hover:bg-[#0A1612]/80 text-[#E4C77A] font-medium text-xs sm:text-sm backdrop-blur-md shadow-xl shadow-black/40 transition-all gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#E4C77A]" />
              <span>Educational Legacy</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
