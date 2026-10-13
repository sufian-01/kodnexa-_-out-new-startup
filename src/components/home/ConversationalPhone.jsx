import { BatteryCharging, Check, CheckCheck, Database, MoreVertical, Paperclip, Phone, Send, Smile, Wifi } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const scenarios = [
  {
    title: 'START MORE SALES CONVERSATIONS ON WHATSAPP',
    description: 'Send interactive catalogues, dynamic offers, and instant product enquiry links.',
    customer: <>Maggi 2 carton<br />Parle-G 100 gm 20 packets<br />Aashirvaad atta 10 kg 5 bags</>,
    response: 'Let me check these items for you. All in stock at Warehouse #2!',
    summary: 'Cart Total: ₹8,450.00',
    status: 'Draft synced to ERP',
    time: '10:42 AM',
  },
  {
    title: 'AUTOMATED B2B ORDER PROCESSING',
    description: 'Understands fuzzy text like “Maggi 2 carton, Parle-G 20 packets” and builds verified drafts.',
    customer: <>Please process PO #8842<br />for our weekly replenishment.</>,
    response: 'PO verified. Inventory is reserved and your invoice is ready.',
    summary: '42 line items · ₹84,920.00',
    status: 'Invoice #KD-8842 ready',
    time: '10:46 AM',
  },
  {
    title: 'REAL-TIME ERP & INVENTORY SYNC',
    description: 'Pushes orders into Tally, SAP, Marg, or custom databases with zero manual data entry.',
    customer: 'Can we sync this order with Tally now?',
    response: 'Synced. Stock, GST and delivery status are up to date.',
    summary: 'Tally sync complete',
    status: 'Inventory: 100% current',
    time: '10:49 AM',
  },
]

const integrations = [
  ['SAP S/4HANA', 'text-cyan-300', 'bg-cyan-400'],
  ['CUSTOM ERPs', 'text-violet-300', 'bg-violet-400'],
  ['INDIAMART API', 'text-rose-300', 'bg-rose-400'],
  ['MARG ERP', 'text-emerald-300', 'bg-emerald-400'],
  ['TALLY PRIME', 'text-amber-300', 'bg-amber-400'],
]

export default function ConversationalPhone() {
  const [active, setActive] = useState(0)
  const current = scenarios[active]

  return <section className="relative isolate w-full max-w-full overflow-hidden border-b border-white/10 bg-[#0d111d]/55 py-16 lg:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_42%,rgba(0,240,255,.12),transparent_32%),radial-gradient(ellipse_at_20%_55%,rgba(139,92,246,.1),transparent_38%)]" />
    <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-[#13192b]/90 p-4 shadow-2xl sm:p-6 lg:p-8 before:content-[''] before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-3 before:w-3 before:border-l-2 before:border-t-2 before:border-cyan after:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:h-3 after:w-3 after:border-b-2 after:border-r-2 after:border-violet-400">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0 space-y-6">
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-cyan">* MULTIPLY CONVERSATIONAL ENGINE</span>
            <h2 className="break-words font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-5xl">Turn WhatsApp into your <span className="font-serif font-normal italic text-transparent bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text">growth engine.</span></h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">Product names, pack sizes, and quantities—sent as a natural WhatsApp conversation. Your customers place orders in their own words through text, voice notes, or handwritten slips.</p>

            <div className="space-y-3 pt-2" role="tablist" aria-label="Conversational engine capabilities">
              {scenarios.map((scenario, index) => <motion.button key={scenario.title} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} whileHover={{ y: -4, rotateX: 2, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} style={{ transformPerspective: 900, transformStyle: 'preserve-3d' }} className={`group relative flex w-full min-w-0 items-start gap-3 overflow-hidden rounded-xl border p-3 text-left shadow-[0_10px_24px_rgba(0,0,0,.2)] transition sm:gap-4 sm:p-4 ${active === index ? 'border-cyan-400/60 bg-gradient-to-r from-cyan-950/50 to-[#0d1525] shadow-[0_12px_30px_rgba(0,240,255,.1)]' : 'border-white/10 bg-gradient-to-br from-[#111827] to-[#0d111d] hover:border-violet-400/50'}`}>
                <span className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-lg border font-mono text-xs font-bold shadow-[inset_0_1px_8px_rgba(255,255,255,.08)] ${active === index ? 'border-cyan-400/50 bg-cyan-900/70 text-cyan-200' : 'border-white/10 bg-white/5 text-violet-300'}`} style={{ transform: 'translateZ(18px)' }}>0{index + 1}</span>
                <span className="min-w-0 break-words"><span className={`block break-words text-sm font-bold uppercase transition-colors ${active === index ? 'text-cyan-100' : 'text-white group-hover:text-cyan-300'}`}>{scenario.title}</span><span className="mt-1 block break-words text-xs leading-5 text-slate-400">{scenario.description}</span></span>
              </motion.button>)}
            </div>
          </div>

          <div className="relative flex w-full min-w-0 justify-center overflow-hidden [perspective:1400px]">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
            <motion.div animate={{ y: [0, -5, 0], rotateY: [-2, 2, -2] }} whileHover={{ scale: 1.02, rotateY: -7, rotateX: 2 }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} style={{ transformPerspective: 1400, transformStyle: 'preserve-3d' }} className="relative mx-auto w-full max-w-[280px] rounded-[32px] border-[4px] border-[#3b4654] bg-[linear-gradient(135deg,#7b8794_0%,#222b36_12%,#111821_48%,#3c4857_78%,#171e27_100%)] p-2 shadow-[inset_0_1px_2px_rgba(255,255,255,.32),inset_0_-2px_3px_rgba(0,0,0,.75),0_0_0_1px_rgba(148,163,184,.3),16px_24px_44px_rgba(0,0,0,.58),-6px_0_22px_rgba(0,240,255,.14),0_0_40px_rgba(0,240,255,.14)] before:absolute before:-left-[6px] before:top-24 before:h-9 before:w-[3px] before:rounded-l before:bg-gradient-to-b before:from-slate-500 before:via-slate-800 before:to-slate-500 before:content-[''] after:absolute after:-right-[6px] after:top-32 after:h-14 after:w-[3px] after:rounded-r after:bg-gradient-to-b after:from-slate-500 after:via-slate-800 after:to-slate-500 after:content-[''] sm:max-w-[300px] sm:rounded-[36px] sm:p-2.5">
              <div className="flex h-[480px] flex-col overflow-hidden rounded-[25px] border border-black/80 bg-[#0b141a] font-sans text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.06)] sm:h-[500px] sm:rounded-[29px]">
                <div className="relative flex h-10 shrink-0 items-center justify-between bg-[#1f2c34] px-5 font-mono text-[11px] text-white before:absolute before:left-1/2 before:top-1/2 before:h-[11px] before:w-[11px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#05080c] before:ring-2 before:ring-slate-600/80 before:content-['']"><span className="relative z-10 font-bold">9:41</span><span className="relative z-10 flex items-center gap-1.5"><Wifi className="h-3 w-3" /><BatteryCharging className="h-3.5 w-3.5 text-emerald-400" /></span></div>
                <div className="flex shrink-0 items-center justify-between border-b border-black/20 bg-[#1f2c34] px-3.5 py-2.5 text-white shadow-md">
                  <div className="flex items-center gap-2.5"><span className="text-lg text-slate-400">&lsaquo;</span><div className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-gradient-to-tr from-cyan-500 to-indigo-600 text-xs font-bold">K</div><div><h3 className="flex items-center gap-1 text-xs font-bold leading-tight">Kedia Store <CheckCheck className="h-3.5 w-3.5 text-cyan-400" /></h3><span className="block font-mono text-[10px] text-emerald-400">WhatsApp Business · AI Active</span></div></div>
                  <div className="flex items-center gap-3 text-slate-300"><Phone className="h-4 w-4" /><MoreVertical className="h-4 w-4" /></div>
                </div>
                <div className="flex-1 space-y-2 overflow-hidden bg-[#0b141a] bg-[radial-gradient(#1f2c34_1px,transparent_1px)] p-2.5 text-xs [background-size:16px_16px]">
                  <div className="my-0.5 text-center"><span className="rounded bg-[#1f2c34] px-2 py-0.5 font-mono text-[8px] text-slate-400">TODAY · ENCRYPTED</span></div>
                  <div className="flex justify-start"><div className="max-w-[88%] space-y-0.5 rounded-2xl rounded-tl-none border border-white/5 bg-[#202c33] p-2.5 text-slate-100 shadow-sm"><p className="text-[11px] font-medium leading-4">{current.customer}</p><span className="block text-right text-[8px] text-slate-400">{current.time}</span></div></div>
                  <div className="flex justify-end"><div className="max-w-[92%] space-y-1 rounded-2xl rounded-tr-none border border-emerald-500/20 bg-[#005c4b] p-2.5 text-white shadow-sm"><p className="text-[10px] font-medium leading-[1.35]">{current.response}</p><div className="space-y-0.5 rounded-lg border border-white/10 bg-black/30 p-1.5 text-[9px]"><div className="flex justify-between text-slate-300"><span>{current.summary}</span><Check className="h-3 w-3 text-emerald-300" /></div><div className="flex items-center gap-1 font-mono text-emerald-300"><Check className="h-3 w-3" />{current.status}</div></div><span className="flex items-center justify-end gap-1 text-right text-[8px] text-emerald-200">{current.time} <CheckCheck className="h-3 w-3 text-cyan-300" /></span></div></div>
                  <div className="grid grid-cols-3 gap-1 font-mono text-center text-[8px] leading-3 text-cyan-300"><span className="min-w-0 break-words rounded border border-white/10 bg-black/40 px-1 py-1">Parle-G Stock?</span><span className="min-w-0 break-words rounded border border-white/10 bg-black/40 px-1 py-1">Latest Catalog PDF</span><span className="min-w-0 break-words rounded border border-white/10 bg-black/40 px-1 py-1">Sync with Tally</span></div>
                </div>
                <form onSubmit={event => event.preventDefault()} className="flex shrink-0 items-center gap-2 border-t border-black/30 bg-[#1f2c34] p-2">
                  <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-[#2a3942] px-3 py-2 text-slate-300"><Smile className="h-4 w-4 shrink-0 text-slate-400" /><input aria-label="Message preview" readOnly value="Type a message or order..." className="min-w-0 flex-1 bg-transparent text-[11px] text-slate-400 outline-none" /><Paperclip className="h-3.5 w-3.5 shrink-0 text-slate-400" /></div><button type="submit" aria-label="Send message preview" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#00a884] text-white"><Send className="h-3.5 w-3.5" /></button>
                </form>
                <div className="flex h-4 shrink-0 items-center justify-center bg-[#1f2c34]"><div className="h-1 w-32 rounded-full bg-slate-500" /></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-300"><Database className="h-4 w-4 text-cyan" />Connect with your existing system:</div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">{integrations.map(([name, textColor, dotColor]) => <span key={name} className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] font-bold ${textColor}`}><span className={`h-2 w-2 rounded-full ${dotColor}`} />{name}</span>)}</div>
        </div>
      </div>
    </div>
  </section>
}
