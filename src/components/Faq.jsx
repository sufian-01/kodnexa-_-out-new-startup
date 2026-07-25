import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function Faq({ items }) { const [open, setOpen] = useState(0); return <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[.03]">{items.map(([question, answer], i) => <div key={question}><button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-sm font-semibold text-white"><span>{question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-indigo-300 transition ${open === i ? 'rotate-180' : ''}`} /></button><AnimatePresence>{open === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-6 pb-5 text-sm leading-6 text-slate-400">{answer}</motion.p>}</AnimatePresence></div>)}</div> }
