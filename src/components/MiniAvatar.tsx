import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MiniAvatarProps {
  className?: string;
}

const encouragingMessages = [
  "Ottimo lavoro! 🎉",
  "Continua così! 💪",
  "Sei fantastico! ⭐",
  "Quasi ci siamo! 🚀",
  "Perfetto! 👏"
];

export const MiniAvatar = ({ className }: MiniAvatarProps) => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomMessage = () => {
      const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
      setMessage(randomMessage);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const interval = setInterval(showRandomMessage, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative", className)}>
      {/* Avatar Character */}
      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-float">
        <div className="text-2xl">🦉</div>
      </div>
      
      {/* Speech Bubble */}
      {isVisible && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
          <div className="bg-card border border-border rounded-2xl px-3 py-2 shadow-soft relative">
            <div className="text-xs font-medium text-foreground whitespace-nowrap">
              {message}
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
          </div>
        </div>
      )}
    </div>
  );
};