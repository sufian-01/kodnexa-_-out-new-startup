import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, href, secondary = false, className = '', type = 'button', onClick }) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-0 ${secondary ? 'border border-white/15 bg-white/[.04] text-white hover:border-indigo-300/50 hover:bg-white/[.08]' : 'bg-gradient-to-r from-indigo to-violet text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(139,92,246,.42)]'} ${className}`
  const content = <>{children}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>
  return href ? <a href={href} className={classes}>{content}</a> : <button type={type} onClick={onClick} className={classes}>{content}</button>
}
