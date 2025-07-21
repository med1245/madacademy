
"use client";

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Gamepad2 } from 'lucide-react';

export const ProgramSection = () => {
    const { t } = useLanguage();

    const modules = [
        { id: 'module1', title: t('module1_title', 'program'), desc: t('module1_desc', 'program') },
        { id: 'module2', title: t('module2_title', 'program'), desc: t('module2_desc', 'program') },
        { id: 'module3', title: t('module3_title', 'program'), desc: t('module3_desc', 'program') },
        { id: 'module4', title: t('module4_title', 'program'), desc: t('module4_desc', 'program') },
    ];

    return (
        <section id="program" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Gamepad2 className="w-8 h-8 text-primary flex-shrink-0" />
                        <h2 className="font-headline text-3xl sm:text-4xl font-bold">
                            {t('program', 'sectionHeaders')}
                        </h2>
                    </div>
                </div>

                <Tabs defaultValue="semester1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
                        <TabsTrigger value="semester1">{t('semester1', 'program')}</TabsTrigger>
                        <TabsTrigger value="semester2">{t('semester2', 'program')}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="semester1" className="mt-8">
                        <Accordion type="single" collapsible className="w-full" defaultValue="module1">
                            {modules.slice(0, 2).map(module => (
                                <AccordionItem key={module.id} value={module.id}>
                                    <AccordionTrigger className="font-semibold text-lg hover:no-underline">{module.title}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        {module.desc}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="semester2" className="mt-8">
                         <Accordion type="single" collapsible className="w-full" defaultValue="module3">
                            {modules.slice(2, 4).map(module => (
                                <AccordionItem key={module.id} value={module.id}>
                                    <AccordionTrigger className="font-semibold text-lg hover:no-underline">{module.title}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        {module.desc}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                </Tabs>
                
                <Card className="mt-12 bg-card shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{t('workshop_title', 'program')}</h3>
                                <p className="text-muted-foreground">{t('workshop_desc', 'program')}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
