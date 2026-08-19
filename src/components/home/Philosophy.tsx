"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Quote, Sprout, HeartHandshake, ShieldCheck } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-20 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('man_eyebrow')}
          title={<span>The Man, The Soil, <span className="text-terracotta">The Vision</span></span>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Lead Quote Card */}
          <div className="lg:col-span-6 bg-white p-8 md:p-12 rounded-xl border border-sandstone shadow-md flex flex-col justify-between relative overflow-hidden">
            <Quote className="w-16 h-16 text-gold/20 absolute -top-2 -left-2" />
            
            <blockquote className="font-serif text-xl sm:text-2xl font-semibold text-charcoal-dark leading-relaxed relative z-10 italic mb-8">
              {t('man_lead_quote')}
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-sandstone">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold shrink-0">
                <Image
                  src="/images/48.jpg"
                  alt="Fatehsinh Chauhan"
                  fill
                  className="object-cover object-top"
                  sizes="60px"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-charcoal-dark text-base">
                  Fatehsinh Mohansinh Chauhan
                </div>
                <div className="text-xs text-gold-dark font-medium">
                  Silvassa · Dadra & Nagar Haveli
                </div>
              </div>
            </div>
          </div>

          {/* Three Guiding Principles */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-lg border border-sandstone shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0 mt-1">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-charcoal-dark mb-1">
                  {t('man_p1_title')}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                  {t('man_p1_desc')}
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-lg border border-sandstone shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 mt-1">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-charcoal-dark mb-1">
                  {t('man_p2_title')}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                  {t('man_p2_desc')}
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-lg border border-sandstone shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-charcoal-dark mb-1">
                  {t('man_p3_title')}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
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
