import { Users } from "lucide-react"

const activities = [
  "Attended multiple inter-college hackathons across Hyderabad, enhancing team-building, coding, and real-time problem-solving skills.",
  "Participated in The Great Bangalore Hackathon 2025, collaborating with peers to build innovative software solutions under time constraints.",
  "Took part in technical workshops at BITS Pilani, gaining hands-on experience in emerging technologies and software development practices.",
]

export default function ActivitiesSection() {
  return (
    <section id="activities" className="mb-12">
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Extracurricular Activities
        </h2>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-r from-gray-700/40 to-gray-800/60 backdrop-blur-sm rounded-xl p-6 border-l-4 border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>

                <p className="text-gray-300 leading-relaxed pr-12">{activity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
