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
          scrollTo(targetId);
        }}
        className={`group relative py-1 text-sm xl:text-[15px] capitalize whitespace-nowrap transition-colors duration-200 cursor-pointer select-none focus:outline-none ${
          isActive
            ? 'text-[#3B1E40] font-bold'
            : 'text-[#3B4763] hover:text-[#3B1E40] font-medium'
        }`}
      >
        <span className="relative inline-block pb-1">
          {t(item.labelKey || item.label as any, item.defaultLabel || item.label)}
          {/* Active Underline */}
          <span 
            className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
              isActive 
                ? 'bg-[#C69749] w-full' 
                : 'bg-[#C69749]/70 w-0 group-hover:w-full'
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
            ? 'bg-[#FAF5EB]/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] py-4'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between lg:justify-center">
          
          {/* Mobile Left Brand */}
          <div className="lg:hidden shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="flex flex-col items-center focus:outline-none cursor-pointer select-none"
              aria-label="Fatehsinh Chauhan"
            >
              <span className="font-serif font-bold text-base tracking-[0.16em] uppercase text-[#3B1E40]">
                FATEHSINH CHAUHAN
              </span>
              <div className="w-1/2 h-[2px] bg-[#C69749] mx-auto mt-1" />
            </a>
          </div>

          {/* Desktop Centered Nav Layout */}
          <div className="hidden lg:flex items-center justify-center w-full max-w-6xl mx-auto">
            {/* Left Nav */}
            <nav className="flex-1 flex justify-end pr-8 xl:pr-12 space-x-6 xl:space-x-8">
              {leftNavItems.map(renderNavItem)}
            </nav>

            {/* Center Brand */}
            <div className="shrink-0 px-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('home');
                }}
                className="flex flex-col items-center focus:outline-none cursor-pointer select-none"
                aria-label="Fatehsinh Chauhan"
              >
                <span className="font-serif font-bold text-xl tracking-[0.16em] uppercase text-[#3B1E40]">
                  FATEHSINH CHAUHAN
                </span>
                <div className="w-[40%] h-[2px] bg-[#C69749] mx-auto mt-1" />
              </a>
            </div>

            {/* Right Nav */}
            <nav className="flex-1 flex justify-start pl-8 xl:pl-12 space-x-6 xl:space-x-8">
              {rightNavItems.map(renderNavItem)}
            </nav>
          </div>

          {/* Absolute Right Controls (Language + Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3 lg:absolute lg:right-8">
             {/* Pill Language Switcher */}
             <div className="hidden lg:flex items-center gap-1 border border-[#E7DEC9] rounded-full px-2.5 py-1 bg-white/70 shadow-sm transition-colors">
              <Languages className="w-3.5 h-3.5 mr-1 text-[#3B1E40]" />
              
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 text-[11px] rounded-full font-bold uppercase transition-all ${
                  language === 'en'
                    ? 'bg-[#4A0E4E] text-white shadow-sm'
                    : 'text-[#3B4763] hover:text-[#3B1E40]'
                }`}
              >
                EN
              </button>
              <span className="text-[10px] select-none text-[#D9CDAE] mx-0.5">|</span>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-1.5 py-0.5 text-[11px] rounded-full font-bold uppercase transition-all ${
                  language === 'hi'
                    ? 'bg-[#4A0E4E] text-white shadow-sm'
                    : 'text-[#3B4763] hover:text-[#3B1E40]'
                }`}
              >
                हि
              </button>
              <span className="text-[10px] select-none text-[#D9CDAE] mx-0.5">|</span>
              <button
                type="button"
                onClick={() => setLanguage('gu')}
                className={`px-1.5 py-0.5 text-[11px] rounded-full font-bold uppercase transition-all ${
                  language === 'gu'
                    ? 'bg-[#4A0E4E] text-white shadow-sm'
                    : 'text-[#3B4763] hover:text-[#3B1E40]'
                }`}
              >
                ગુજ
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 lg:hidden focus:outline-none text-[#3B1E40] hover:text-[#5E1463] transition-colors"
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
