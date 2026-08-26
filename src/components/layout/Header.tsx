"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { Menu, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { lenis } = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'lineage',
      'service',
      'institutions',
      'haveli-group',
      'moments',
      'philosophy',
      'contact',
    ];

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

  // Split nav items into left (4) and right (4) groups
  const leftNavItems = navItems.slice(0, 4);
  const rightNavItems = navItems.slice(4);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EB]/95 backdrop-blur-md shadow-md shadow-black/5 py-3 border-b border-[#E7DEC9]'
            : 'bg-[#FAF5EB]/85 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] py-3.5 border-b border-[#E7DEC9]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Desktop Left Nav Items (Home, Lineage, Service, Institutions) */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6 flex-1 justify-start">
            {leftNavItems.map((item, idx) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(targetId);
                  }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + idx * 0.04 }}
                  className={`group relative py-1.5 px-2 xl:px-3 text-xs xl:text-sm tracking-wide transition-colors duration-200 cursor-pointer select-none focus:outline-none ${
                    isActive
                      ? 'text-[#0F4A3C] font-semibold'
                      : 'text-[#2D3748]/85 hover:text-[#0F4A3C] font-medium'
                  }`}
                >
                  <span className="relative inline-block">
                    {t(item.labelKey as any, item.defaultLabel)}
                    {/* Active Gold Underline Bar */}
                    <span 
                      className={`absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#C69749] w-full shadow-xs' 
                          : 'bg-[#C69749]/70 w-0 group-hover:w-full'
                      }`} 
                    />
                  </span>
                </motion.a>
              );
            })}
          </nav>

          {/* Center Brand Identity (FATEHSINH CHAUHAN) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0 px-2 sm:px-4 xl:px-6 text-center"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer select-none"
              aria-label="Fatehsinh Chauhan"
            >
              <span className="font-serif font-bold text-base sm:text-lg xl:text-xl tracking-[0.14em] text-[#0F4A3C] group-hover:text-[#1B6B54] transition-colors duration-300">
                FATEHSINH CHAUHAN
              </span>
              
              {/* Delicate Gold Accent Line */}
              <span className="block h-[2px] w-12 sm:w-16 bg-[#B8860B] rounded-full mx-auto mt-1 opacity-80 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </a>
          </motion.div>

          {/* Desktop Right Nav Items (Haveli, Moments, Philosophy, Contact) + Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-6 flex-1 justify-end">
            <nav className="flex items-center space-x-2 xl:space-x-6">
              {rightNavItems.map((item, idx) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(targetId);
                    }}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + idx * 0.04 }}
                    className={`group relative py-1.5 px-2 xl:px-3 text-xs xl:text-sm tracking-wide transition-colors duration-200 cursor-pointer select-none focus:outline-none ${
                      isActive
                        ? 'text-[#0F4A3C] font-semibold'
                        : 'text-[#2D3748]/85 hover:text-[#0F4A3C] font-medium'
                    }`}
                  >
                    <span className="relative inline-block">
                      {t(item.labelKey as any, item.defaultLabel)}
                      {/* Active Gold Underline Bar */}
                      <span 
                        className={`absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#C69749] w-full shadow-xs' 
                            : 'bg-[#C69749]/70 w-0 group-hover:w-full'
                        }`} 
                      />
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Language Switcher Capsule */}
            <div className="pl-1 xl:pl-2">
              <div className="flex items-center gap-1 bg-white/70 border border-[#D9CDAE] rounded-full px-2.5 py-1 shadow-xs backdrop-blur-sm">
                <Languages className="w-3.5 h-3.5 text-[#0F4A3C] mr-0.5 shrink-0" />
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 text-xs rounded transition-all font-semibold ${
                    language === 'en'
                      ? 'bg-[#0F4A3C] text-white shadow-xs'
                      : 'text-[#3B4763] hover:text-[#0F4A3C]'
                  }`}
                >
                  EN
                </button>
                <span className="text-[#D9CDAE] text-xs select-none">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage('hi')}
                  className={`px-1.5 py-0.5 text-xs rounded transition-all font-hindi ${
                    language === 'hi'
                      ? 'bg-[#0F4A3C] text-white font-semibold shadow-xs'
                      : 'text-[#3B4763] hover:text-[#0F4A3C] font-medium'
                  }`}
                >
                  हि
                </button>
                <span className="text-[#D9CDAE] text-xs select-none">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage('gu')}
                  className={`px-1.5 py-0.5 text-xs rounded transition-all font-gujarati ${
                    language === 'gu'
                      ? 'bg-[#0F4A3C] text-white font-semibold shadow-xs'
                      : 'text-[#3B4763] hover:text-[#0F4A3C] font-medium'
                  }`}
                >
                  ગુજ
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Right Controls: Language Switcher & Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-0.5 bg-white/80 border border-[#D9CDAE] rounded-full px-2 py-0.5 shadow-xs">
              <Languages className="w-3 h-3 text-[#0F4A3C] mr-0.5 shrink-0" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 text-[10px] rounded font-semibold ${
                  language === 'en' ? 'bg-[#0F4A3C] text-white' : 'text-[#3B4763]'
                }`}
              >
                EN
              </button>
              <span className="text-[#D9CDAE] text-[10px] select-none">|</span>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-1 py-0.5 text-[10px] rounded font-hindi ${
                  language === 'hi' ? 'bg-[#0F4A3C] text-white font-semibold' : 'text-[#3B4763]'
                }`}
              >
                हि
              </button>
              <span className="text-[#D9CDAE] text-[10px] select-none">|</span>
              <button
                type="button"
                onClick={() => setLanguage('gu')}
                className={`px-1 py-0.5 text-[10px] rounded font-gujarati ${
                  language === 'gu' ? 'bg-[#0F4A3C] text-white font-semibold' : 'text-[#3B4763]'
                }`}
              >
                ગુજ
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-[#0F4A3C] hover:text-[#1B6B54] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>

        </div>
      </motion.header>

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
