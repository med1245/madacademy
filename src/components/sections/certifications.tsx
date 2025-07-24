
"use client";

import React from 'react';
import { useLanguage } from '@/contexts/language-context';

export const CertificationsSection = () => {
    const { t } = useLanguage();
    return (
        <section id="certifications" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                        {t('certifications', 'sectionHeaders')}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('content', 'certifications')}
                    </p>
                </div>
            </div>
        </section>
    );
};
