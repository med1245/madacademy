
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function GalleryPage() {
    const { t } = useLanguage();

    const images = [
        { src: "/Game-Design.jpg" },
        { src: "/2.jpg" },
        { src: "/3.jpg" },
        { src: "/4.jpg" },
        { src: "/5.jpg" },
        { src: "/6.jpg" },
        { src: "/7.jpg" },
        { src: "/8.jpg" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 py-16 sm:py-24">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="text-center mb-12">
                        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                            {t('gallery', 'nav_academy')}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            {t('gallery_desc', 'gallery')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {images.map((image, index) => (
                            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-[0_0_20px_5px_hsl(var(--primary))] h-64">
                                <div className="relative w-full h-full">
                                    <Image 
                                        src={image.src} 
                                        alt={`Gallery image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-cover"
                                        unoptimized={true}
                                    />
                                </div>
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
