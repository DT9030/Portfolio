export default function AboutSection() {
  return (
    <section id="about" className="mb-12">
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-gray-600/10 to-transparent rounded-full blur-3xl" />

        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
          Aspiring software developer with a strong foundation in programming, data structures, and software design.
          Eager to contribute to innovative development projects and apply my problem-solving skills in a collaborative
          environment. Seeking an opportunity to grow technically and professionally.
        </p>
      </div>
    </section>
  )
}
