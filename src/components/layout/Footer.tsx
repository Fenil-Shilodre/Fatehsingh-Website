"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems, siteConfig } from '@/data/site';
import { Language } from '@/data/translations';
import { Globe, MapPin, Phone, Mail, Building, Landmark, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <footer id="contact" className="bg-[#0F4A3C] text-[#FAF5EB] border-t-4 border-[#B8860B] pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-3/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-Column Structured Institutional Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* COLUMN 1: Brand Identity & Biography */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-3" />
                <h3 className="font-serif text-2xl font-bold tracking-[0.16em] text-[#FAF5EB]">
                  FATEHSINH CHAUHAN
                </h3>
              </div>
              <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-gold-3 to-transparent" />
              <span className="text-xs font-sans uppercase tracking-widest text-[#E4C77A] block mt-2 font-semibold">
                {t('brand_tagline')}
              </span>
            </div>
            
            <p className="text-sm text-[#D9CDAE] leading-relaxed font-sans max-w-sm">
              {t('footer_bio_snippet')}
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B6B54] hover:bg-[#B8860B] hover:text-[#0F4A3C] text-[#FAF5EB] flex items-center justify-center transition-all duration-200 border border-[#E4C77A]/30 text-xs font-bold shadow-sm"
                aria-label="X Profile"
              >
                X
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B6B54] hover:bg-[#B8860B] hover:text-[#0F4A3C] text-[#FAF5EB] flex items-center justify-center transition-all duration-200 border border-[#E4C77A]/30 text-xs font-bold shadow-sm"
                aria-label="Facebook Profile"
              >
                FB
              </a>
            </div>
          </div>

          {/* COLUMN 2: Structured Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#E4C77A] tracking-wide border-b border-[#B8860B]/30 pb-2">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#FAF5EB]/85">
              {navItems
                .filter((item) => item.id !== 'haveli')
                .map((item) => (
                  <li key={item.id}>
                    <span className="select-none cursor-default block hover:text-[#E4C77A] transition-colors">
                      {t(item.labelKey as any, item.defaultLabel)}
                    </span>
                  </li>
                ))}
            </ul>
          </div>

          {/* COLUMN 3: Trust & Educational Institutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#E4C77A] tracking-wide border-b border-[#B8860B]/30 pb-2 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-gold-3" />
              <span>{t('footer_trust_links')}</span>
            </h4>
            <ul className="space-y-3 text-xs text-[#FAF5EB]/80 font-sans">
              <li className="space-y-0.5">
                <span className="font-semibold text-[#FAF5EB] block">Lions English School</span>
                <span className="text-[#D9CDAE] block">Est. 1983 · First CBSE School in D&NH</span>
              </li>
              <li className="space-y-0.5">
                <span className="font-semibold text-[#FAF5EB] block">Smt. Devkiba Mohansinhji Chauhan College</span>
                <span className="text-[#D9CDAE] block">Est. 2014 · Univ of Mumbai · NAAC B+</span>
              </li>
              <li className="space-y-0.5">
                <span className="font-semibold text-[#FAF5EB] block">Haveli Institute of Legal Studies & Research</span>
                <span className="text-[#D9CDAE] block">Est. 2017 · Bar Council of India Recognized</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Secretariat & Liaison */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#E4C77A] tracking-wide border-b border-[#B8860B]/30 pb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-gold-3" />
              <span>{t('contact_title')}</span>
            </h4>
            
            <div className="space-y-3 text-xs text-[#FAF5EB]/80 font-sans">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E4C77A] block flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-3" />
                  <span>{t('contact_addr_lbl')}</span>
                </span>
                <p className="leading-relaxed pl-4 border-l border-gold-3/30 text-[#D9CDAE]">
                  {t('contact_addr_val')}
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E4C77A] block flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-gold-3" />
                  <span>{t('contact_phone_lbl')}</span>
                </span>
                <p className="pl-4 border-l border-gold-3/30 text-[#D9CDAE]">
                  {siteConfig.secretariat.phones.join(' / ')}
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E4C77A] block flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-gold-3" />
                  <span>{t('contact_email_lbl')}</span>
                </span>
                <p className="pl-4 border-l border-gold-3/30 text-[#D9CDAE]">
                  {siteConfig.secretariat.email}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E4C77A]/30 to-transparent my-8" />

        {/* Bottom Bar: Copyright, Language Switcher & Final Archive Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FAF5EB]/70 font-sans">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p>{t('footer_rights')}</p>
          </div>

          {/* Center: Language Selector */}
          <div className="flex items-center gap-2 bg-[#092E26] px-3 py-1.5 rounded-md border border-[#B8860B]/40 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-gold-3 shrink-0" />
            <span className="text-[11px] text-[#D9CDAE] uppercase tracking-wider font-semibold mr-1">
              Language:
            </span>
            <button
              type="button"
              onClick={() => handleLanguageChange('en')}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                language === 'en'
                  ? 'bg-gold text-[#0F4A3C] font-bold shadow-sm'
                  : 'text-[#FAF5EB]/80 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-white/20">|</span>
            <button
              type="button"
              onClick={() => handleLanguageChange('hi')}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                language === 'hi'
                  ? 'bg-gold text-[#0F4A3C] font-bold shadow-sm'
                  : 'text-[#FAF5EB]/80 hover:text-white'
              }`}
            >
              हिंदी
            </button>
            <span className="text-white/20">|</span>
            <button
              type="button"
              onClick={() => handleLanguageChange('gu')}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                language === 'gu'
                  ? 'bg-gold text-[#0F4A3C] font-bold shadow-sm'
                  : 'text-[#FAF5EB]/80 hover:text-white'
              }`}
            >
              ગુજરાતી
            </button>
          </div>

          {/* Right: Final Archive Line */}
          <div className="text-center md:text-right text-[#E4C77A]/85 font-serif italic text-sm">
            <p>{t('footer_designed')}</p>
          </div>

        </div>

      </div>
    </footer>
  );
};
