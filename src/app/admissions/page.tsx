
"use client";

import { useLanguage } from '@/contexts/language-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AdmissionsForm } from '@/components/admissions-form';

export default function AdmissionsPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-3xl px-4">
                     <Card className="shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_20px_5px_#814BFD]">
                        <CardHeader className="text-center">
                            <CardTitle className="font-headline text-3xl sm:text-4xl font-bold">
                                {t('admissions', 'sectionHeaders')}
                            </CardTitle>
                            <CardDescription className="text-lg">
                                {t('content', 'admissions')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AdmissionsForm />
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
