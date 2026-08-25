"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A10]/95 backdrop-blur-lg shadow-xl shadow-black/40 py-3 border-b border-orange-500/20'
            : 'bg-gradient-to-b from-[#080A10]/95 via-[#080A10]/70 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Desktop Left Nav Items (Non-redirecting Design Navigation) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4 flex-1 justify-start">
            {leftNavItems.map((item, idx) => {
              const isActive = item.id === 'home';

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`group relative py-1.5 px-2.5 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 cursor-default select-none focus:outline-none ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-ivory/75 hover:text-amber-300'
                  }`}
                >
                  <span className="relative">
                    {t(item.labelKey as any, item.defaultLabel)}
                    {/* Animated Underline */}
                    <span 
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_8px_#EA580C]' 
                          : 'bg-gradient-to-r from-orange-500 to-amber-400 w-0 group-hover:w-full'
                      }`} 
                    />
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* Center Brand Identity (FATEHSINH CHAUHAN in the middle with subtle luxury animation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="group relative flex flex-col items-center justify-center focus:outline-none px-4 sm:px-6 py-1 shrink-0 text-center cursor-default select-none"
            aria-label="Fatehsinh Chauhan"
          >
            {/* Subtle Ambient Backlight Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/15 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Brand Title with Shimmer Sheen & Flanking Micro-Gems */}
            <div className="flex items-center gap-2 relative z-10">
              <span className="hidden sm:inline-block w-1.5 h-1.5 rotate-45 bg-amber-400 shadow-[0_0_8px_#F59E0B] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
              
              <span className="font-serif font-bold text-base sm:text-lg xl:text-xl tracking-wider group-hover:tracking-[0.14em] brand-shimmer-text transition-all duration-300">
                FATEHSINH CHAUHAN
              </span>

              <span className="hidden sm:inline-block w-1.5 h-1.5 rotate-45 bg-amber-400 shadow-[0_0_8px_#F59E0B] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
            </div>

            {/* Delicate Expanding Underline Glow */}
            <span className="block h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent w-8 group-hover:w-full transition-all duration-500 mx-auto mt-0.5 opacity-70 group-hover:opacity-100 shadow-[0_0_6px_#F59E0B]" />
          </motion.div>

          {/* Desktop Right Nav Items (Non-redirecting Design Navigation) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4 flex-1 justify-end">
            {rightNavItems.map((item, idx) => {
              const isActive = false;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`group relative py-1.5 px-2.5 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 cursor-default select-none focus:outline-none ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-ivory/75 hover:text-amber-300'
                  }`}
                >
                  <span className="relative">
                    {t(item.labelKey as any, item.defaultLabel)}
                    {/* Animated Underline on Hover */}
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full w-0 group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* Mobile Menu Button on Right */}
          <div className="flex items-center lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-ivory/90 hover:text-amber-400 focus:outline-none transition-colors"
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
      />
    </>
  );
};
