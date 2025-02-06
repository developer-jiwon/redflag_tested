import { Home, Heart, ArrowLeft } from "lucide-react"

type AppState = "landing" | "category-selection" | "quiz" | "results"

interface LHNProps {
  appState: AppState;
  onNavigate: (state: AppState) => void;
  onPreviousQuestion: () => void;
  canGoPrevious: boolean;
}

export default function LHN({ appState, onNavigate, onPreviousQuestion, canGoPrevious }: LHNProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-black/90 flex flex-col items-center py-8 gap-8">
      <div className="flex flex-col gap-8">
        {/* Only show back button during quiz and when we can go to previous question */}
        {appState === "quiz" && canGoPrevious && (
          <ArrowLeft 
            className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" 
            onClick={onPreviousQuestion}
          />
        )}
        <Home 
          className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" 
          onClick={() => onNavigate("landing")}
        />
        <Heart 
          className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" 
          onClick={() => onNavigate("category-selection")}
        />
      </div>
    </div>
  )
} 