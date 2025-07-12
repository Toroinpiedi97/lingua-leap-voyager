import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "./ProgressBar";
import { Play, Lock, CheckCircle, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  title: string;
  description: string;
  progress?: number;
  totalSteps?: number;
  difficulty: "Facile" | "Medio" | "Difficile";
  duration: string;
  isLocked?: boolean;
  isCompleted?: boolean;
  xpReward?: number;
  onStart?: () => void;
  className?: string;
}

export const LessonCard = ({
  title,
  description,
  progress = 0,
  totalSteps = 10,
  difficulty,
  duration,
  isLocked = false,
  isCompleted = false,
  xpReward = 50,
  onStart,
  className
}: LessonCardProps) => {
  const difficultyColors = {
    "Facile": "bg-success/20 text-success",
    "Medio": "bg-accent/20 text-accent-foreground",
    "Difficile": "bg-destructive/20 text-destructive"
  };

  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:shadow-lg",
      isLocked && "opacity-60",
      isCompleted && "border-success/50 bg-success/5",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {isCompleted && <CheckCircle size={16} className="text-success" />}
            {isLocked && <Lock size={16} className="text-muted-foreground" />}
          </div>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={difficultyColors[difficulty]}>
              {difficulty}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock size={12} />
              {duration}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Star size={12} />
              {xpReward} XP
            </Badge>
          </div>
        </div>
      </div>

      {progress > 0 && !isCompleted && (
        <div className="mb-4">
          <ProgressBar
            value={progress}
            max={totalSteps}
            label="Progresso"
            variant="default"
            size="sm"
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        {!isLocked && !isCompleted && (
          <Button 
            variant={progress > 0 ? "default" : "lesson"} 
            onClick={onStart}
            className="flex-1"
          >
            <Play size={16} />
            {progress > 0 ? "Continua" : "Inizia"}
          </Button>
        )}
        
        {isCompleted && (
          <Button variant="outline" className="flex-1">
            <CheckCircle size={16} />
            Completata
          </Button>
        )}
        
        {isLocked && (
          <Button variant="ghost" disabled className="flex-1">
            <Lock size={16} />
            Bloccata
          </Button>
        )}
      </div>
    </Card>
  );
};