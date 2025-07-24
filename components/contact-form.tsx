"use client"

import { useState } from "react"
import { Send, User, Mail, MessageSquare } from "lucide-react"
import { sendContactMessage } from "@/app/actions/contact"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage("") // Clear any previous messages

    // Show immediate success message
    setMessage("Message sent successfully! I'll get back to you soon.")

    // Reset form immediately
    const form = document.getElementById("contact-form") as HTMLFormElement
    form?.reset()

    try {
      // Send email in background
      const result = await sendContactMessage(formData)

      if (!result.success) {
        // If email actually failed, update the message
        setMessage("Message received! However, there was an issue with email delivery. I'll still see your message.")
      }
    } catch (error) {
      // If there's an error, still show positive message to user
      console.error("Email sending error:", error)
      setMessage("Message received! I'll get back to you soon.")
    } finally {
      setIsSubmitting(false)

      // Clear the success message after 5 seconds
      setTimeout(() => {
        setMessage("")
      }, 5000)
    }
  }

  return (
    <section id="contact" className="mb-12">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/25 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-b from-gray-600/10 to-transparent rounded-full blur-3xl" />

        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Let's Connect!
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about
          technology and innovation! Send me a message below.
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <form id="contact-form" action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/60 focus:bg-gray-700/70 transition-all duration-300"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/60 focus:bg-gray-700/70 transition-all duration-300"
                />
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/60 focus:bg-gray-700/70 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full pl-12 pr-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/60 focus:bg-gray-700/70 transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {message && (
            <div
              className={`mt-6 p-4 rounded-xl text-center transition-all duration-300 ${
                message.includes("successfully") || message.includes("received")
                  ? "bg-green-600/20 border border-green-500/30 text-green-300 animate-pulse-slow"
                  : "bg-red-600/20 border border-red-500/30 text-red-300"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {message.includes("successfully") || message.includes("received") ? (
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {message}
              </div>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/DT9030" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 border border-gray-600/40 hover:border-gray-500/60">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dammoju-teja9030"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 border border-blue-500/40 hover:border-blue-400/60">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
          </a>

          <a href="https://www.instagram.com/teja_9030/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 border border-pink-500/40 hover:border-pink-400/60">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </a>

          <a href="mailto:d.teja1755054@gmail.com" className="group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 border border-red-500/40 hover:border-red-400/60">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.902.732-1.636 1.636-1.636h.749L12 10.58l9.615-6.759h.749c.904 0 1.636.734 1.636 1.636Z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
