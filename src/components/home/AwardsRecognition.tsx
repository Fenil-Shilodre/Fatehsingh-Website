"use client";

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { awardsData } from '@/data/awards';
import { motion } from 'framer-motion';

export const AwardsRecognition: React.FC = () => {
  return (
    <section id="awards" className="py-24 bg-[#F3EBD7] text-ink relative overflow-hidden border-t border-[#E7DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Honours & Accolades"
          title={
            <span>
              Awards & <span className="text-emerald italic font-normal">Recognition</span>
            </span>
          }
          subtitle="Distinguished felicitations, state citations, and lifetime honors awarded across four decades."
        />

        {/* Framed Photo + Title Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {awardsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Framed Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0F1B33] border-2 border-[#E7DEC9] group-hover:border-gold-2 shadow-paper group-hover:shadow-paper-hover transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B33]/40 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Award Title */}
              <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-ink text-center group-hover:text-emerald transition-colors px-2 leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
