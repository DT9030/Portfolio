import { Calendar, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "FinAssist – Multilingual Financial-Advice Web Platform",
    date: "Mar 2025 - May 2025",
    tech: ["React JS", "Node JS", "Firebase", "LLaMA 3 API", "Sarvam API"],
    description:
      "Created a full-stack web app that delivers chat and voice-based financial assistance in multiple languages. Integrated AI APIs for natural-language understanding and built real-time analytics on Firebase for personalized insights.",
    style: "hexagon",
    liveUrl: "https://finassist-sage.vercel.app/#",
  },
  {
    title: "Traffic Density and Vehicle Recognition System",
    date: "Sep 2024 - Oct 2024",
    tech: ["Python", "YOLOv8", "OpenCV", "CNN", "OCR"],
    description:
      "Built a real-time system to detect and classify vehicles using YOLOv8 and CNN. Implemented traffic density analysis and integrated OCR for number plate recognition, designed for smart city traffic management.",
    style: "diamond",
    codeUrl: "https://github.com/DT9030/Traffic-Density-and-Vehicle-Recognition",
  },
  {
    title: "Number Plate Recognition using OCR",
    date: "Jun 2024 - Aug 2024",
    tech: ["Python", "OpenCV", "Tesseract OCR", "MongoDB"],
    description:
      "Developed a computer vision-based system for automatic vehicle number plate detection and recognition. Designed for gated communities with CRUD operations using MongoDB for vehicle data management.",
    style: "circle",
    codeUrl: "https://github.com/DT9030/Number-Plate-recognition-using-OCR",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-12">
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/20 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`project-card-${project.style} group`}>
              <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gray-500/60 relative overflow-hidden">
                {/* Unique decorative elements based on style */}
                {project.style === "hexagon" && (
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rotate-45 rounded-lg" />
                )}
                {project.style === "diamond" && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-400/40 to-gray-500/40 rotate-45" />
                )}
                {project.style === "circle" && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gray-500/40 to-gray-600/40 rounded-full" />
                )}

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-600/60 to-gray-700/60 text-gray-200 rounded-full text-sm font-medium border border-gray-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex gap-3 mt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/80 to-green-700/80 hover:from-green-500/90 hover:to-green-600/90 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600/80 to-gray-700/80 hover:from-gray-500/90 hover:to-gray-600/90 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
