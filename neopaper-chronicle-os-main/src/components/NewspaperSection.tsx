
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface NewspaperSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const NewspaperSection: React.FC<NewspaperSectionProps> = ({ 
  title, 
  children,
  className = ""
}) => {
  return (
    <Card className={`newspaper-article ${className} overflow-hidden`}>
      <CardHeader className="pb-2 border-b border-paper-dark/30">
        <h2 className="newspaper-subheading">{title}</h2>
      </CardHeader>
      <CardContent className="pt-4">
        {children}
      </CardContent>
    </Card>
  );
};

export default NewspaperSection;
