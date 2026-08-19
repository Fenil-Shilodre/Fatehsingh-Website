"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems, siteConfig } from '@/data/site';
import { Language } from '@/data/translations';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <footer className="bg-charcoal-deep text-ivory border-t border-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gold">
              Shri Fatehsinh Mohansinh Chauhan
            </h3>
            <p className="text-sm text-ivory/70 leading-relaxed max-w-md">
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

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold tracking-wide">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.isDisabled ? (
                    <span className="text-ivory/40 cursor-not-allowed text-xs">
                      {item.defaultLabel} <span className="text-[10px] text-ivory/30">(Disabled)</span>
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="text-ivory/80 hover:text-gold transition-colors font-medium"
                    >
                      {t(item.labelKey as any, item.defaultLabel)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Language Selector & Trust Institutions */}
          <div className="space-y-5">
            <div>
              <h4 className="font-serif text-base font-semibold text-gold tracking-wide mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold" /> Select Language
              </h4>
              
              {/* Language Switcher Buttons */}
              <div className="inline-flex p-1 bg-charcoal-dark border border-gold/30 rounded-md">
                <button
                  type="button"
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                    language === 'en'
                      ? 'bg-gold text-charcoal-dark shadow-sm'
                      : 'text-ivory/70 hover:text-ivory'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageChange('hi')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                    language === 'hi'
                      ? 'bg-gold text-charcoal-dark shadow-sm'
                      : 'text-ivory/70 hover:text-ivory'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageChange('gu')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                    language === 'gu'
                      ? 'bg-gold text-charcoal-dark shadow-sm'
                      : 'text-ivory/70 hover:text-ivory'
                  }`}
                >
                  ગુજરાતી
                </button>
              </div>
            </div>

            <div className="pt-2">
              <h5 className="text-xs font-semibold text-gold/80 uppercase tracking-wider mb-2">
                {t('footer_trust_links')}
              </h5>
              <ul className="space-y-1.5 text-xs text-ivory/60">
                <li>Lions English School (1983)</li>
                <li>Smt. Devkiba College (2014)</li>
                <li>Haveli Law Institute (2017)</li>
                <li>
                  <a
                    href={siteConfig.socials.externalPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold underline decoration-gold/40"
                  >
                    Haveli Group Official (haveligroup.biz)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>{t('footer_rights')}</p>
          <p className="text-gold-light/60">{t('footer_designed')}</p>
        </div>
      </div>
    </footer>
  );
};
