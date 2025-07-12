import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface Language {
  code: string;
  name: string;
  flag: string;
  level: string;
}

const languages: Language[] = [
  { code: "en", name: "Inglese", flag: "🇺🇸", level: "Intermedio" },
  { code: "es", name: "Spagnolo", flag: "🇪🇸", level: "Principiante" },
  { code: "fr", name: "Francese", flag: "🇫🇷", level: "Avanzato" },
  { code: "de", name: "Tedesco", flag: "🇩🇪", level: "Principiante" }
];

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between bg-card border-2 hover:border-primary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Globe size={20} className="text-primary" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">{selectedLanguage.flag}</span>
            <div className="text-left">
              <div className="font-semibold">{selectedLanguage.name}</div>
              <div className="text-xs text-muted-foreground">{selectedLanguage.level}</div>
            </div>
          </div>
        </div>
        <ChevronDown 
          size={16} 
          className={cn(
            "transition-transform",
            isOpen && "rotate-180"
          )} 
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-2xl shadow-lg z-10">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language);
                setIsOpen(false);
              }}
              className={cn(
                "w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors first:rounded-t-2xl last:rounded-b-2xl",
                selectedLanguage.code === language.code && "bg-primary/10"
              )}
            >
              <span className="text-2xl">{language.flag}</span>
              <div className="text-left">
                <div className="font-semibold">{language.name}</div>
                <div className="text-xs text-muted-foreground">{language.level}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};