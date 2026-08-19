"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';
import { silwasaPlaces } from '@/data/silwasaPlaces';
import { Lock, History, Landmark } from 'lucide-react';

export const LegacyPreview: React.FC = () => {
  const { t } = useLanguage();
  const { lenis } = useSmoothScroll();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineMeta, setLineMeta] = useState<{ top: number; height: number; fillHeight: number }>({
    top: 0,
    height: 0,
    fillHeight: 0,
  });
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const highlights = [
    {
      era: "Ancestral Foundation",
      title: "Shri Virsinhji Chauhan & Late Shri Mohansinhji Chauhan",
      desc: "Deep-rooted agricultural stewardship and community welfare traditions in Silvassa.",
      year: "Early 20th Century",
      hasHeritageImage: true
    },
    {
      era: "Institutional Era",
      title: "Late Smt. Devkiba Mohansinhji Chauhan Tribute",
      desc: "Establishing the foundation for comprehensive educational institutions in Dadra & Nagar Haveli.",
      year: "1980s Onwards",
      hasHeritageImage: false
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const nodes = timelineRef.current.querySelectorAll('.legacy-node-dot');
      if (nodes.length === 0) return;

      const firstNode = nodes[0] as HTMLElement;
      const lastNode = nodes[nodes.length - 1] as HTMLElement;
      const timelineRect = timelineRef.current.getBoundingClientRect();

      const firstNodeRect = firstNode.getBoundingClientRect();
      const lastNodeRect = lastNode.getBoundingClientRect();

      const firstNodeCenterY = firstNodeRect.top + firstNodeRect.height / 2;
      const lastNodeCenterY = lastNodeRect.top + lastNodeRect.height / 2;

      const startY = firstNodeCenterY - timelineRect.top;
      const endY = lastNodeCenterY - timelineRect.top;
      const totalLength = Math.max(0, endY - startY);

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

      let currentActive = 0;
      nodes.forEach((node, idx) => {
        const r = node.getBoundingClientRect();
        if (r.top <= focalPointY + 15) {
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
  }, [lenis]);

  return (
    <section id="legacy-preview" className="py-20 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Family Legacy"
          title="Ancestral Roots & Territorial Heritage"
          subtitle="A vertical editorial preview of the generational leadership rooted in the soil of Silvassa."
        />

        {/* Dynamic Vertical Timeline */}
        <div ref={timelineRef} className="relative ml-2 md:ml-36 space-y-12 my-12">
          
          {/* Outer Track Bounds Container */}
          <div
            className="absolute left-4 md:left-6 -translate-x-1/2 w-[3px] pointer-events-none"
            style={{
              top: `${lineMeta.top}px`,
              height: `${lineMeta.height}px`,
            }}
          >
            {/* Background Track Line */}
            <div className="w-full h-full bg-sandstone-dark/50 rounded-full" />

            {/* Dynamic Progress Fill Line with Integrated Head Orb */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-terracotta via-terracotta-light to-gold rounded-full shadow-[0_0_12px_#B8533C]"
              style={{
                height: `${lineMeta.fillHeight}px`,
              }}
            >
              {lineMeta.fillHeight > 5 && lineMeta.fillHeight < lineMeta.height - 5 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-[0_0_16px_#C5A059,0_0_25px_#B8533C] ring-4 ring-terracotta/50 animate-pulse z-20" />
              )}
            </div>
          </div>

          {highlights.map((item, idx) => {
            const isActive = idx <= activeItemIndex;
            const isCurrentFocus = idx === activeItemIndex;

            return (
              <div key={idx} className="legacy-node-wrapper relative pl-12 md:pl-16 group">
                
                {/* Node Circle */}
                <div
                  className={`legacy-node-dot absolute left-4 md:left-6 -translate-x-1/2 top-6 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isCurrentFocus
                      ? 'bg-terracotta ring-8 ring-terracotta/30 shadow-[0_0_25px_#B8533C] scale-125'
                      : isActive
                      ? 'bg-gold ring-4 ring-gold/30 shadow-[0_0_12px_rgba(197,160,89,0.7)]'
                      : 'bg-white border-2 border-gold/40'
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isActive ? 'bg-charcoal-dark' : 'bg-gold/40'
                    }`}
                  />
                </div>

                <div className={`bg-white p-6 md:p-8 rounded-lg border transition-all duration-300 shadow-sm ${
                  isCurrentFocus
                    ? 'border-gold/60 ring-1 ring-gold/30 shadow-md'
                    : 'border-sandstone'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta px-2.5 py-0.5 rounded bg-terracotta/10">
                      {item.era}
                    </span>
                    <span className="text-xs font-serif italic text-gold-dark font-medium">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className={item.hasHeritageImage ? "md:col-span-8" : "md:col-span-12"}>
                      <h3 className="font-serif text-xl font-bold text-charcoal-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal/70 leading-relaxed font-sans mb-3">
                        {item.desc}
                      </p>
                      {item.hasHeritageImage && (
                        <div className="inline-flex items-center gap-1.5 text-xs text-terracotta font-medium italic pt-1">
                          <Landmark className="w-3.5 h-3.5" />
                          <span>{silwasaPlaces.heritage.title} · {silwasaPlaces.heritage.location}</span>
                        </div>
                      )}
                    </div>

                    {item.hasHeritageImage && (
                      <div className="md:col-span-4">
                        <div className="relative w-full h-44 rounded-lg overflow-hidden border border-sandstone shadow-sm bg-sandstone/20">
                          <Image
                            src={silwasaPlaces.heritage.src}
                            alt={silwasaPlaces.heritage.alt}
                            fill
                            loading="lazy"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 250px"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disabled Future State Action Control */}
        <div className="text-center pt-6">
          <div className="inline-flex flex-col items-center gap-2">
            <Button
              variant="outline"
              disabled
              icon={<Lock className="w-4 h-4 text-gold-muted" />}
              className="px-8 py-3 opacity-60 cursor-not-allowed"
            >
              Explore Full Legacy Archive
            </Button>
            <span className="text-xs text-charcoal/50 italic flex items-center gap-1">
              <History className="w-3.5 h-3.5" /> Complete Legacy page reserved for future phase
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
