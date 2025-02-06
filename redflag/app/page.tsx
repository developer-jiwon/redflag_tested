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
    <div className="min-h-screen bg-[#800200] flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <button onClick={() => changeLanguage('en')} className="bg-white text-[#800200] hover:bg-gray-200 px-4 py-2 mr-2">English</button>
        <button onClick={() => changeLanguage('es')} className="bg-white text-[#800200] hover:bg-gray-200 px-4 py-2">Español</button>
      </div>
      <LHN 
        appState={appState} 
        onNavigate={handleNavigate} 
        onPreviousQuestion={handlePreviousQuestion}
        canGoPrevious={appState === "quiz" && currentQuestionIndex > 0}
      />
      
      <div className="ml-16 w-full flex justify-center">
        {appState === "landing" && (
          <div className="w-full max-w-md flex flex-col items-center">
            <Lock className="w-16 h-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white text-center mb-6">Red Flag Detect</h1>
            <p className="text-lg text-white text-center mb-8 max-w-sm">
              Evaluate your current relationship for potential red flags. Take our assessment to learn more.
            </p>
            <Button onClick={handleStartQuiz} className="bg-white text-[#800200] hover:bg-gray-200 px-8 py-2 text-lg">
              Start Assessment
            </Button>
          </div>
        )}

        {appState === "category-selection" && <CategorySelection onCategorySelect={handleCategorySelect} />}

        {appState === "quiz" && questions.length > 0 && (
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-white text-center mb-6">{selectedCategory} Quiz</h2>
            <QuestionCard question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
            <div className="text-white text-center mt-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
        )}

        {appState === "results" && (
          <div className="w-full max-w-md">
            <Results 
              redFlagCount={redFlagCount} 
              totalQuestions={questions.length} 
              onRestart={restartQuiz}
              category={selectedCategory}
            />
          </div>
        )}
      </div>
    </div>
  )
}

