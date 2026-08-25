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
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#080A10]/98 backdrop-blur-md text-ivory">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 border-b border-ivory/10">
        <div>
          <span className="font-serif font-bold text-lg text-amber-400 tracking-wide block">
            FATEHSINH CHAUHAN
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-ivory/80 hover:text-amber-400 rounded-full focus:outline-none transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List (Non-redirecting design items) */}
      <nav className="flex-1 overflow-y-auto py-8 px-6">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                className="w-full text-left py-2 px-2 font-serif text-xl font-medium text-ivory/90 hover:text-amber-400 transition-colors focus:outline-none cursor-default select-none"
              >
                <span>
                  {t(item.labelKey as any, item.defaultLabel)}
                </span>
              </button>
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
