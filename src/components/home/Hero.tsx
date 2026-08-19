"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { silwasaPlaces } from '@/data/silwasaPlaces';
import { ChevronDown, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 bg-charcoal-deep overflow-hidden text-ivory">
      {/* Silvassa Real Environmental Landscape Background Layer - Increased Opacity for High Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={silwasaPlaces.hero.src}
          alt={silwasaPlaces.hero.alt}
          fill
          priority
          className="object-cover object-center opacity-65"
          sizes="100vw"
        />
        {/* Subtle Gradient Overlays tuned for optimal text readability while letting the landscape shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/80 to-charcoal-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-charcoal-deep/40" />
      </div>

      {/* Decorative Subtle Light Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Mobile First Flow (On mobile: Eyebrow -> Name -> Subtitle -> Description -> Portrait -> CTA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-6 text-left order-1">
            
            {/* 1. Heritage / Location Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-charcoal-dark/80 text-gold-light text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-md">
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span>{t('hero_eyebrow')}</span>
            </div>

            {/* 2. Name Display */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory leading-[1.1] drop-shadow-lg">
              <span className="text-gold-light">{t('hero_title_prefix')}</span><br />
              <span className="text-ivory">{t('hero_title_suffix')}</span>
            </h1>

            {/* Subtitle/Role */}
            <p className="text-lg sm:text-xl font-medium text-gold/95 font-serif italic border-l-2 border-gold pl-4 py-0.5 drop-shadow">
              {t('hero_subhead')}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-ivory/90 leading-relaxed max-w-2xl font-sans drop-shadow-md">
              {t('hero_copy')}
            </p>

            {/* Portrait on Mobile appears right before CTA for optimal visual flow */}
            <div className="block lg:hidden my-6">
              <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 rounded-lg overflow-hidden border-2 border-gold/40 shadow-2xl">
                <Image
                  src="/images/48.jpg"
                  alt="Shri Fatehsinh Mohansinh Chauhan"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>

            {/* CTA Button Block (Non-contact exploration CTA) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#lineage"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded bg-terracotta hover:bg-terracotta-dark text-white font-medium shadow-lg transition-colors gap-2 text-base"
              >
                <span>{t('hero_btn_explore')}</span>
                <ChevronDown className="w-5 h-5" />
              </a>

              <a
                href="#institutions"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded border border-gold/60 bg-charcoal-dark/70 hover:bg-gold/20 text-gold font-medium transition-colors text-base backdrop-blur-md"
              >
                <span>{t('hero_btn_institutions')}</span>
              </a>
            </div>

            {/* Location Sub-label */}
            <div className="pt-4 text-xs tracking-widest text-ivory/80 uppercase font-sans flex items-center gap-2 drop-shadow">
              <span className="w-2 h-2 rounded-full bg-gold inline-block animate-pulse" />
              <span>Civic Stewardship · Silvassa, Dadra & Nagar Haveli</span>
            </div>
          </div>

          {/* Desktop Right Portrait Column */}
          <div className="hidden lg:block lg:col-span-5 order-2">
            <div className="relative mx-auto w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-charcoal-dark">
              <Image
                src="/images/48.jpg"
                alt="Shri Fatehsinh Mohansinh Chauhan"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-charcoal-dark/95 backdrop-blur-md border border-gold/40 text-center shadow-lg">
                <span className="font-serif text-sm font-semibold text-gold block">
                  Shri Fatehsinh Mohansinh Chauhan
                </span>
                <span className="text-[11px] text-ivory/80 block">
                  Patriarch & Institution Builder · Silvassa
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
