"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { institutionsData } from '@/data/institutions';
import { MapPin, GraduationCap, Phone } from 'lucide-react';

export const InstitutionsPreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="institutions" className="py-20 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('inst_eyebrow')}
          title={<span>Building Silvassa&apos;s <span className="text-terracotta">Educational Future</span></span>}
          subtitle={t('inst_subtitle')}
        />

        {/* Campus Overview Banner */}
        <div className="bg-white rounded-xl border border-sandstone shadow-md overflow-hidden mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-dark">
              <MapPin className="w-4 h-4 text-terracotta" />
              <span>{t('campus_banner_loc')}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-dark">
              {t('campus_banner_title')}
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
              {t('campus_banner_desc')}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-sandstone">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal-dark block">{t('campus_stat_area')}</span>
                <span className="text-xs text-charcoal/60 block">{t('campus_stat_area_lbl')}</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-terracotta block">{t('campus_stat_faculty')}</span>
                <span className="text-xs text-charcoal/60 block">{t('campus_stat_faculty_lbl')}</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-gold-dark block">{t('campus_stat_alumni')}</span>
                <span className="text-xs text-charcoal/60 block">{t('campus_stat_alumni_lbl')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-sandstone/30 p-6 rounded-lg border border-sandstone flex flex-col justify-center italic font-serif text-charcoal/80">
            <blockquote className="text-base sm:text-lg mb-3">
              {t('inst_quote')}
            </blockquote>
            <cite className="not-italic text-xs font-sans font-semibold text-terracotta">
              — {t('inst_quote_author')}
            </cite>
          </div>
        </div>

        {/* 3 Pillar Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutionsData.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-lg border border-sandstone overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Institution Image */}
              <div className="relative w-full h-56 bg-charcoal-dark">
                <Image
                  src={inst.image}
                  alt={inst.defaultName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider bg-charcoal-dark/90 text-gold px-3 py-1 rounded border border-gold/30 backdrop-blur-sm">
                  {inst.estYear}
                </span>
              </div>

              {/* Institution Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark block mb-1">
                    {t(inst.tagKey as any, inst.defaultTag)}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-charcoal-dark mb-2">
                    {t(inst.nameKey as any, inst.defaultName)}
                  </h4>
                  <div className="text-xs text-terracotta font-medium mb-3 flex items-center gap-1">
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>{t(inst.affilKey as any, inst.defaultAffil)}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-charcoal/70 font-sans border-t border-sandstone/60 pt-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>{t(inst.point1Key as any, inst.defaultPoint1)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>{t(inst.point2Key as any, inst.defaultPoint2)}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-sandstone">
                  <a
                    href={`tel:${inst.contact.replace(/[^0-9+]/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-charcoal-dark/5 hover:bg-charcoal-dark text-charcoal-dark hover:text-white border border-charcoal-dark/20 hover:border-charcoal-dark transition-all text-xs font-bold tracking-wider uppercase shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
