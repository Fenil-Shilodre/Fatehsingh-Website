"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { timelineData, TimelineItem } from '@/data/timeline';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';
import { Award, Landmark, ScrollText, Star } from 'lucide-react';

export const PublicServicePreview: React.FC = () => {
  const { t } = useLanguage();
  const { lenis } = useSmoothScroll();
  const [selectedEra, setSelectedEra] = useState<'all' | '1980s' | '1990s' | '2000s'>('all');
  
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  const filteredItems = selectedEra === 'all'
    ? timelineData
    : timelineData.filter(item => item.era === selectedEra);

  // Pure Lenis-driven smooth scroll progression
  useEffect(() => {
    const updateProgress = (currentScrollY?: number) => {
      const el = trackRef.current;
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollY = typeof currentScrollY === 'number' ? currentScrollY : window.scrollY;
      const elTopAbs = rect.top + window.scrollY;
      const elH = el.offsetHeight || 1;
      
      // Progress calculation linked to viewport
      const start = elTopAbs - vh * 0.70;
      const end = elTopAbs + elH - vh * 0.30;
      const denom = Math.max(1, end - start);
      const pct = Math.max(0, Math.min(100, ((scrollY - start) / denom) * 100));

      if (fillRef.current) {
        fillRef.current.style.height = `${pct}%`;
      }
      if (headRef.current) {
        headRef.current.style.top = `${pct}%`;
      }
    };

    const handleLenisScroll = (e: any) => {
      const scrollVal = typeof e?.scroll === 'number' ? e.scroll : window.scrollY;
      updateProgress(scrollVal);
    };

    const handleNativeScroll = () => {
      updateProgress(window.scrollY);
    };

    if (lenis) {
      lenis.on('scroll', handleLenisScroll);
    }
    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('resize', handleNativeScroll);

    updateProgress();
    const t1 = setTimeout(() => updateProgress(), 150);
    const t2 = setTimeout(() => updateProgress(), 600);

    return () => {
      if (lenis) {
        lenis.off('scroll', handleLenisScroll);
      }
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('resize', handleNativeScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [lenis, selectedEra, filteredItems.length]);

  return (
    <section id="service" className="relative bg-[#FAF5EB] py-24 paper-grain text-ink">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t('service_eyebrow')}
          title={<span>Four Decades of <span className="text-emerald italic font-normal">Civic Stewardship</span></span>}
          subtitle={t('service_subtitle')}
        />

        {/* Filter Chips with Lucide Icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedEra('all')}
            className={`chip ${selectedEra === 'all' ? 'active' : ''}`}
          >
            <Award className="w-4 h-4" />
            <span>All Milestones</span>
          </button>
          <button
            onClick={() => setSelectedEra('1980s')}
            className={`chip ${selectedEra === '1980s' ? 'active' : ''}`}
          >
            <Landmark className="w-4 h-4" />
            <span>1980s: Dawn of Public Life</span>
          </button>
          <button
            onClick={() => setSelectedEra('1990s')}
            className={`chip ${selectedEra === '1990s' ? 'active' : ''}`}
          >
            <ScrollText className="w-4 h-4" />
            <span>1990s: Governance & Council</span>
          </button>
          <button
            onClick={() => setSelectedEra('2000s')}
            className={`chip ${selectedEra === '2000s' ? 'active' : ''}`}
          >
            <Star className="w-4 h-4" />
            <span>2000s+: Institutional Leadership</span>
          </button>
        </div>

        {/* Timeline Track with Scrolling Rail and Glowing Orb */}
        <div ref={trackRef} className="mt-16 relative">
          
          {/* Continuous Rail Line & Lenis-Driven Head Orb */}
          <div className="timeline-rail" aria-hidden="true">
            <div className="timeline-rail-bg" />
            <div
              ref={fillRef}
              className="timeline-rail-fill"
              style={{ height: '0%' }}
            />
            <div
              ref={headRef}
              className="timeline-rail-head"
              style={{ top: '0%' }}
            />
          </div>

          {/* Milestone Items */}
          <div className="space-y-10">
            {filteredItems.map((item: TimelineItem) => (
              <div
                key={item.id}
                className="relative pl-[110px] md:pl-[170px] timeline-row group"
              >
                {/* Left Date / Decade Marker */}
                <div className="absolute left-0 top-4 w-[76px] md:w-[110px] text-right">
                  <div className="font-serif text-[#0F4A3C] font-semibold italic text-base md:text-lg">
                    {item.yearText}
                  </div>
                  <div className="text-[10px] tracking-widest text-[#B8860B] uppercase mt-0.5 font-semibold">
                    {item.era}
                  </div>
                </div>

                {/* Milestone Node Dot on the Rail */}
                <div className="tl-dot animate-pulse-ring" />

                {/* Milestone Card */}
                <div className="card-paper p-6 md:p-7 grid md:grid-cols-[1fr_220px] gap-6 items-start">
                  
                  {/* Card Content Left */}
                  <div className="flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[10px] tracking-[0.2em] text-[#B8860B] uppercase font-semibold">
                        {item.roleText}
                      </div>

                      <h3 className="mt-2 font-serif text-xl md:text-2xl text-[#1A2540] font-semibold group-hover:text-emerald transition-colors">
                        {item.bodyText}
                      </h3>

                      <p className="mt-3 text-[#4A5568] leading-relaxed text-sm font-sans">
                        {item.descText}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="my-2 h-px bg-gradient-to-r from-[#E7DEC9] via-[#D9CDAE] to-transparent" />
                      <div className="flex items-center gap-1.5 text-xs text-[#0F4A3C] font-medium italic">
                        <Award className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                        <span>{item.caption}</span>
                      </div>
                    </div>
                  </div>

                  {/* Archival Milestone Image */}
                  <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden border border-[#E7DEC9] bg-[#FAF5EB] shadow-xs">
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 220px"
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
