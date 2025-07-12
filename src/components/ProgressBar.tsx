import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercent?: boolean;
  variant?: "default" | "success" | "accent";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const ProgressBar = ({ 
  value, 
  max, 
  label, 
  showPercent = true, 
  variant = "default",
  size = "md",
  animated = false
}: ProgressBarProps) => {
  const percentage = Math.round((value / max) * 100);
  
  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };

  const variantClasses = {
    default: "bg-gradient-primary",
    success: "bg-gradient-success", 
    accent: "bg-gradient-warm"
  };

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-foreground">{label}</span>
          {showPercent && (
            <span className="text-muted-foreground font-semibold">
              {value}/{max} {showPercent && `(${percentage}%)`}
            </span>
          )}
        </div>
      )}
      <div className="relative">
        <Progress 
          value={percentage} 
          className={cn(
            "transition-all duration-500 ease-out",
            sizeClasses[size],
            animated && "animate-pulse"
          )}
        />
        <div 
          className={cn(
            "absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};