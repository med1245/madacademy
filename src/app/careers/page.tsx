
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Crown, Gamepad2, Swords, ArrowRight } from 'lucide-react';

export default function CareersPage() {
    const { t } = useLanguage();

    const careerPaths = [
        { 
            icon: <Gamepad2 className="w-10 h-10 text-primary"/>, 
            title: t('career1_title', 'careers'),
            description: t('career1_desc', 'careers'),
            href: "/careers/coder"
        },
        { 
            icon: <Swords className="w-10 h-10 text-primary"/>, 
            title: t('career2_title', 'careers'),
            description: t('career2_desc', 'careers'),
            href: "/careers/strategist"
        },
        { 
            icon: <Crown className="w-10 h-10 text-primary"/>, 
            title: t('career3_title', 'careers'),
            description: t('career3_desc', 'careers'),
            href: "/careers/guild-master"
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="text-center mb-16">
                        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                             {t('careers', 'sectionHeaders')}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            {t('content', 'careers')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {careerPaths.map((career, index) => (
                           <Link href={career.href} key={index}>
                             <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border hover:border-primary hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                                 <CardHeader>
                                     <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                         {career.icon}
                                     </div>
                                     <CardTitle className="text-2xl font-semibold pt-4">{career.title}</CardTitle>
                                 </CardHeader>
                                 <CardContent>
                                     <p className="text-muted-foreground">{career.description}</p>
                                 </CardContent>
                             </Card>
                           </Link>
                        ))}
                    </div>

                     <Card className="text-center p-8 bg-secondary/50 shadow-xl border-primary transition-shadow hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{t('cta_title', 'careers')}</CardTitle>
                            <CardDescription>
                                {t('cta_desc', 'careers')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-shadow hover:shadow-[0_0_20px_2px_hsl(var(--primary))]">
                                <Link href="/admissions">
                                    {t('cta_button1', 'careers')}
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-shadow hover:shadow-[0_0_20px_2px_hsl(var(--primary))]">
                                <Link href="/#contact">
                                    {t('cta_button2', 'careers')} <ArrowRight className="ml-2 h-5 w-5" />
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
