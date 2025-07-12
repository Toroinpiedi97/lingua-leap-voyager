import { cn } from "@/lib/utils";
import { Star, Trophy, Crown, Zap } from "lucide-react";

interface LevelBadgeProps {
  level: number;
  className?: string;
  showAnimation?: boolean;
  size?: "sm" | "md" | "lg";
}

export const LevelBadge = ({ 
  level, 
  className, 
  showAnimation = false,
  size = "md" 
}: LevelBadgeProps) => {
  const getIcon = () => {
    if (level >= 50) return Crown;
    if (level >= 20) return Trophy;
    if (level >= 10) return Star;
    return Zap;
  };

  const Icon = getIcon();

  const sizeClasses = {
    sm: "w-12 h-12 text-xs",
    md: "w-16 h-16 text-sm",
    lg: "w-20 h-20 text-base"
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <div className={cn(
      "relative flex items-center justify-center rounded-2xl bg-gradient-level text-white font-bold shadow-glow border-2 border-white/20",
      sizeClasses[size],
      showAnimation && "animate-level-up",
      className
    )}>
      <div className="absolute -top-1 -right-1">
        <Icon size={iconSizes[size]} className="text-accent drop-shadow-sm" />
      </div>
      <span className="font-bold">{level}</span>
      
      {/* Decorative elements */}
      <div className="absolute -top-2 -left-2 w-4 h-1 bg-white/60 rounded-full transform -rotate-45" />
      <div className="absolute -bottom-2 -right-2 w-4 h-1 bg-white/40 rounded-full transform -rotate-45" />
      <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full" />
      <div className="absolute bottom-1 right-3 w-1 h-1 bg-white/60 rounded-full" />
    </div>
  );
};