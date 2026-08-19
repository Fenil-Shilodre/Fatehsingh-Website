"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-dark/95 backdrop-blur-md shadow-lg py-3 border-b border-gold/20'
            : 'bg-gradient-to-b from-charcoal-deep/90 via-charcoal-dark/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none"
            aria-label="Fatehsinh ji Chauhan"
          >
            <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-ivory group-hover:text-gold transition-colors">
              FATEHSINH CHAUHAN
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest text-gold-light/80 uppercase font-sans">
              {t('brand_tagline')}
            </span>
          </a>

          {/* Center/Right: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              if (item.isDisabled) {
                return (
                  <span
                    key={item.id}
                    className="relative px-3 py-1.5 text-xs xl:text-sm font-medium text-ivory/40 cursor-not-allowed select-none transition-none"
                    title="Section under development for future phase"
                  >
                    {item.defaultLabel}
                  </span>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wide text-gold bg-gold/10 border border-gold/40 rounded-sm shadow-sm transition-all duration-150"
                >
                  {t(item.labelKey as any, item.defaultLabel)}
                </a>
              );
            })}
          </nav>

          {/* Right: Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-ivory/90 hover:text-gold focus:outline-none"
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
      />
    </>
  );
};
