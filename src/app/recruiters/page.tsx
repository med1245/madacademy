
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, Users, Briefcase, ArrowRight } from 'lucide-react';

export default function RecruitersPage() {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: t('benefit1_title', 'recruiters'),
            description: t('benefit1_desc', 'recruiters')
        },
        {
            icon: <Briefcase className="w-8 h-8 text-primary" />,
            title: t('benefit2_title', 'recruiters'),
            description: t('benefit2_desc', 'recruiters')
        },
        {
            icon: <Handshake className="w-8 h-8 text-primary" />,
            title: t('benefit3_title', 'recruiters'),
            description: t('benefit3_desc', 'recruiters')
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="text-center mb-16">
                        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                            {t('title', 'recruiters')}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                           {t('description', 'recruiters')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => (
                           <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border hover:border-primary hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                        {benefit.icon}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="text-xl font-semibold mb-2">{benefit.title}</CardTitle>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="text-center p-8 bg-secondary/50 shadow-xl border-primary transition-shadow hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{t('cta_title', 'recruiters')}</CardTitle>
                            <CardDescription>
                                {t('cta_desc', 'recruiters')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-shadow hover:shadow-[0_0_20px_2px_hsl(var(--primary))]">
                                <Link href="/gallery">
                                    {t('cta_button1', 'recruiters')}
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-shadow hover:shadow-[0_0_20px_2px_hsl(var(--primary))]">
                                <Link href="/#contact">
                                    {t('cta_button2', 'recruiters')} <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                </div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
