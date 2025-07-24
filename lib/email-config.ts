// Email configuration for different services
export const emailConfig = {
  // Resend configuration (recommended)
  resend: {
    apiKey: process.env.RESEND_API_KEY,
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "d.teja1755054@gmail.com",
  },

  // Alternative: EmailJS configuration (client-side)
  emailjs: {
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
  },

  // Alternative: Formspree configuration
  formspree: {
    endpoint: process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID",
  },
}
