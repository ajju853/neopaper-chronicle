
import React from 'react';
import { Separator } from '@/components/ui/separator';

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const NewspaperHeader: React.FC = () => {
  return (
    <header className="w-full mb-6 text-center">
      <div className="flex items-center justify-center gap-4 mt-2 mb-4">
        <div className="flex-1 h-0.5 bg-ink/80"></div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
          NeoPaper
        </h1>
        <div className="flex-1 h-0.5 bg-ink/80"></div>
      </div>
      
      <p className="newspaper-dateline text-sm md:text-base mt-1 mb-2">
        {formattedDate} — PROTOTYPE EDITION
      </p>
      
      <Separator className="h-[2px] bg-ink/80 mb-2" />
      <Separator className="h-px bg-ink/50" />
      
      <div className="mt-6 mb-8">
        <h2 className="newspaper-heading mb-2">The Vintage-Futurist Data Journal</h2>
        <p className="text-lg md:text-xl font-serif italic">Intelligent Analytics from the Year 2140</p>
      </div>
    </header>
  );
};

export default NewspaperHeader;
