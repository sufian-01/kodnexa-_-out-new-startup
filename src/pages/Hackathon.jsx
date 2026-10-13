import { CheckCircle2, Crown, X } from 'lucide-react'
import { useLayoutEffect, useState } from 'react'
import Faq from '../components/Faq'
import InvoiceHologram3D from '../components/hackathon/InvoiceHologram3D'
import TechIQHologram3D from '../components/hackathon/TechIQHologram3D'
import ayeshaMalik from '../assets/photos/ayesha-malik.jpeg'
import devArora from '../assets/photos/dev-arora.jpeg'
import hackathonImage from '../assets/photos/hackathon.jpeg'
import kavyaIyer from '../assets/photos/kavya-iyer.jpeg'
import nikhilShah from '../assets/photos/nikhil-shah.jpeg'

const faqs = [
  ['Who can participate?', 'Students, professionals and curious builders are all welcome.'],
  ['Do I need AI experience?', 'No. We support every level, from your first prompt to advanced prototype building.'],
  ['What should I bring?', 'A laptop, charger and a willingness to build.'],
]
const guides = [
  ['Ayesha Malik', 'Product AI', ayeshaMalik], ['Dev Arora', 'Full-stack AI', devArora],
  ['Kavya Iyer', 'Venture partner', kavyaIyer], ['Nikhil Shah', 'Engineering lead', nikhilShah],
]
const rubric = [
  ['Functionality & Correctness', 30], ['AI Implementation & Prompting', 20],
  ['Price/Data Source Integration', 15], ['Invoice Quality & Usability', 15],
  ['Real-World Usefulness', 10], ['Creativity & Bonus Features', 10],
]
const lightCard = 'border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/10 dark:bg-[#07090e] dark:text-white'
const muted = 'text-slate-600 dark:text-slate-300'

function Modal({ title, onClose, children }) {
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <section role="dialog" aria-modal="true" aria-label={title} className={`max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-6 shadow-2xl sm:p-8 ${lightCard}`}>
      <div className="flex items-start justify-between gap-4"><div><span className="eyebrow">Challenge briefing</span><h2 className="mt-2 font-display text-2xl sm:text-3xl">{title}</h2></div><button onClick={onClose} aria-label="Close dialog" className="rounded-lg border border-slate-200 p-2 dark:border-white/10"><X className="h-5 w-5" /></button></div>
      <div className="mt-6">{children}</div>
    </section>
  </div>
}

function Tags({ items }) { return <div className="mt-4 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">{item}</span>)}</div> }
function Spec({ label, value }) { return <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[.04]"><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{label}</p><p className="mt-1 text-sm font-semibold">{value}</p></div> }

export default function Hackathon() {
  const [modal, setModal] = useState(null)
  const [filter, setFilter] = useState('all')
  useLayoutEffect(() => { window.scrollTo(0, 0) }, [])
  return <main id="main-content" className="bg-[#f8fafc] text-slate-900 dark:bg-[#07090e] dark:text-white">
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,.16),transparent_58%)] px-4 py-16 dark:border-white/10 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid place-items-center overflow-hidden font-display text-[5rem] font-black tracking-[.2em] text-slate-900/[.025] dark:text-white/[.025] sm:text-[10rem]">HACKARENA</div>
      <div className="section-shell relative text-center"><span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 font-mono text-[10px] font-bold tracking-[.14em] text-cyan-700 dark:text-cyan-300"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"/>KODNEXUS SPRINT ARENA // APPLIED AI &amp; SYSTEMS BENCHMARKS</span>
        <h1 className="mx-auto mt-6 max-w-5xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">The 3D AI Build <span className="gradient-text">Arenas.</span></h1>
        <p className={`mx-auto mt-5 max-w-3xl text-base leading-relaxed sm:text-lg ${muted}`}>Battle-tested online engineering marathons where student innovators and seasoned developers construct automated invoice extraction pipelines, neural agents, and prove core computer science instincts.</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{[['all', 'All Arenas (2)'], ['sprint', 'AI Build Sprints'], ['quiz', 'National Tech IQ']].map(([key,label]) => <button key={key} onClick={() => setFilter(key)} aria-pressed={filter === key} className={`rounded-xl border px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider transition ${filter === key ? 'border-cyan-500 bg-cyan-500 text-slate-950 shadow-md' : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-400 dark:border-white/10 dark:bg-[#0d1222] dark:text-slate-300'}`}>{label}</button>)}<a href="https://chat.whatsapp.com/KMPObcIRaPEBGeLg082ZTo?s=cl&p=a&ilr=1" target="_blank" rel="noreferrer" className="rounded-xl bg-emerald-600 px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-emerald-500">WhatsApp Community ↗</a></div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 border-t border-slate-200 pt-8 font-mono text-center dark:border-white/10 md:grid-cols-4">{[['650+', 'Registered Candidates', 'text-cyan-600 dark:text-cyan-400'], ['180 Mins', 'Live Sprint Window', 'text-violet-600 dark:text-violet-400'], ['4.0 / 5.0', '97 Verified Reviews', 'text-emerald-600 dark:text-emerald-400'], ['Unstop', 'Official Hosting Hub', 'text-indigo-600 dark:text-indigo-400']].map(([n,l,color]) => <div key={l}><span className={`block font-display text-2xl font-extrabold sm:text-3xl ${color}`}>{n}</span><span className="mt-1 block text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">{l}</span></div>)}</div>
      </div>
    </section>

    <section id="challenges" className="relative scroll-mt-24 border-b border-slate-200 py-16 dark:border-white/10 sm:py-24"><div className="section-shell"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><span className="eyebrow">Official flagship events</span><h2 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl">Interactive 3D <span className="gradient-text">Challenge Arenas.</span></h2></div><p className="max-w-md text-xs leading-6 text-slate-500 dark:text-slate-400">Drag the holograms to inspect the models. Move over a card to see its perspective tilt.</p></div>
      <div className="grid gap-7 xl:grid-cols-2">
        {filter !== 'quiz' && <article onMouseMove={e => { if (window.matchMedia('(hover: none)').matches) return; const r=e.currentTarget.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width; const y=(e.clientY-r.top)/r.height; e.currentTarget.style.transform=`perspective(1200px) rotateX(${(0.5-y)*3}deg) rotateY(${(x-0.5)*3}deg)` }} onMouseLeave={e => { e.currentTarget.style.transform='perspective(1200px) rotateX(0deg) rotateY(0deg)' }} className={`group relative overflow-hidden rounded-3xl border p-5 shadow-xl transition-transform duration-200 sm:p-7 ${lightCard}`}>
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative flex flex-wrap gap-2"><span className="rounded-full bg-indigo-600/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-indigo-700 dark:text-indigo-200">180-MIN BUILD SPRINT // APPLIED AI</span><span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-emerald-700 dark:text-emerald-300">UNSTOP HOSTED</span></div>
          <h3 className="relative mt-5 max-w-xl font-display text-2xl font-bold sm:text-3xl">Kodnexus AI Build Battle – Smart Invoice Challenge</h3>
          <div className="mt-5"><InvoiceHologram3D /></div><div className="mt-5"><p className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Build workflow</p><div className="mt-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm font-medium leading-7">Customer Requirement → AI Extraction → Price Lookup → Invoice Generation → Approval Flow</div><p className={`mt-4 text-sm leading-6 ${muted}`}>Turn a customer request into a trustworthy, priced invoice and a clear approval flow.</p></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2"><Spec label="Team size" value="Individual (Solo)"/><Spec label="Registration" value="Free Entry"/><Spec label="Deadline" value="25 Sep 2026, 11:59 PM IST"/><Spec label="Submission window" value="27 Sep 2026, 12:00 PM – 03:00 PM IST on Unstop"/></div>
          <Tags items={['AI Copilots Allowed', 'Python/FastAPI', 'Google Sheets API', 'Streamlit/Next.js']} />
          <div className="mt-6 flex flex-wrap gap-3"><button onClick={() => setModal('invoice')} className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">100-Mark Rubric &amp; Rules</button><a target="_blank" rel="noreferrer" href="https://chat.whatsapp.com/KMPObcIRaPEBGeLg082ZTo?s=cl&p=a&ilr=1" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:border-indigo-400 dark:border-white/15">Official WhatsApp Group ↗</a></div>
        </article>}

        {filter !== 'sprint' && <article onMouseMove={e => { if (window.matchMedia('(hover: none)').matches) return; const r=e.currentTarget.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width; const y=(e.clientY-r.top)/r.height; e.currentTarget.style.transform=`perspective(1200px) rotateX(${(0.5-y)*3}deg) rotateY(${(x-0.5)*3}deg)` }} onMouseLeave={e => { e.currentTarget.style.transform='perspective(1200px) rotateX(0deg) rotateY(0deg)' }} className={`group relative overflow-hidden rounded-3xl border p-5 shadow-xl transition-transform duration-200 sm:p-7 ${lightCard}`}>
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
          <div className="relative flex flex-wrap gap-2"><span className="rounded-full bg-violet-600/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-violet-700 dark:text-violet-200">20-MIN NATIONAL QUIZ // TECH BENCHMARK</span><span className="rounded-full bg-amber-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-amber-700 dark:text-amber-300">★ 4.0 / 5.0 (97 RATINGS)</span></div>
          <h3 className="relative mt-5 max-w-xl font-display text-2xl font-bold sm:text-3xl">Kodnexus National Tech IQ Challenge</h3>
          <div className="mt-5"><TechIQHologram3D /></div><p className="mt-4 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm font-semibold leading-6">15–20 MCQs • 20 Minutes • Single Round Online Championship</p><p className={`mt-4 text-sm leading-6 ${muted}`}>Benchmark technical fundamentals across India. Tested 650+ verified student developers.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2"><Spec label="Participants" value="650+ Registered"/><Spec label="Duration" value="20 Minutes"/><Spec label="Registration deadline" value="05 Sep 2026, 06:00 PM IST"/><Spec label="Test window" value="06 Sep 2026, 10:00 AM – 06:00 PM IST"/></div>
          <Tags items={['DSA & Algorithms', 'Web Architecture', 'DBMS / SQL', 'Python & Networks']} />
          <div className="mt-6 flex flex-wrap items-center gap-3"><button onClick={() => setModal('techiq')} className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">Format &amp; Syllabus Details</button><span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300"><Crown className="h-4 w-4"/>Top 50 Merit Badges Dispatched</span></div>
        </article>}
      </div>
    </div></section>

    <section className="border-y border-slate-200 bg-slate-100 py-14 dark:border-white/10 dark:bg-white/[.02] sm:py-20"><div className="section-shell grid gap-7 lg:grid-cols-[1.15fr_.85fr]"><div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"><img src={hackathonImage} alt="kodnexus hackathon" className="absolute inset-0 h-full w-full object-cover" /></div><div className={`rounded-2xl border p-7 ${lightCard}`}><p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">kodnexus AI Hackathon 2026</p><h2 className="mt-3 font-display text-3xl">Build with AI. Ship something real.</h2><p className={`mt-3 ${muted}`}>Bring a bold idea, make it useful, and share the result with the community.</p><a href="https://unstop.com/" target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white">Explore events on Unstop ↗</a></div></div></section>

    <section className="section-shell py-16 sm:py-24"><div className="text-center"><span className="eyebrow">4-phase pipeline</span><h2 className="font-display text-3xl sm:text-5xl">From hello to <span className="gradient-text">launch.</span></h2></div><div className="mt-12 grid gap-4 md:grid-cols-4">{[['Check-in', 'Welcome, verify your setup, and meet fellow builders.'], ['Build Sprint', 'Turn the brief into a working solution.'], ['Live Evaluation', 'Walk the judges through your build and decisions.'], ['Fellowship Awards', 'Celebrate standout work and next steps.']].map(([text, desc], i) => <div key={text} className={`rounded-xl border p-5 ${lightCard}`}><span className="text-xs font-bold text-cyan-700 dark:text-cyan-300">PHASE 0{i + 1}</span><p className="mt-5 font-display text-lg font-semibold">{text}</p><p className={`mt-2 text-sm ${muted}`}>{desc}</p></div>)}</div></section>

    <section className="section-shell py-16 sm:py-24"><span className="eyebrow">People who'll guide you</span><h2 className="font-display text-3xl sm:text-5xl">Mentors &amp; judges.</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{guides.map(([name, role, image]) => <article key={name} className={`overflow-hidden rounded-2xl border ${lightCard}`}><img src={image} alt={name} width="600" height="600" className="aspect-square min-h-[170px] w-full border-b border-slate-200 object-cover object-top dark:border-white/10"/><div className="p-5"><h3 className="font-display text-lg font-semibold">{name}</h3><p className="mt-1 text-sm text-indigo-600 dark:text-indigo-300">{role}</p></div></article>)}</div></section>

    <section className="border-y border-slate-200 bg-slate-100 py-14 dark:border-white/10 dark:bg-white/[.02]"><div className="section-shell"><p className="text-center text-xs font-bold uppercase tracking-[.2em] text-slate-500">Supported by our sponsors</p><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{['NEXORA','VERTEX','ORBITAL','LUMIO'].map(x => <div key={x} className="grid h-14 place-items-center rounded-lg border border-slate-200 bg-white text-xs font-bold tracking-widest text-slate-500 dark:border-white/10 dark:bg-white/[.03]">{x}</div>)}</div></div></section>

    <section className="section-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-2"><div><span className="eyebrow">Rules</span><h2 className="font-display text-3xl sm:text-5xl">Keep it ambitious. Keep it kind.</h2><div className="mt-7 space-y-4">{['Build something new during the event.', 'Work in teams of up to four people.', 'Respect people, ideas and shared space.', 'Present a working prototype at final demo.'].map(x => <p key={x} className={`flex gap-3 text-sm ${muted}`}><CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-300"/>{x}</p>)}</div></div><div><span className="eyebrow">FAQ</span><Faq items={faqs}/></div></section>

    {modal === 'invoice' && <Modal title="Smart Invoice · 100-Mark Rubric" onClose={() => setModal(null)}><div className="space-y-3">{rubric.map(([name, points]) => <div key={name} className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 p-3 dark:border-white/10"><span>{name}</span><strong className="whitespace-nowrap text-cyan-700 dark:text-cyan-300">{points} Marks</strong></div>)}</div><h3 className="mt-7 font-display text-xl font-semibold">Rewards</h3><ul className={`mt-3 space-y-2 text-sm ${muted}`}><li><strong>Rank 1:</strong> Tech Internship with Kodnexus + Certificate + Social Feature</li><li><strong>Rank 2–3:</strong> Achievement Certificate</li><li><strong>Rank 4–10:</strong> Top Performer Certificate</li><li>Participation Certificate for all</li></ul></Modal>}
    {modal === 'techiq' && <Modal title="Tech IQ · Format & Syllabus" onClose={() => setModal(null)}><p className="rounded-lg bg-violet-500/10 p-4 font-semibold">15–20 MCQs · 20 Minutes · No negative marking</p><h3 className="mt-6 font-display text-xl font-semibold">Syllabus</h3><ul className={`mt-3 grid gap-2 sm:grid-cols-2 ${muted}`}><li>• Data Structures &amp; Algorithms</li><li>• Web Development &amp; Architecture</li><li>• DBMS and SQL</li><li>• Python and Computer Networks</li></ul><h3 className="mt-6 font-display text-xl font-semibold">Perks</h3><ul className={`mt-3 space-y-2 ${muted}`}><li>• Certificate of Merit for the Top 50</li><li>• Direct interview shortlists for Kodnexus roles</li><li>• Developer Community access</li></ul></Modal>}
  </main>
}
