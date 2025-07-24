import { Code } from "lucide-react"

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "AngularJS", "Python", "Java"]

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-12">
      <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-600/10 to-transparent rounded-full blur-2xl" />

        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-700/60 to-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Code className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-gray-300 transition-colors" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors relative z-10">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
