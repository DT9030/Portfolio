"use client"

export default function FloatingObjects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-full backdrop-blur-sm border border-gray-500/30 animate-float-slow" />
      <div className="absolute top-60 right-16 w-32 h-32 bg-gradient-to-r from-gray-500/15 to-gray-300/15 rounded-full backdrop-blur-sm border border-gray-400/20 animate-float-medium" />
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-gray-700/25 to-gray-500/25 rounded-full backdrop-blur-sm border border-gray-600/30 animate-float-fast" />

      {/* Geometric Shapes */}
      <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-gray-600/20 to-transparent backdrop-blur-sm border border-gray-500/30 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-40 right-40 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-gray-500/20 animate-float-reverse" />

      {/* Hexagons */}
      <div
        className="absolute top-80 left-32 w-20 h-20 bg-gradient-to-r from-gray-600/15 to-gray-400/15 backdrop-blur-sm border border-gray-500/25 animate-float-medium"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />
      <div
        className="absolute bottom-60 left-60 w-16 h-16 bg-gradient-to-r from-gray-500/20 to-gray-300/20 backdrop-blur-sm border border-gray-400/30 animate-spin-reverse"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />

      {/* Diamonds */}
      <div className="absolute top-96 right-20 w-12 h-12 bg-gradient-to-br from-gray-600/25 to-gray-400/25 backdrop-blur-sm border border-gray-500/35 rotate-45 animate-pulse-slow" />
      <div className="absolute bottom-80 left-80 w-8 h-8 bg-gradient-to-br from-gray-500/30 to-gray-300/30 backdrop-blur-sm border border-gray-400/40 rotate-45 animate-float-fast" />

      {/* Rectangles */}
      <div className="absolute top-40 left-60 w-28 h-6 bg-gradient-to-r from-gray-600/15 to-transparent backdrop-blur-sm border border-gray-500/25 rotate-12 animate-float-slow" />
      <div className="absolute bottom-20 right-60 w-20 h-4 bg-gradient-to-r from-gray-500/20 to-transparent backdrop-blur-sm border border-gray-400/30 -rotate-12 animate-float-reverse" />

      {/* Ellipses */}
      <div className="absolute top-72 left-96 w-32 h-16 bg-gradient-to-r from-gray-600/10 to-gray-400/10 backdrop-blur-sm border border-gray-500/20 rounded-full rotate-45 animate-float-medium" />
      <div className="absolute bottom-96 right-96 w-24 h-12 bg-gradient-to-r from-gray-500/15 to-gray-300/15 backdrop-blur-sm border border-gray-400/25 rounded-full -rotate-30 animate-float-fast" />
    </div>
  )
}
