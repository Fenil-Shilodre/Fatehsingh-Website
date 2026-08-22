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
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={onClose}
                className="inline-block py-2 px-2 font-serif text-xl font-medium text-ivory/90 hover:text-gold transition-colors relative"
              >
                <span className="relative pb-1">
                  {t(item.labelKey as any, item.defaultLabel)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Info */}
      <div className="p-6 border-t border-ivory/10 text-center text-xs text-ivory/50">
        <p>A Life of Dedicated Public Service · Silvassa, Dadra & Nagar Haveli</p>
      </div>
    </div>
  );
};
