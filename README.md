# Portfolio Email Setup

To enable email functionality, you need to set up one of the following services:

## Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to your environment variables:
   \`\`\`
   RESEND_API_KEY=your_resend_api_key_here
   \`\`\`

## Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Add to your environment variables:
   \`\`\`
   FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   \`\`\`

## Option 3: EmailJS (Client-side)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Set up a service and template
3. Add to your environment variables:
   \`\`\`
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   \`\`\`

## Testing
The contact form will fall back to console logging if no email service is configured, so you can test the functionality locally.
"# Portfolio"    # Optional: Create a README
