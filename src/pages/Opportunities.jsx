import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, CalendarDays, CheckCircle2, Code2, GraduationCap, Handshake, LineChart, MapPin, Megaphone, Network, Rocket, Search, Sparkles, Trophy, UserCheck, Users } from 'lucide-react'
import { useMemo, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { comingSoonOpportunities, openOpportunities, opportunityStats, opportunityTabs } from '../data/opportunities'
import opportunitiesHero from '../assets/photos/opportunities-hero.png'

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }
const Reveal = ({ children, className = '' }) => <motion.div variants={rise} transition={{ duration: .6, ease: 'easeOut' }} className={className}>{children}</motion.div>
const Section = ({ children, className = '', id }) => <motion.section id={id} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={{ visible: { transition: { staggerChildren: .08 } } }}>{children}</motion.section>

const roleIcons = { 'AI / Software Development Intern': Code2, 'Digital Marketing & Growth Intern': Megaphone, 'Business Development Intern': LineChart }
const soonIcons = { 'Java Instructor': GraduationCap, 'Python Instructor': Briefcase, 'AI Automation Trainer': Sparkles, 'Campus Ambassador': Users }
const journey = [['Application', Briefcase], ['Resume Review', UserCheck], ['Interview', Megaphone], ['Selection', CheckCircle2], ['Project Allocation', Code2], ['Certificate + PPO', Trophy]]
const benefits = [['Real Startup Experience', Briefcase], ['Hands-on Learning', GraduationCap], ['Mentorship from Founders', Users], ['Performance Based PPO', Rocket], ['Networking', Network], ['Certificate', Trophy], ['Live AI Projects', Sparkles], ['Remote Work', MapPin]]

function RoleCard({ role, featured = false }) {
  const Icon = roleIcons[role.title] || Briefcase
  return (
    <Card className={`group relative h-full p-6 ${featured ? 'border-indigo-400/70 shadow-glow' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo/15 text-indigo-300 transition group-hover:scale-110 group-hover:bg-indigo group-hover:text-white"><Icon className="h-6 w-6" /></span>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">{role.status}</span>
      </div>
      <h3 className="mt-7 font-display text-xl text-white">{role.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{role.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
        <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[.035] px-3 py-1.5"><MapPin className="h-3.5 w-3.5 text-cyan" />{role.location}</span>
        <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[.035] px-3 py-1.5"><CalendarDays className="h-3.5 w-3.5 text-cyan" />{role.duration}</span>
        <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[.035] px-3 py-1.5">{role.compensation}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">{role.skills.map(skill => <span key={skill} className="rounded-lg bg-indigo/10 px-3 py-1.5 text-xs text-indigo-100">{skill}</span>)}</div>
      <Button href={`/opportunities/${role.slug}`} className="mt-7 w-full">View Details</Button>
    </Card>
  )
}

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState('All Opportunities')
  const visibleOpen = useMemo(() => activeTab === 'All Opportunities' ? openOpportunities : openOpportunities.filter(role => role.category === activeTab), [activeTab])
  const visibleSoon = useMemo(() => activeTab === 'All Opportunities' ? comingSoonOpportunities : comingSoonOpportunities.filter(role => role.category === activeTab), [activeTab])

  return (
    <main id="main-content" className="overflow-hidden">
      <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_25%_10%,rgba(99,102,241,.24),transparent_42%),radial-gradient(ellipse_at_85%_55%,rgba(6,182,212,.13),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="section-shell grid items-center gap-12 pb-20 lg:min-h-[650px] lg:grid-cols-[1.05fr_.95fr] lg:pb-24">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .13 } } }}>
            <Reveal><span className="eyebrow"><Rocket className="h-3.5 w-3.5" /> Careers at Kodnexus</span></Reveal>
            <Reveal>
              <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl xl:text-6xl">
                Grow Your Career<br />with <span className="gradient-text">Kodnexus</span>
              </h1>
            </Reveal>
            <Reveal><p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">Join a community of innovators, builders and dreamers. Explore internships, programs and career opportunities to learn, build and make a real impact.</p></Reveal>
            <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="#openings">View Open Roles</Button><Button secondary href="#talent-pool">Join Talent Pool</Button></Reveal>
            <Reveal className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400">{['Real Projects', 'Mentorship', 'Flexible Work', 'Certification + PPO'].map(item => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan" />{item}</span>)}</Reveal>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }}>
            <div className="relative aspect-[16/9] min-h-0 overflow-hidden rounded-2xl border border-dashed border-indigo-300/35 bg-[linear-gradient(135deg,rgba(99,102,241,.14),rgba(6,182,212,.05))] shadow-glow lg:aspect-auto lg:min-h-[460px]">
              <img src={opportunitiesHero} alt="Developers collaborating in an AI startup workspace" className="absolute inset-0 h-full w-full object-contain lg:object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/55 via-transparent to-indigo/20" />
            </div>
          </motion.div>
        </div>
      </section>

      <Section className="section-shell pb-16 sm:pb-20">
        <Reveal><div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{opportunityStats.map(([value, label]) => <div key={label} className="bg-panel px-7 py-8 text-center"><p className="font-display text-4xl font-semibold text-white">{value}</p><p className="mt-2 text-sm text-slate-400">{label}</p></div>)}</div></Reveal>
      </Section>

      <Section id="openings" className="section-shell py-16 sm:py-20">
        <Reveal><span className="eyebrow">Current openings</span></Reveal>
        <Reveal><h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">Current Open <span className="gradient-text">Opportunities</span></h2></Reveal>
        <Reveal><p className="mt-4 max-w-2xl leading-7 text-slate-400">Find the right role to start your journey with Kodnexus.</p></Reveal>
        <Reveal className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">{opportunityTabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-xl border px-5 py-2.5 text-sm font-semibold transition ${activeTab === tab ? 'border-indigo/60 bg-gradient-to-r from-indigo to-violet text-white shadow-glow' : 'border-white/10 bg-white/[.035] text-slate-300 hover:border-indigo-300/40 hover:text-white'}`}>{tab}</button>)}</div>
          <div className="hidden min-w-[250px] items-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-4 py-2.5 text-sm text-slate-500 lg:flex"><Search className="h-4 w-4" />Search roles...</div>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .28 }} className="mt-8 grid gap-5 lg:grid-cols-3">
            {visibleOpen.map((role, index) => <RoleCard key={role.slug} role={role} featured={index === 0 && activeTab === 'All Opportunities'} />)}
            {visibleOpen.length === 0 && <p className="rounded-2xl border border-white/10 bg-white/[.03] p-7 text-sm text-slate-400 lg:col-span-3">No open roles in this category yet. Check the upcoming cards below or join the talent pool.</p>}
          </motion.div>
        </AnimatePresence>
      </Section>

      <Section className="section-shell py-10">
        <Reveal><h2 className="font-display text-2xl font-semibold text-white">Coming Soon</h2></Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleSoon.map(({ title }) => {
            const Icon = soonIcons[title] || Briefcase
            return <Reveal key={title}><Card className="h-full p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-display text-lg text-white">{title}</h3><span className="mt-4 inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">Coming Soon</span></Card></Reveal>
          })}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Internship <span className="gradient-text">Journey</span></h2></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3 xl:grid-cols-6">{journey.map(([label, Icon], index) => <Reveal key={label}><div className="relative text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-indigo-400/25 bg-indigo/10 text-indigo-300"><Icon className="h-6 w-6" /></span><h3 className="mt-4 text-sm font-semibold text-white">{label}</h3>{index < journey.length - 1 && <span className="mt-3 hidden text-indigo-300 xl:block">↓</span>}</div></Reveal>)}</div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Why Join <span className="gradient-text">Kodnexus</span></h2></Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title, Icon]) => <Reveal key={title}><Card className="p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold text-white">{title}</h3></Card></Reveal>)}</div>
      </Section>

      <Section id="talent-pool" className="section-shell py-16 sm:py-24">
        <Reveal><div className="relative overflow-hidden rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo/30 via-violet/20 to-cyan/10 p-7 shadow-glow sm:p-10"><div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" /><div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="font-display text-3xl font-semibold text-white">Can't find the right role?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-300">Join our Talent Pool and we'll contact you when a matching opportunity opens.</p></div><Button href="/contact" className="shrink-0">Join Talent Pool</Button></div></div></Reveal>
      </Section>
    </main>
  )
}
