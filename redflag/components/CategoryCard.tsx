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
    <Card 
      className="group cursor-pointer overflow-hidden relative bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100"
      onClick={onClick}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#800200]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Hover line effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#800200] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <CardHeader className="relative pb-4">
        <CardTitle className="text-xl font-semibold text-[#800200] group-hover:text-[#800200] transition-colors duration-300 flex items-center justify-between">
          {title}
          <ArrowRight className="w-5 h-5 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
          {description}
        </p>
        
        {/* Card corner accent */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#800200]/5 rounded-bl-2xl transform rotate-12 group-hover:scale-150 group-hover:rotate-45 transition-transform duration-300" />
      </CardContent>
    </Card>
  )
}

