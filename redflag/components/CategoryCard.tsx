"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  title: string
  description: string
  onClick: () => void
}

export default function CategoryCard({ title, description, onClick }: CategoryCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-5 cursor-pointer h-[160px] flex flex-col justify-center items-center text-center hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-[#800200] text-lg md:text-xl font-bold mb-4 line-clamp-1 w-full">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-gray-600 line-clamp-3 w-full">
          {description}
        </p>
      </div>
    </div>
  )
}

