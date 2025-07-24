import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { CareersSection } from '@/components/sections/careers';
import { PartnersSection } from '@/components/sections/partners';
import { ContactSection } from '@/components/sections/contact';
import { BackToTopButton } from '@/components/back-to-top-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CareersSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
