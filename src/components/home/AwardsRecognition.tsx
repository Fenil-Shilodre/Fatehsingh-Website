"use client";

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { awardsData } from '@/data/awards';
import { motion } from 'framer-motion';

export const AwardsRecognition: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-[#FAF5EE] text-charcoal relative overflow-hidden border-t border-orange-100">
      {/* Background Subtle Warm Amber Glows */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-300/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Honours & Accolades"
          title={
            <span>
              Awards & <span className="text-orange-600">Recognition</span>
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
              className="flex flex-col items-center group cursor-default"
            >
              {/* Framed Image Container with Saffron Orange & Warm Amber Accents */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#080A10] border-2 border-orange-200/90 group-hover:border-orange-500 shadow-md group-hover:shadow-xl group-hover:shadow-orange-950/10 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A10]/40 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Award Title */}
              <h3 className="mt-4 font-serif text-base sm:text-lg font-bold text-[#0E111A] text-center group-hover:text-orange-600 transition-colors px-2 leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
