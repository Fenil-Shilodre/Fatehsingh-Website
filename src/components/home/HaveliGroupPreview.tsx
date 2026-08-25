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
    <section id="haveli-group" className="py-24 bg-[#FAF5EB] text-ink relative overflow-hidden">
      {/* Subtle Background Backdrop Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={silwasaPlaces.boatingJetty.src}
          alt={silwasaPlaces.boatingJetty.alt}
          fill
          loading="lazy"
          className="object-cover object-center opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EB] via-transparent to-[#FAF5EB]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('haveli_eyebrow')}
          title={<span>Enterprise & Heritage — <span className="text-emerald italic font-normal">Haveli Group</span></span>}
          subtitle={t('haveli_subhead')}
        />

        {/* 4 Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v, idx) => (
            <div
              key={idx}
              className="card-paper p-8 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Top Ornate Gold Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#E4C77A] to-[#B8860B]" />

              <div>
                <div className="w-14 h-14 rounded-xl bg-[#FAF5EB] border border-[#E7DEC9] flex items-center justify-center mb-6 shadow-xs group-hover:border-gold-2 transition-colors">
                  {v.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-emerald transition-colors">
                  {t(v.titleKey as any, v.defaultTitle)}
                </h4>
                <div className="my-3 h-px bg-gradient-to-r from-[#E7DEC9] via-[#D9CDAE] to-transparent" />
                <p className="text-sm text-slate-body leading-relaxed font-sans">
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
