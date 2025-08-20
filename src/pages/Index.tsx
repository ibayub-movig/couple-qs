import { useState } from "react";
import { questions } from "@/data/questions";
import { StartScreen } from "@/components/StartScreen";
import { GameCard } from "@/components/GameCard";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setCurrentPlayer(prev => prev === 1 ? 2 : 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setCurrentPlayer(prev => prev === 1 ? 2 : 1);
    }
  };

  if (!gameStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-soft py-8">
      <GameCard
        question={questions[currentQuestionIndex]}
        currentPlayer={currentPlayer}
        onNext={handleNext}
        onPrevious={currentQuestionIndex > 0 ? handlePrevious : undefined}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default Index;
