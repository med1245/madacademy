
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { AboutSection } from '@/components/sections/about';
import { FoundersSection } from '@/components/sections/founders';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-8 sm:py-12">
                <AboutSection />
                <FoundersSection />
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
