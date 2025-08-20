import { Question, levelInfo } from "@/data/questions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb, Sparkles } from "lucide-react";

interface GameCardProps {
  question: Question;
  currentPlayer: 1 | 2;
  onNext: () => void;
  onPrevious?: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const levelIcons = {
  perception: Heart,
  connection: Users, 
  reflection: Lightbulb,
  wildcard: Sparkles
};

const levelStyles = {
  perception: "from-coral to-warm-pink",
  connection: "from-warm-pink to-soft-pink", 
  reflection: "from-gold to-coral",
  wildcard: "from-deep-coral to-coral"
};

export function GameCard({ 
  question, 
  currentPlayer, 
  onNext, 
  onPrevious, 
  questionNumber, 
  totalQuestions 
}: GameCardProps) {
  const level = levelInfo[question.level];
  const Icon = levelIcons[question.level];
  const gradientStyle = levelStyles[question.level];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      {/* Level indicator */}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradientStyle} text-white shadow-soft`}>
          <Icon className="w-4 h-4" />
          <span className="font-medium text-sm">{level.title}</span>
        </div>
        <p className="text-muted-foreground text-sm mt-2">{level.description}</p>
      </div>

      {/* Question card */}
      <Card className={`p-8 shadow-romantic bg-gradient-to-br ${gradientStyle} border-0 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          {/* Player indicator */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-medium text-sm">Player {currentPlayer}'s Turn</span>
            </div>
          </div>

          {/* Question */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
              {question.text}
            </h2>
          </div>

          {/* Progress */}
          <div className="text-center text-white/80 text-sm mb-6">
            Question {questionNumber} of {totalQuestions}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={!onPrevious}
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 disabled:opacity-50"
            >
              Previous
            </Button>
            
            <Button
              onClick={onNext}
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              variant="outline"
            >
              Next Question
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}