import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DailyGoal } from "@/components/DailyGoal";
import { LevelBadge } from "@/components/LevelBadge";
import { StreakCounter } from "@/components/StreakCounter";
import { StatsCard } from "@/components/StatsCard";
import { QuickActions } from "@/components/QuickActions";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MiniAvatar } from "@/components/MiniAvatar";
import { ProgressBar } from "@/components/ProgressBar";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { 
  Bell, 
  Settings, 
  BookOpen, 
  Clock, 
  Trophy, 
  Star,
  Zap,
  TrendingUp,
  Calendar,
  Award
} from "lucide-react";

export default function Dashboard() {
  const userName = "Nicolas";
  const currentLevel = 4;
  const xpCurrent = 1321;
  const xpToNext = 2000;
  const streakDays = 7;
  const dailyGoalProgress = 3;
  const dailyGoalTotal = 5;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                LinguaLeap
              </div>
              <div className="hidden md:block">
                <LanguageSelector />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings size={20} />
              </Button>
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                N
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Ciao {userName}! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                Pronto a imparare oggi? Hai già fatto grandi progressi!
              </p>
            </div>
            <MiniAvatar className="hidden md:block" />
          </div>
        </section>

        {/* Stats Overview */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <LevelBadge level={currentLevel} size="lg" />
          </div>
          
          <StreakCounter days={streakDays} variant="compact" />
          
          <StatsCard
            icon={BookOpen}
            label="Parole apprese"
            value="156"
            variant="success"
          />
          
          <StatsCard
            icon={Clock}
            label="Tempo oggi"
            value="12 min"
            variant="accent"
          />
        </section>

        {/* XP Progress */}
        <section className="mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold text-foreground">Progresso XP</h3>
                <p className="text-sm text-muted-foreground">Livello {currentLevel}</p>
              </div>
            </div>
            <ProgressBar
              value={xpCurrent}
              max={xpToNext}
              label={`${xpCurrent} / ${xpToNext} XP`}
              variant="default"
              size="lg"
            />
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Daily Goal */}
          <div className="lg:col-span-2 space-y-6">
            <DailyGoal
              title="Impara 5 nuove parole"
              progress={dailyGoalProgress}
              total={dailyGoalTotal}
              onStart={() => console.log("Start lesson")}
            />

            {/* Recent Achievements */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-accent" size={24} />
                <h3 className="font-semibold text-foreground">Risultati Recenti</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-2xl border border-success/20">
                  <Award className="text-success" size={20} />
                  <div>
                    <div className="font-medium text-success-foreground">Settimana Perfetta!</div>
                    <div className="text-sm text-muted-foreground">7 giorni di studio consecutivi</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-2xl border border-primary/20">
                  <Star className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-primary-foreground">Livello 4 Raggiunto!</div>
                    <div className="text-sm text-muted-foreground">100 parole apprese</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap size={20} className="text-primary" />
                Azioni Rapide
              </h3>
              <QuickActions />
            </Card>

            {/* Weekly Stats */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-success" />
                Questa Settimana
              </h3>
              <div className="space-y-4">
                <StatsCard
                  icon={Calendar}
                  label="Giorni attivi"
                  value="6/7"
                  variant="success"
                />
                <StatsCard
                  icon={BookOpen}
                  label="Lezioni completate"
                  value="12"
                  variant="primary"
                />
                <StatsCard
                  icon={Clock}
                  label="Tempo totale"
                  value="1h 45m"
                  variant="accent"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Continua il tuo viaggio! 🚀
              </h3>
              <p className="text-muted-foreground mb-6">
                Ogni giorno è un passo verso la fluenza. Inizia la tua prossima lezione ora!
              </p>
              <Button variant="floating" size="xl" className="animate-pulse-glow">
                <BookOpen size={24} />
                Inizia Nuova Lezione
              </Button>
            </div>
          </Card>
        </section>
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton
        icon={BookOpen}
        onClick={() => console.log("Quick lesson start")}
        variant="success"
        size="lg"
      />
    </div>
  );
}