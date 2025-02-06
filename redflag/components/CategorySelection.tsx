import { categories } from "../data/quizData"
import CategoryCard from "./CategoryCard"

interface CategorySelectionProps {
  onCategorySelect: (category: string) => void
}

export default function CategorySelection({ onCategorySelect }: CategorySelectionProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Select Your Assessment Category
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Choose a category to identify specific patterns in your relationship. Each assessment focuses on different aspects of potentially concerning behavior.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="transform hover:-translate-y-1 transition-transform duration-300">
            <CategoryCard
              title={category.title}
              description={category.description}
              onClick={() => onCategorySelect(category.title)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

