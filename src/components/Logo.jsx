import logoMark from '../assets/logo-mark-transparent.png'

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 ${className}`} aria-label="Kodnexa">
      <img src={logoMark} alt="" className="h-7 w-auto object-contain sm:h-8" />
      <span className="font-display text-lg font-semibold leading-none text-white sm:text-xl">Kodnexa</span>
    </span>
  )
}
