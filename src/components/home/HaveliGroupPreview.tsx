"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { silwasaPlaces } from '@/data/silwasaPlaces';
import { Building2, Film, Home, UtensilsCrossed } from 'lucide-react';

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
    <section id="haveli-group" className="py-20 bg-charcoal-deep text-ivory relative overflow-hidden">
      {/* Silvassa Waterway Environmental Backdrop Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={silwasaPlaces.boatingJetty.src}
          alt={silwasaPlaces.boatingJetty.alt}
          fill
          loading="lazy"
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep via-charcoal-deep/90 to-charcoal-deep" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          light
          eyebrow={t('haveli_eyebrow')}
          title={<span>Enterprise & Heritage — <span className="text-gold">Haveli Group</span></span>}
          subtitle={t('haveli_subhead')}
        />

        {/* 4 Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v, idx) => (
            <div
              key={idx}
              className="bg-charcoal/90 backdrop-blur-md p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors flex flex-col justify-between"
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
      </div>
    </section>
  );
};
