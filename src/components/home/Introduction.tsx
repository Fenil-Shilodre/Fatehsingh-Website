"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { silwasaPlaces } from '@/data/silwasaPlaces';
import { Shield, Sparkles, Heart } from 'lucide-react';

export const Introduction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="lineage" className="py-20 bg-ivory text-charcoal relative overflow-hidden">
      {/* Subtle Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12vw] md:text-[13.5vw] lg:text-[14.5vw] font-bold text-sandstone/35 select-none pointer-events-none tracking-wide uppercase whitespace-nowrap">
        FATEHSINGH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('lineage_eyebrow')}
          title={
            <span>
              {t('lineage_title')}
            </span>
          }
          subtitle={t('lineage_subtitle')}
        />

        {/* 3 Predecessor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 1. Grandfather */}
          <div className="bg-white p-8 rounded-lg border border-sandstone shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-6 border border-gold/30">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
              {t('lineage_card_virsinhji_role')}
            </span>
            <h3 className="font-serif text-xl font-bold text-charcoal-dark mb-2">
              {t('lineage_card_virsinhji_title')}
            </h3>
            <p className="text-xs text-gold-dark font-medium italic mb-4">
              Agrarian Patriarch
            </p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              {t('lineage_card_virsinhji_desc')}
            </p>
          </div>

          {/* 2. Father */}
          <div className="bg-white p-8 rounded-lg border border-gold/40 shadow-md relative ring-1 ring-gold/20">
            <div className="w-10 h-10 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
              {t('lineage_card_mohansinhji_role')}
            </span>
            <h3 className="font-serif text-xl font-bold text-charcoal-dark mb-2">
              {t('lineage_card_mohansinhji_title')}
            </h3>
            <p className="text-xs text-gold-dark font-medium italic mb-4">
              Community Elder
            </p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              {t('lineage_card_mohansinhji_desc')}
            </p>
          </div>

          {/* 3. Mother */}
          <div className="bg-white p-8 rounded-lg border border-sandstone shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mb-6">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
              {t('lineage_card_devkiba_role')}
            </span>
            <h3 className="font-serif text-xl font-bold text-charcoal-dark mb-2">
              {t('lineage_card_devkiba_title')}
            </h3>
            <p className="text-xs text-gold-dark font-medium italic mb-4">
              Inspiration for Education
            </p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              {t('lineage_card_devkiba_desc')}
            </p>
          </div>
        </div>

        {/* Silvassa Environmental Aerial Landscape Banner */}
        <div className="my-12 relative rounded-xl overflow-hidden border border-sandstone shadow-md bg-charcoal-dark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-96">
              <Image
                src={silwasaPlaces.aerial.src}
                alt={silwasaPlaces.aerial.alt}
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-charcoal-dark/90 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent lg:hidden" />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 text-ivory space-y-4 bg-charcoal-dark">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
                Territorial Context
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory">
                {silwasaPlaces.aerial.title}
              </h3>
              <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                Generational public stewardship rooted in the soil, green canopy, and civic waterways of Silvassa and Dadra & Nagar Haveli.
              </p>
              <div className="pt-2 text-xs text-gold-light/70 italic flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                <span>{silwasaPlaces.aerial.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
