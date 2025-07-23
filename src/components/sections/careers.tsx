
"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { Crown, Gamepad2, Swords } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CareersSection = () => {
    const { t } = useLanguage();
    
    const careerPaths = [
      { 
        icon: <Gamepad2 className="w-8 h-8 text-primary"/>, 
        title: t('career1_title', 'careers'),
        href: "/careers/coder"
      },
      { 
        icon: <Swords className="w-8 h-8 text-primary"/>, 
        title: t('career2_title', 'careers'),
        href: "/careers/strategist"
      },
      { 
        icon: <Crown className="w-8 h-8 text-primary"/>, 
        title: t('career3_title', 'careers'),
        href: "/careers/guild-master"
      },
    ];
    
    return (
        <section id="careers" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                        {t('careers', 'sectionHeaders')}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('content', 'careers')}
                    </p>
                </div>
                 <div className="grid md:grid-cols-3 gap-8">
                    {careerPaths.map((career, index) => (
                      <Link href={career.href} key={index}>
                          <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border hover:border-primary hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                            <CardHeader>
                              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                {career.icon}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <CardTitle className="text-xl font-semibold">{career.title}</CardTitle>
                            </CardContent>
                          </Card>
                      </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
