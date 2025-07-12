import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, Play, Square } from "lucide-react";
import { useCapacitor } from "@/hooks/useCapacitor";
import { cn } from "@/lib/utils";

interface VoiceRecorderProps {
  onRecordingComplete?: (audioUrl: string) => void;
  className?: string;
}

export function VoiceRecorder({ onRecordingComplete, className }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const { triggerHaptic, triggerNotification } = useCapacitor();

  const startRecording = async () => {
    try {
      triggerHaptic();
      setIsRecording(true);
      
      // In a real app, this would use Capacitor's voice recorder
      // For now, we'll simulate it
      console.log("Starting voice recording...");
      
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      triggerNotification();
      setIsRecording(false);
      
      // Simulate audio URL
      const simulatedAudioUrl = "data:audio/wav;base64,simulated";
      setAudioUrl(simulatedAudioUrl);
      onRecordingComplete?.(simulatedAudioUrl);
      
      console.log("Recording stopped");
    } catch (error) {
      console.error("Error stopping recording:", error);
    }
  };

  const playRecording = () => {
    if (audioUrl) {
      triggerHaptic();
      console.log("Playing recording:", audioUrl);
    }
  };

  return (
    <Card className={cn("p-6", className)}>
      <div className="text-center space-y-4">
        <h3 className="font-semibold text-foreground">Pratica Pronuncia</h3>
        <p className="text-sm text-muted-foreground">
          Registra la tua pronuncia e ricevi feedback
        </p>

        <div className="flex justify-center">
          <div className="relative">
            <Button
              variant={isRecording ? "destructive" : "default"}
              size="lg"
              className={cn(
                "w-16 h-16 rounded-full",
                isRecording && "animate-pulse"
              )}
              onClick={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? (
                <Square size={24} />
              ) : (
                <Mic size={24} />
              )}
            </Button>
            
            {isRecording && (
              <div className="absolute inset-0 rounded-full border-2 border-destructive animate-ping" />
            )}
          </div>
        </div>

        {audioUrl && !isRecording && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={playRecording}
              className="flex items-center gap-2"
            >
              <Play size={16} />
              Riproduci
            </Button>
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          {isRecording ? "Registrazione in corso..." : "Tocca per registrare"}
        </div>
      </div>
    </Card>
  );
}