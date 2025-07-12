import { cn } from "@/lib/utils";
import { Flame, Calendar } from "lucide-react";

interface StreakCounterProps {
  days: number;
  className?: string;
  showLabel?: boolean;
  variant?: "default" | "compact";
}

export const StreakCounter = ({ 
  days, 
  className, 
  showLabel = true,
  variant = "default" 
}: StreakCounterProps) => {
  const getFlameColor = () => {
    if (days >= 30) return "text-red-500";
    if (days >= 14) return "text-orange-500";
    if (days >= 7) return "text-yellow-500";
    return "text-accent";
  };

  if (variant === "compact") {
    return (
      <div className={cn(
        "flex items-center gap-1 px-3 py-1 bg-card rounded-full border",
        className
      )}>
        <Flame size={16} className={cn("animate-bounce-soft", getFlameColor())} />
        <span className="text-sm font-semibold">{days}</span>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex items-center justify-center gap-2 p-4 bg-card rounded-2xl border shadow-soft",
      className
    )}>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Calendar size={20} className="text-muted-foreground" />
          <Flame 
            size={16} 
            className={cn(
              "absolute -top-1 -right-1 animate-bounce-soft", 
              getFlameColor()
            )} 
          />
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">{days}</div>
          {showLabel && (
            <div className="text-xs text-muted-foreground font-medium">
              giorni di fila
            </div>
          )}
        </div>
      </div>
    </div>
  );
};