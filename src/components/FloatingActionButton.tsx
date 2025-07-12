import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FloatingActionButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
  variant?: "default" | "success" | "accent";
  size?: "default" | "lg";
}

export const FloatingActionButton = ({
  icon: Icon,
  onClick,
  className,
  variant = "default",
  size = "default"
}: FloatingActionButtonProps) => {
  const variants = {
    default: "bg-gradient-primary hover:shadow-glow",
    success: "bg-gradient-success hover:shadow-success", 
    accent: "bg-gradient-warm hover:shadow-lg"
  };

  const sizes = {
    default: "w-14 h-14",
    lg: "w-16 h-16"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 z-50",
        variants[variant],
        sizes[size],
        className
      )}
      size="icon"
    >
      <Icon size={size === "lg" ? 28 : 24} className="text-white" />
    </Button>
  );
};