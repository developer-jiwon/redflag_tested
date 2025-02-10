export default function SmokeEffect() {
  return (
    <div className="fixed inset-0 z-0">
      {/* SVG Filter */}
      <svg className="hidden">
        <defs>
          <filter id="smoke">
            <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="5" />
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
        </defs>
      </svg>

      {/* Multiple Smoke Particles */}
      <div className="smoke-container">
        <div className="smoke-particle left-[10%]"></div>
        <div className="smoke-particle left-[30%] delay-2"></div>
        <div className="smoke-particle left-[50%] delay-4"></div>
        <div className="smoke-particle left-[70%] delay-1"></div>
        <div className="smoke-particle left-[90%] delay-3"></div>
        <div className="smoke-particle left-[20%] delay-5"></div>
        <div className="smoke-particle left-[40%] delay-2"></div>
        <div className="smoke-particle left-[60%] delay-4"></div>
        <div className="smoke-particle left-[80%] delay-3"></div>
      </div>
    </div>
  )
} 