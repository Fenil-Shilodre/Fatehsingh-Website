'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
type StoryType = string;
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface EducationalJourneyProps {
  onOpenStory?: (story: StoryType) => void;
}

export function EducationalJourney({ onOpenStory }: EducationalJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.fromTo(
      '.section-header',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 85%',
        },
      }
    );

    // Chapter animations (Stacked Cards Effect)
    const chapters = gsap.utils.toArray('.chapter-item');
    chapters.forEach((chapter: any, i) => {
      const img = chapter.querySelector('.chapter-img');

      // Parallax image
      gsap.fromTo(
        img,
        { scale: 1.1, y: -20 },
        {
          scale: 1,
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: chapter,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Scale down card when the NEXT card overlaps it
      if (i < chapters.length - 1) {
        // 1. Width/Scale reduction (starts early when next card overlaps by 20%)
        gsap.to(chapter, {
          scale: 0.8, // Good depth, noticeable width reduction
          ease: 'none',
          scrollTrigger: {
            trigger: chapters[i + 1] as Element,
            start: 'top 80%', // Starts early (20% overlap)
            end: 'top 130px',
            scrub: true,
          }
        });

        // 2. Blur and Opacity reduction (starts exactly at halfway point)
        gsap.to(chapter, {
          opacity: 0.2, // Darken as it goes back
          filter: 'blur(12px)',
          ease: 'none',
          scrollTrigger: {
            trigger: chapters[i + 1] as Element,
            start: 'top 50%', // Starts exactly when the next card reaches halfway up the screen
            end: 'top 130px', // Finishes just as it docks
            scrub: true,
          }
        });
      }
    });

    // Quote Parallax
    gsap.fromTo(
      '.quote-bg',
      { y: -30, scale: 1.1 },
      {
        y: 30,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.quote-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  const chapters = [
    {
      number: '01',
      title: 'Naroli to Mumbai',
      subtitle: 'Early photograph / school',
      text: 'He studied at the government school in Naroli until the ninth standard. Then he moved to an English-medium classroom in Mumbai and took a seat on the back bench. Within the year, he came first in an English handwriting test. It showed him how far he could go, and what his own land could become.',
      imageSrc: '/images/31.jpg',
    },
    {
      number: '02',
      title: 'Back home, the same gap',
      subtitle: 'Local learning context',
      text: 'In Dadra and Nagar Haveli, a child who wanted more education had to leave home to find it. Leaving was the only way forward, when it should have been a choice. Girls and first-generation students likely don’t get that option.',
      imageSrc: '/images/40.jpg',
    },
    {
      number: '03',
      title: 'So he brought education home',
      subtitle: 'Lions English School archival photograph',
      text: 'In 1983, he founded the Lions Club of Silvassa Charitable Trust. Lions English School opened that year in a rented space, with fifteen students. The school grew into a college in 2014, and the college into a law institute in 2017. For over four decades, he has kept the Trust running and kept taking it forward.',
      imageSrc: '/images/83.jpg',
    },
    {
      number: '04',
      title: 'And that was just the beginning',
      subtitle: 'Access beyond buildings · Learning / community',
      text: 'From there on, Fatehsinh kept looking at what stood between his people and opportunity. From legal aid and students’ access to entrance exams, to hygiene education and campaigns for the girl child, the aim stayed the same: make the door easier to walk through.',
      imageSrc: '/images/80.jpg',
      hasButton: true,
    },
  ];

  return (
    <section ref={containerRef} id="journey" className="journey-background relative text-[#1E1B18] pt-24 border-b border-[#E8E0D2]">
      <div className="relative max-w-7xl mx-auto space-y-24 z-10 px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="section-header max-w-2xl space-y-3">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1E40] font-normal leading-tight">
            Naroli to Mumbai and the gap back home
          </h2>
          <div className="w-16 h-[2px] bg-[#E07A2A]" />
        </div>

        {/* Chapters Vertical Sequence (Structure PDF Page 3 & 4) */}
        <div className="space-y-32 pb-32">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.title}
              className="chapter-item journey-card sticky top-28 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-6 sm:p-10 lg:p-14 origin-top"
              style={{ zIndex: index + 10 }}
            >
              {/* Left Column: Archival Image / Visual */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-lg bg-[#EAE2D5] overflow-hidden border border-[#3B1E40]/15 shadow-sm group">
                  <img
                    src={chapter.imageSrc}
                    alt={chapter.title}
                    className="chapter-img w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#F5B800]">
                      {chapter.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Copy */}
              <div className="chapter-text lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-sans font-bold text-[#E07A2A]">
                    Chapter {chapter.number}
                  </span>
                  <span className="w-8 h-[1px] bg-[#E07A2A]/40" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#3B1E40] font-normal leading-snug">
                  {chapter.title}
                </h3>

                <p className="text-base sm:text-lg text-[#1E1B18]/85 font-light leading-relaxed max-w-2xl">
                  {chapter.text}
                </p>

                {chapter.hasButton && (
                  <div className="pt-3">
                    <button
                      onClick={() => onOpenStory ? onOpenStory('institutions') : undefined}
                      className="group inline-flex items-center gap-3 bg-[#3B1E40] hover:bg-[#28122C] text-[#FBF4E6] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
                    >
                      <span>Open Doors</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#F5B800]" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 03 CHARACTER: Hindi Quotation Panel with Connected Swabhav (Roots & Character) Illustration */}
      <div className="quote-container w-full bg-gradient-to-br from-[#E07A2A] via-[#D46A1C] to-[#B8520B] text-[#FBF4E6] py-20 px-6 sm:px-14 md:px-20 border-t border-[#FBF4E6]/20 shadow-2xl relative overflow-hidden group">
        {/* Background Illustration connecting directly to "Swabhav / Character / Roots" */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <img
            src="/images/character-illustration.jpg"
            alt="Swabhav - Tree of Nature and Roots Illustration"
            className="quote-bg w-full h-full object-cover object-center opacity-35 mix-blend-multiply transition-transform duration-1000 group-hover:scale-100"
          />
          {/* Center radial vignette to ensure crystal-clear text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,122,42,0.85)_0%,rgba(184,82,11,0.95)_100%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FBF4E6] font-normal leading-relaxed drop-shadow-md italic">
            “Everything lies in your nature... Whatever you achieve will be through your nature. So, understand your nature.”
          </blockquote>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          <p className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.2em] text-[#FBF4E6]/90">
            — Fatehsinh Mohansinh Chauhan
          </p>
        </div>
      </div>
    </section>
  );
}
