"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { dignitaryGalleryData, GalleryItem } from '@/data/gallery';

export const ArchivePreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('moments_eyebrow')}
          title={<span>Moments of <span className="text-terracotta">Statesmanship & Fellowship</span></span>}
          subtitle={t('moments_subtitle')}
        />

        {/* Inline Editorial Gallery Grid (No Lightbox/Modal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dignitaryGalleryData.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-sandstone overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 bg-charcoal-dark overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.defaultTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-charcoal-dark/90 text-gold px-2.5 py-1 rounded backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/90 text-charcoal-dark px-2 py-1 rounded backdrop-blur-sm">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Caption Area (Inline directly below image) */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-2 border-t border-sandstone">
                <h4 className="font-serif text-lg font-bold text-charcoal-dark">
                  {item.defaultTitle}
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
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
