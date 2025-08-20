import { Question, levelInfo } from "@/services/airtable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb, Sparkles, RotateCcw, Check } from "lucide-react";

interface CardDisplayProps {
  question: Question;
  onMarkAsUsed: () => void;
  onPutBack: () => void;
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

const levelTextColors = {
  perception: "text-white",
  connection: "text-gray-800", 
  reflection: "text-white",
  wildcard: "text-white"
};

export function CardDisplay({ question, onMarkAsUsed, onPutBack }: CardDisplayProps) {
  const level = levelInfo[question.level];
  const Icon = levelIcons[question.level];
  const gradientStyle = levelStyles[question.level];
  const textColor = levelTextColors[question.level];

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      {/* Level indicator */}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradientStyle} ${textColor} shadow-soft`}>
          <Icon className="w-4 h-4" />
          <span className="font-medium text-sm">{level.title}</span>
        </div>
      </div>

      {/* Question card */}
      <Card className={`p-6 sm:p-8 shadow-romantic bg-gradient-to-br ${gradientStyle} border-0 text-white relative overflow-hidden mb-6`}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          {/* Question */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed mb-6">
              {question.text}
            </h2>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Button
          variant="outline"
          onClick={onPutBack}
          className="bg-white/20 border-white/30 text-foreground hover:bg-white/30"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Put Back
        </Button>
        
        <Button
          onClick={onMarkAsUsed}
          className={`bg-gradient-to-r ${gradientStyle} text-white hover:opacity-90`}
        >
          <Check className="w-4 h-4 mr-2" />
          Mark as Used
        </Button>
      </div>
    </div>
  );
}