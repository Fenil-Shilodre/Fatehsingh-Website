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
    <section id="home" className="relative min-h-[78svh] lg:min-h-screen flex flex-col justify-end lg:justify-center items-center lg:items-start pt-24 pb-14 sm:pb-20 bg-[#6E1C00] overflow-hidden text-[#FAF5EB]">
      {/* 1. Full-Bleed Background Image & Cloudscape */}
      <div className="absolute inset-0 z-0">
        {/* Background Cloudscape */}
        <Image
          src="/images/hero-gradient-bg.png"
          alt="Golden Saffron Cloudscape Background"
          fill
          priority
          className="object-cover object-center pointer-events-none opacity-90"
          sizes="100vw"
        />
        
        <Image
          src="/images/hero-photo.png"
          alt="Shri Fatehsinh Mohansinh Chauhan"
          fill
          priority
          className="object-contain object-bottom lg:object-[85%_bottom] filter brightness-100 contrast-[1.05]"
          sizes="100vw"
        />

        {/* Subtle Gradient Overlay for Text Contrast */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#4A1000]/80 via-[#4A1000]/20 to-transparent pointer-events-none lg:hidden" />
        {/* Desktop Left Gradient for Text Readability */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-[#803500]/80 via-[#803500]/30 to-transparent pointer-events-none" />
      </div>

      {/* 2. Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-30 w-full flex flex-col items-center lg:items-start lg:mt-16 text-center lg:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start space-y-4 w-full lg:max-w-2xl"
        >
          {/* Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-[#FAF5EB] leading-[1.1] drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]"
          >
            Fatehsinh Mohansinh Chauhan
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-xl sm:text-2xl md:text-3xl font-medium italic text-[#FFE8A8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            A life devoted to opening doors
          </motion.h2>

          {/* Description */}
          {/* <motion.p
            variants={itemVariants}
            className="font-sans text-sm sm:text-base md:text-lg text-[#F5EEDE]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            To Fatehsinh, birth is circumstance, never destiny. For over four decades, he has built the institutions that let the children of Dadra and Nagar Haveli learn without leaving home.
          </motion.p> */}

          {/* 2 CTA Buttons */}
          <motion.div variants={itemVariants} className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <motion.a
              href="#service"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-gradient-to-b from-[#5E1463] to-[#4A0E4E] hover:brightness-110 text-[#F5EEDE] border border-[#4A0E4E]/90 font-semibold text-sm shadow-xl shadow-[#1A021B]/50 transition-all gap-1.5 group w-full sm:w-auto"
            >
              <span>Explore The Roots</span>
              <ChevronDown className="w-4 h-4 text-[#F5EEDE] group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#institutions"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gold-3/70 bg-[#0F1B33]/85 hover:bg-[#4A0E4E]/40 text-[#E4C77A] font-semibold text-sm backdrop-blur-md shadow-xl transition-all gap-1.5 w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 text-gold-3" />
              <span>Begin Chronicle</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
