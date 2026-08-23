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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split nav items into left and right groups for centered brand layout
  const leftNavItems = navItems.slice(0, 4);
  const rightNavItems = navItems.slice(4);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          isScrolled
            ? 'bg-[#080A10]/95 backdrop-blur-md shadow-md py-3.5 border-b border-orange-500/20'
            : 'bg-gradient-to-b from-[#080A10]/90 via-[#080A10]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Desktop Left Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 flex-1 justify-start">
            {leftNavItems.map((item) => {
              const isActive = item.id === 'home';

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative py-1.5 px-2 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-ivory/70 hover:text-amber-300'
                  }`}
                >
                  <span className="relative pb-1">
                    {t(item.labelKey as any, item.defaultLabel)}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Center Brand Identity (FATEHSINH CHAUHAN in the middle) */}
          <a
            href="#home"
            className="flex items-center justify-center focus:outline-none px-4 shrink-0 text-center"
            aria-label="Fatehsinh Chauhan"
          >
            <span className="font-serif font-bold text-base sm:text-lg xl:text-xl tracking-wider text-ivory hover:text-amber-400 transition-colors">
              FATEHSINH CHAUHAN
            </span>
          </a>

          {/* Desktop Right Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 flex-1 justify-end">
            {rightNavItems.map((item) => {
              const isActive = false;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative py-1.5 px-2 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-ivory/70 hover:text-amber-300'
                  }`}
                >
                  <span className="relative pb-1">
                    {t(item.labelKey as any, item.defaultLabel)}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button on Right */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-ivory/90 hover:text-amber-400 focus:outline-none"
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
