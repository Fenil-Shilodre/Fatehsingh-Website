'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function ActionPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Parallax for the quote background
  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} id="enterprise" className="bg-ivory text-ink pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto space-y-20 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Connect enterprise with public responsibility
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full" />
        </motion.div>

        {/* Two Complementary Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* Story 1: Enterprise */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-paper border border-[#E7DEC9] p-8 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className="space-y-8">
              <div className="relative aspect-[16/10] bg-[#EAE2D5] overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Gujarati Ceremonial Entrance Plaque.png"
                  alt="Industrial Enterprise & Philanthropy - Datashree Plaque"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-3 drop-shadow-sm">
                    Haveli Parivar / Datashree Plaque
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-snug">
                  Modest beginnings building monumental ambition
                </h3>
                <p className="font-sans text-base text-muted leading-relaxed">
                  In 1974-75, Divyang Electrics. In 1979, Shalimar Cement Products, a cement-tile factory, started with second-hand machines. In 1995-96, the Haveli Group. He put what he earned back into Dadra and Nagar Haveli.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E7DEC9]">
              <a
                href="#business"
                className="group/btn inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4A0E4E] hover:text-gold-2 transition-colors"
              >
                <span>Enterprise</span>
                <ArrowRight className="w-4 h-4 text-gold-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Story 2: Public Life */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-paper border border-[#E7DEC9] p-8 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className="space-y-8">
              <div className="relative aspect-[16/10] bg-[#EAE2D5] overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Council Image_01.jpg.jpeg"
                  alt="Public Life Archival Record"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-3 drop-shadow-sm">
                    Varishtha Panchayat & Pradesh Council
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-snug">
                  Building also needs public work
                </h3>
                <p className="font-sans text-base text-muted leading-relaxed">
                  He served on the Varishtha Panchayat in 1986 and the Pradesh Council in 1987. Then he became Counselor to the Administrator in 1989 and continued to keep polluting industries out of Dadra and Nagar Haveli.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E7DEC9]">
              <a
                href="#public-life"
                className="group/btn inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4A0E4E] hover:text-gold-2 transition-colors"
              >
                <span>Public Life</span>
                <ArrowRight className="w-4 h-4 text-gold-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>

      {/* QUOTE SECTION */}
      <div ref={quoteRef} className="w-full bg-gradient-to-br from-[#E07A2A] via-[#D46A1C] to-[#B8520B] text-[#FBF4E6] py-24 sm:py-32 px-6 sm:px-14 md:px-20 border-t border-[#FBF4E6]/20 relative overflow-hidden group mt-32">
        {/* Background Illustration */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <motion.img
            style={{ y: bgY }}
            src="/images/quote-bg-new.jpg"
            alt="Integrity & Upright Stance Illustration"
            className="w-full h-[140%] object-cover object-center opacity-30 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,122,42,0.85)_0%,rgba(184,82,11,0.95)_100%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FBF4E6] font-normal italic leading-relaxed drop-shadow-md">
            “As long as we are alive, we should live with our heads held high.”
          </blockquote>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FBF4E6]/90">
            — Fatehsinh Mohansinh Chauhan
          </p>
        </div>
      </div>
    </section>
  );
}
