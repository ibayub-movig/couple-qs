import { levelInfo } from "@/services/airtable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Heart, Users, Lightbulb, Sparkles, Shuffle, Star } from "lucide-react";

interface DeckSelectorProps {
  deckCounts: {
    perception: number;
    connection: number;
    reflection: number;
    wildcard: number;
  };
  onSelectDeck: (level: 'perception' | 'connection' | 'reflection' | 'wildcard') => void;
  onRandomDraw: () => void;
  isIbsPicksMode: boolean;
  onToggleIbsPicks: (enabled: boolean) => void;
  ibsPicksCount: number;
}

const levelIcons = {
  perception: Heart,
  connection: Users, 
  reflection: Lightbulb,
  wildcard: Sparkles
};

const levelStyles = {
  perception: "bg-coral",
  connection: "bg-warm-pink", 
  reflection: "bg-gold",
  wildcard: "bg-deep-coral"
};

const levelTextColors = {
  perception: "text-white",
  connection: "text-white", 
  reflection: "text-white",
  wildcard: "text-white"
};

export function DeckSelector({ deckCounts, onSelectDeck, onRandomDraw, isIbsPicksMode, onToggleIbsPicks, ibsPicksCount }: DeckSelectorProps) {
  const totalCards = Object.values(deckCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Choose Your Cards</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Pick from any deck or draw randomly</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6">
        {(Object.keys(levelInfo) as Array<keyof typeof levelInfo>).map((level) => {
          const Icon = levelIcons[level];
          const count = deckCounts[level];
          const gradientStyle = levelStyles[level];
          
          return (
            <Card 
              key={level}
              className={`p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${gradientStyle} border-0 ${levelTextColors[level]} ${count === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => count > 0 && onSelectDeck(level)}
            >
              <div className="text-center">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                <h3 className="font-semibold text-xs sm:text-sm mb-1 leading-tight">{levelInfo[level].title}</h3>
                <div className="text-sm sm:text-lg font-bold">{count} cards</div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Hot Picks Toggle */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
        <div className="flex items-center gap-1 sm:gap-2">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          <span className="font-medium text-sm sm:text-base">Hot Picks</span>
        </div>
        <Switch
          checked={isIbsPicksMode}
          onCheckedChange={onToggleIbsPicks}
          disabled={ibsPicksCount === 0}
        />
        <span className="text-xs sm:text-sm text-muted-foreground">
          ({ibsPicksCount} available)
        </span>
      </div>

      <div className="text-center">
        <Button 
          onClick={onRandomDraw}
          disabled={totalCards === 0}
          className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base shadow-soft font-semibold border-0"
          size="lg"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Draw Random Card</span>
          <span className="sm:hidden">Draw Random</span>
          <span className="hidden xs:inline"> ({totalCards} remaining)</span>
        </Button>
      </div>
    </div>
  );
}