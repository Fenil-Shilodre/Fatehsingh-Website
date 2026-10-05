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
    <section ref={containerRef} id="enterprise" className="bg-ivory text-ink pt-24 sm:pt-32 relative overflow-hidden">
      {/* Background Mural Illustration on Right Side (100% Seamless Organic Blend with Zero Edge) */}
      <div className="absolute top-0 right-0 w-full sm:w-[85%] lg:w-[68%] xl:w-[60%] h-[560px] sm:h-[720px] lg:h-[840px] pointer-events-none select-none z-0 overflow-hidden [mask-image:radial-gradient(ellipse_90%_80%_at_78%_25%,black_35%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_90%_80%_at_78%_25%,black_35%,transparent_90%)]">
        <img
          src="/images/civic-illustration-transparent.png"
          alt="Civic Stewardship and Governance Illustration Mural"
          className="w-full h-full object-contain object-right-top opacity-20 sm:opacity-30 filter contrast-[1.05] translate-x-2 sm:translate-x-6"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-20 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#B8860B]">
            Enterprise &amp; Public Stewardship
          </span>
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
      <div ref={quoteRef} className="w-full relative text-[#FBF4E6] py-24 sm:py-32 px-6 sm:px-14 md:px-20 border-t border-[#FBF4E6]/20 overflow-hidden group mt-32 bg-[#2D0B05]">
        {/* Hero Background Watercolor Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Atmosphere"
            fill
            className="object-cover object-center filter brightness-[0.72] contrast-[1.12]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#3B1208]/45 to-black/75" />
        </div>

        {/* Background Illustration */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none flex items-center justify-center">
          <motion.img
            style={{ y: bgY }}
            src="/images/heads-held-high-transparent.png"
            alt="Integrity & Upright Stance - Heads Held High"
            className="w-full max-w-3xl lg:max-w-4xl h-auto object-contain opacity-35 sm:opacity-40 drop-shadow-[0_0_15px_rgba(255,232,168,0.4)]"
          />
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
