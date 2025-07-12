import { Button } from "@/components/ui/button";
import { Mic, BookOpen, Users, Gamepad2, Volume2, MessageCircle } from "lucide-react";

interface QuickAction {
  icon: React.ElementType;
  label: string;
  variant: "default" | "secondary" | "accent" | "lesson";
  onClick: () => void;
}

export const QuickActions = () => {
  const actions: QuickAction[] = [
    {
      icon: Mic,
      label: "Pronuncia",
      variant: "accent",
      onClick: () => console.log("Pronuncia")
    },
    {
      icon: BookOpen,
      label: "Vocabolario",
      variant: "secondary",
      onClick: () => console.log("Vocabolario")
    },
    {
      icon: Gamepad2,
      label: "Giochi",
      variant: "lesson",
      onClick: () => console.log("Giochi")
    },
    {
      icon: MessageCircle,
      label: "Chat AI",
      variant: "default",
      onClick: () => console.log("Chat AI")
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Button
            key={index}
            variant={action.variant}
            size="lg"
            onClick={action.onClick}
            className="flex-col h-20 gap-2"
          >
            <Icon size={24} />
            <span className="text-sm font-semibold">{action.label}</span>
          </Button>
        );
      })}
    </div>
  );
};