"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems } from '@/data/site';
import { X, Languages } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
  onNavigate?: (targetId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection = 'home',
  onNavigate,
}) => {
  const { language, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const handleItemClick = (href: string) => {
    const targetId = href.replace('#', '');
    onClose();
    if (onNavigate) {
      setTimeout(() => onNavigate(targetId), 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF5EB]/98 backdrop-blur-2xl text-[#1A2540]">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 border-b border-[#E7DEC9]">
        <div>
          <span className="font-serif font-bold text-lg text-[#0F4A3C] tracking-wider block">
            FATEHSINH CHAUHAN
          </span>
          <span className="block h-[2px] w-12 bg-[#B8860B] rounded-full mt-0.5" />
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#0F4A3C] hover:text-[#1B6B54] rounded-full focus:outline-none transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Language Switcher Section */}
      <div className="px-6 py-4 border-b border-[#E7DEC9]/70 flex items-center justify-between bg-white/40">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#3B4763] flex items-center gap-1.5">
          <Languages className="w-3.5 h-3.5 text-[#0F4A3C]" />
          Language
        </span>

        <div className="flex items-center gap-1 bg-white border border-[#D9CDAE] rounded-full px-2.5 py-1 shadow-xs">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2 py-0.5 text-xs rounded transition-all font-semibold ${
              language === 'en' ? 'bg-[#0F4A3C] text-white' : 'text-[#3B4763]'
            }`}
          >
            EN
          </button>
          <span className="text-[#D9CDAE] text-xs select-none">|</span>
          <button
            type="button"
            onClick={() => setLanguage('hi')}
            className={`px-1.5 py-0.5 text-xs rounded transition-all font-hindi ${
              language === 'hi' ? 'bg-[#0F4A3C] text-white font-semibold' : 'text-[#3B4763]'
            }`}
          >
            हि
          </button>
          <span className="text-[#D9CDAE] text-xs select-none">|</span>
          <button
            type="button"
            onClick={() => setLanguage('gu')}
            className={`px-1.5 py-0.5 text-xs rounded transition-all font-gujarati ${
              language === 'gu' ? 'bg-[#0F4A3C] text-white font-semibold' : 'text-[#3B4763]'
            }`}
          >
            ગુજ
          </button>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto py-6 px-6">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const targetId = item.href.replace('#', '');
            const isActive = activeSection === targetId;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleItemClick(item.href)}
                  className={`w-full text-left py-3 px-4 font-serif text-lg font-medium rounded-xl transition-all flex items-center justify-between focus:outline-none cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#0F4A3C] text-white shadow-sm font-semibold'
                      : 'text-[#1A2540]/85 hover:text-[#0F4A3C] hover:bg-[#E7DEC9]/40'
                  }`}
                >
                  <span>
                    {t(item.labelKey as any, item.defaultLabel)}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#C69749]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Info */}
      <div className="p-6 border-t border-[#E7DEC9] text-center text-xs text-[#6B7385] font-sans">
        <p>A Life of Dedicated Public Service · Silvassa, Dadra & Nagar Haveli</p>
      </div>
    </div>
  );
};
