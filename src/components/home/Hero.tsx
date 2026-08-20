"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { silwasaPlaces } from '@/data/silwasaPlaces';
import { ChevronDown, Compass, Sparkles, MapPin } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const portraitVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 bg-charcoal-deep overflow-hidden text-ivory">
      {/* Silvassa Landscape & Vibe Background Layer with Subtle Zoom Reveal */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={silwasaPlaces.hero.src}
            alt={silwasaPlaces.hero.alt}
            fill
            priority
            className="object-cover object-center lg:object-right opacity-70"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient Overlays for contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/90 via-55% to-transparent lg:to-charcoal-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-charcoal-deep/50" />
      </div>

      {/* Animated Light Glow Halo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left order-1">
            
            {/* Eyebrow Location Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(212, 175, 55, 0.7)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-charcoal-dark/85 text-gold-light text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg cursor-default"
              >
                <Compass className="w-3.5 h-3.5 text-gold animate-spin-slow" />
                <span>{t('hero_eyebrow')}</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse ml-1" />
              </motion.div>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory leading-[1.1] drop-shadow-xl"
            >
              <span className="text-gold-light inline-block hover:text-gold transition-colors duration-300">
                {t('hero_title_prefix')}
              </span>
              <br />
              <span className="text-ivory inline-block">
                {t('hero_title_suffix')}
              </span>
            </motion.h1>

            {/* Subtitle / Role Tagline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-gold/95 font-serif italic border-l-2 border-gold pl-4 py-0.5 drop-shadow-md"
            >
              {t('hero_subhead')}
            </motion.p>

            {/* Description Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-ivory/90 leading-relaxed max-w-2xl font-sans drop-shadow-md"
            >
              {t('hero_copy')}
            </motion.p>

            {/* Mobile Portrait view */}
            <motion.div variants={itemVariants} className="block lg:hidden my-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 rounded-lg overflow-hidden border-2 border-gold/40 shadow-2xl"
              >
                <Image
                  src="/images/48.jpg"
                  alt="Shri Fatehsinh Mohansinh Chauhan"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>
            </motion.div>

            {/* Interactive Call to Action Buttons */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.a
                href="#lineage"
                whileHover={{ scale: 1.04, y: -3, boxShadow: "0 10px 25px -5px rgba(184, 75, 41, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded bg-terracotta hover:bg-terracotta-dark text-white font-medium shadow-lg transition-colors gap-2 text-base group"
              >
                <span>{t('hero_btn_explore')}</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </motion.a>

              <motion.a
                href="#institutions"
                whileHover={{ scale: 1.04, y: -3, borderColor: "rgba(212, 175, 55, 0.9)", backgroundColor: "rgba(212, 175, 55, 0.15)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded border border-gold/60 bg-charcoal-dark/70 text-gold font-medium transition-all text-base backdrop-blur-md gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-light" />
                <span>{t('hero_btn_institutions')}</span>
              </motion.a>
            </motion.div>

            {/* Location Sub-label */}
            <motion.div variants={itemVariants} className="pt-4 text-xs tracking-widest text-ivory/80 uppercase font-sans flex items-center gap-2 drop-shadow">
              <MapPin className="w-3.5 h-3.5 text-gold animate-bounce" />
              <span>Civic Stewardship · Silvassa, Dadra & Nagar Haveli</span>
            </motion.div>

          </div>

          {/* Right Column: Desktop Portrait with Framer Motion Hover Effects */}
          <div className="hidden lg:block lg:col-span-5 order-2">
            <motion.div
              variants={portraitVariants}
              whileHover={{
                y: -8,
                scale: 1.025,
                boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative mx-auto w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-charcoal-dark group cursor-pointer"
            >
              <Image
                src="/images/48.jpg"
                alt="Shri Fatehsinh Mohansinh Chauhan"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/95 via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
              
              {/* Badge Footer overlay on image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="absolute bottom-4 left-4 right-4 p-4 rounded bg-charcoal-dark/95 backdrop-blur-md border border-gold/40 text-center shadow-lg transition-all group-hover:border-gold/80"
              >
                <span className="font-serif text-sm font-semibold text-gold block group-hover:text-gold-light transition-colors">
                  Shri Fatehsinh Mohansinh Chauhan
                </span>
                <span className="text-[11px] text-ivory/80 block mt-0.5">
                  Patriarch & Institution Builder · Silvassa
                </span>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
