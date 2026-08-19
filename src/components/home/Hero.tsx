"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 bg-charcoal-deep overflow-hidden text-ivory">
      {/* SVG Mountain Sunset & Silvassa Nature Landscape Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full object-cover" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="900" fill="url(#sky_grad_next)" />
          <path d="M0 240C180 200 360 270 540 230C720 190 900 280 1080 240C1260 200 1380 250 1440 260V900H0V240Z" fill="#1B3B2B" fillOpacity="0.6" />
          <path d="M0 340C220 300 420 400 640 350C860 300 1040 380 1240 330C1340 305 1400 320 1440 330V900H0V340Z" fill="#2E5C45" fillOpacity="0.4" />
          <path d="M0 450C200 410 380 490 600 440C820 390 1020 470 1220 420C1340 390 1400 410 1440 420V900H0V450Z" fill="#B8533C" fillOpacity="0.3" />
          <path d="M0 580C260 520 480 640 760 580C1040 520 1240 620 1440 560V900H0V580Z" fill="url(#orange_grad_next)" fillOpacity="0.4" />
          <defs>
            <linearGradient id="sky_grad_next" x1="720" y1="0" x2="720" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B0E11" />
              <stop offset="0.5" stopColor="#12161A" />
              <stop offset="1" stopColor="#1E242B" />
            </linearGradient>
            <linearGradient id="orange_grad_next" x1="0" y1="580" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B8533C" />
              <stop offset="0.5" stopColor="#C5A059" />
              <stop offset="1" stopColor="#1B3B2B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Subtle Light Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Mobile First Flow (On mobile: Eyebrow -> Name -> Subtitle -> Description -> Portrait -> CTA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-6 text-left order-1">
            
            {/* 1. Heritage / Location Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-xs font-semibold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>{t('hero_eyebrow')}</span>
            </div>

            {/* 2. Name Display */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory leading-[1.1]">
              <span className="text-gold-light">{t('hero_title_prefix')}</span><br />
              <span className="text-ivory">{t('hero_title_suffix')}</span>
            </h1>

            {/* Subtitle/Role */}
            <p className="text-lg sm:text-xl font-medium text-gold/90 font-serif italic border-l-2 border-gold/40 pl-4 py-0.5">
              {t('hero_subhead')}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed max-w-2xl font-sans">
              {t('hero_copy')}
            </p>

            {/* Portrait on Mobile appears right before CTA for optimal visual flow */}
            <div className="block lg:hidden my-6">
              <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 rounded-lg overflow-hidden border-2 border-gold/30 shadow-2xl">
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
                className="inline-flex items-center justify-center px-6 py-3.5 rounded border border-gold/50 hover:bg-gold/10 text-gold font-medium transition-colors text-base"
              >
                <span>{t('hero_btn_institutions')}</span>
              </a>
            </div>

            {/* Location Sub-label */}
            <div className="pt-4 text-xs tracking-widest text-ivory/50 uppercase font-sans">
              Civic Stewardship · Silvassa, Dadra & Nagar Haveli
            </div>
          </div>

          {/* Desktop Right Portrait Column */}
          <div className="hidden lg:block lg:col-span-5 order-2">
            <div className="relative mx-auto w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-charcoal-dark">
              <Image
                src="/images/48.jpg"
                alt="Shri Fatehsinh Mohansinh Chauhan"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-charcoal-dark/90 backdrop-blur-md border border-gold/30 text-center">
                <span className="font-serif text-sm font-semibold text-gold block">
                  Shri Fatehsinh Mohansinh Chauhan
                </span>
                <span className="text-[11px] text-ivory/70 block">
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
