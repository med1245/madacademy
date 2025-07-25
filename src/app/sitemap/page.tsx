
"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Home } from 'lucide-react';

const SitemapPage = () => {
  const { t } = useLanguage();

  const academyLinks = [
    { href: "/about", label: t('school', 'nav_academy') },
    { href: "/faq", label: t('faq', 'nav_academy') },
    { href: "/gallery", label: t('gallery', 'nav_academy') },
    { href: "/awards", label: t('awards', 'nav_academy') },
    { href: "/recruiters", label: t('recruiters', 'nav_academy') },
  ];

  const careersLinks = [
    { href: "/careers", label: t('careers', 'nav_careers') },
    { href: "/careers/coder", label: t('career1_title', 'careers') },
    { href: "/careers/strategist", label: t('career2_title', 'careers') },
    { href: "/careers/guild-master", label: t('career3_title', 'careers') },
    { href: "/guilds", label: t('guilds', 'nav_careers') },
  ];


  const sitemapColumns = [
    { 
      title: t('home', 'nav_main'), 
      links: [
        { href: "/", label: t('home', 'nav_main') },
      ]
    },
    { 
      title: t('academy', 'nav_main'),
      links: academyLinks
    },
    { 
      title: t('training', 'nav_main'),
      links: [
        { href: "/formations", label: t('training', 'nav_main') },
      ]
    },
    {
      title: t('careers', 'nav_main'),
      links: careersLinks
    },
    {
      title: t('admissions', 'nav_main'),
      links: [
        { href: "/admissions", label: t('admissions', 'nav_main') },
      ]
    },
    {
      title: t('contact', 'nav_main'),
      links: [
         { href: "/#contact", label: t('contact', 'nav_main') },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen sitemap-page">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center mb-4 text-lg">
            <Link href="/" className="hover:text-primary"><Home className="inline-block w-5 h-5" /></Link>
            <span className="mx-2">/</span>
            <span>Sitemap</span>
          </div>
          <h1 className="font-headline text-5xl sm:text-6xl font-bold text-center mb-12 md:mb-24 tracking-widest">
            SITEMAP
          </h1>
          
          <div className="sitemap-container">
            <div className="sitemap-metro-line"></div>
            <div className="sitemap-grid">
              {sitemapColumns.map((column, index) => (
                <div key={index} className="sitemap-column">
                  <h2 className="sitemap-column-title">
                    {column.title}
                  </h2>
                  <ul className="sitemap-column-links">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
