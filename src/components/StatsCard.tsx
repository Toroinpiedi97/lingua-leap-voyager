import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  subtitle?: string;
  variant?: "default" | "success" | "accent" | "primary";
  className?: string;
}

export const StatsCard = ({ 
  icon: Icon, 
  label, 
  value, 
  subtitle,
  variant = "default",
  className 
}: StatsCardProps) => {
  const variantClasses = {
    default: "bg-card border-border",
    success: "bg-success/10 border-success/20",
    accent: "bg-accent/10 border-accent/20",
    primary: "bg-primary/10 border-primary/20"
  };

  const iconClasses = {
    default: "text-muted-foreground",
    success: "text-success",
    accent: "text-accent",
    primary: "text-primary"
  };

  return (
    <div className={cn(
      "p-4 rounded-2xl border transition-all duration-300 hover:shadow-soft",
      variantClasses[variant],
      className
    )}>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-background/50">
          <Icon size={20} className={iconClasses[variant]} />
        </div>
        <div className="flex-1">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
          {subtitle && (
            <div className="text-xs text-muted-foreground/80">{subtitle}</div>
          )}
        </div>
      </div>
    </div>
  );
};