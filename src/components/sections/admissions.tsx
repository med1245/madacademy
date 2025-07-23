
"use client";

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export const AdmissionsSection = () => {
    const { t } = useLanguage();
    return (
        <section id="admissions" className="py-20 sm:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                        <Image src="https://placehold.co/600x400.png" alt="A person in a futuristic interview setting" layout="fill" objectFit="cover" data-ai-hint="game studio interview"/>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                                {t('admissions', 'sectionHeaders')}
                            </h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t('content', 'admissions')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
