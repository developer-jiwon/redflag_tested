"use client"

export default function MotionBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Orb 1 */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-[#800200] opacity-30 blur-[100px] animate-float-slow" />
      
      {/* Gradient Orb 2 */}
      <div className="absolute bottom-[-30%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#4a0100] opacity-20 blur-[120px] animate-float-medium" />
      
      {/* Moving Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-slide-right" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-slide-left" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-slide-right" />
      </div>
      
      {/* Animated Dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:40px_40px] animate-twinkle" />
      </div>
    </div>
  )
} 