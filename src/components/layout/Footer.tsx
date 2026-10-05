'use client';

import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#E07A2A] via-[#D46A1C] to-[#B8520B] text-[#FBF4E6] border-t-[4px] border-[#C69749] pt-16 pb-12 px-6 md:px-12 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#FBF4E6]/20">
          <div className="space-y-1">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#FBF4E6]">
              FATEHSINH CHAUHAN
            </span>
            <p className="text-xs font-mono text-[#FBF4E6]/90 uppercase tracking-wider font-semibold">
              Educationist · Institution Builder · Public Servant
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-wider font-mono font-semibold">
            <Link href="/story/biography" className="text-[#FBF4E6]/80 hover:text-[#FBF4E6] transition-colors">Biography</Link>
            <Link href="/story/institutions" className="text-[#FBF4E6]/80 hover:text-[#FBF4E6] transition-colors">Institutions</Link>
            <Link href="/story/business" className="text-[#FBF4E6]/80 hover:text-[#FBF4E6] transition-colors">Business</Link>
            <Link href="/story/public-life" className="text-[#FBF4E6]/80 hover:text-[#FBF4E6] transition-colors">Public Life</Link>
            <Link href="/story/news-articles" className="text-[#FBF4E6]/80 hover:text-[#FBF4E6] transition-colors">News & Articles</Link>
            <Link href="/story/blogs" className="text-[#FBF4E6]/80 hover:text-[#FBF4E6] transition-colors">Blogs</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#FBF4E6]/70 font-mono font-medium">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
            <span>•</span>
            <span>Silvassa, Dadra and Nagar Haveli</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#FBF4E6] font-bold">EN</span>
            <span>/</span>
            <span className="hover:text-[#FBF4E6] cursor-pointer">HI</span>
            <span>/</span>
            <span className="hover:text-[#FBF4E6] cursor-pointer">GU</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 text-[#FBF4E6]/80">
              <a href="#" className="hover:text-[#FBF4E6] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#FBF4E6] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#FBF4E6] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#FBF4E6] transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#FBF4E6]/60">
              <span>Fire & Water</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
