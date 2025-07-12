import { useCapacitor } from "@/hooks/useCapacitor";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MobileOptimizedProps {
  children: ReactNode;
  className?: string;
  enableHaptics?: boolean;
  onClick?: () => void;
}

export function MobileOptimized({ 
  children, 
  className, 
  enableHaptics = false, 
  onClick 
}: MobileOptimizedProps) {
  const { triggerHaptic } = useCapacitor();

  const handleClick = () => {
    if (enableHaptics) {
      triggerHaptic();
    }
    onClick?.();
  };

  return (
    <div
      className={cn(
        "touch-manipulation select-none",
        "active:scale-[0.98] transition-transform duration-150",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}