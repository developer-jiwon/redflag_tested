import { Home, Heart, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

type AppState = "landing" | "category-selection" | "quiz" | "results"

interface LHNProps {
  appState: AppState;
  onNavigate: (state: AppState) => void;
  onPreviousQuestion: () => void;
  canGoPrevious: boolean;
}

export default function LHN({ appState, onNavigate, onPreviousQuestion, canGoPrevious }: LHNProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-4 right-4 z-[100] md:hidden bg-black/90 p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <ArrowLeft className="w-6 h-6 text-white" />
          ) : (
            <Heart className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </button>

      {/* Mobile Top Navigation */}
      <motion.div
        className="fixed top-0 left-0 w-full bg-black/90 md:hidden z-[90]"
        initial={{ y: -100 }}
        animate={{ y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center gap-8 py-6 mt-4">
          {appState === "quiz" && canGoPrevious && (
            <ArrowLeft 
              className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" 
              onClick={() => {
                onPreviousQuestion();
                setIsOpen(false);
              }}
            />
          )}
          <Home 
            className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" 
            onClick={() => {
              onNavigate("landing");
              setIsOpen(false);
            }}
          />
          <Heart 
            className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors" 
            onClick={() => {
              onNavigate("category-selection");
              setIsOpen(false);
            }}
          />
        </div>
      </motion.div>

      {/* Desktop Left Navigation */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-16 bg-black/90 z-[90]">
        <div className="flex flex-col items-center py-8 gap-8">
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

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/20 z-[80] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
} 