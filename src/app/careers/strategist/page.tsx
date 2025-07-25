
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, BrainCircuit } from 'lucide-react';
import Image from 'next/image';

export default function StrategistPage() {
    const { t } = useLanguage();

    const skills = t('strategist_skills', 'careers') as unknown as string[];

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="text-center mb-12">
                         <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                            <BrainCircuit className="w-12 h-12 text-primary" />
                        </div>
                        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                             {t('strategist_page_title', 'careers')}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                           {t('strategist_page_desc', 'careers')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border hover:border-primary hover:shadow-[0_0_20px_5px_hsl(var(--primary))] order-last md:order-first">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold">{t('strategist_skills_title', 'careers')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {skills.map((skill, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                                            <span className="text-muted-foreground">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-[0_0_20px_5px_#814BFD]">
                           <Image src="/11.jpg" alt="Game design sketches" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
