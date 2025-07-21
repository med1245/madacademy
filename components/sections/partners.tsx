
"use client";

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export const PartnersSection = () => {
    const { t } = useLanguage();
    return (
        <section id="partners" className="py-20 sm:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                 <div className="text-center">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                        {t('partners', 'sectionHeaders')}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('content', 'partners')}
                    </p>
                    <div className="mt-10 relative h-24 w-full">
                         <Image src="https://placehold.co/1200x150.png" alt="Partner logos" layout="fill" objectFit="contain" data-ai-hint="gaming company logos"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
