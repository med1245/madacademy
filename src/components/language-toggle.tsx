
"use client";

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button variant="outline" onClick={toggleLanguage} className="w-full md:w-auto hover:bg-[#814BFD] hover:text-white transition-shadow hover:shadow-[0_0_20px_2px_#814BFD]">
      {language === 'en' ? 'Français' : 'English'}
    </Button>
  );
};
