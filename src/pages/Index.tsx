import { useState, useEffect } from "react";
import { useQuestions } from "@/hooks/useQuestions";
import { Question } from "@/services/airtable";
import { StartScreen } from "@/components/StartScreen";
import { DeckSelector } from "@/components/DeckSelector";
import { CardDisplay } from "@/components/CardDisplay";
import { UsedPile } from "@/components/UsedPile";

type GameState = 'start' | 'selecting' | 'viewing';

const Index = () => {
  const { data: questions = [], isLoading, error } = useQuestions();
  const [gameState, setGameState] = useState<GameState>('start');
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<Question[]>([]);
  const [currentCard, setCurrentCard] = useState<Question | null>(null);
  const [isIbsPicksMode, setIsIbsPicksMode] = useState(false);

  // Update available questions when data is loaded
  useEffect(() => {
    if (questions.length > 0) {
      setAvailableQuestions(questions);
    }
  }, [questions]);

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
    const filteredQuestions = isIbsPicksMode 
      ? availableQuestions.filter(q => q.ibsPicks && q.ibsPicks.trim() !== '')
      : availableQuestions;
      
    return {
      perception: filteredQuestions.filter(q => q.level === 'perception').length,
      connection: filteredQuestions.filter(q => q.level === 'connection').length,
      reflection: filteredQuestions.filter(q => q.level === 'reflection').length,
      wildcard: filteredQuestions.filter(q => q.level === 'wildcard').length,
    };
  };

  const getIbsPicksCount = () => {
    return availableQuestions.filter(q => q.ibsPicks && q.ibsPicks.trim() !== '').length;
  };

  const drawRandomFromDeck = (level: 'perception' | 'connection' | 'reflection' | 'wildcard') => {
    let levelQuestions = availableQuestions.filter(q => q.level === level);
    
    if (isIbsPicksMode) {
      levelQuestions = levelQuestions.filter(q => q.ibsPicks && q.ibsPicks.trim() !== '');
    }
    
    if (levelQuestions.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * levelQuestions.length);
    const selectedCard = levelQuestions[randomIndex];
    setCurrentCard(selectedCard);
    setGameState('viewing');
    setIsIbsPicksMode(false); // Reset to normal mode after drawing
  };

  const drawRandomCard = () => {
    let questionsToDrawFrom = availableQuestions;
    
    if (isIbsPicksMode) {
      questionsToDrawFrom = availableQuestions.filter(q => q.ibsPicks && q.ibsPicks.trim() !== '');
    }
    
    if (questionsToDrawFrom.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * questionsToDrawFrom.length);
    const selectedCard = questionsToDrawFrom[randomIndex];
    setCurrentCard(selectedCard);
    setGameState('viewing');
    setIsIbsPicksMode(false); // Reset to normal mode after drawing
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

  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-gradient-soft flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading questions...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-gradient-soft flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="text-center max-w-md mx-auto p-6">
          <h2 className="text-2xl font-bold text-destructive mb-4">Error Loading Questions</h2>
          <p className="text-muted-foreground mb-4">
            {error.message || 'Failed to load questions from Airtable. Please check your configuration.'}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gradient-primary text-white px-6 py-2 rounded-lg hover:opacity-90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'start') {
    // Get a random question for the sample
    const randomQuestion = questions.length > 0 
      ? questions[Math.floor(Math.random() * questions.length)]
      : undefined;
    
    return <StartScreen onStart={handleStart} randomQuestion={randomQuestion} />;
  }

  return (
    <div className="bg-gradient-soft py-4 sm:py-8">
      {gameState === 'selecting' && (
        <div className="space-y-8">
          <DeckSelector
            deckCounts={getDeckCounts()}
            onSelectDeck={drawRandomFromDeck}
            onRandomDraw={drawRandomCard}
            isIbsPicksMode={isIbsPicksMode}
            onToggleIbsPicks={setIsIbsPicksMode}
            ibsPicksCount={getIbsPicksCount()}
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
