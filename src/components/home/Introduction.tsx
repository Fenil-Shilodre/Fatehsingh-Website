"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { silwasaPlaces } from '@/data/silwasaPlaces';
import { Users } from 'lucide-react';

export const Introduction: React.FC = () => {
  const { t } = useLanguage();

  const lineageCards = [
    {
      tag: t('lineage_card_virsinhji_role', 'GRANDFATHER · FOUNDATION'),
      name: t('lineage_card_virsinhji_title', 'Shri Virsinhji Chauhan'),
      subtitle: 'Agrarian Patriarch',
      desc: t('lineage_card_virsinhji_desc', "Pioneered the family's deep-rooted agricultural traditions and enduring community standing in the territory."),
    },
    {
      tag: t('lineage_card_mohansinhji_role', 'FATHER · AGRARIAN PATRIARCH'),
      name: t('lineage_card_mohansinhji_title', 'Late Shri Mohansinhji Virsinhji Chauhan'),
      subtitle: 'Community Elder',
      desc: t('lineage_card_mohansinhji_desc', "An esteemed community elder whose legendary hospitality and tribal welfare inspired the 'Haveli' ethos. Commemorated by the Mohansinhji Virsinhji Chauhan Dwar."),
    },
    {
      tag: t('lineage_card_devkiba_role', 'MOTHER · MATRIARCH'),
      name: t('lineage_card_devkiba_title', 'Late Smt. Devkiba Mohansinhji Chauhan'),
      subtitle: 'Inspiration for Education',
      desc: t('lineage_card_devkiba_desc', 'The spiritual cornerstone of the family. The prestigious Smt. Devkiba Mohansinhji Chauhan College stands as a permanent tribute to her reverence for education.'),
    },
  ];

  return (
    <section id="lineage" className="py-24 bg-[#FAF5EB] text-ink relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('lineage_eyebrow', 'THE ANCESTRAL ROOTS')}
          title={
            <span>
              The Legacy of <span className="text-emerald italic font-normal">Leadership</span>
            </span>
          }
          subtitle={t('lineage_subtitle', 'An unbroken tradition of agrarian guardianship, community hospitality, and selfless public service spanning generations in Silvassa.')}
        />

        {/* 3 Reference Style Lineage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16 mt-14">
          {lineageCards.map((card, idx) => (
            <div
              key={idx}
              className="card-paper p-8 relative overflow-hidden flex flex-col justify-between group cursor-default"
            >
              {/* Top Ornate Gold Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#E4C77A] to-[#B8860B]" />

              <div>
                {/* Eyebrow Tag with Users Icon */}
                <div className="flex items-center gap-2 text-[11px] text-[#B8860B] uppercase tracking-[0.2em] font-semibold">
                  <Users className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                  <span>{card.tag}</span>
                </div>

                {/* Name */}
                <h3 className="mt-4 font-serif text-2xl text-[#1A2540] font-semibold leading-snug group-hover:text-emerald transition-colors">
                  {card.name}
                </h3>

                {/* Subtitle Accent */}
                <div className="mt-1 text-[#0F4A3C] text-sm italic font-medium">
                  {card.subtitle}
                </div>

                {/* Divider Line */}
                <div className="my-5 h-px bg-gradient-to-r from-[#E7DEC9] via-[#D9CDAE] to-transparent" />

                {/* Description Body */}
                <p className="text-[#4A5568] text-sm leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Silvassa Environmental Aerial Landscape Banner */}
        <div className="my-12 relative rounded-2xl overflow-hidden border border-[#E7DEC9] shadow-paper bg-[#0F1B33]">
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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F1B33]/90 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B33] via-transparent to-transparent lg:hidden" />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 text-[#FAF5EB] space-y-4 bg-[#0F1B33]">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-3 block">
                Territorial Context
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF5EB]">
                {silwasaPlaces.aerial.title}
              </h3>
              <p className="text-sm text-[#D9CDAE] leading-relaxed font-sans">
                Generational public stewardship rooted in the soil, green canopy, and civic waterways of Silvassa and Dadra & Nagar Haveli.
              </p>
              <div className="pt-2 text-xs text-gold-3/80 italic flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                <span>{silwasaPlaces.aerial.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
