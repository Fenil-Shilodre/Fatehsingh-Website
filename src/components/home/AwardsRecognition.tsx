"use client";

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { awardsData } from '@/data/awards';
import { motion } from 'framer-motion';

export const AwardsRecognition: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-[#F0F4F8] text-charcoal relative overflow-hidden border-t border-royal-100">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-royal-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Honours & Accolades"
          title={
            <span>
              Awards & <span className="text-royal-800">Recognition</span>
            </span>
          }
          subtitle="Distinguished felicitations, state citations, and lifetime honors awarded across four decades."
        />

        {/* Static Framed Photo + Title Grid (No Modal on Click) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {awardsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex flex-col items-center group"
            >
              {/* Framed Image Container with Royal Blue & Gold Accents */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0A1326] border-2 border-royal-200/80 group-hover:border-gold shadow-md group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1326]/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Award Title */}
              <h3 className="mt-4 font-serif text-base sm:text-lg font-bold text-[#0F172A] text-center group-hover:text-royal-700 transition-colors px-2 leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
