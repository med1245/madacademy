
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface FlipCardProps {
  frontTitle: string;
  frontSubtitle: string;
  backTitle: string;
  modules: {
    title: string;
    points: string[];
  }[];
}

export const FlipCard = ({ frontTitle, frontSubtitle, backTitle, modules }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div 
      className="perspective group" 
      style={{ minHeight: '500px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative preserve-3d w-full h-full duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of the card */}
        <div className="absolute backface-hidden w-full h-full">
          <Card className="w-full h-full flex flex-col justify-center items-center text-center shadow-lg bg-card border-primary transition-shadow duration-300 hover:shadow-[0_0_20px_5px_#814BFD]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">{frontTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-muted-foreground">{frontSubtitle}</p>
            </CardContent>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="absolute backface-hidden w-full h-full rotate-y-180">
          <Card className="w-full h-full shadow-lg bg-card border-primary overflow-y-auto transition-shadow duration-300 hover:shadow-[0_0_20px_5px_#814BFD]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">{backTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.map((module, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg">{module.title}</h4>
                  <ul className="mt-2 space-y-1 pl-4">
                    {module.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
