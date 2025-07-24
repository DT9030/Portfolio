import { Award } from "lucide-react"

const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Malla Reddy College Of Engineering And Technology (MRCET)",
    year: "2022 - 2026",
  },
  {
    degree: "Senior Secondary (XII) - Science",
    institution: "Narayana Junior College, Gaddiannaram",
    year: "2022 | Percentage: 95.10%",
  },
  {
    degree: "Secondary (X)",
    institution: "Sri Chaitanya Techno School, Karmanghat",
    year: "2020 | CGPA: 9.80/10",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="mb-12">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/25 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-r from-gray-700/40 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-gray-500 hover:border-gray-400 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award className="w-16 h-16 text-gray-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
