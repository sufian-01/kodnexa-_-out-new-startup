import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'

const NAVBAR_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/#products' },
  { label: 'Opportunities', path: '/opportunities' },
  { label: 'Hackathon', path: '/hackathon' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  const handleProductsClick = event => {
    event.preventDefault()
    setOpen(false)
    if (pathname === '/') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#products')
    }
  }

  useEffect(() => {
    const listener = () => {
      setScrolled(window.scrollY > 20)
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0)
    }
    listener()
    window.addEventListener('scroll', listener, { passive: true })
    return () => window.removeEventListener('scroll', listener)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-slate-200 bg-white/85 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-ink/85' : 'py-5'}`}>
      <motion.div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-indigo via-violet to-cyan" animate={{ width: `${progress}%` }} transition={{ duration: .12 }} />
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 sm:px-8 lg:px-[3.15%]">
        <a href="/" aria-label="kodnexus home"><Logo /></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAVBAR_ITEMS.map(({ label, path }) => (
            <a key={path} href={path} onClick={label === 'Products' ? handleProductsClick : undefined} aria-current={pathname === path && label !== 'Products' ? 'page' : undefined} className={`text-sm font-medium transition hover:text-slate-900 dark:hover:text-white ${pathname === path && label !== 'Products' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex"><Button href="/contact" className="px-4 py-2.5">Book a meeting</Button><button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="rounded-xl border border-slate-700/60 bg-slate-100 p-2 transition-all hover:scale-105 hover:bg-white dark:border-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800">{theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}</button></div>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-800 dark:border-white/10 dark:text-white lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="section-shell mt-3 lg:hidden">
            <div className="glass rounded-2xl p-4">
              <a href="/" onClick={() => setOpen(false)} className="mb-2 block px-4"><Logo /></a>
              {NAVBAR_ITEMS.map(({ label, path }) => (
                <a onClick={label === 'Products' ? handleProductsClick : () => setOpen(false)} key={path} href={path} aria-current={pathname === path && label !== 'Products' ? 'page' : undefined} className={`block rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white ${pathname === path && label !== 'Products' ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>{label}</a>
              ))}
              <div className="mt-2 flex items-center gap-2"><Button href="/contact" className="w-full">Book a meeting</Button><button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="rounded-xl border border-slate-700/60 bg-slate-100 p-2 transition-all hover:bg-white dark:border-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800">{theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}</button></div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
