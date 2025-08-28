import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Sparkles, ArrowRight, Play, Shuffle, MessageCircle } from "lucide-react";
import { Question } from "@/services/airtable";

interface StartScreenProps {
  onStart: () => void;
  randomQuestion?: Question;
}

export function StartScreen({ onStart, randomQuestion }: StartScreenProps) {
  return (
    <div className="bg-gradient-soft">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-primary p-3 rounded-full shadow-medium">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connection Cards
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Deepen your relationship through meaningful conversations. 
              Discover new perspectives, strengthen your bond, and create lasting memories together.
            </p>

            <div className="flex justify-center items-center mb-16">
              <Button
                onClick={onStart}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white border-0 px-8 py-4 text-lg font-semibold shadow-soft hover:scale-105 transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5" />
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Question Section */}
      {randomQuestion && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Sample Question</h3>
              <p className="text-muted-foreground">Here's a taste of what you'll discover together</p>
            </div>
            
                    <div className="bg-gradient-to-br from-coral/10 to-warm-pink/10 rounded-xl p-6 border border-coral/20">
          <div className="text-center">
            <MessageCircle className="w-8 h-8 text-coral mx-auto mb-4" />
                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                  {randomQuestion.text}
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Button
                onClick={onStart}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg"
              >
                Start Exploring More Questions
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Four Levels of Connection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each level is designed to help you explore different aspects of your relationship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 bg-white border border-gray-200 shadow-card hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
            <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Perception</h3>
            <p className="text-sm text-gray-600">
              Explore how you see each other and the world around you
            </p>
          </Card>

          <Card className="p-6 bg-white border border-gray-200 shadow-card hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
            <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Connection</h3>
            <p className="text-sm text-gray-600">
              Strengthen your emotional bond and understanding
            </p>
          </Card>

          <Card className="p-6 bg-white border border-gray-200 shadow-card hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
            <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Reflection</h3>
            <p className="text-sm text-gray-600">
              Dive deeper into your thoughts, dreams, and aspirations
            </p>
          </Card>

          <Card className="p-6 bg-white border border-gray-200 shadow-card hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
            <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Wildcards</h3>
            <p className="text-sm text-gray-600">
              Fun and unexpected questions to keep things exciting
            </p>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            onClick={onStart}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white border-0 px-12 py-4 text-xl font-semibold shadow-soft hover:scale-105 transition-all duration-300"
          >
            <Heart className="mr-3 w-6 h-6" />
            Begin Your Connection Journey
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}