"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/site';
import { Building2, Film, Home, UtensilsCrossed, ExternalLink } from 'lucide-react';

export const HaveliGroupPreview: React.FC = () => {
  const { t } = useLanguage();

  const verticals = [
    {
      titleKey: "haveli_v1_title",
      defaultTitle: "Hospitality & Resorts",
      descKey: "haveli_v1_desc",
      defaultDesc: "Haveli Heritage Resorts Pvt. Ltd. — luxury stays, conference retreats, and experiential tourism.",
      icon: <Building2 className="w-6 h-6 text-gold" />
    },
    {
      titleKey: "haveli_v2_title",
      defaultTitle: "Entertainment & Cinema",
      descKey: "haveli_v2_desc",
      defaultDesc: "Haveli Entertainments Pvt. Ltd. — premier multiplex screens and cultural performance hubs.",
      icon: <Film className="w-6 h-6 text-gold" />
    },
    {
      titleKey: "haveli_v3_title",
      defaultTitle: "Real Estate & Infra",
      descKey: "haveli_v3_desc",
      defaultDesc: "Urban planning, commercial hubs, and modern residential developments in Silvassa.",
      icon: <Home className="w-6 h-6 text-gold" />
    },
    {
      titleKey: "haveli_v4_title",
      defaultTitle: "Spirits & Gourmet",
      descKey: "haveli_v4_desc",
      defaultDesc: "Curated fine dining, retail logistics, and premium hospitality supplies.",
      icon: <UtensilsCrossed className="w-6 h-6 text-gold" />
    }
  ];

  return (
    <section id="haveli-group" className="py-20 bg-charcoal-deep text-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow={t('haveli_eyebrow')}
          title={<span>Enterprise & Heritage — <span className="text-gold">Haveli Group</span></span>}
          subtitle={t('haveli_subhead')}
        />

        {/* 4 Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {verticals.map((v, idx) => (
            <div
              key={idx}
              className="bg-charcoal p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-ivory mb-2">
                  {t(v.titleKey as any, v.defaultTitle)}
                </h4>
                <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                  {t(v.descKey as any, v.defaultDesc)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* External Link CTA Bar */}
        <div className="bg-charcoal-dark p-6 sm:p-8 rounded-xl border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-ivory/80 font-sans">
              {t('haveli_cta_text')}
            </p>
          </div>
          <a
            href={siteConfig.socials.externalPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-gold hover:bg-gold-light text-charcoal-dark font-semibold text-sm transition-colors shrink-0"
          >
            <span>{t('haveli_btn_text')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
