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
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-end items-center pt-24 pb-14 sm:pb-20 bg-[#605A2B] overflow-hidden text-[#FAF5EB] text-center">
      {/* 1. Full-Bleed Background Image with Headroom below Navbar */}
      <div className="absolute inset-0 top-[65px] sm:top-[72px] z-0">
        <Image
          src="/images/hero-fatehsingh.png"
          alt="Shri Fatehsinh Mohansinh Chauhan"
          fill
          priority
          className="object-cover object-top filter brightness-100 contrast-[1.02]"
          sizes="100vw"
        />

        {/* Cinematic Gradient Overlays: Deep midnight at bottom for text readability, subtle warm tone at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B33] via-[#0F1B33]/75 via-45% to-transparent" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#0F4A3C]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-32 bg-[#B8860B]/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* 2. Centered Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-3 w-full"
        >
          {/* 2-Line Headline (Previous layout & sizing with Cormorant Garamond) */}
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

          {/* Small Single-Line Subtitle with Gold-3 Accent */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] text-[#E4C77A] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            A LIFETIME OF DEDICATED PUBLIC SERVICE.
          </motion.p>

          {/* 2 CTA Buttons with Emerald & Gold Grading */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <motion.a
              href="#service"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-gradient-to-b from-emerald-2 to-emerald hover:brightness-110 text-[#F5EEDE] border border-emerald/90 font-semibold text-xs sm:text-sm shadow-xl shadow-emerald-950/50 transition-all gap-1.5 group w-full sm:w-auto"
            >
              <span>Explore Public Record</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#F5EEDE] group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#institutions"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-gold-3/70 bg-[#0F1B33]/85 hover:bg-emerald/25 text-[#E4C77A] font-semibold text-xs sm:text-sm backdrop-blur-md shadow-xl transition-all gap-1.5 w-full sm:w-auto"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-3" />
              <span>Educational Legacy</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
