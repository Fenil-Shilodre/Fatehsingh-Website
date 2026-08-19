"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shield, Sparkles, Heart } from 'lucide-react';

export const Introduction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="lineage" className="py-20 bg-ivory text-charcoal relative overflow-hidden">
      {/* Subtle Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] font-bold text-sandstone/30 select-none pointer-events-none tracking-widest uppercase">
        CHAUHAN
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
            <div className="w-10 h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center mb-6">
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

        {/* Connecting Line Summary */}
        <div className="max-w-xl mx-auto text-center p-6 bg-sandstone/30 rounded-lg border border-sandstone">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="w-2 h-2 rounded-full bg-terracotta" />
            <span className="w-2 h-2 rounded-full bg-forest" />
          </div>
          <p className="font-serif font-semibold text-charcoal-dark text-base">
            {t('lineage_line_caption')}
          </p>
        </div>
      </div>
    </section>
  );
};
