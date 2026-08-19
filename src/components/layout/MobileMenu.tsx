"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems } from '@/data/site';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-charcoal-dark/98 backdrop-blur-md text-ivory">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 border-b border-ivory/10">
        <div>
          <span className="font-serif font-bold text-lg text-gold tracking-wide block">
            FATEHSINH CHAUHAN
          </span>
          <span className="text-xs text-ivory/60">
            {t('brand_tagline')}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-ivory/80 hover:text-ivory rounded-full focus:outline-none"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto py-8 px-6">
        <ul className="space-y-3">
          {navItems.map((item) => {
            if (item.isDisabled) {
              return (
                <li key={item.id}>
                  <div className="flex items-center justify-between py-3 px-4 rounded text-ivory/40 bg-white/5 cursor-not-allowed select-none pointer-events-none">
                    <span className="font-medium text-base">
                      {t(item.labelKey as any, item.defaultLabel)}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-ivory/30">
                      Disabled
                    </span>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 px-4 rounded font-serif text-lg font-semibold text-gold bg-gold/10 border border-gold/30"
                >
                  <span>{t(item.labelKey as any, item.defaultLabel)}</span>
                  <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded bg-gold text-charcoal-dark font-bold">
                    Active
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Info */}
      <div className="p-6 border-t border-ivory/10 text-center text-xs text-ivory/50">
        <p>Official Personal Archive · Silvassa, Dadra & Nagar Haveli</p>
      </div>
    </div>
  );
};
