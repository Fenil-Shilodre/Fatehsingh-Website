"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems, siteConfig } from '@/data/site';
import { Language } from '@/data/translations';
import { Globe, MapPin, Phone, Mail, Building, Landmark } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <footer id="contact" className="bg-charcoal-deep text-ivory border-t border-gold/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-Column Structured Institutional Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* COLUMN 1: Brand Identity & Biography */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-wider text-ivory">
                FATEHSINH CHAUHAN
              </h3>
              <span className="text-xs font-sans uppercase tracking-widest text-gold block mt-0.5">
                {t('brand_tagline')}
              </span>
            </div>
            
            <p className="text-sm text-ivory/70 leading-relaxed font-sans max-w-sm">
              {t('footer_bio_snippet')}
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-light/80 hover:bg-gold hover:text-charcoal-dark text-ivory/80 flex items-center justify-center transition-colors border border-ivory/10 text-xs font-bold"
                aria-label="X Profile"
              >
                X
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-light/80 hover:bg-gold hover:text-charcoal-dark text-ivory/80 flex items-center justify-center transition-colors border border-ivory/10 text-xs font-bold"
                aria-label="Facebook Profile"
              >
                FB
              </a>
            </div>
          </div>

          {/* COLUMN 2: Structured Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold tracking-wide border-b border-gold/20 pb-2">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-ivory/75">
              {navItems
                .filter((item) => item.id !== 'haveli')
                .map((item) => (
                  <li key={item.id}>
                    <span className="select-none cursor-default block">
                      {t(item.labelKey as any, item.defaultLabel)}
                    </span>
                  </li>
                ))}
            </ul>
          </div>

          {/* COLUMN 3: Trust & Educational Institutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold tracking-wide border-b border-gold/20 pb-2 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-gold" />
              <span>{t('footer_trust_links')}</span>
            </h4>
            <ul className="space-y-3 text-xs text-ivory/70 font-sans">
              <li className="space-y-0.5">
                <span className="font-semibold text-ivory block">Lions English School</span>
                <span className="text-ivory/50 block">Est. 1983 · First CBSE School in D&NH</span>
              </li>
              <li className="space-y-0.5">
                <span className="font-semibold text-ivory block">Smt. Devkiba Mohansinhji Chauhan College</span>
                <span className="text-ivory/50 block">Est. 2014 · Univ of Mumbai · NAAC B+</span>
              </li>
              <li className="space-y-0.5">
                <span className="font-semibold text-ivory block">Haveli Institute of Legal Studies & Research</span>
                <span className="text-ivory/50 block">Est. 2017 · Bar Council of India Recognized</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Secretariat & Liaison */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold tracking-wide border-b border-gold/20 pb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-gold" />
              <span>{t('contact_title')}</span>
            </h4>
            
            <div className="space-y-3 text-xs text-ivory/70 font-sans">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-terracotta-light block flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-light" />
                  <span>{t('contact_addr_lbl')}</span>
                </span>
                <p className="leading-relaxed pl-4 border-l border-gold/20 text-ivory/80">
                  {t('contact_addr_val')}
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-light block flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-gold-light" />
                  <span>{t('contact_phone_lbl')}</span>
                </span>
                <p className="pl-4 border-l border-gold/20 text-ivory/80">
                  {siteConfig.secretariat.phones.join(' / ')}
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-light block flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-gold-light" />
                  <span>{t('contact_email_lbl')}</span>
                </span>
                <p className="pl-4 border-l border-gold/20 text-ivory/80">
                  {siteConfig.secretariat.email}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-8" />

        {/* Bottom Bar: Copyright, Language Switcher & Final Archive Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ivory/60 font-sans">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p>{t('footer_rights')}</p>
          </div>

          {/* Center: Relocated Language Selector */}
          <div className="flex items-center gap-2 bg-charcoal-dark px-3 py-1.5 rounded-md border border-gold/30 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="text-[11px] text-ivory/50 uppercase tracking-wider font-semibold mr-1">
              Language:
            </span>
            <button
              type="button"
              onClick={() => handleLanguageChange('en')}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                language === 'en'
                  ? 'bg-gold text-charcoal-dark shadow-sm'
                  : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              EN
            </button>
            <span className="text-ivory/20">|</span>
            <button
              type="button"
              onClick={() => handleLanguageChange('hi')}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                language === 'hi'
                  ? 'bg-gold text-charcoal-dark shadow-sm'
                  : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              हिंदी
            </button>
            <span className="text-ivory/20">|</span>
            <button
              type="button"
              onClick={() => handleLanguageChange('gu')}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                language === 'gu'
                  ? 'bg-gold text-charcoal-dark shadow-sm'
                  : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              ગુજરાતી
            </button>
          </div>

          {/* Right: Final Archive Line */}
          <div className="text-center md:text-right text-gold-light/70 font-serif italic">
            <p>{t('footer_designed')}</p>
          </div>

        </div>

      </div>
    </footer>
  );
};
