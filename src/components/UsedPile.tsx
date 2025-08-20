import { Question, levelInfo } from "@/services/airtable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RotateCcw, Trash2 } from "lucide-react";

interface UsedPileProps {
  usedQuestions: Question[];
  onReset: () => void;
  onViewQuestion?: (question: Question) => void;
}

export function UsedPile({ usedQuestions, onReset, onViewQuestion }: UsedPileProps) {
  if (usedQuestions.length === 0) {
    return null;
  }

  return (
    <Card className="p-4 bg-muted/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Used Cards ({usedQuestions.length})</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="text-destructive hover:text-destructive"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Game
        </Button>
      </div>
      
      <ScrollArea className="h-40">
        <div className="space-y-2">
          {usedQuestions.map((question) => (
            <div
              key={question.id}
              className="p-2 bg-background rounded-lg cursor-pointer hover:bg-accent transition-colors"
              onClick={() => onViewQuestion?.(question)}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {levelInfo[question.level].title}
                </span>
              </div>
              <p className="text-sm line-clamp-2">{question.text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}