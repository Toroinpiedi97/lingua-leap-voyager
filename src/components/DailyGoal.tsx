import { Button } from "@/components/ui/button";
import { ProgressBar } from "./ProgressBar";
import { Play, CheckCircle, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface DailyGoalProps {
  title: string;
  progress: number;
  total: number;
  isCompleted?: boolean;
  onStart?: () => void;
  className?: string;
}

export const DailyGoal = ({ 
  title, 
  progress, 
  total, 
  isCompleted = false,
  onStart,
  className 
}: DailyGoalProps) => {
  return (
    <div className={cn(
      "p-6 bg-card rounded-3xl border shadow-soft transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-2xl",
            isCompleted ? "bg-success/20" : "bg-primary/20"
          )}>
            {isCompleted ? (
              <CheckCircle className="text-success" size={24} />
            ) : (
              <Target className="text-primary" size={24} />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {isCompleted ? "Completato!" : "Obiettivo di oggi"}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <ProgressBar 
          value={progress} 
          max={total}
          variant={isCompleted ? "success" : "default"}
          animated={!isCompleted}
        />
      </div>

      {!isCompleted && onStart && (
        <Button 
          variant="lesson" 
          size="lg" 
          onClick={onStart}
          className="w-full"
        >
          <Play size={20} />
          Inizia Lezione
        </Button>
      )}

      {isCompleted && (
        <div className="flex items-center justify-center py-3 text-success font-semibold">
          <CheckCircle size={20} className="mr-2" />
          Obiettivo completato!
        </div>
      )}
    </div>
  );
};