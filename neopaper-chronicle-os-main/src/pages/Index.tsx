
import React, { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import NewspaperHeader from "@/components/NewspaperHeader";
import PaperPage from "@/components/PaperPage";
import NewspaperSection from "@/components/NewspaperSection";
import MonthlyMomentReel from "@/components/MonthlyMomentReel";
import DataInsights from "@/components/DataInsights";
import PlayButton from "@/components/PlayButton";
import AnimatedLineChart from "@/components/charts/LineChart";
import AnimatedBarChart from "@/components/charts/BarChart";
import AnimatedDonutChart from "@/components/charts/DonutChart";
import Headlines from "@/components/Headlines";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [headlineOpacity, setHeadlineOpacity] = useState(1);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const typewriterIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const headlineElementRef = useRef<HTMLDivElement>(null);
  const totalPages = 3;

  // Sample headlines for demonstration
  const headlines = [
    "ANNUAL REVENUE SURPASSES EXPECTATIONS",
    "TECH DIVISION REPORTS 23% GROWTH IN Q4",
    "NEW MARKETS OPEN IN EASTERN REGION",
    "PRODUCT INNOVATION DRIVES CUSTOMER ACQUISITION",
    "SUBSCRIPTION SERVICES SEE RECORD ADOPTION",
    "COST-CUTTING MEASURES BOOST PROFIT MARGINS"
  ];

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (typewriterIntervalRef.current) {
        clearInterval(typewriterIntervalRef.current);
      }
    };
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      // Add page turn sound
      const pageSound = new Audio('https://www.soundjay.com/page-flip-sounds/page-flip-01.mp3');
      pageSound.volume = 0.3;
      pageSound.play().catch(e => console.log("Audio play failed:", e));
      
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      // Add page turn sound
      const pageSound = new Audio('https://www.soundjay.com/page-flip-sounds/page-flip-02.mp3');
      pageSound.volume = 0.3;
      pageSound.play().catch(e => console.log("Audio play failed:", e));
      
      setCurrentPage(currentPage - 1);
    }
  };

  // Typewriter effect for headlines
  const startTypewriterEffect = (text: string) => {
    let i = 0;
    setTypewriterText("");
    setTypewriterComplete(false);
    
    // Clear any existing typewriter interval
    if (typewriterIntervalRef.current) {
      clearInterval(typewriterIntervalRef.current);
    }
    
    // Start new typewriter effect
    typewriterIntervalRef.current = setInterval(() => {
      if (i < text.length) {
        setTypewriterText((prev) => prev + text.charAt(i));
        i++;
        
        // Add typewriter sound every few characters for realistic effect
        if (i % 3 === 0) {
          const typeSound = new Audio('https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3');
          typeSound.volume = 0.05;
          typeSound.play().catch(e => console.log("Audio play failed:", e));
        }
      } else {
        if (typewriterIntervalRef.current) {
          clearInterval(typewriterIntervalRef.current);
          typewriterIntervalRef.current = null;
          setTypewriterComplete(true);
          
          // Add typewriter return sound at the end
          const returnSound = new Audio('https://www.soundjay.com/mechanical/sounds/typewriter-return-1.mp3');
          returnSound.volume = 0.1;
          returnSound.play().catch(e => console.log("Audio play failed:", e));
        }
      }
    }, 100);
  };

  const animateHeadlineElement = () => {
    if (headlineElementRef.current) {
      // Start typewriter animation with current headline
      const headline = headlines[currentHeadlineIndex];
      startTypewriterEffect(headline);
    }
  };

  const handlePlayDemo = () => {
    console.log("Starting automated presentation...");
    setIsPlaying(true);
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Show initial headline with typewriter effect
    animateHeadlineElement();
    
    // Show toast notification for headline
    toast({
      title: "Breaking News",
      description: headlines[currentHeadlineIndex],
      duration: 3000,
    });
    
    // Set interval to cycle through headlines
    intervalRef.current = setInterval(() => {
      // Fade out current headline
      setHeadlineOpacity(0);
      
      // Change headline after fade out
      setTimeout(() => {
        setCurrentHeadlineIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % headlines.length;
          
          // Show toast notification for headline
          toast({
            title: "Breaking News",
            description: headlines[nextIndex],
            duration: 3000,
            className: "bg-paper border border-ink-light/30"
          });
          
          // Animate the new headline
          setTimeout(() => {
            animateHeadlineElement();
            setHeadlineOpacity(1);
          }, 100);
          
          return nextIndex;
        });
      }, 500);
      
    }, 8000); // Changed to 8 seconds to allow time for typewriter effect
  };

  const handlePauseDemo = () => {
    console.log("Pausing automated presentation...");
    setIsPlaying(false);
    
    // Clear the interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Clear typewriter effect
    if (typewriterIntervalRef.current) {
      clearInterval(typewriterIntervalRef.current);
      typewriterIntervalRef.current = null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <NewspaperHeader />

      {/* LiveTicker - always visible */}
      <div className="w-full overflow-hidden bg-ink text-paper py-1.5 mb-6 
          border-y border-paper/10 shadow-inner relative">
        <div className="flex items-center animate-[marquee_35s_linear_infinite] whitespace-nowrap">
          {[...headlines, ...headlines].map((headline, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="font-bold mr-2">BREAKING:</span> 
              <span>{headline}</span>
              <span className="mx-6 opacity-30">•</span>
            </div>
          ))}
        </div>
      </div>

      <PaperPage 
        pageNumber={currentPage} 
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      >
        {currentPage === 1 && (
          <>
            <NewspaperSection title="Monthly Data Review">
              <div className="mb-6">
                <h2 className="newspaper-heading text-center mb-4">
                  Performance Through The Year
                </h2>
                <p className="text-center mb-8 max-w-3xl mx-auto">
                  Track the evolution of key business metrics across each month. Select a month to see detailed performance data
                  and analysis for that specific period.
                </p>
              </div>
              <MonthlyMomentReel />
            </NewspaperSection>
          </>
        )}

        {currentPage === 2 && (
          <>
            <NewspaperSection title="Today's Headlines">
              <Headlines />
            </NewspaperSection>

            <div className="mt-10 mb-8 text-center">
              <div className="relative">
                {/* Current headline display with typewriter effect */}
                <div 
                  ref={headlineElementRef}
                  className={`text-lg md:text-xl font-serif mb-6 transition-opacity duration-500 min-h-[3rem] flex items-center justify-center`}
                  style={{ opacity: headlineOpacity }}
                >
                  {typewriterText}
                  {!typewriterComplete && (
                    <span className="animate-pulse ml-0.5 inline-block w-2 h-4 bg-ink-dark"></span>
                  )}
                </div>
                
                <PlayButton 
                  onPlay={handlePlayDemo} 
                  onPause={handlePauseDemo} 
                  isPlaying={isPlaying}
                />
              </div>
            </div>

            <NewspaperSection title="Data Insights">
              <DataInsights />
            </NewspaperSection>
          </>
        )}

        {currentPage === 3 && (
          <>
            <NewspaperSection title="Visual Data Analysis">
              <div className="mb-8">
                <h2 className="newspaper-heading text-center mb-4">
                  Interactive Data Visualizations
                </h2>
                <p className="text-center mb-8 max-w-3xl mx-auto">
                  Explore our dataset through different visualization methods. Each chart provides a unique 
                  perspective on our company's performance and market position.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 mb-8">
                <div>
                  <h3 className="newspaper-subheading mb-4">Annual Performance Trend</h3>
                  <AnimatedLineChart height={350} />
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="newspaper-subheading mb-4">Revenue Categories</h3>
                  <AnimatedBarChart height={350} />
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="newspaper-subheading mb-4">Market Distribution</h3>
                  <div className="max-w-xl mx-auto">
                    <AnimatedDonutChart height={350} />
                  </div>
                </div>
              </div>
            </NewspaperSection>
          </>
        )}
      </PaperPage>

      <footer className="mt-12 text-center text-sm text-ink-light">
        <p>NeoPaper OS — The Vintage-Futurist Data Journal</p>
        <p className="mt-1">© 2140 • A Lovable Prototype Project</p>
      </footer>
    </div>
  );
};

export default Index;
