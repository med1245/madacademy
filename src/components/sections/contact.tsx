
"use client";
import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';

export const ContactSection = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container mx-auto max-w-3xl px-4">
                <Card className="shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl sm:text-4xl font-bold">
                            {t('title', 'contact')}
                        </CardTitle>
                        <CardDescription className="text-lg">
                           {t('description', 'contact')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
