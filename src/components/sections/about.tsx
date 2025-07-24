
"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { Library } from 'lucide-react';

export const AboutSection = () => {
    const { t } = useLanguage();
    return (
        <section id="about" className="py-20 sm:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Library className="w-8 h-8 text-primary" />
                            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                                {t('about', 'sectionHeaders')}
                            </h2>
                        </div>
                        <div className="border-l-4 border-primary pl-6 space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t('about_p1', 'about')}
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t('about_p2_part1', 'about')}
                                <Link href="#home" className="font-bold hover:underline" style={{ color: '#814BFD' }}>
                                    {t('about_p2_part2', 'about')}
                                </Link>
                                {t('about_p2_part3', 'about')}
                            </p>
                        </div>
                    </div>
                    <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-[0_0_20px_5px_#814BFD]">
                        <Image src="/Game-Design.jpg" alt="Game developers collaborating" layout="fill" objectFit="cover" data-ai-hint="game developers collaborating"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
