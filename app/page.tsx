import FloatingObjects from "@/components/floating-objects"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import CertificationsSection from "@/components/certifications-section"
import ActivitiesSection from "@/components/activities-section"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden relative">
      <Navbar />
      <FloatingObjects />

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-6xl">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ActivitiesSection />
        <ContactForm />
      </div>
    </div>
  )
}
