"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { Menu, Languages } from 'lucide-react';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { lenis } = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.replace('#', ''));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (targetId: string) => {
    setActiveSection(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -75, duration: 1.2 });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 75;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const leftNavItems = navItems.slice(0, 4);
  const rightNavItems = navItems.slice(4);

  const renderNavItem = (item: any) => {
    const targetId = item.href.replace('#', '');
    const isActive = activeSection === targetId;

    return (
      <a
        key={item.id || item.href}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
        }}
        className="group relative py-1 px-1.5 capitalize whitespace-nowrap cursor-pointer select-none focus:outline-none"
      >
        <span className="relative inline-block pb-1">
          {/* Text: Pure text shiny gold hover effect with zero background box */}
          <span className={`text-[13px] xl:text-sm 2xl:text-[15px] tracking-wide transition-all duration-300 ${
            isScrolled
              ? isActive
                ? 'text-[#B8860B] font-bold'
                : 'text-[#3B4763] font-medium group-hover:text-[#C69749] group-hover:drop-shadow-[0_0_8px_rgba(198,151,73,0.7)]'
              : isActive
                ? 'text-[#FFE8A8] font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]'
                : 'text-white/90 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] group-hover:text-[#FFE8A8] group-hover:drop-shadow-[0_0_10px_rgba(255,232,168,0.85)]'
          }`}>
            {t(item.labelKey || item.label as any, item.defaultLabel || item.label)}
          </span>

          {/* Golden Shimmer Underline */}
          <span 
            className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 rounded-full ${
              isActive 
                ? isScrolled 
                  ? 'bg-gradient-to-r from-[#B8860B] via-[#E4C77A] to-[#B8860B] w-full shadow-[0_0_8px_rgba(212,163,70,0.6)]' 
                  : 'bg-[#FFE8A8] w-full shadow-[0_0_8px_rgba(255,232,168,0.7)]' 
                : isScrolled 
                  ? 'bg-gradient-to-r from-[#B8860B] via-[#FFE8A8] to-[#B8860B] w-0 group-hover:w-full shadow-[0_0_10px_rgba(212,163,70,0.75)]' 
                  : 'bg-gradient-to-r from-[#FFE8A8] via-white to-[#FFE8A8] w-0 group-hover:w-full shadow-[0_0_10px_rgba(255,232,168,0.85)]'
            }`} 
          />
        </span>
      </a>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EB]/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)] border-b border-[#E7DEC9] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
          
          {/* Mobile Left Brand */}
          <div className="lg:hidden shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="group flex flex-col items-center focus:outline-none cursor-pointer select-none"
              aria-label="Fatehsinh Chauhan"
            >
              <span className={`font-serif font-bold text-base tracking-[0.16em] uppercase transition-all duration-300 group-hover:text-[#B8860B] ${
                isScrolled ? 'text-[#3B1E40]' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
              }`}>
                FATEHSINH CHAUHAN
              </span>
              <div className={`h-[2px] mx-auto mt-1 transition-all duration-300 rounded-full group-hover:w-[70%] ${
                isScrolled ? 'w-1/2 bg-[#C69749]' : 'w-1/2 bg-[#FFE8A8]'
              }`} />
            </a>
          </div>

          {/* Desktop Perfectly Centered Symmetrical Nav Layout */}
          <div className="hidden lg:flex items-center justify-center w-full mx-auto">
            {/* Left Nav (4 items: Biography, Institutions, Business, Public Life) */}
            <nav className="flex-1 flex items-center justify-end space-x-5 xl:space-x-8 pr-6 xl:pr-10">
              {leftNavItems.map(renderNavItem)}
            </nav>

            {/* Center Brand */}
            <div className="shrink-0 px-3 xl:px-6 text-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="group flex flex-col items-center focus:outline-none cursor-pointer select-none py-1"
                aria-label="Fatehsinh Chauhan"
              >
                <span className={`font-serif font-bold text-base xl:text-lg 2xl:text-xl tracking-[0.14em] xl:tracking-[0.16em] uppercase transition-all duration-300 group-hover:text-[#B8860B] group-hover:drop-shadow-[0_0_12px_rgba(212,163,70,0.65)] ${
                  isScrolled ? 'text-[#3B1E40]' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
                }`}>
                  FATEHSINH CHAUHAN
                </span>
                <div className={`h-[2px] mx-auto mt-1 transition-all duration-300 rounded-full group-hover:w-[70%] group-hover:shadow-[0_0_10px_rgba(212,163,70,0.8)] ${
                  isScrolled ? 'w-[45%] bg-gradient-to-r from-[#B8860B] via-[#E4C77A] to-[#B8860B]' : 'w-[45%] bg-[#FFE8A8]'
                }`} />
              </a>
            </div>

            {/* Right Nav (2 items: News & Articles, Blogs) */}
            <nav className="flex-1 flex items-center justify-start space-x-5 xl:space-x-8 pl-6 xl:pl-10">
              {rightNavItems.map(renderNavItem)}
            </nav>
          </div>

          {/* Absolute Right Controls (Language + Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3 lg:absolute lg:right-4 xl:right-8 lg:top-1/2 lg:-translate-y-1/2">
             {/* Pill Language Switcher */}
             <div className={`hidden lg:flex items-center gap-1 border rounded-full px-2.5 py-1 transition-all duration-300 ${
               isScrolled 
                 ? 'border-[#E7DEC9] bg-white/70 shadow-sm' 
                 : 'border-white/30 bg-black/35 backdrop-blur-md shadow-md'
             }`}>
              <Languages className={`w-3.5 h-3.5 mr-1 transition-colors ${isScrolled ? 'text-[#3B1E40]' : 'text-[#FFE8A8]'}`} />
              
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 text-[11px] rounded-full font-bold uppercase transition-all ${
                  language === 'en'
                    ? isScrolled ? 'bg-[#4A0E4E] text-white shadow-sm' : 'bg-[#FFE8A8] text-[#2A052D] shadow-sm font-black'
                    : isScrolled ? 'text-[#3B4763] hover:text-[#3B1E40]' : 'text-white/85 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className={`text-[10px] select-none mx-0.5 ${isScrolled ? 'text-[#D9CDAE]' : 'text-white/40'}`}>|</span>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-1.5 py-0.5 text-[11px] rounded-full font-bold uppercase transition-all ${
                  language === 'hi'
                    ? isScrolled ? 'bg-[#4A0E4E] text-white shadow-sm' : 'bg-[#FFE8A8] text-[#2A052D] shadow-sm font-black'
                    : isScrolled ? 'text-[#3B4763] hover:text-[#3B1E40]' : 'text-white/85 hover:text-white'
                }`}
              >
                हि
              </button>
              <span className={`text-[10px] select-none mx-0.5 ${isScrolled ? 'text-[#D9CDAE]' : 'text-white/40'}`}>|</span>
              <button
                type="button"
                onClick={() => setLanguage('gu')}
                className={`px-1.5 py-0.5 text-[11px] rounded-full font-bold uppercase transition-all ${
                  language === 'gu'
                    ? isScrolled ? 'bg-[#4A0E4E] text-white shadow-sm' : 'bg-[#FFE8A8] text-[#2A052D] shadow-sm font-black'
                    : isScrolled ? 'text-[#3B4763] hover:text-[#3B1E40]' : 'text-white/85 hover:text-white'
                }`}
              >
                ગુજ
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-1.5 lg:hidden focus:outline-none transition-colors ${
                isScrolled ? 'text-[#3B1E40] hover:text-[#5E1463]' : 'text-white hover:text-[#FFE8A8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
              }`}
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollTo}
      />
    </>
  );
};
