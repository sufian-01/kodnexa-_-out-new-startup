import { Link as Linkedin, Quote, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero'
import founderOne from '../assets/photos/mohammad-sufian-new.jpeg'
import founderTwo from '../assets/photos/md-mozammil.jpeg'
import habibaShahid from '../assets/photos/habiba-shahid.jpeg'
import storyImage from '../assets/photos/ai-workspace-unsplash.jpg'

const founders = [
  {
    name: 'Mohammad Sufian',
    role: 'Co-Founder & Chief Technology Officer (CTO)',
    image: founderOne,
    imageClass: 'origin-top -translate-x-[6%] scale-[1.5] object-cover object-top sm:translate-x-0',
    linkedin: 'https://www.linkedin.com/in/mohammad-sufian-08077a2b8',
    bio: 'Mohammad Sufian is the Co-Founder & Chief Technology Officer (CTO) at KodNexus. He leads the company\'s technology vision, software architecture, and engineering strategy. Passionate about AI, modern software development, and scalable systems, he specializes in building AI automation solutions, full-stack web applications, SaaS platforms, and high-performance backend systems. He ensures every product is secure, scalable, and built using modern engineering best practices.',
  },
  {
    name: 'Md Mozammil',
    role: 'Founder & Chief Executive Officer (CEO)',
    image: founderTwo,
    linkedin: 'https://www.linkedin.com/in/mmozammil',
    imageClass: 'object-contain object-center',
    bio: 'Md Mozammil is the Founder & CEO of KodNexus, leading the company\'s vision, business strategy, and global partnerships. He focuses on helping startups, agencies, and businesses build AI-powered solutions, scalable web applications, SaaS platforms, and custom software. His primary focus is business growth, client relationships, strategic partnerships, and expanding KodNexus into a trusted global technology company.',
  },
  {
    name: 'Habiba Shahid',
    role: 'Co-Founder & Chief Operating Officer (COO)',
    image: habibaShahid,
    imageClass: 'object-contain object-center',
    linkedin: 'https://www.linkedin.com/in/habiba-shahid-5ab717325/',
    bio: 'Habiba Shahid is the Co-Founder & Chief Operating Officer (COO) at KodNexus, overseeing day-to-day operations, project coordination, client communication, and delivery management. She focuses on streamlining workflows, ensuring efficient execution, and helping the team deliver high-quality solutions while maintaining strong client relationships and operational excellence.',
  },
]

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Kodnexus"
        title={<>The people behind the <span className="gradient-text">possibility.</span></>}
        copy="We're a collective of builders, educators and problem-solvers making technology feel more useful, more human and more accessible."
      />

      <section className="section-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Mission & vision</span>
          <h2 className="font-display text-3xl text-white sm:text-5xl">Make intelligence useful for <span className="gradient-text">everyone.</span></h2>
        </div>
        <div className="space-y-7">
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-7">
            <h3 className="font-display text-xl text-white">Our mission</h3>
            <p className="mt-3 leading-7 text-slate-400">To help organizations and students use technology with more confidence, creativity and measurable purpose.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-7">
            <h3 className="font-display text-xl text-white">Our vision</h3>
            <p className="mt-3 leading-7 text-slate-400">A world where opportunity expands because the tools to build are within reach of every curious mind.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#080d1d] py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-dashed border-indigo-300/35 bg-[linear-gradient(135deg,rgba(99,102,241,.14),rgba(6,182,212,.05))]">
            <img src={storyImage} alt="Kodnexus team collaborating in a modern technology workspace" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          </div>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="font-display text-3xl text-white sm:text-5xl">Started with a belief that <span className="gradient-text">progress should be shared.</span></h2>
            <p className="mt-6 leading-7 text-slate-400">Kodnexus began at the intersection of industry ambition and student potential. Today, we partner with teams that are ready to turn emerging technology into meaningful outcomes.</p>
            <div className="mt-7 flex items-center gap-3 text-sm text-slate-300"><Trophy className="h-5 w-5 text-cyan" /> Built for the work that comes next.</div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="font-display text-3xl text-white sm:text-5xl">Meet the Leadership</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            The people driving innovation, engineering, and operations at KodNexus. Together, we're committed to building intelligent software solutions, delivering exceptional client experiences, and helping businesses scale with modern technology.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {founders.map(({ name, role, image, imageClass, linkedin, bio }) => (
            <article key={name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
              <div className="relative overflow-hidden border-b border-white/10 bg-[#070b18] p-4 sm:p-5">
                <div className="relative aspect-[3/4] min-h-[420px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0b1020]">
                  <img src={image} alt={name} className={`h-full w-full ${imageClass ?? 'object-cover object-center'}`} />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-white sm:text-xl">{name}</h3>
                    <p className="mt-1 text-xs text-indigo-300 sm:text-sm">{role}</p>
                  </div>
                  {linkedin && (
                    <a href={linkedin} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`} className="text-slate-400 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 max-h-24 overflow-hidden text-sm leading-6 text-slate-400">{bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.02] py-16">
        <div className="section-shell">
          <p className="text-center text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Trusted partners & collaborators</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {['NEXORA', 'VERTEX', 'ORBITAL', 'NORTHSTAR', 'LUMIO', 'AVENA'].map((name) => (
              <div key={name} className="grid h-12 place-items-center rounded-lg border border-white/10 text-xs font-bold tracking-widest text-slate-500">{name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-28">
        <span className="eyebrow">The journey</span>
        <h2 className="font-display text-3xl text-white sm:text-5xl">Milestones with momentum.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            ['2026', 'Kodnexus Founded'],
            ['2026', 'Company Launch'],
            ['Today', 'Building AI Products, Automation & Technology Solutions'],
          ].map(([year, text]) => (
            <div key={year} className="border-l border-indigo-400/50 pl-5">
              <b className="font-display text-2xl text-indigo-300">{year}</b>
              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[.03] p-7">
            <Quote className="h-6 w-6 text-indigo-300" />
            <p className="mt-5 font-display text-lg leading-8 text-slate-200">"A genuinely thoughtful partner with an uncommon ability to make new technology useful."</p>
            <p className="mt-5 text-sm text-slate-400">- Client partner</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[.03] p-7">
            <Quote className="h-6 w-6 text-cyan" />
            <p className="mt-5 font-display text-lg leading-8 text-slate-200">"The learning was practical, engaging and immediately confidence-building."</p>
            <p className="mt-5 text-sm text-slate-400">- Kodnexus student</p>
          </article>
        </div>
      </section>
    </main>
  )
}
