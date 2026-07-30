import { Resend } from 'resend'

const FROM_EMAIL = 'info@kodnexus.com'
const TO_EMAIL = 'info@kodnexus.com'

function sanitize(value) {
  return String(value ?? '').trim()
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value) {
  return sanitize(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: 'Email service is not configured.' })
  }

  const name = sanitize(req.body?.name)
  const email = sanitize(req.body?.email)
  const subject = sanitize(req.body?.subject)
  const message = sanitize(req.body?.message)
  const phone = sanitize(req.body?.phone)
  const userAgent = sanitize(req.headers['user-agent'])
  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'long',
    timeZone: 'Asia/Kolkata',
  })

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' })
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const emailSubject = `New Portfolio Inquiry - ${name}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      phone ? `Phone: ${phone}` : null,
      `Message: ${message}`,
      `Date & Time: ${submittedAt}`,
      userAgent ? `User Agent: ${userAgent}` : 'User Agent: Not available',
    ].filter(Boolean).join('\n')

    const { error } = await resend.emails.send({
      from: `Kodnexus <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: emailSubject,
      text,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>Date & Time:</strong> ${escapeHtml(submittedAt)}</p>
          <p><strong>User Agent:</strong> ${escapeHtml(userAgent || 'Not available')}</p>
        </div>
      `,
    })

    if (error) {
      return res.status(502).json({ message: 'Unable to send email right now.' })
    }

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong while sending your message.' })
  }
}
