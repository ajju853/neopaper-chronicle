
import React, { useState } from 'react';
import { Share, Facebook, Twitter } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface DataArticleProps {
  title: string;
  dateline?: string;
  author?: string;
  children: React.ReactNode;
}

const DataArticle: React.FC<DataArticleProps> = ({ 
  title, 
  dateline = "FINANCIAL DISTRICT", 
  author = "AI Reporter",
  children 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(false);
  
  const handleShare = (platform: string) => {
    // Play sound effect
    const clickSound = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');
    clickSound.volume = 0.2;
    clickSound.play().catch(e => console.log("Audio play failed:", e));
    
    toast({
      title: "Article Shared",
      description: `Article "${title}" shared on ${platform}`,
      duration: 3000,
    });
  };
  
  return (
    <article 
      className={`py-2 animate-fade-in transition-all duration-300 ease-in-out
        ${isHovered ? 'bg-paper-light shadow-md transform -translate-y-1' : 'bg-transparent'}
        hover:shadow-lg border border-transparent hover:border-paper-dark/10 p-4 rounded-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowShareButtons(false);
      }}
    >
      <div className="relative">
        {isHovered && (
          <div className="absolute -top-2 -left-2 text-xs bg-highlight-purple text-paper-light py-0.5 px-2 rotate-[-2deg] shadow-sm">
            Featured Story
          </div>
        )}
        <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-all duration-300 
          ${isHovered ? 'text-ink-dark scale-[1.02]' : 'text-ink'}`}>
          {title}
        </h3>
        <p className="newspaper-dateline">{dateline.toUpperCase()}</p>
        <div className={`newspaper-column drop-cap transition-all duration-300 
          ${isHovered ? 'text-ink-dark leading-relaxed' : 'text-ink'}`}>
          {children}
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="newspaper-byline">By {author}</p>
          
          {isHovered && (
            <div className="flex items-center space-x-2">
              {showShareButtons ? (
                <div className="flex space-x-2 animate-fade-in">
                  <button 
                    onClick={() => handleShare('Facebook')}
                    className="p-1.5 bg-paper-dark/10 hover:bg-paper-dark/20 rounded-full transition-colors duration-200"
                  >
                    <Facebook size={14} className="text-ink-light" />
                  </button>
                  <button 
                    onClick={() => handleShare('Twitter')}
                    className="p-1.5 bg-paper-dark/10 hover:bg-paper-dark/20 rounded-full transition-colors duration-200"
                  >
                    <Twitter size={14} className="text-ink-light" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowShareButtons(true)}
                  className="text-xs font-serif text-ink-light hover:text-ink transition-colors duration-200 
                    flex items-center border-b border-ink-light/40 pb-0.5"
                >
                  Share article <Share className="ml-1 h-3 w-3" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default DataArticle;
