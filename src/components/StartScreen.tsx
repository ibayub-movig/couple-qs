import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Sparkles } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-romantic bg-clip-text text-transparent mb-4">
            Connection Cards Ibs y Thali
          </h1>
        </div>

        {/* Level cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-coral to-warm-pink border-0 text-white shadow-soft">
            <Heart className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Perception</h3>
            <p className="text-sm text-white/80">30 questions about first impressions and assumptions</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-warm-pink to-soft-pink border-0 text-gray-800 shadow-soft">
            <Users className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Connection</h3>
            <p className="text-sm text-gray-700">30 questions for deeper bonding and vulnerability</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gold to-coral border-0 text-white shadow-soft">
            <Lightbulb className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Reflection</h3>
            <p className="text-sm text-white/80">30 questions for understanding and growth</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-deep-coral to-coral border-0 text-white shadow-soft">
            <Sparkles className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Wildcards</h3>
            <p className="text-sm text-white/80">10 fun actions to make things exciting</p>
          </Card>
        </div>

        {/* Start button */}
        <div className="space-y-4">
          <Button
            onClick={onStart}
            size="lg"
            className="bg-gradient-romantic hover:shadow-romantic text-white border-0 px-12 py-6 text-lg font-semibold shadow-soft hover:scale-105 transition-all duration-300"
          >
            Empecemos
          </Button>
        </div>
      </div>
    </div>
  );
}