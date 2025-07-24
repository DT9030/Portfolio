"use server"

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate the form data
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" }
  }

  try {
    // Using Resend API for email sending
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>", // Default Resend sender
        to: ["d.teja1755054@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
                <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">
                  <strong>${name}</strong><br>
                  <a href="mailto:${email}" style="color: #667eea;">${email}</a>
                </p>
              </div>

              <div style="margin-bottom: 20px;">
                <h3 style="color: #555; margin-bottom: 5px;">Subject:</h3>
                <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">
                  ${subject}
                </p>
              </div>

              <div style="margin-bottom: 20px;">
                <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
                <div style="padding: 15px; background-color: #f5f5f5; border-radius: 5px; line-height: 1.6;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
                This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.
        `,
      }),
    })

    if (!response.ok) {
      // If Resend fails, try alternative method using a simple fetch to a webhook
      console.log("Resend failed, trying alternative method...")

      // Alternative: Use a simple webhook service or your own API endpoint
      const webhookResponse = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _replyto: email,
        }),
      })

      if (!webhookResponse.ok) {
        throw new Error("Both email services failed")
      }
    }

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)

    // Fallback: Log the message for manual processing
    console.log("=== CONTACT FORM SUBMISSION ===")
    console.log(`From: ${name} (${email})`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`Time: ${new Date().toISOString()}`)
    console.log("===============================")

    return { success: false, error: "Failed to send message. Please try emailing directly." }
  }
}
