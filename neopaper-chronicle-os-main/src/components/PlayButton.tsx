
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';

interface PlayButtonProps {
  onPlay: () => void;
  onPause: () => void;
  isPlaying: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onPlay, onPause, isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripple, setRipple] = useState({ active: false, x: 0, y: 0 });
  
  useEffect(() => {
    // Create audio element for sound effects
    audioRef.current = new Audio();
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = (type: 'play' | 'pause') => {
    if (audioRef.current) {
      // Set sound URL based on action
      audioRef.current.src = type === 'play' 
        ? 'https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3'
        : 'https://www.soundjay.com/mechanical/sounds/typewriter-return-1.mp3';
      
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  const handleTogglePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Create ripple effect
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setRipple({ active: true, x, y });
      
      setTimeout(() => {
        setRipple({ active: false, x: 0, y: 0 });
      }, 600);
    }
    
    if (isPlaying) {
      playSound('pause');
      onPause();
    } else {
      playSound('play');
      onPlay();
    }
    
    // Add ripple effect
    if (buttonRef.current) {
      buttonRef.current.classList.add('animate-pulse');
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.remove('animate-pulse');
        }
      }, 500);
    }
  };

  return (
    <Button 
      ref={buttonRef}
      onClick={handleTogglePlay}
      className={`
        relative overflow-hidden transition-all duration-300
        ${isPlaying 
          ? "bg-paper-dark hover:bg-paper text-ink-light" 
          : "bg-ink hover:bg-ink-light text-paper-light"}
        font-serif px-6 py-5 rounded-sm hover:shadow-md hover:scale-105
        before:content-[''] before:absolute before:bg-white/10 
        before:top-0 before:left-0 before:right-0 before:bottom-0
        before:translate-y-full hover:before:translate-y-0
        before:transition-transform before:duration-300
      `}
    >
      {/* Ripple effect */}
      {ripple.active && (
        <span 
          className="absolute w-full h-full bg-white/20 rounded-full animate-[ripple_0.6s_linear_forwards]"
          style={{ 
            left: ripple.x, 
            top: ripple.y,
            transform: 'translate(-50%, -50%) scale(0)',
            animation: 'ripple 0.6s linear forwards'
          }}
        />
      )}
      
      <div className="relative flex items-center">
        {isPlaying ? (
          <>
            <Pause className="mr-2 h-5 w-5" />
            <span>Pause Headlines</span>
          </>
        ) : (
          <>
            <Play className="mr-2 h-5 w-5" />
            <span>Play Headlines</span>
          </>
        )}
        <Volume2 className="ml-2 h-3 w-3 opacity-60" />
      </div>
    </Button>
  );
};

export default PlayButton;
