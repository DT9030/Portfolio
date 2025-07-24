import { Mail, Phone, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="text-center py-16 mb-12 relative z-10 mt-16">
      <div className="relative inline-block mb-8">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-700/40 to-gray-900/60 backdrop-blur-xl border-2 border-gray-500/30 flex items-center justify-center text-6xl font-bold text-white shadow-2xl animate-pulse-slow">
          DT
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-full blur-xl animate-pulse-slow" />
      </div>

      <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
        Dammoju Teja
      </h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">Aspiring Software Developer</p>

      <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
        <a
          href="mailto:d.teja1755054@gmail.com"
          className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/60 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Mail className="w-5 h-5" />
          d.teja1755054@gmail.com
        </a>
        <a
          href="tel:+917671832944"
          className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/60 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Phone className="w-5 h-5" />
          +91 7671832944
        </a>
        <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-full">
          <MapPin className="w-5 h-5" />
          Hyderabad, India
        </div>
      </div>
    </section>
  )
}
