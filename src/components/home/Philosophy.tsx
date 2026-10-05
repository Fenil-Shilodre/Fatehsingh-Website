"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Quote, Sprout, HeartHandshake, ShieldCheck } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 bg-[#F3EBD7] text-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('man_eyebrow')}
          title={<span>The Man, The Soil, <span className="text-emerald italic font-normal">The Vision</span></span>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Lead Quote Card with Hero Gradient Effect */}
          <div className="lg:col-span-6 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border-l-[6px] border-l-[#FFE8A8] border border-[#C69749]/30 text-[#FBF4E6] bg-[#3B1208]">
            {/* Hero Background Watercolor Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/hero-bg.jpg"
                alt="Hero Atmospheric Background"
                fill
                className="object-cover object-center filter brightness-[0.82] contrast-[1.08]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/15" />
            </div>

            <Quote className="w-20 h-20 text-[#FFE8A8]/20 absolute -top-3 -left-3 pointer-events-none z-10" />
            
            <blockquote className="font-serif text-2xl sm:text-3xl font-medium text-[#FAF5EB] leading-relaxed relative z-10 italic mb-8 drop-shadow-md">
              &ldquo;{t('man_lead_quote')}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-white/20 relative z-10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFE8A8] shrink-0 shadow-md">
                <Image
                  src="/images/48.jpg"
                  alt="Fatehsinh Chauhan"
                  fill
                  className="object-cover object-top"
                  sizes="60px"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-[#FBF4E6] text-lg">
                  Fatehsinh Mohansinh Chauhan
                </div>
                <div className="text-xs text-[#FBF4E6]/80 font-semibold tracking-wide uppercase">
                  Silvassa · Dadra & Nagar Haveli
                </div>
              </div>
            </div>
          </div>

          {/* Three Guiding Principles */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Pillar 1 */}
            <div className="card-paper p-6 flex items-start gap-5 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] text-emerald flex items-center justify-center shrink-0 border border-[#E7DEC9] shadow-xs group-hover:border-gold-2 transition-colors">
                <Sprout className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-ink mb-1.5 group-hover:text-emerald transition-colors">
                  {t('man_p1_title')}
                </h4>
                <p className="text-sm text-slate-body leading-relaxed font-sans">
                  {t('man_p1_desc')}
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="card-paper p-6 flex items-start gap-5 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] text-gold flex items-center justify-center shrink-0 border border-[#E7DEC9] shadow-xs group-hover:border-gold-2 transition-colors">
                <HeartHandshake className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-ink mb-1.5 group-hover:text-emerald transition-colors">
                  {t('man_p2_title')}
                </h4>
                <p className="text-sm text-slate-body leading-relaxed font-sans">
                  {t('man_p2_desc')}
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="card-paper p-6 flex items-start gap-5 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] text-emerald flex items-center justify-center shrink-0 border border-[#E7DEC9] shadow-xs group-hover:border-gold-2 transition-colors">
                <ShieldCheck className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-ink mb-1.5 group-hover:text-emerald transition-colors">
                  {t('man_p3_title')}
                </h4>
                <p className="text-sm text-slate-body leading-relaxed font-sans">
                  {t('man_p3_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
