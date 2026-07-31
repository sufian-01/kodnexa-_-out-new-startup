import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Code2, ExternalLink, Headphones, Lightbulb, Rocket, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { services } from '../data/content'
import heroVideo from '../assets/photos/front-hero-video.mp4'
import hackathonImage from '../assets/photos/hackathon.jpeg'

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }
const Reveal = ({ children, className = '' }) => <motion.div variants={rise} transition={{ duration: .6, ease: 'easeOut' }} className={className}>{children}</motion.div>
const Section = ({ id, children, className = '' }) => <motion.section id={id} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={{ visible: { transition: { staggerChildren: .1 } } }}>{children}</motion.section>

function Count({ number, suffix }) {
  const ref = useRef(null); const active = useInView(ref, { once: true }); const [value, setValue] = useState(0)
  useEffect(() => { if (!active) return; const target = Number(number); const start = performance.now(); const timer = requestAnimationFrame(function tick(now) { const progress = Math.min((now - start) / 1300, 1); setValue(Math.round(target * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick) }); return () => cancelAnimationFrame(timer) }, [active, number])
  return <span ref={ref}>{value}{suffix}</span>
}

const projects = [
  {
    title: "Doctor's The Family",
    kind: 'HEALTHCARE / SERVICE BOOKING',
    image: '/projects/doctorsthefamily-card.png',
    description: 'Home physiotherapy & rehabilitation service website with WhatsApp-based appointment booking.',
    liveLink: 'https://doctorsthefamily.com/',
    caseStudy: {
      client: "Doctor's The Family (Home Physiotherapy, Delhi NCR)",
      problem: 'Client needed an online presence and an easy way for patients to book home-visit appointments and build trust.',
      solution: 'Built a full website with service pages, WhatsApp-integrated booking flow, therapist team profiles, patient testimonials, and a blog section for SEO.',
      stack: 'WordPress + Elementor',
      outcome: 'Live site generating patient inquiries via WhatsApp and ranking for local physiotherapy search terms.',
    },
  },
  {
    title: 'Grinspire Welfare Foundation',
    kind: 'NGO / NONPROFIT PLATFORM',
    image: '/projects/grinspire-card.png',
    description: 'NGO platform with tiered membership system, donation flow, and volunteer application.',
    liveLink: '',
    caseStudy: {
      client: 'Grinspire Welfare Foundation (community welfare NGO)',
      problem: 'NGO needed a digital presence to collect memberships, donations, and volunteer applications, and to showcase impact.',
      solution: 'Built a website with a 3-tier membership system (Free, Rs. 500/year, Rs. 2,500/year), donation button, membership application form, and contact/volunteer form.',
      stack: 'React + Vite + Tailwind CSS',
      outcome: 'Live platform handling membership applications and donations online.',
    },
  },
  {
    title: 'Your Project, Here Next',
    kind: 'OPEN FOR NEW PROJECTS',
    description: "We're currently taking on new client projects - this space is reserved for what we build next.",
    comingSoon: true,
    cta: { label: 'Start your project', href: '/contact' },
  },
]

function CaseStudyModal({ project, onClose }) {
  if (!project) return null
  const rows = [
    ['Client', project.caseStudy.client],
    ['Problem', project.caseStudy.problem],
    ['Solution', project.caseStudy.solution],
    ['Tech/Stack', project.caseStudy.stack],
    ['Outcome', project.caseStudy.outcome],
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-end bg-ink/80 p-3 backdrop-blur-sm sm:items-center sm:justify-center" role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
      <motion.article initial={{ y: 24, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: .98 }} className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-panel p-6 shadow-2xl sm:p-8">
        <button onClick={onClose} className="float-right grid h-9 w-9 place-items-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white" aria-label="Close case study"><X className="h-5 w-5" /></button>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">{project.kind}</p>
        <h2 className="mt-3 font-display text-3xl text-white">{project.title}</h2>
        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-8 space-y-5">{rows.map(([label, value]) => <div key={label} className="border-t border-white/10 pt-5"><h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</h3><p className="mt-2 text-sm leading-7 text-slate-300">{value}</p></div>)}</div>
        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow">Visit live site <ExternalLink className="h-4 w-4" /></a>}
      </motion.article>
    </motion.div>
  )
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const stats = [['120', '+', 'Projects delivered'], ['8', 'k+', 'Students empowered'], ['35', '+', 'Events hosted'], ['60', '+', 'Happy clients']]
  const process = [[Lightbulb, 'Consult', 'Understand the challenge'], [Code2, 'Plan', 'Shape the right path'], [Rocket, 'Build', 'Make the idea tangible'], [CheckCircle2, 'Deploy', 'Launch with confidence'], [Headphones, 'Support', 'Keep growing together']]
  const testimonials = [['“Kodnexus made AI feel tangible for our whole team. We left with prototypes and a clear next step.”', 'Ananya Mehta', 'Product Lead, Nivara'], ['“A rare balance of thoughtful strategy and serious execution. They became an extension of our team.”', 'Rohan Kapoor', 'Founder, Northstar'], ['“The hackathon shifted how our students think about building. It was electric.”', 'Dr. P. Sharma', 'Innovation Director']]
  return <main id="main-content" className="overflow-hidden">
    <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-40"><div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_25%_10%,rgba(99,102,241,.24),transparent_42%),radial-gradient(ellipse_at_85%_55%,rgba(6,182,212,.13),transparent_30%)]" /><div className="absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="section-shell grid items-center gap-12 pb-24 lg:min-h-[670px] lg:grid-cols-[1.05fr_.95fr] lg:pb-28"><motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .13 } } }}><Reveal><span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> AI that moves you forward</span></Reveal><Reveal><h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl xl:text-6xl">Building AI Solutions That <span className="gradient-text">Transform Businesses</span> & Empower Students</h1></Reveal><Reveal><p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">From intelligent products to hands-on learning, Kodnexus turns ambitious ideas into real-world impact.</p></Reveal><Reveal className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="#services">Explore services</Button><Button secondary href="#hackathon">Upcoming hackathon</Button></Reveal><Reveal className="mt-10 flex items-center gap-3 text-sm text-slate-400"><CheckCircle2 className="h-5 w-5 text-cyan" /> Built for businesses, institutions and future builders.</Reveal></motion.div><motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }}><div className="relative min-h-[370px] overflow-hidden rounded-2xl border border-dashed border-indigo-300/35 bg-[linear-gradient(135deg,rgba(99,102,241,.14),rgba(6,182,212,.05))] shadow-glow sm:min-h-[460px]"><video src={heroVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" /></div></motion.div></div>
    </section>
    <Section className="border-y border-white/10 bg-white/[.02] py-9"><div className="section-shell"><Reveal><p className="text-center text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Trusted by forward-thinking teams</p><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{['NEXORA','VERTEX','ORBITAL','NORTHSTAR','LUMIO','AVENA'].map(name => <div key={name} className="grid h-12 place-items-center rounded-lg border border-white/[.07] bg-white/[.02] font-display text-xs font-semibold tracking-[.16em] text-slate-500">{name}</div>)}</div></Reveal></div></Section>
    <Section className="section-shell py-20 sm:py-28"><Reveal><div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([n, s, label]) => <div key={label} className="bg-panel px-7 py-8 text-center"><p className="font-display text-4xl font-semibold text-white"><Count number={n} suffix={s} /></p><p className="mt-2 text-sm text-slate-400">{label}</p></div>)}</div></Reveal></Section>
    <Section id="services" className="section-shell py-20 sm:py-28"><div className="max-w-2xl"><Reveal><span className="eyebrow">Core services</span></Reveal><Reveal><h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">Everything you need to <span className="gradient-text">build forward.</span></h2></Reveal><Reveal><p className="mt-5 leading-7 text-slate-400">A practical mix of technical expertise, creative problem solving, and genuine collaboration.</p></Reveal></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, copy }) => <Reveal key={title}><motion.article whileHover={{ y: -7 }} className="group h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.015] p-7 shadow-card transition hover:border-indigo-400/40"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo/15 text-indigo-300 transition group-hover:scale-110 group-hover:bg-indigo"><Icon className="h-5 w-5" /></span><h3 className="mt-6 font-display text-xl font-medium text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition group-hover:text-white">Learn more <ArrowRight className="h-4 w-4" /></a></motion.article></Reveal>)}</div></Section>
    <Section id="hackathon" className="py-20 sm:py-28"><div className="section-shell"><Reveal><div className="relative overflow-hidden rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo/25 via-[#111936] to-cyan/10 p-7 sm:p-12"><div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan/15 blur-3xl" /><div className="relative grid items-center gap-10 lg:grid-cols-[1fr_.7fr]"><div><span className="eyebrow">Featured hackathon</span><h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">Build with AI.<br /><span className="text-cyan-300">Ship something real.</span></h2><p className="mt-5 max-w-xl leading-7 text-slate-300">A high-energy day for curious minds to collaborate, prototype and create with AI.</p><div className="mt-7 flex flex-wrap gap-3 text-center">{[['14', 'Days'], ['08', 'Hours'], ['42', 'Minutes']].map(([n, label]) => <div key={label} className="glass rounded-xl px-4 py-3"><b className="block text-xl text-white">{n}</b><span className="text-[10px] uppercase tracking-widest text-slate-400">{label}</span></div>)}</div><Button href="#contact" className="mt-7">Register now</Button></div><div className="relative min-h-[270px] overflow-hidden rounded-2xl border border-dashed border-indigo-300/35 bg-[linear-gradient(135deg,rgba(99,102,241,.14),rgba(6,182,212,.05))]"><img src={hackathonImage} alt="Kodnexus hackathon" className="absolute inset-0 h-full w-full object-cover" /></div></div></div></Reveal></div></Section>
    <Section className="section-shell py-20 sm:py-28"><div className="text-center"><Reveal><span className="eyebrow">Our process</span></Reveal><Reveal><h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">A clear path from idea to <span className="gradient-text">impact.</span></h2></Reveal></div><div className="relative mt-14 grid gap-5 md:grid-cols-5">{process.map(([Icon, title, text], i) => <Reveal key={title}><div className="relative text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-indigo-400/25 bg-indigo/10 text-indigo-300"><Icon className="h-6 w-6" /></span><span className="mt-4 block text-xs font-bold tracking-widest text-cyan">0{i + 1}</span><h3 className="mt-2 font-display font-medium text-white">{title}</h3><p className="mt-2 text-xs text-slate-400">{text}</p></div></Reveal>)}</div></Section>
    <Section id="projects" className="bg-[#080d1d] py-20 sm:py-28"><div className="section-shell"><Reveal><span className="eyebrow">Featured projects</span></Reveal><Reveal><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">Work that earns its <span className="gradient-text">place in the world.</span></h2><a href="#contact" className="text-sm font-semibold text-indigo-300">View all work &rarr;</a></div></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map(project => <Reveal key={project.title}><article className={`overflow-hidden rounded-2xl bg-white/[.03] ${project.comingSoon ? 'border border-dashed border-indigo-300/35' : 'border border-white/10'}`}>{project.comingSoon ? <div className="grid aspect-[4/3] min-h-[220px] place-items-center border-b border-dashed border-indigo-300/35 bg-[linear-gradient(135deg,rgba(99,102,241,.14),rgba(6,182,212,.05))] px-6 text-center"><div><p className="text-xs font-semibold uppercase tracking-widest text-cyan">Coming soon</p><h3 className="mt-3 font-display text-2xl text-white">Open Slot</h3></div></div> : <img src={project.image} alt={`${project.title} project preview`} width="900" height="675" className="aspect-[4/3] min-h-[220px] w-full border-b border-white/10 object-cover" />}<div className="p-6"><p className="text-xs font-semibold uppercase tracking-widest text-cyan">{project.kind}</p><h3 className="mt-2 font-display text-xl text-white">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>{project.comingSoon ? <a href={project.cta.href} className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">{project.cta.label} <ArrowRight className="h-4 w-4" /></a> : <button type="button" onClick={() => setSelectedProject(project)} className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">View case study <ArrowRight className="h-4 w-4" /></button>}</div></article></Reveal>)}</div></div></Section>
    <Section className="section-shell py-20 sm:py-28"><div className="flex items-end justify-between gap-4"><div><Reveal><span className="eyebrow">What people say</span></Reveal><Reveal><h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">Built on real <span className="gradient-text">partnerships.</span></h2></Reveal></div><div className="hidden gap-2 sm:flex"><button className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300"><ChevronLeft className="h-4 w-4" /></button><button className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300"><ChevronRight className="h-4 w-4" /></button></div></div><div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2">{testimonials.map(([quote, name, role]) => <Reveal key={name} className="min-w-[85%] sm:min-w-[48%] lg:min-w-[32%]"><article className="h-full snap-start rounded-2xl border border-white/10 bg-white/[.03] p-7"><p className="font-display text-lg leading-8 text-slate-200">{quote}</p><div className="mt-8"><p className="text-sm font-semibold text-white">{name}</p><p className="mt-1 text-xs text-slate-500">{role}</p></div></article></Reveal>)}</div></Section>
    <Section id="contact" className="relative py-20 sm:py-28"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(99,102,241,.25),transparent_55%)]" /><div className="section-shell relative"><Reveal><div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[.035] px-6 py-14 text-center backdrop-blur sm:px-12"><span className="eyebrow">Let’s make it happen</span><h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">Ready to Build Something <span className="gradient-text">Amazing?</span></h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Whether you’re building a business, a product or a new generation of talent—we’re ready when you are.</p><Button href="mailto:info@kodnexus.com" className="mt-8">Start a conversation</Button></div></Reveal></div></Section>
    <AnimatePresence>{selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
  </main>
}
