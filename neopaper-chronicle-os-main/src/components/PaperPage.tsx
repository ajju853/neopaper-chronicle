
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaperPageProps {
  children: React.ReactNode;
  pageNumber: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const PaperPage: React.FC<PaperPageProps> = ({ 
  children, 
  pageNumber, 
  totalPages,
  onNextPage,
  onPrevPage
}) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right' | null>(null);

  const handleNextPage = () => {
    if (pageNumber < totalPages && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('right');
      
      setTimeout(() => {
        onNextPage();
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('left');
      
      setTimeout(() => {
        onPrevPage();
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  return (
    <div className="paper-texture relative">
      <div 
        className={`paper-grain p-6 bg-paper shadow-md rounded-sm border border-paper-dark/20
          ${isFlipping && flipDirection === 'right' ? 'animate-page-flip-right' : ''}
          ${isFlipping && flipDirection === 'left' ? 'animate-page-flip-left' : ''}
          transition-transform duration-300`}
      >
        {children}
        
        <div className="flex justify-between items-center mt-8 border-t border-paper-dark/30 pt-4">
          <Button 
            variant="outline" 
            onClick={handlePrevPage}
            disabled={pageNumber <= 1 || isFlipping}
            className="font-serif text-sm bg-paper hover:bg-paper-dark"
          >
            <ChevronsLeft className="mr-2 h-4 w-4" />
            Previous Page
          </Button>
          
          <div className="font-serif text-sm text-ink/70">
            Page {pageNumber} of {totalPages}
          </div>
          
          <Button 
            variant="outline" 
            onClick={handleNextPage}
            disabled={pageNumber >= totalPages || isFlipping}
            className="font-serif text-sm bg-paper hover:bg-paper-dark"
          >
            Next Page
            <ChevronsRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaperPage;
