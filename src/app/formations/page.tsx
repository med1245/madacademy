
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { FlipCard } from '@/components/flip-card';
import { useLanguage } from '@/contexts/language-context';

export default function FormationsPage() {
  const { t, language } = useLanguage();
  const { messages } = require('@/lib/messages');

  const semester1Modules = messages[language].formations.semester1_modules;
  const semester2Modules = messages[language].formations.semester2_modules;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">{t('title', 'formations')}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('description', 'formations')}
            </p>
             <div className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                <p><span className="font-bold">{t('duration_label', 'formations')}</span> {t('duration_value', 'formations')}</p>
                <p><span className="font-bold">{t('format_label', 'formations')}</span> {t('format_value', 'formations')}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FlipCard 
              frontTitle={t('s1_front_title', 'formations')}
              frontSubtitle={t('s1_front_subtitle', 'formations')}
              backTitle={t('s1_back_title', 'formations')}
              modules={semester1Modules}
            />
            <FlipCard 
              frontTitle={t('s2_front_title', 'formations')}
              frontSubtitle={t('s2_front_subtitle', 'formations')}
              backTitle={t('s2_back_title', 'formations')}
              modules={semester2Modules}
            />
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
