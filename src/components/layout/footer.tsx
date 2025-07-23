
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  const { language, t } = useLanguage();
  const text = {
    en: {
      rights: `© ${new Date().getFullYear()} MAD Academy. All rights reserved.`
    },
    fr: {
      rights: `© ${new Date().getFullYear()} MAD Academy. Tous droits réservés.`
    }
  }
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <a href="#home" className="flex items-center gap-2 group">
                <Image src="/LOGOIC2.png" alt="MAD Academy Logo" width={280} height={42} className="hidden md:block"/>
                <Image src="/LOGOIC2.png" alt="MAD Academy Logo" width={250} height={38} className="block md:hidden"/>
            </a>
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p className="text-sm text-muted-foreground">
              {text[language].rights}
            </p>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
            </Link>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          <div className="flex items-center gap-6" style={{ minWidth: '280px' }}>
             {/* This empty div helps balance the flex layout */}
          </div>
        </div>
      </div>
    </footer>
  );
};
