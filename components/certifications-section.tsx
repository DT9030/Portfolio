import { Award } from "lucide-react"

export default function CertificationsSection() {
  return (
    <section id="certifications" className="mb-12">
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/25 shadow-2xl relative overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-gray-600/10 to-transparent rounded-full blur-2xl" />

        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/40 hover:border-gray-500/60 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
          <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Award className="w-12 h-12 text-gray-400" />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">AI/ML GEODATA ANALYSIS COURSE</h3>
          <p className="text-gray-400 font-medium mb-2">ISRO (Virtual)</p>
          <p className="text-gray-500 text-sm mb-4">Aug 2024</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Completed online course deepening understanding of leveraging AI and machine learning for geospatial data
            analysis.
          </p>
        </div>
      </div>
    </section>
  )
}
