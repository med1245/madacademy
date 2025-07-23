
"use client";

import { useEffect, useState } from 'react';
import { ChevronsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'bg-accent text-accent-foreground rounded-full shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_20px_2px_#814BFD] h-14 w-14',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        style={{ backgroundColor: '#814BFD' }}
        aria-label="Go to top"
      >
        <ChevronsUp className="h-16 w-16" />
      </Button>
    </div>
  );
};
