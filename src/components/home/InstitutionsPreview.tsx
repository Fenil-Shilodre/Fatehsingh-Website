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
    <section id="institutions" className="py-24 bg-[#F3EBD7] text-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('inst_eyebrow')}
          title={<span>Building Silvassa&apos;s <span className="text-emerald italic font-normal">Educational Future</span></span>}
          subtitle={t('inst_subtitle')}
        />

        {/* Campus Overview Banner */}
        <div className="card-paper overflow-hidden mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 relative">
          {/* Top royal gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4A3C] via-[#B8860B] to-[#0F4A3C]" />

          <div className="lg:col-span-8 space-y-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
              <MapPin className="w-4 h-4 text-emerald" />
              <span>{t('campus_banner_loc')}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              {t('campus_banner_title')}
            </h3>
            <p className="text-sm text-slate-body leading-relaxed font-sans">
              {t('campus_banner_desc')}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E7DEC9]">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-emerald block">{t('campus_stat_area')}</span>
                <span className="text-xs text-slate-muted block">{t('campus_stat_area_lbl')}</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-gold block">{t('campus_stat_faculty')}</span>
                <span className="text-xs text-slate-muted block">{t('campus_stat_faculty_lbl')}</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-ink block">{t('campus_stat_alumni')}</span>
                <span className="text-xs text-slate-muted block">{t('campus_stat_alumni_lbl')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FAF5EB] p-6 rounded-xl border border-[#E7DEC9] flex flex-col justify-center italic font-serif text-ink/85">
            <blockquote className="text-base sm:text-lg mb-3">
              {t('inst_quote')}
            </blockquote>
            <cite className="not-italic text-xs font-sans font-semibold text-emerald">
              — {t('inst_quote_author')}
            </cite>
          </div>
        </div>

        {/* 3 Pillar Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutionsData.map((inst) => (
            <div
              key={inst.id}
              className="card-paper overflow-hidden flex flex-col group"
            >
              {/* Institution Image */}
              <div className="relative w-full h-56 bg-[#0F1B33]">
                <Image
                  src={inst.image}
                  alt={inst.defaultName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider bg-[#0F1B33]/90 text-gold-3 px-3 py-1 rounded-md border border-gold-3/30 backdrop-blur-sm shadow-sm">
                  {inst.estYear}
                </span>
              </div>

              {/* Institution Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald block mb-1">
                    {t(inst.tagKey as any, inst.defaultTag)}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-2">
                    {t(inst.nameKey as any, inst.defaultName)}
                  </h4>
                  <div className="text-xs text-gold font-medium mb-3 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 shrink-0 text-gold" />
                    <span>{t(inst.affilKey as any, inst.defaultAffil)}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-body font-sans border-t border-[#E7DEC9] pt-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald font-bold">•</span>
                      <span>{t(inst.point1Key as any, inst.defaultPoint1)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald font-bold">•</span>
                      <span>{t(inst.point2Key as any, inst.defaultPoint2)}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E7DEC9]">
                  <a
                    href={`tel:${inst.contact.replace(/[^0-9+]/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald/10 hover:bg-emerald text-emerald hover:text-[#F5EEDE] border border-emerald/30 hover:border-emerald transition-all text-xs font-bold tracking-wider uppercase shadow-xs"
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
