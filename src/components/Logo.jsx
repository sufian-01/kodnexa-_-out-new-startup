import logo from '../assets/logo.png'

export default function Logo({ className = '' }) {
  return <img src={logo} alt="Kodnexa" className={`h-[76px] w-auto max-w-[380px] shrink-0 object-contain sm:h-20 lg:h-[100px] ${className}`} />
}
