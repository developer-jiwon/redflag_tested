import { categories } from "../data/quizData"
import CategoryCard from "./CategoryCard"

interface CategorySelectionProps {
  onCategorySelect: (category: string) => void
}

export default function CategorySelection({ onCategorySelect }: CategorySelectionProps) {
  return (
    <div className="w-full px-6 py-4">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Select Your Assessment Category
        </h2>
        <p className="text-xs md:text-sm text-white/80 max-w-2xl mx-auto px-4">
          Choose a category to identify specific patterns in your relationship. Each assessment focuses on different aspects of potentially concerning behavior.
        </p>
      </div>
      
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="h-[160px]"
            >
              <CategoryCard
                title={category.title}
                description={category.description}
                onClick={() => onCategorySelect(category.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

