import { motion } from 'framer-motion'
import Container from './Container'
import Badge from './Badge'

export default function PageHero({ eyebrow, title, copy, children }) {
  return <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44"><div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,.22),transparent_55%)]" /><div className="absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" /><Container as={motion.div} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="text-center"><Badge>{eyebrow}</Badge><h1 className="mx-auto max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">{copy}</p>{children}</Container></section>
}
