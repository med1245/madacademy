
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function GuildsPage() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex flex-col min-h-screen bg-background text-foreground">
                <Header />
                <main className="flex-1 py-16 sm:py-24">
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="text-center">
                            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                                {t('partners', 'sectionHeaders')}
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                                {t('content', 'partners')}
                            </p>
                            <div className="mt-10 relative h-24 w-full">
                                {/* Placeholder to prevent layout shift */}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <BackToTopButton />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-7xl px-4">
                     <div className="text-center">
                        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                            {t('partners', 'sectionHeaders')}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            {t('content', 'partners')}
                        </p>
                        <div className="mt-10 relative h-24 w-full">
                            <Image 
                                src={theme === 'dark' ? "/partners_v2.png" : "/partnerslight_v2.png"} 
                                alt="Partner logos" 
                                layout="fill" 
                                objectFit="contain"
                                key={theme}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
