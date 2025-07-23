
"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const PartnersSection = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

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
                         <Image 
                            src={theme === 'dark' ? "/partners.png" : "/partnerslight.png"} 
                            alt="Partner logos" 
                            layout="fill" 
                            objectFit="contain"
                            key={theme} // Add key to force re-render on theme change
                         />
                    </div>
                </div>
            </div>
        </section>
    );
};
