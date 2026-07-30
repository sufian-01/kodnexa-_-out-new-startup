import { useState } from 'react'
import { Globe2 as Github, Globe2 as Instagram, Link as Linkedin, Mail, MapPin, Phone, Send as Twitter } from 'lucide-react'
import PageHero from '../components/PageHero'
import Faq from '../components/Faq'

const contactEmail = 'info@kodnexus.com'
const phoneNumber = '9135738848'
const address = 'Jaitpur, khadda colony, New Delhi 110044'
const socialLinks = [
  ['LinkedIn', Linkedin, 'https://www.linkedin.com/company/kodnexusofficial/'],
  ['WhatsApp', Twitter, 'https://wa.me/919135738848'],
  ['Instagram', Instagram, 'https://www.instagram.com/kodnexus?igsh=MWdjamVvcWxvd2R1cw=='],
  ['Website', Github, 'https://kodnexus.com'],
]

const faqs = [
  ['How soon will you respond?', 'We typically reply within one business day and will suggest the best next step for your inquiry.'],
  ['Do you work with students and institutions?', 'Yes. Student enablement and institution-focused programs are central to Kodnexus.'],
  ['Can you tailor a service to our team?', 'Absolutely. Every engagement starts by understanding your goals and constraints.'],
]

const fields = [
  ['name', 'Name', 'Your name', 'text', true],
  ['email', 'Email', 'you@company.com', 'email', true],
  ['subject', 'Subject', 'Project inquiry', 'text', true],
  ['phone', 'Phone', '+91 00000 00000', 'tel', false],
]

const initialForm = { name: '', email: '', subject: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!event.currentTarget.reportValidity()) return

    setSending(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message right now.')
      }

      setForm(initialForm)
      setStatus({ type: 'success', message: 'Message sent successfully. We will get back to you soon.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to send your message right now.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's create something <span className="gradient-text">meaningful.</span></>}
        copy="Tell us what you're trying to make possible. We'll bring a clear perspective and a practical path forward."
      />
      <section className="section-shell grid gap-10 pb-20 sm:pb-28 lg:grid-cols-[1.1fr_.9fr]">
        <form onSubmit={submitForm} className="rounded-3xl border border-white/10 bg-white/[.035] p-6 shadow-card sm:p-9">
          <h2 className="font-display text-2xl text-white">Start a conversation</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {fields.map(([name, label, placeholder, type, required]) => (
              <label key={name} className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {label}
                <input
                  name={name}
                  value={form[name]}
                  onChange={updateField}
                  required={required}
                  type={type}
                  placeholder={placeholder}
                  disabled={sending}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
                />
              </label>
            ))}
          </div>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
            How can we help?
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              required
              rows="5"
              placeholder="Share a little about your project..."
              disabled={sending}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </label>
          {status.message && <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-cyan' : 'text-rose-400'}`} role="status">{status.message}</p>}
          <button type="submit" disabled={sending} className="mt-6 rounded-xl bg-gradient-to-r from-indigo to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow transition disabled:cursor-not-allowed disabled:opacity-70">
            {sending ? 'Sending...' : 'Send message'}
          </button>
        </form>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-7">
            <h2 className="font-display text-2xl text-white">Company details</h2>
            <div className="mt-6 space-y-5">
              <p className="flex gap-3 text-sm text-slate-400"><Mail className="h-5 w-5 shrink-0 text-indigo-300" /><a href={`mailto:${contactEmail}`} className="hover:text-white">{contactEmail}</a></p>
              <p className="flex gap-3 text-sm text-slate-400"><Phone className="h-5 w-5 shrink-0 text-indigo-300" /><a href={`tel:+91${phoneNumber}`} className="hover:text-white">+91 {phoneNumber}</a></p>
              <p className="flex gap-3 text-sm text-slate-400"><MapPin className="h-5 w-5 shrink-0 text-indigo-300" />{address}</p>
            </div>
            <div className="mt-7 flex gap-3">
              {socialLinks.map(([label, Icon, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 hover:text-white"><Icon className="h-4 w-4" /></a>)}
            </div>
          </div>
          <iframe title="Kodnexus location map" src="https://www.google.com/maps?q=Jaitpur,+Khadda+Colony,+New+Delhi+110044&output=embed" loading="lazy" className="h-[220px] w-full rounded-2xl border border-dashed border-indigo-300/35" />
        </div>
      </section>
      <section className="bg-[#080d1d] py-20 sm:py-28">
        <div className="section-shell mx-auto max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-display text-3xl text-white sm:text-5xl">A few helpful answers.</h2>
          </div>
          <div className="mt-10"><Faq items={faqs} /></div>
        </div>
      </section>
    </main>
  )
}
