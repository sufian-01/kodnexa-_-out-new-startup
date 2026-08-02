import { Resend } from 'resend'

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'info@kodnexus.com'
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@kodnexus.com'
const FROM_HEADER = FROM_EMAIL.includes('<') ? FROM_EMAIL : `Kodnexus <${FROM_EMAIL}>`
const LOGO_URL = process.env.KODNEXUS_LOGO_URL || 'https://kodnexus.com/assets/logo-kodnexus-transparent-DdQaJLjQ.png'

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

function buildAcknowledgmentHtml(name) {
  const safeName = escapeHtml(name)

  return `
    <div style="margin:0; padding:0; background:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#111827;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; background:#f4f7fb;">
        <tr>
          <td align="center" style="padding:32px 16px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; border-collapse:collapse; overflow:hidden; border-radius:18px; background:#ffffff; box-shadow:0 16px 45px rgba(15, 23, 42, 0.08);">
              <tr>
                <td style="padding:30px 34px 22px; background:#070b18;">
                  <img src="${escapeHtml(LOGO_URL)}" width="172" alt="KodNexus" style="display:block; max-width:172px; height:auto; border:0;" />
                </td>
              </tr>
              <tr>
                <td style="padding:34px;">
                  <h1 style="margin:0 0 18px; color:#111827; font-size:26px; line-height:1.25; font-weight:700;">Thank you for contacting KodNexus</h1>
                  <p style="margin:0 0 16px; color:#374151; font-size:16px; line-height:1.7;">Hi ${safeName},</p>
                  <p style="margin:0 0 16px; color:#374151; font-size:16px; line-height:1.7;">Thank you for your inquiry. We have received your message and appreciate you taking the time to reach out to us.</p>
                  <p style="margin:0 0 16px; color:#374151; font-size:16px; line-height:1.7;">Our team will review your message and respond within 24 hours.</p>
                  <p style="margin:0 0 24px; color:#374151; font-size:16px; line-height:1.7;"><strong>If your inquiry is urgent, you can also reach us at <a href="mailto:info@kodnexus.com" style="color:#4f46e5; text-decoration:none;">info@kodnexus.com</a>.</strong></p>
                  <div style="margin:28px 0; height:1px; background:#e5e7eb;"></div>
                  <p style="margin:0; color:#111827; font-size:16px; line-height:1.7;">Best regards,<br /><strong>The KodNexus Team</strong></p>
                  <div style="margin:30px 0 0; padding:22px 0 0; border-top:1px solid #e5e7eb;">
                    <img src="${escapeHtml(LOGO_URL)}" width="132" alt="KodNexus Logo" style="display:block; max-width:132px; height:auto; border:0; margin:0 0 12px;" />
                    <p style="margin:0 0 8px; color:#4f46e5; font-size:14px; line-height:1.6;"><a href="https://kodnexus.com" style="color:#4f46e5; text-decoration:none;">https://kodnexus.com</a></p>
                    <p style="margin:0; color:#6b7280; font-size:13px; line-height:1.6;">&copy; 2026 KodNexus. All rights reserved.</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `
}

function buildAcknowledgmentText(name) {
  return [
    `Hi ${name},`,
    '',
    'Thank you for your inquiry. We have received your message and appreciate you taking the time to reach out to us.',
    'Our team will review your message and respond within 24 hours.',
    'If your inquiry is urgent, you can also reach us at info@kodnexus.com.',
    '',
    'Best regards,',
    'The KodNexus Team',
    '',
    'KodNexus Logo',
    'https://kodnexus.com',
    '© 2026 KodNexus. All rights reserved.',
  ].join('\n')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: 'Email service is not configured.' })
  }

  if (!FROM_EMAIL || !TO_EMAIL) {
    console.error('Contact email service is missing sender or recipient configuration.')
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
      from: FROM_HEADER,
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
      console.error('Resend email send failed:', error)
      return res.status(502).json({ message: 'Unable to send email right now.' })
    }

    const { error: acknowledgmentError } = await resend.emails.send({
      from: FROM_HEADER,
      to: email,
      subject: 'Thank you for contacting KodNexus',
      text: buildAcknowledgmentText(name),
      html: buildAcknowledgmentHtml(name),
    })

    if (acknowledgmentError) {
      console.error('Resend acknowledgment email failed:', acknowledgmentError)
    }

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact email handler failed:', error)
    return res.status(500).json({ message: 'Something went wrong while sending your message.' })
  }
}
