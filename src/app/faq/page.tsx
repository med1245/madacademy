
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from '@/contexts/language-context';

type FaqItem = {
    question: string;
    answer: string;
};

export default function FaqPage() {
    const { t, language } = useLanguage();
    const { messages } = require('@/lib/messages');

    const faqs: FaqItem[] = messages[language].faq.faqs;

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="text-center mb-12">
                        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">{t('title', 'faq')}</h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            {t('description', 'faq')}
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-xl text-left hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
