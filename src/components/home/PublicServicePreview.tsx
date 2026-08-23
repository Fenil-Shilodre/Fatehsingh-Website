"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { timelineData, TimelineItem } from '@/data/timeline';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';
import { Award } from 'lucide-react';

export const PublicServicePreview: React.FC = () => {
  const { t } = useLanguage();
  const { lenis } = useSmoothScroll();
  const [selectedEra, setSelectedEra] = useState<'all' | '1980s' | '1990s' | '2000s'>('all');
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineMeta, setLineMeta] = useState<{ top: number; height: number; fillHeight: number }>({
    top: 0,
    height: 0,
    fillHeight: 0,
  });
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const filteredItems = selectedEra === 'all'
    ? timelineData
    : timelineData.filter(item => item.era === selectedEra);

  // Synchronous Scroll Gesture Line Fill strictly bounded between Node 1 center and Last Node center
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const nodes = timelineRef.current.querySelectorAll('.timeline-node-dot');
      if (nodes.length === 0) return;

      const firstNode = nodes[0] as HTMLElement;
      const lastNode = nodes[nodes.length - 1] as HTMLElement;
      const timelineRect = timelineRef.current.getBoundingClientRect();

      const firstNodeRect = firstNode.getBoundingClientRect();
      const lastNodeRect = lastNode.getBoundingClientRect();

      const firstNodeCenterY = firstNodeRect.top + firstNodeRect.height / 2;
      const lastNodeCenterY = lastNodeRect.top + lastNodeRect.height / 2;

      // Start line at exact center of first circle node
      const startY = firstNodeCenterY - timelineRect.top;
      // End line at exact center of last circle node
      const endY = lastNodeCenterY - timelineRect.top;
      const totalLength = Math.max(0, endY - startY);

      // Trigger focal point at 50% of viewport height
      const focalPointY = window.innerHeight * 0.5;
      const scrollableDist = Math.max(1, lastNodeCenterY - firstNodeCenterY);

      let progress = (focalPointY - firstNodeCenterY) / scrollableDist;
      progress = Math.max(0, Math.min(1, progress));

      const fillHeight = progress * totalLength;

      setLineMeta({
        top: startY,
        height: totalLength,
        fillHeight,
      });

      // Active node calculation based on focal point
      let currentActive = 0;
      nodes.forEach((node, idx) => {
        const r = node.getBoundingClientRect();
        if (r.top <= focalPointY + 20) {
          currentActive = idx;
        }
      });

      setActiveItemIndex(currentActive);
    };

    if (lenis) {
      lenis.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    handleScroll();
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (lenis) {
        lenis.off('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleScroll);
    };
  }, [lenis, selectedEra]);

  return (
    <section id="service" className="py-20 bg-charcoal-dark text-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow={t('service_eyebrow')}
          title={<span>Four Decades of <span className="text-gold">Civic Stewardship</span></span>}
          subtitle={t('service_subtitle')}
        />

        {/* Era Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          <button
            onClick={() => setSelectedEra('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
              selectedEra === 'all'
                ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950/40 border border-orange-400/50'
                : 'bg-white/10 text-ivory/70 hover:text-ivory'
            }`}
          >
            {t('filter_all')}
          </button>
          <button
            onClick={() => setSelectedEra('1980s')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
              selectedEra === '1980s'
                ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950/40 border border-orange-400/50'
                : 'bg-white/10 text-ivory/70 hover:text-ivory'
            }`}
          >
            🏛️ 1980s: Dawn of Public Life
          </button>
          <button
            onClick={() => setSelectedEra('1990s')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
              selectedEra === '1990s'
                ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950/40 border border-orange-400/50'
                : 'bg-white/10 text-ivory/70 hover:text-ivory'
            }`}
          >
            📜 1990s: Governance & Council
          </button>
          <button
            onClick={() => setSelectedEra('2000s')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
              selectedEra === '2000s'
                ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950/40 border border-orange-400/50'
                : 'bg-white/10 text-ivory/70 hover:text-ivory'
            }`}
          >
            🌟 2000s+: Institutional Leadership
          </button>
        </div>

        {/* Vertical Timeline Container */}
        <div ref={timelineRef} className="relative ml-2 md:ml-40 space-y-16 my-8">
          
          {/* Outer Track Bounds Container (Node 1 Center to Node N Center) */}
          <div
            className="absolute left-4 md:left-6 -translate-x-1/2 w-[3px] pointer-events-none"
            style={{
              top: `${lineMeta.top}px`,
              height: `${lineMeta.height}px`,
            }}
          >
            {/* Background Track Line - Connects Node 1 to Last Node */}
            <div className="w-full h-full bg-white/20 rounded-full" />

            {/* Dynamic Progress Fill Line with Integrated Glowing Head Orb at Tip */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-600 via-amber-500 to-amber-300 rounded-full shadow-[0_0_12px_#EA580C]"
              style={{
                height: `${lineMeta.fillHeight}px`,
              }}
            >
              {/* Head Orb is physically ATTACHED to the bottom tip of the fill line with ZERO GAP */}
              {lineMeta.fillHeight > 5 && lineMeta.fillHeight < lineMeta.height - 5 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-amber-400 rounded-full shadow-[0_0_16px_#F59E0B,0_0_25px_#EA580C] ring-4 ring-orange-500/50 animate-pulse z-20" />
              )}
            </div>
          </div>

          {filteredItems.map((item: TimelineItem, index: number) => {
            const isActive = index <= activeItemIndex;
            const isCurrentFocus = index === activeItemIndex;

            return (
              <div key={item.id} className="timeline-node-wrapper relative group pl-12 md:pl-16">
                
                {/* Node Circle */}
                <div
                  className={`timeline-node-dot absolute left-4 md:left-6 -translate-x-1/2 top-6 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isCurrentFocus
                      ? 'bg-orange-600 ring-8 ring-orange-500/30 shadow-[0_0_25px_#EA580C] scale-125'
                      : isActive
                      ? 'bg-amber-400 ring-4 ring-amber-400/30 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
                      : 'bg-charcoal border-2 border-orange-500/40'
                  }`}
                >
                  {/* Inner Center Dot */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isActive ? 'bg-charcoal-dark' : 'bg-amber-400/40'
                    }`}
                  />
                </div>

                {/* Left Desktop Year Marker */}
                <div className="hidden md:block absolute -left-36 top-6 -translate-y-1/2 text-right w-28 transition-all duration-300">
                  <span className={`font-serif text-sm font-bold block transition-colors duration-300 ${
                    isActive ? 'text-amber-300 scale-105' : 'text-ivory/50'
                  }`}>
                    {item.yearText}
                  </span>
                  <span className="text-[10px] text-ivory/40 uppercase tracking-widest block">
                    {item.era}
                  </span>
                </div>

                {/* Card Container */}
                <div className={`bg-charcoal p-6 md:p-8 rounded-xl border transition-all duration-300 shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${
                  isCurrentFocus
                    ? 'border-orange-500/60 ring-1 ring-orange-500/30 shadow-[0_0_25px_rgba(234,88,12,0.2)] bg-charcoal/95'
                    : isActive
                    ? 'border-orange-500/30'
                    : 'border-white/10 opacity-80'
                }`}>
                  {/* Content */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="md:hidden flex items-center justify-between gap-2 mb-1">
                      <span className={`font-serif text-sm font-bold ${isActive ? 'text-amber-300' : 'text-ivory/60'}`}>
                        {item.yearText}
                      </span>
                      <span className="text-[10px] text-amber-300 uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block">
                      {item.roleText}
                    </span>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ivory">
                      {item.bodyText}
                    </h3>

                    <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                      {item.descText}
                    </p>

                    <div className="text-xs text-gold/80 italic flex items-center gap-1.5 pt-2">
                      <Award className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{item.caption}</span>
                    </div>
                  </div>

                  {/* Archival Milestone Image */}
                  <div className="md:col-span-4">
                    <div className="relative w-full h-48 rounded overflow-hidden border border-gold/30 bg-charcoal-deep shadow-md">
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
