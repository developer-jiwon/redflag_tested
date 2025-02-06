import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onStartQuiz: () => void
}

export default function LandingPage({ onStartQuiz }: LandingPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <Lock className="w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-6 text-center">Red Flag Detect</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Discover potential red flags in your relationships. Take our quiz to learn more.
      </p>
      <Button onClick={onStartQuiz} className="bg-white text-[#800200] hover:bg-gray-200">
        Start Quiz
      </Button>
    </div>
  )
}

