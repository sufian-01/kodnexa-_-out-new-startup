import logo from '../assets/logo-kodnexus-transparent.png'

export default function Logo({ className = '' }) {
  return <img src={logo} alt="Kodnexus" className={`h-8 w-auto max-w-[160px] shrink-0 object-contain sm:h-9 lg:h-10 ${className}`} />
}
