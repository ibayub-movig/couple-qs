import { useState } from "react";
import { questions, Question } from "@/data/questions";
import { StartScreen } from "@/components/StartScreen";
import { DeckSelector } from "@/components/DeckSelector";
import { CardDisplay } from "@/components/CardDisplay";
import { UsedPile } from "@/components/UsedPile";

type GameState = 'start' | 'selecting' | 'viewing';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [availableQuestions, setAvailableQuestions] = useState(questions);
  const [usedQuestions, setUsedQuestions] = useState<Question[]>([]);
  const [currentCard, setCurrentCard] = useState<Question | null>(null);

  const handleStart = () => {
    setGameState('selecting');
  };

  const handleReset = () => {
    setAvailableQuestions(questions);
    setUsedQuestions([]);
    setCurrentCard(null);
    setGameState('selecting');
  };

  const getDeckCounts = () => {
    return {
      perception: availableQuestions.filter(q => q.level === 'perception').length,
      connection: availableQuestions.filter(q => q.level === 'connection').length,
      reflection: availableQuestions.filter(q => q.level === 'reflection').length,
      wildcard: availableQuestions.filter(q => q.level === 'wildcard').length,
    };
  };

  const drawRandomFromDeck = (level: 'perception' | 'connection' | 'reflection' | 'wildcard') => {
    const levelQuestions = availableQuestions.filter(q => q.level === level);
    if (levelQuestions.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * levelQuestions.length);
    const selectedCard = levelQuestions[randomIndex];
    setCurrentCard(selectedCard);
    setGameState('viewing');
  };

  const drawRandomCard = () => {
    if (availableQuestions.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedCard = availableQuestions[randomIndex];
    setCurrentCard(selectedCard);
    setGameState('viewing');
  };

  const markCardAsUsed = () => {
    if (!currentCard) return;
    
    setUsedQuestions(prev => [...prev, currentCard]);
    setAvailableQuestions(prev => prev.filter(q => q.id !== currentCard.id));
    setCurrentCard(null);
    setGameState('selecting');
  };

  const putCardBack = () => {
    setCurrentCard(null);
    setGameState('selecting');
  };

  if (gameState === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-soft py-8">
      {gameState === 'selecting' && (
        <div className="space-y-8">
          <DeckSelector
            deckCounts={getDeckCounts()}
            onSelectDeck={drawRandomFromDeck}
            onRandomDraw={drawRandomCard}
          />
          {usedQuestions.length > 0 && (
            <div className="max-w-md mx-auto">
              <UsedPile
                usedQuestions={usedQuestions}
                onReset={handleReset}
              />
            </div>
          )}
        </div>
      )}

      {gameState === 'viewing' && currentCard && (
        <CardDisplay
          question={currentCard}
          onMarkAsUsed={markCardAsUsed}
          onPutBack={putCardBack}
        />
      )}
    </div>
  );
};

export default Index;
