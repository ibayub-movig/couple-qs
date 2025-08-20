import { levelInfo } from "@/data/questions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb, Sparkles, Shuffle } from "lucide-react";

interface DeckSelectorProps {
  deckCounts: {
    perception: number;
    connection: number;
    reflection: number;
    wildcard: number;
  };
  onSelectDeck: (level: 'perception' | 'connection' | 'reflection' | 'wildcard') => void;
  onRandomDraw: () => void;
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

export function DeckSelector({ deckCounts, onSelectDeck, onRandomDraw }: DeckSelectorProps) {
  const totalCards = Object.values(deckCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Choose Your Cards</h1>
        <p className="text-muted-foreground">Pick from any deck or draw randomly</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {(Object.keys(levelInfo) as Array<keyof typeof levelInfo>).map((level) => {
          const Icon = levelIcons[level];
          const count = deckCounts[level];
          const gradientStyle = levelStyles[level];
          
          return (
            <Card 
              key={level}
              className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-br ${gradientStyle} border-0 text-white ${count === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => count > 0 && onSelectDeck(level)}
            >
              <div className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold text-sm mb-1">{levelInfo[level].title}</h3>
                <p className="text-xs opacity-90 mb-2">{levelInfo[level].description}</p>
                <div className="text-lg font-bold">{count} cards</div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button 
          onClick={onRandomDraw}
          disabled={totalCards === 0}
          className="bg-gradient-to-r from-coral to-warm-pink text-white hover:from-warm-pink hover:to-soft-pink"
          size="lg"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Draw Random Card ({totalCards} remaining)
        </Button>
      </div>
    </div>
  );
}