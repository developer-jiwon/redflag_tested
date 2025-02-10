import type { Question } from "../data/quizData"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import { motion, type HTMLMotionProps } from "framer-motion"

interface QuestionCardProps {
  question: Question
  onAnswer: (isRedFlag: boolean) => void
  onPrevious?: () => void
  canGoPrevious?: boolean
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
}

const fadeInUpDelayed = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
}

export default function QuestionCard({ 
  question, 
  onAnswer, 
  onPrevious, 
  canGoPrevious 
}: QuestionCardProps) {
  return (
    <div className="w-full px-4 md:px-0 flex justify-center items-center">
      <Card className="w-full max-w-[90vw] md:max-w-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden rounded-2xl border-0">
        {/* Back button - Moved to top right */}
        {canGoPrevious && (
          <button
            onClick={onPrevious}
            className="absolute right-4 top-4 z-50 bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-[#800200]" />
          </button>
        )}

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800200]/20 via-[#800200] to-[#800200]/20" />
        <div className="absolute top-4 right-4 w-16 md:w-24 h-16 md:h-24 bg-[#800200]/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-4 left-4 w-24 md:w-32 h-24 md:h-32 bg-[#800200]/5 rounded-full blur-3xl animate-pulse" />
        
        <CardHeader className="relative pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-8">
          <motion.div {...fadeInUp}>
            <CardTitle className="text-[#800200] text-xl md:text-2xl font-bold flex items-center gap-2 font-merriweather">
              {question.category}
            </CardTitle>
          </motion.div>
        </CardHeader>
        
        <CardContent className="px-4 md:px-8 pb-6 md:pb-8">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-1 h-12 bg-[#800200] transform -translate-y-1/2 rounded-full" />
            <motion.div {...fadeInLeft}>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 md:mb-12 pl-2 font-merriweather tracking-wide">
                {question.text}
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex flex-col gap-3 sm:flex-row sm:gap-6"
            {...fadeInUpDelayed}
          >
            <Button 
              onClick={() => onAnswer(question.isRedFlag)} 
              className="w-full sm:w-1/2 group relative overflow-hidden bg-white hover:bg-[#800200]/5 text-[#800200] border-2 border-[#800200] hover:border-[#800200] transition-all duration-500 h-12 md:h-14 rounded-xl font-merriweather"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 font-semibold text-base md:text-lg group-hover:tracking-wider transition-all duration-500">
                <Check className="w-5 h-5 md:w-6 md:h-6 transform group-hover:rotate-12 transition-all duration-500" />
                Yes
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#800200]/0 via-[#800200]/10 to-[#800200]/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            </Button>
            
            <Button 
              onClick={() => onAnswer(!question.isRedFlag)} 
              className="w-full sm:w-1/2 group relative overflow-hidden bg-white hover:bg-gray-50 text-gray-600 border-2 border-gray-200 hover:border-gray-400 transition-all duration-500 h-12 md:h-14 rounded-xl font-merriweather"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 font-semibold text-base md:text-lg group-hover:tracking-wider transition-all duration-500">
                <X className="w-5 h-5 md:w-6 md:h-6 transform group-hover:rotate-90 transition-all duration-500" />
                No
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/0 via-gray-100/30 to-gray-100/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}

