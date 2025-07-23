
"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative py-24 sm:py-32 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/BG5.png"
          alt="MAD Academy background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 object-center"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      <div className="container relative z-20 mx-auto max-w-7xl px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl uppercase">
          {t('headline', 'hero')}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
          {t('subheadline', 'hero')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-[#283F8F] hover:bg-[#814BFD] transition-shadow hover:shadow-[0_0_20px_2px_#283F8F]">
            <Link href="/admissions">
              {t('cta', 'hero')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
