
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

type AwardItem = {
    title: string;
    description: string;
};

export default function AwardsPage() {
    const { t, language } = useLanguage();
    const { messages } = require('@/lib/messages');

    const awards: AwardItem[] = messages[language].awards.awards_list;


    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="text-center mb-12">
                        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                             {t('awards', 'nav_academy')}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            {t('description', 'awards')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {awards.map((award, index) => (
                             <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <Trophy className="w-8 h-8 text-primary" />
                                    <CardTitle>{award.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{award.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
