"use client"

import { useState } from "react"
import { quizData, type Question } from "../data/quizData"
import { shuffleQuestions } from "../utils/shuffleQuestions"
import QuestionCard from "../components/QuestionCard"
import CategorySelection from "../components/CategorySelection"
import Results from "../components/Results"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import LHN from "@/components/LHN"
import { useTranslation } from 'react-i18next'

type AppState = "landing" | "category-selection" | "quiz" | "results"

export default function RedFlagDetect() {
  const { i18n } = useTranslation()
  const [appState, setAppState] = useState<AppState>("landing")
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [redFlagCount, setRedFlagCount] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])

  const handleStartQuiz = () => {
    setAppState("category-selection")
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    const categoryQuestions = quizData.filter((q) => q.category === category)
    setQuestions(shuffleQuestions(categoryQuestions))
    setCurrentQuestionIndex(0)
    setRedFlagCount(0)
    setAnswers([])
    setAppState("quiz")
  }

  const handleAnswer = (isRedFlag: boolean) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = isRedFlag
    setAnswers(newAnswers)

    if (isRedFlag) {
      setRedFlagCount(redFlagCount + 1)
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setAppState("results")
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const newAnswers = [...answers]
      if (newAnswers[currentQuestionIndex - 1]) {
        setRedFlagCount(redFlagCount - 1)
      }
      newAnswers[currentQuestionIndex - 1] = false
      setAnswers(newAnswers)
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleNavigate = (newState: AppState) => {
    if (newState === "landing" || newState === "category-selection") {
      setCurrentQuestionIndex(0)
      setRedFlagCount(0)
      setSelectedCategory("")
      setQuestions([])
      setAnswers([])
    }
    
    if (newState === "quiz" && appState === "results") {
      setCurrentQuestionIndex(0)
      setRedFlagCount(0)
      setAnswers([])
    }

    setAppState(newState)
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setRedFlagCount(0)
    setSelectedCategory("")
    setAnswers([])
    setAppState("category-selection")
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="min-h-screen bg-[#800200]">
      {/* Language buttons temporarily commented out
      <div className="absolute top-4 right-4 z-[60]">
        <button onClick={() => changeLanguage('en')} className="bg-white text-[#800200] hover:bg-gray-200 px-2 py-1 text-sm mr-2 rounded">English</button>
        <button onClick={() => changeLanguage('es')} className="bg-white text-[#800200] hover:bg-gray-200 px-2 py-1 text-sm rounded">Español</button>
      </div>
      */}

      <LHN 
        appState={appState} 
        onNavigate={handleNavigate}
      />
      
      <main className="w-full min-h-screen md:pl-16 flex items-center justify-center">
        <div className="w-full flex justify-center items-center">
          {appState === "landing" && (
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Lock className="w-10 h-10 md:w-14 md:h-14 text-white mb-4 md:mb-5" />
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-3 md:mb-4">Red Flag Detect</h1>
              <p className="text-sm md:text-base text-white text-center mb-5 md:mb-6 max-w-sm">
                Evaluate your current relationship for potential red flags. Take our assessment to learn more.
              </p>
              <Button onClick={handleStartQuiz} className="bg-white text-[#800200] hover:bg-gray-200 px-5 py-2 text-sm md:text-base">
                Start Assessment
              </Button>
            </div>
          )}

          {appState === "category-selection" && (
            <div className="w-full h-full">
              <CategorySelection onCategorySelect={handleCategorySelect} />
            </div>
          )}

          {appState === "quiz" && questions.length > 0 && (
            <div className="w-full max-w-[400px] flex flex-col items-center">
              <h2 className="text-lg md:text-xl font-bold text-white text-center mb-3 md:mb-4">
                {selectedCategory} Quiz
              </h2>
              <QuestionCard 
                question={questions[currentQuestionIndex]} 
                onAnswer={handleAnswer}
                onPrevious={handlePreviousQuestion}
                canGoPrevious={currentQuestionIndex > 0}
              />
              <div className="text-white text-center mt-3 text-sm">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>
          )}

          {appState === "results" && (
            <div className="w-full max-w-[400px]">
              <Results 
                redFlagCount={redFlagCount} 
                totalQuestions={questions.length} 
                onRestart={restartQuiz}
                category={selectedCategory}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

