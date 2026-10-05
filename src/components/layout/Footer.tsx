'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#2D0B05] text-[#FAF5EB] border-t-[4px] border-[#C69749] pt-16 pb-12 px-6 md:px-12 lg:px-16 mt-auto overflow-hidden">
      {/* Hero Watercolor Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Atmosphere"
          fill
          className="object-cover object-center filter brightness-[0.72] contrast-[1.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#3B1208]/45 to-black/75" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/20">
          <div className="space-y-1">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#FAF5EB] drop-shadow-sm">
              FATEHSINH CHAUHAN
            </span>
            <p className="text-xs font-sans text-[#FFE8A8] uppercase tracking-[0.14em] font-semibold drop-shadow-sm">
              Educationist · Institution Builder · Public Servant
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.08em] font-sans font-semibold">
            <Link href="#biography" className="text-white/85 hover:text-[#FFE8A8] transition-colors">BIOGRAPHY</Link>
            <Link href="#institutions" className="text-white/85 hover:text-[#FFE8A8] transition-colors">INSTITUTIONS</Link>
            <Link href="#business" className="text-white/85 hover:text-[#FFE8A8] transition-colors">BUSINESS</Link>
            <Link href="#public-life" className="text-white/85 hover:text-[#FFE8A8] transition-colors">PUBLIC LIFE</Link>
            <Link href="#news" className="text-white/85 hover:text-[#FFE8A8] transition-colors">NEWS &amp; ARTICLES</Link>
            <Link href="#blogs" className="text-white/85 hover:text-[#FFE8A8] transition-colors">BLOGS</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/75 font-sans font-medium">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
            <span>•</span>
            <span>Silvassa, Dadra and Nagar Haveli</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#FFE8A8] font-bold">EN</span>
            <span className="text-white/40">/</span>
            <span className="hover:text-[#FFE8A8] cursor-pointer">HI</span>
            <span className="text-white/40">/</span>
            <span className="hover:text-[#FFE8A8] cursor-pointer">GU</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 text-white/85">
              <a href="#" className="hover:text-[#FFE8A8] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#FFE8A8] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#FFE8A8] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#FFE8A8] transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>Fire &amp; Water</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
