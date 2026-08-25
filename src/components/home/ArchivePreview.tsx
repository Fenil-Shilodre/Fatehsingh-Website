"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { dignitaryGalleryData, GalleryItem } from '@/data/gallery';

export const ArchivePreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="moments" className="py-24 bg-[#FAF5EB] text-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('moments_eyebrow')}
          title={<span>Moments of <span className="text-emerald italic font-normal">Statesmanship & Fellowship</span></span>}
          subtitle={t('moments_subtitle')}
        />

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dignitaryGalleryData.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="card-paper overflow-hidden flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 bg-[#0F1B33] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.defaultTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0F1B33]/90 text-gold-3 px-2.5 py-1 rounded-md border border-gold-3/30 backdrop-blur-sm shadow-sm">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald/90 text-[#F5EEDE] px-2 py-1 rounded-md border border-emerald/30 backdrop-blur-sm shadow-sm">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Caption Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-2 border-t border-[#E7DEC9]">
                <h4 className="font-serif text-xl font-bold text-ink group-hover:text-emerald transition-colors">
                  {item.defaultTitle}
                </h4>
                <p className="text-xs text-slate-body leading-relaxed font-sans">
                  {item.defaultCaption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
