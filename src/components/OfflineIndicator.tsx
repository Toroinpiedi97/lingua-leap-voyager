import { useEffect, useState } from "react";
import { WifiOff, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className={cn(
      "fixed top-safe-top left-0 right-0 z-50",
      "bg-destructive text-destructive-foreground",
      "px-4 py-2 text-sm font-medium",
      "flex items-center justify-center gap-2",
      "animate-bounce-gentle"
    )}>
      <WifiOff size={16} />
      Modalità offline attiva
    </div>
  );
}