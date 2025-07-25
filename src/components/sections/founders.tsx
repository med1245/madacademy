
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

type Founder = {
    name: string;
    title: string;
    description: string;
};

export const FoundersSection = () => {
    const { t, language } = useLanguage();
    const { messages } = require('@/lib/messages');

    const founders: Founder[] = messages[language].founders.founders_list;
    
    return (
        <section id="founders" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
                        {t('title', 'founders')}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
                        {t('description', 'founders')}
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {founders.map((founder, index) => (
                        <Card key={index} className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border hover:border-primary hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">{founder.name}</CardTitle>
                                <p className="text-primary font-medium">{founder.title}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{founder.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
