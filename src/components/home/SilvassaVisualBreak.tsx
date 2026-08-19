"use client";

import React from 'react';
import Image from 'next/image';
import { silwasaPlaces } from '@/data/silwasaPlaces';

export const SilvassaVisualBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[380px] bg-charcoal-deep overflow-hidden my-12">
      {/* Full Width Editorial Environmental Photograph */}
      <Image
        src={silwasaPlaces.visualBreak.src}
        alt={silwasaPlaces.visualBreak.alt}
        fill
        loading="lazy"
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Subtle Gradient Overlays for Editorial Quality */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/30 to-charcoal-deep/60" />
      <div className="absolute inset-0 bg-charcoal-deep/20" />

      {/* Minimal Editorial Location Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-gold-light bg-charcoal-dark/70 px-4 py-2 rounded border border-gold/30 backdrop-blur-md mb-3">
          {silwasaPlaces.visualBreak.location}
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-ivory drop-shadow-md">
          {silwasaPlaces.visualBreak.title}
        </h2>
        <div className="w-16 h-0.5 bg-gold/60 mt-4" />
      </div>
    </section>
  );
};
