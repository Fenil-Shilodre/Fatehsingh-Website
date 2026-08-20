"use client";

import React from 'react';
import Image from 'next/image';
import { silwasaPlaces } from '@/data/silwasaPlaces';
import { motion } from 'framer-motion';

export const SilvassaVisualBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[380px] bg-charcoal-deep overflow-hidden my-12 group cursor-default">
      {/* Full Width Environmental Photograph with Framer Motion hover zoom */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-full relative overflow-hidden"
      >
        <Image
          src={silwasaPlaces.visualBreak.src}
          alt={silwasaPlaces.visualBreak.alt}
          fill
          loading="lazy"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
      </motion.div>

      {/* Subtle Gradient Overlays for Editorial Quality */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/30 to-charcoal-deep/60 pointer-events-none" />
      <div className="absolute inset-0 bg-charcoal-deep/20 pointer-events-none" />

      {/* Minimal Editorial Location Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, borderColor: "rgba(212, 175, 55, 0.7)" }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-gold-light bg-charcoal-dark/80 px-4 py-2 rounded border border-gold/40 backdrop-blur-md mb-3 shadow-lg"
        >
          {silwasaPlaces.visualBreak.location}
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-ivory drop-shadow-lg"
        >
          {silwasaPlaces.visualBreak.title}
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 bg-gold mt-4 shadow-sm"
        />
      </div>
    </section>
  );
};
