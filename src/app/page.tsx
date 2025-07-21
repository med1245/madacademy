import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProgramSection } from '@/components/sections/program';
import { ToolsSection } from '@/components/sections/tools';
import { CareersSection } from '@/components/sections/careers';
import { AdmissionsSection } from '@/components/sections/admissions';
import { CertificationsSection } from '@/components/sections/certifications';
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
        <ProgramSection />
        <ToolsSection />
        <CareersSection />
        <AdmissionsSection />
        <CertificationsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
