import { useState, useEffect } from "react";
import { Shield, Eye, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isStriking, setIsStriking] = useState(false);
  const [showWipemy, setShowWipemy] = useState(false);

  const threats = ["Шантаж", "Мошенничество", "Докс", "Угрозы"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsStriking(true);
      
      setTimeout(() => {
        if (currentWordIndex === threats.length - 1) {
          setShowWipemy(true);
        } else {
          setCurrentWordIndex((prev) => prev + 1);
        }
        setIsStriking(false);
      }, 800);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentWordIndex, threats.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 animate-fade-up">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-cyber-red animate-glow mr-4" />
              <div className="text-4xl md:text-6xl font-bold">
                {!showWipemy ? (
                  <span 
                    className={`strikethrough text-muted-foreground ${isStriking ? 'animate' : ''}`}
                  >
                    {threats[currentWordIndex]}
                  </span>
                ) : (
                  <span className="text-cyber-gradient animate-fade-in">
                    wipemy.info
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Профессиональная защита ваших данных в сети
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы специализируемся на удалении компрометирующей информации, 
              защите от утечек данных и обеспечении вашей цифровой безопасности
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="cyber-glow bg-gradient-cyber border-0 hover:scale-105 transition-transform text-lg px-8 py-3"
            >
              <Shield className="mr-2 h-5 w-5" />
              Проверить утечки
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-background transition-all"
            >
              <Eye className="mr-2 h-5 w-5" />
              Узнать больше
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "0.9s" }}>
            <div className="glass-card group hover:cyber-glow">
              <Database className="h-12 w-12 text-cyber-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Удаление данных</h3>
              <p className="text-muted-foreground">Полное удаление компрометирующей информации из интернета</p>
            </div>
            
            <div className="glass-card group hover:cyber-glow">
              <Eye className="h-12 w-12 text-cyber-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Мониторинг утечек</h3>
              <p className="text-muted-foreground">Постоянное отслеживание появления ваших данных в сети</p>
            </div>
            
            <div className="glass-card group hover:cyber-glow">
              <Lock className="h-12 w-12 text-cyber-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Защита репутации</h3>
              <p className="text-muted-foreground">Профессиональная защита вашей цифровой репутации</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;