
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { LanguageToggle } from '../language-toggle';
import { ThemeToggle } from '../theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTheme } from 'next-themes';


export const Header = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const academyLinks = [
    { href: "/about", label: t('school', 'nav_academy') },
    { href: "/faq", label: t('faq', 'nav_academy') },
    { href: "/gallery", label: t('gallery', 'nav_academy') },
    { href: "/awards", label: t('awards', 'nav_academy') },
    { href: "/recruiters", label: t('recruiters', 'nav_academy') },
  ];

  const careersLinks = [
    { href: "/careers", label: t('careers', 'nav_careers') },
    { href: "/guilds", label: t('guilds', 'nav_careers') },
  ];

  const logoSrc = mounted && theme === 'dark' ? "/LOGOIC2_v2.png" : "/LOGOIC2.png";


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="mr-auto flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              {mounted ? (
                <>
                  <Image src={logoSrc} alt="MAD Academy Logo" width={280} height={42} className="hidden md:block" key={logoSrc} />
                  <Image src={logoSrc} alt="MAD Academy Logo" width={250} height={38} className="block md:hidden" key={logoSrc + 'mobile'} />
                </>
              ) : (
                <>
                  <div style={{width: '280px', height: '42px'}} className="hidden md:block" />
                  <div style={{width: '250px', height: '38px'}} className="block md:hidden" />
                </>
              )}

            </Link>
        </div>

        <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" asChild className="hover:bg-[#814BFD] hover:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]"><Link href="/">{t('home', 'nav_main')}</Link></Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-[#814BFD] hover:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]">{t('academy', 'nav_main')} <ChevronDown className="ml-1 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {academyLinks.map(link => (
                  <DropdownMenuItem key={link.href} asChild className="hover:bg-[#814BFD] focus:bg-[#814BFD] hover:text-white focus:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD] focus:shadow-[0_0_20px_2px_#814BFD]"><Link href={link.href}>{link.label}</Link></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild className="hover:bg-[#814BFD] hover:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]"><Link href="/formations">{t('training', 'nav_main')}</Link></Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-[#814BFD] hover:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]">{t('careers', 'nav_main')} <ChevronDown className="ml-1 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {careersLinks.map(link => (
                  <DropdownMenuItem key={link.href} asChild className="hover:bg-[#814BFD] focus:bg-[#814BFD] hover:text-white focus:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD] focus:shadow-[0_0_20px_2px_#814BFD]"><Link href={link.href}>{link.label}</Link></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" asChild className="hover:bg-[#814BFD] hover:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]"><Link href="/admissions">{t('admissions', 'nav_main')}</Link></Button>
            <Button className="bg-[#283F8F] hover:bg-[#814BFD] text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]" asChild><Link href="/#contact">{t('contact', 'nav_main')}</Link></Button>

        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-[#814BFD] hover:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                      <Link href="/" className="flex items-center gap-2 group">
                          {mounted ? (
                            <Image src={logoSrc} alt="MAD Academy Logo" width={180} height={38} key={logoSrc + 'sheet'} />
                          ) : (
                            <div style={{width: '180px', height: '38px'}} />
                          )}
                      </Link>
                  </div>
                   <nav className="flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link href="/" className="text-lg transition-colors hover:text-primary py-4 border-b">{t('home', 'nav_main')}</Link>
                    </SheetClose>
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="academy">
                        <AccordionTrigger className="text-lg hover:no-underline">{t('academy', 'nav_main')}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-2 pl-4">
                            {academyLinks.map((item) => (
                              <SheetClose asChild key={item.href}>
                                <Link href={item.href} className="text-base transition-colors hover:text-primary py-1">{item.label}</Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                     <SheetClose asChild>
                      <Link href="/formations" className="text-lg transition-colors hover:text-primary py-4 border-b">{t('training', 'nav_main')}</Link>
                    </SheetClose>
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="careers">
                        <AccordionTrigger className="text-lg hover:no-underline">{t('careers', 'nav_main')}</AccordionTrigger>
                        <AccordionContent>
                           <div className="flex flex-col gap-2 pl-4">
                            {careersLinks.map((item) => (
                              <SheetClose asChild key={item.href}>
                                <Link href={item.href} className="text-base transition-colors hover:text-primary py-1">{item.label}</Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <SheetClose asChild>
                      <Link href="/admissions" className="text-lg transition-colors hover:text-primary py-4 border-b">{t('admissions', 'nav_main')}</Link>
                    </SheetClose>
                     <SheetClose asChild>
                        <Button className="w-full mt-4 bg-[#283F8F] hover:bg-[#814BFD] text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]" asChild><Link href="/#contact">{t('contact', 'nav_main')}</Link></Button>
                    </SheetClose>
                  </nav>
                  <div className="mt-auto pt-6 flex items-center gap-4">
                      <LanguageToggle />
                      <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
