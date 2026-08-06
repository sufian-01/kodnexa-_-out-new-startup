import { motion } from 'framer-motion'
import { Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Award, BarChart3, BookOpen, Briefcase, CalendarDays, CheckCircle2, ClipboardList, Clock, Cloud, Code2, Cpu, FileText, Github, GraduationCap, Handshake, Layers, Mail, MapPin, Megaphone, MessageCircle, Palette, PenTool, Rocket, Search, Send, Share2, Sparkles, Target, Triangle, Users } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Faq from '../components/Faq'
import { openOpportunities } from '../data/opportunities'

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }
const Reveal = ({ children, className = '' }) => <motion.div variants={rise} transition={{ duration: .6, ease: 'easeOut' }} className={className}>{children}</motion.div>
const Section = ({ children, className = '' }) => <motion.section className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={{ visible: { transition: { staggerChildren: .08 } } }}>{children}</motion.section>
const applicationFormUrl = 'https://forms.gle/LMh2B5M6RGX5R7KN6'

const aiResponsibilities = [
  ['Build responsive React interfaces', Code2],
  ['Develop reusable frontend components', Layers],
  ['Integrate REST APIs', Cloud],
  ['Work with AI APIs & automation tools', Cpu],
  ['Fix bugs and improve application performance', Rocket],
  ['Collaborate using Git & GitHub', Github],
  ['Deploy applications on Vercel', Triangle],
  ['Research new AI technologies', Sparkles],
  ['Write technical documentation', FileText],
  ['Participate in code reviews', CheckCircle2],
]

const requiredSkills = ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Git', 'GitHub', 'Basic Python', 'REST APIs', 'Problem Solving']
const bonusSkills = ['FastAPI', 'Firebase', 'LangChain', 'LangGraph', 'OpenAI API', 'Gemini API', 'Docker', 'Tailwind CSS']
const technologies = [
  ['React', Code2],
  ['JavaScript', Code2],
  ['Python', Code2],
  ['FastAPI', Cloud],
  ['GitHub', Github],
  ['Vercel', Triangle],
  ['Firebase', Cloud],
  ['OpenAI', Cpu],
  ['Gemini', Sparkles],
  ['LangChain', Layers],
  ['LangGraph', Layers],
  ['REST APIs', Cloud],
]
const eligibility = [
  ['B.Tech / BCA / MCA / Computer Science Students', GraduationCap],
  ['Freshers are welcome', Users],
  ['Strong learning mindset', BookOpen],
  ['Able to dedicate 10-15 hours/week', Clock],
  ['Passion for AI & Software Development', Sparkles],
]
const details = [
  ['Mode', 'Remote'],
  ['Duration', '2-3 Months'],
  ['Internship Type', 'Unpaid'],
  ['Working Hours', '10-15 Hours / Week'],
  ['Certificate', 'Yes'],
  ['PPO', 'Performance-Based'],
  ['Joining', 'Immediate'],
]
const outcomes = [
  ['Internship Certificate', Award],
  ['Performance-Based Letter of Recommendation', FileText],
  ['Live AI Projects', Sparkles],
  ['Portfolio-worthy Work', Briefcase],
  ['AI Tools Exposure', Cpu],
  ['Mentorship', Users],
  ['Performance-Based PPO Opportunity', Rocket],
  ['Remote Work Experience', MapPin],
]
const journey = [
  ['Application', Briefcase],
  ['Resume Review', FileText],
  ['Technical Interview', Code2],
  ['Selection', CheckCircle2],
  ['Project Allocation', Layers],
  ['Internship Starts', Rocket],
  ['Certificate + PPO Opportunity', Award],
]
const faqs = [
  ['Is this internship remote?', 'Yes. This internship is fully remote, so you can contribute from anywhere while staying connected with the team online.'],
  ['Is this internship paid?', 'This is an unpaid internship with a performance-based PPO opportunity.'],
  ['Can beginners apply?', 'Yes. Students, freshers and beginners with strong fundamentals and a serious learning mindset can apply.'],
  ['Will I receive a certificate?', 'Yes. Selected interns who complete the internship requirements will receive an internship certificate.'],
  ['Do I need prior experience?', 'Prior experience is helpful but not mandatory. You should be comfortable learning, building and improving through real project work.'],
]

const businessWork = [
  ['Lead Generation', 'Research potential clients and opportunities.', Target],
  ['LinkedIn Outreach', 'Connect with businesses and professionals.', Users],
  ['Cold Emailing', 'Write and send personalized outreach emails.', Mail],
  ['Client Follow-up', 'Maintain communication with interested leads.', MessageCircle],
  ['CRM Management', 'Organize and update business pipelines.', ClipboardList],
  ['Meeting Scheduling', 'Coordinate discovery meetings.', CalendarDays],
  ['Proposal Sharing', 'Prepare and send business proposals.', Send],
  ['Partnership Research', 'Identify sponsorship and collaboration opportunities.', Handshake],
]
const businessResponsibilities = ['Lead Generation', 'LinkedIn Outreach', 'Cold Emailing', 'Client Follow-up', 'CRM Updates', 'Meeting Scheduling', 'Proposal Sharing', 'Sponsor Outreach (Hackathons)', 'Partnership Research', 'Business Operations Support', 'Weekly Progress Reporting']
const businessSkills = ['Business Development', 'Lead Generation', 'CRM Management', 'Client Communication', 'Business Operations', 'Partnership Building', 'Sales Process', 'Networking']
const businessEligibility = [
  ['Students (1st-4th Year)', GraduationCap],
  ['Freshers Welcome', Users],
  ['Good Communication Skills', MessageCircle],
  ['Confident Personality', Sparkles],
  ['Basic Excel Knowledge', ClipboardList],
  ['Learning Mindset', BookOpen],
  ['Self-Motivated', Rocket],
  ['Ready to Learn', CheckCircle2],
  ['Must have Laptop & Internet', Cloud],
  ['Able to dedicate 10-15 Hours/Week', Clock],
]
const businessDetails = [
  ['Mode', 'Remote (Work From Home)'],
  ['Duration', '2-3 Months'],
  ['Hours', '10-15 Hours / Week'],
  ['Internship Type', 'Unpaid'],
  ['PPO', 'Performance-Based PPO'],
  ['Certificate', 'Internship Certificate'],
  ['Mentorship', 'Founder Mentorship'],
]
const businessOutcomes = [
  ['Internship Certificate', Award],
  ['Founder Mentorship', Users],
  ['Real Business Experience', Briefcase],
  ['Networking Opportunities', Handshake],
  ['Business Development Skills', Target],
  ['Live Startup Operations', ClipboardList],
  ['Letter of Recommendation (Performance Based)', FileText],
  ['Performance-Based PPO Opportunity', Rocket],
]
const businessJourney = [
  ['Application', Briefcase],
  ['Resume Review', FileText],
  ['Interview', MessageCircle],
  ['Selection', CheckCircle2],
  ['Business Training', BookOpen],
  ['Project Allocation', Layers],
  ['Certificate + PPO', Award],
]
const businessFaqs = [
  ['Is this internship remote?', 'Yes, this is a completely remote internship.'],
  ['Is this internship paid?', 'Currently it is unpaid with a Performance-Based PPO opportunity.'],
  ['Who can apply?', 'Students and freshers interested in Business Development & Operations.'],
  ['Will I receive a certificate?', 'Yes.'],
  ['Can this become a paid opportunity?', 'Yes, outstanding performers may receive a Paid Internship or PPO.'],
]

const marketingWork = [
  ['Content Planning', 'Plan engaging content for LinkedIn and Instagram.', PenTool],
  ['Social Media Management', 'Manage and schedule social media posts.', Share2],
  ['Canva Design', 'Create professional marketing creatives.', Palette],
  ['SEO Research', 'Perform keyword and competitor research.', Search],
  ['Growth Marketing', 'Experiment with new strategies to increase reach.', BarChart3],
  ['Website Growth', 'Suggest ideas to improve website traffic.', Rocket],
  ['Competitor Analysis', 'Study competitors and identify opportunities.', Target],
  ['Outreach Campaigns', 'Support LinkedIn and email outreach.', Send],
]
const marketingResponsibilities = ['Content Planning', 'Canva / Figma Post Design', 'LinkedIn & Instagram Management', 'Social Media Scheduling', 'Hashtag Research', 'Basic SEO Research', 'Website Growth Ideas', 'Competitor Analysis', 'LinkedIn Outreach', 'Email Outreach', 'Company Directory Listings', 'Weekly Growth Reports']
const marketingSkills = ['Digital Marketing', 'Social Media Marketing', 'Brand Building', 'Content Strategy', 'Canva Design', 'SEO Basics', 'Growth Marketing', 'Analytics', 'AI Marketing Tools']
const marketingEligibility = [
  ['Students (1st-4th Year) or Freshers', GraduationCap],
  ['BBA / BCA / B.Tech / B.Com / Any Graduate', BookOpen],
  ['Basic Canva Knowledge', Palette],
  ['Basic Social Media Understanding', Share2],
  ['Learning Mindset', Sparkles],
  ['Self-Motivated', Rocket],
  ['Ready to Learn', CheckCircle2],
  ['Must have Laptop & Internet', Cloud],
  ['Able to dedicate 10-15 Hours/Week', Clock],
]
const marketingDetails = [
  ['Mode', 'Remote (Work From Home)'],
  ['Duration', '2-3 Months'],
  ['Hours', '10-15 Hours / Week'],
  ['Internship Type', 'Unpaid'],
  ['PPO', 'Performance-Based PPO'],
  ['Certificate', 'Internship Certificate'],
  ['Mentorship', 'Founder Mentorship'],
]
const marketingTools = [
  ['Canva', Palette],
  ['Figma', PenTool],
  ['LinkedIn', Users],
  ['Instagram', Share2],
  ['ChatGPT', Cpu],
  ['Canva AI', Sparkles],
  ['Google Docs', FileText],
  ['Google Sheets', ClipboardList],
  ['Google Analytics', BarChart3],
  ['Google Search Console', Search],
]
const marketingOutcomes = [
  ['Internship Certificate', Award],
  ['Founder Mentorship', Users],
  ['Real Marketing Experience', Megaphone],
  ['Live Campaign Exposure', BarChart3],
  ['Portfolio Building', Briefcase],
  ['Letter of Recommendation (Performance Based)', FileText],
  ['Networking Opportunities', Handshake],
  ['Performance-Based PPO', Rocket],
]
const marketingJourney = [
  ['Application', Briefcase],
  ['Resume Review', FileText],
  ['Interview', MessageCircle],
  ['Selection', CheckCircle2],
  ['Marketing Training', BookOpen],
  ['Campaign Allocation', Megaphone],
  ['Certificate + PPO', Award],
]
const marketingFaqs = [
  ['Is this internship remote?', 'Yes, this internship is completely remote.'],
  ['Is this internship paid?', 'Currently it is unpaid with a Performance-Based PPO opportunity.'],
  ['Who can apply?', 'Students and freshers interested in Digital Marketing & Growth.'],
  ['Will I receive a certificate?', 'Yes.'],
  ['Can beginners apply?', "Yes. Basic knowledge is enough if you're eager to learn."],
  ['Can this become a paid opportunity?', 'Yes. Outstanding performers may receive a Paid Internship or PPO.'],
]

function Pill({ children }) {
  return <span className="rounded-lg bg-indigo/10 px-3 py-1.5 text-sm text-indigo-100">{children}</span>
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </div>
  )
}

function AISoftwareInternshipPage({ role }) {
  return (
    <main id="main-content" className="overflow-hidden">
      <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_25%_10%,rgba(99,102,241,.24),transparent_42%),radial-gradient(ellipse_at_85%_55%,rgba(6,182,212,.13),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="section-shell">
          <a href="/opportunities" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to opportunities</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.42fr]">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
              <Reveal><span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> {role.status} opportunity</span></Reveal>
              <Reveal><h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">AI / Software Development Intern</h1></Reveal>
              <Reveal><p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">Work on real-world AI applications, modern web platforms, automation systems, APIs, and scalable software while building practical technical skills.</p></Reveal>
              <Reveal className="mt-7 flex flex-wrap gap-2">{['React', 'Python', 'FastAPI', 'AI'].map(skill => <Pill key={skill}>{skill}</Pill>)}</Reveal>
            </motion.div>
            <Reveal>
              <Card hover={false} className="p-6">
                <h2 className="font-display text-xl text-white">Role Snapshot</h2>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan" />Remote</p>
                  <p className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-cyan" />2-3 Months</p>
                  <p className="flex items-center gap-3"><Briefcase className="h-5 w-5 text-cyan" />Unpaid Internship</p>
                  <p className="flex items-center gap-3"><Rocket className="h-5 w-5 text-cyan" />Performance-Based PPO</p>
                  <p className="flex items-center gap-3"><Users className="h-5 w-5 text-cyan" />Students & Freshers Welcome</p>
                </div>
                <Button href={applicationFormUrl} className="mt-7 w-full">Apply Now</Button>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <Section className="section-shell pb-16 sm:pb-20">
        <Reveal>
          <Card hover={false} className="p-7 sm:p-9">
            <SectionHeading eyebrow="About this Internship" title="About this Internship" />
            <div className="space-y-5 leading-8 text-slate-400">
              <p>At Kodnexus, you'll work on real AI and software development projects instead of only practice assignments. You'll collaborate on modern web applications, AI integrations, automation systems, APIs, and scalable products while learning industry best practices.</p>
              <p>Whether you're passionate about React, AI, backend development, or automation, this internship provides practical experience, mentorship, and the opportunity to contribute to meaningful projects that strengthen your portfolio.</p>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Responsibilities" title="What You'll Work On" /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {aiResponsibilities.map(([item, Icon]) => <Reveal key={item}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{item}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card hover={false} className="p-7">
              <SectionHeading eyebrow="Required Skills" title="Required Skills" />
              <div className="flex flex-wrap gap-3">{requiredSkills.map(skill => <Pill key={skill}>{skill}</Pill>)}</div>
            </Card>
          </Reveal>
          <Reveal>
            <Card hover={false} className="p-7">
              <SectionHeading eyebrow="Bonus Skills" title="Bonus Skills" />
              <div className="flex flex-wrap gap-3">{bonusSkills.map(skill => <Pill key={skill}>{skill}</Pill>)}</div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Technology Stack" title="Technologies You'll Work With" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map(([name, Icon]) => <Reveal key={name}><Card className="p-5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-display text-lg text-white">{name}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Eligibility" title="Who Can Apply?" /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {eligibility.map(([item, Icon]) => <Reveal key={item}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{item}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Internship Details" title="Internship Details" /></Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {details.map(([label, value]) => <Reveal key={label}><div className="bg-panel px-6 py-6"><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">{label}</p><p className="mt-3 font-display text-xl text-white">{value}</p></div></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="What You'll Get" title="What You'll Get" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(([item, Icon]) => <Reveal key={item}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{item}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Internship Journey" title="Internship Journey" /></Reveal>
        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-7">
          {journey.map(([label, Icon], index) => <Reveal key={label}><div className="relative text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-indigo-400/25 bg-indigo/10 text-indigo-300"><Icon className="h-6 w-6" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{label}</h3>{index < journey.length - 1 && <span className="mt-3 hidden text-indigo-300 xl:block">-&gt;</span>}</div></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1fr] lg:items-start">
          <Reveal><div><span className="eyebrow">FAQ</span><h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Common Questions</h2></div></Reveal>
          <Reveal><Faq items={faqs} /></Reveal>
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo/30 via-violet/20 to-cyan/10 p-7 text-center shadow-glow sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">Ready to Build Real AI Products?</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Join Kodnexus and gain practical experience by working on AI, automation, and modern software development projects.</p>
              <Button href={applicationFormUrl} className="mt-8">Apply Now</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  )
}

function BusinessDevelopmentInternshipPage({ role }) {
  return (
    <main id="main-content" className="overflow-hidden">
      <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_25%_10%,rgba(99,102,241,.24),transparent_42%),radial-gradient(ellipse_at_85%_55%,rgba(6,182,212,.13),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="section-shell">
          <a href="/opportunities" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to opportunities</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.42fr]">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
              <Reveal><span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> {role.status} opportunity</span></Reveal>
              <Reveal><h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">Business Development & Operations Intern</h1></Reveal>
              <Reveal><p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">Help grow Kodnexus by finding new opportunities, building partnerships, generating leads, and supporting real business operations while learning practical startup execution.</p></Reveal>
              <Reveal className="mt-7 flex flex-wrap gap-2">{['Business Development', 'Lead Generation', 'Operations', 'Partnerships'].map(skill => <Pill key={skill}>{skill}</Pill>)}</Reveal>
            </motion.div>
            <Reveal>
              <Card hover={false} className="p-6">
                <h2 className="font-display text-xl text-white">Role Snapshot</h2>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan" />Remote</p>
                  <p className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-cyan" />2-3 Months</p>
                  <p className="flex items-center gap-3"><Briefcase className="h-5 w-5 text-cyan" />Unpaid Internship</p>
                  <p className="flex items-center gap-3"><Rocket className="h-5 w-5 text-cyan" />Performance-Based PPO</p>
                  <p className="flex items-center gap-3"><Users className="h-5 w-5 text-cyan" />Students & Freshers Welcome</p>
                </div>
                <Button href={applicationFormUrl} className="mt-7 w-full">Apply Now</Button>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <Section className="section-shell pb-16 sm:pb-20">
        <Reveal>
          <Card hover={false} className="p-7 sm:p-9">
            <SectionHeading eyebrow="About this Internship" title="About this Internship" />
            <div className="space-y-5 leading-8 text-slate-400">
              <p>At Kodnexus, you'll work directly on real business development and operational activities that help the company grow.</p>
              <p>This internship provides practical exposure to lead generation, outreach, partnerships, client communication, CRM management, and business execution. You'll collaborate with the founders, learn how business decisions are made, and contribute to real company growth initiatives.</p>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Business Execution" title="What You'll Work On" /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessWork.map(([title, copy, Icon]) => <Reveal key={title}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 font-display text-lg text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Responsibilities" title="Responsibilities" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessResponsibilities.map(item => <Reveal key={item}><Card className="h-full p-5"><p className="flex gap-3 text-sm font-semibold leading-6 text-white"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />{item}</p></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal>
          <Card hover={false} className="p-7">
            <SectionHeading eyebrow="Skills You'll Learn" title="Skills You'll Learn" />
            <div className="flex flex-wrap gap-3">{businessSkills.map(skill => <Pill key={skill}>{skill}</Pill>)}</div>
          </Card>
        </Reveal>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Eligibility" title="Who Can Apply?" /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {businessEligibility.map(([item, Icon]) => <Reveal key={item}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{item}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Internship Details" title="Internship Details" /></Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {businessDetails.map(([label, value]) => <Reveal key={label}><div className="bg-panel px-6 py-6"><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">{label}</p><p className="mt-3 font-display text-xl text-white">{value}</p></div></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="What You'll Get" title="What You'll Get" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessOutcomes.map(([item, Icon]) => <Reveal key={item}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{item}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Internship Journey" title="Internship Journey" /></Reveal>
        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-7">
          {businessJourney.map(([label, Icon], index) => <Reveal key={label}><div className="relative text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-indigo-400/25 bg-indigo/10 text-indigo-300"><Icon className="h-6 w-6" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{label}</h3>{index < businessJourney.length - 1 && <span className="mt-3 hidden text-indigo-300 xl:block">-&gt;</span>}</div></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1fr] lg:items-start">
          <Reveal><div><span className="eyebrow">FAQ</span><h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Common Questions</h2></div></Reveal>
          <Reveal><Faq items={businessFaqs} /></Reveal>
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo/30 via-violet/20 to-cyan/10 p-7 text-center shadow-glow sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">Ready to Build Your Business Career?</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Join Kodnexus and gain real-world experience in business development, partnerships, operations, and company growth.</p>
              <Button href={applicationFormUrl} className="mt-8">Apply Now</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  )
}

function MarketingInternshipPage({ role }) {
  return (
    <main id="main-content" className="overflow-hidden">
      <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_25%_10%,rgba(99,102,241,.24),transparent_42%),radial-gradient(ellipse_at_85%_55%,rgba(6,182,212,.13),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="section-shell">
          <a href="/opportunities" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to opportunities</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.42fr]">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
              <Reveal><span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> {role.status} opportunity</span></Reveal>
              <Reveal><h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">Digital Marketing & Growth Intern</h1></Reveal>
              <Reveal><p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">Create engaging content, grow the Kodnexus brand, manage social media, and learn modern digital marketing while working on real projects.</p></Reveal>
              <Reveal className="mt-7 flex flex-wrap gap-2">{['Digital Marketing', 'Social Media', 'SEO', 'Growth'].map(skill => <Pill key={skill}>{skill}</Pill>)}</Reveal>
            </motion.div>
            <Reveal>
              <Card hover={false} className="p-6">
                <h2 className="font-display text-xl text-white">Role Snapshot</h2>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan" />Remote</p>
                  <p className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-cyan" />2-3 Months</p>
                  <p className="flex items-center gap-3"><Briefcase className="h-5 w-5 text-cyan" />Unpaid Internship</p>
                  <p className="flex items-center gap-3"><Rocket className="h-5 w-5 text-cyan" />Performance-Based PPO</p>
                  <p className="flex items-center gap-3"><Users className="h-5 w-5 text-cyan" />Students & Freshers Welcome</p>
                </div>
                <Button href={applicationFormUrl} className="mt-7 w-full">Apply Now</Button>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <Section className="section-shell pb-16 sm:pb-20">
        <Reveal>
          <Card hover={false} className="p-7 sm:p-9">
            <SectionHeading eyebrow="About this Internship" title="About this Internship" />
            <div className="space-y-5 leading-8 text-slate-400">
              <p>At Kodnexus, you'll work on real digital marketing campaigns, content creation, social media growth, and brand building while learning practical marketing strategies.</p>
              <p>You'll help improve Kodnexus' online presence through content planning, Canva design, social media management, SEO research, growth experiments, and outreach campaigns while building a strong marketing portfolio.</p>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Marketing Execution" title="What You'll Work On" /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {marketingWork.map(([title, copy, Icon]) => <Reveal key={title}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 font-display text-lg text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Responsibilities" title="Responsibilities" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketingResponsibilities.map(item => <Reveal key={item}><Card className="h-full p-5"><p className="flex gap-3 text-sm font-semibold leading-6 text-white"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />{item}</p></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal>
          <Card hover={false} className="p-7">
            <SectionHeading eyebrow="Skills You'll Learn" title="Skills You'll Learn" />
            <div className="flex flex-wrap gap-3">{marketingSkills.map(skill => <Pill key={skill}>{skill}</Pill>)}</div>
          </Card>
        </Reveal>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Eligibility" title="Who Can Apply?" /></Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {marketingEligibility.map(([item, Icon]) => <Reveal key={item}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{item}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Internship Details" title="Internship Details" /></Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {marketingDetails.map(([label, value]) => <Reveal key={label}><div className="bg-panel px-6 py-6"><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">{label}</p><p className="mt-3 font-display text-xl text-white">{value}</p></div></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Tools" title="Tools You'll Work With" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {marketingTools.map(([name, Icon]) => <Reveal key={name}><Card className="p-5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-display text-lg text-white">{name}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="What You'll Get" title="What You'll Get" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketingOutcomes.map(([item, Icon]) => <Reveal key={item}><Card className="h-full p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/15 text-indigo-300"><Icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{item}</h3></Card></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <Reveal><SectionHeading eyebrow="Internship Journey" title="Internship Journey" /></Reveal>
        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-7">
          {marketingJourney.map(([label, Icon], index) => <Reveal key={label}><div className="relative text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-indigo-400/25 bg-indigo/10 text-indigo-300"><Icon className="h-6 w-6" /></span><h3 className="mt-4 text-sm font-semibold leading-6 text-white">{label}</h3>{index < marketingJourney.length - 1 && <span className="mt-3 hidden text-indigo-300 xl:block">-&gt;</span>}</div></Reveal>)}
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1fr] lg:items-start">
          <Reveal><div><span className="eyebrow">FAQ</span><h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Common Questions</h2></div></Reveal>
          <Reveal><Faq items={marketingFaqs} /></Reveal>
        </div>
      </Section>

      <Section className="section-shell py-16 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo/30 via-violet/20 to-cyan/10 p-7 text-center shadow-glow sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">Ready to Build Your Marketing Career?</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Join Kodnexus and gain practical experience in digital marketing, content creation, branding, SEO, and growth while working on real projects.</p>
              <Button href={applicationFormUrl} className="mt-8">Apply Now</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  )
}

function GenericOpportunityPage({ role }) {
  return (
    <main id="main-content" className="overflow-hidden">
      <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_25%_10%,rgba(99,102,241,.24),transparent_42%),radial-gradient(ellipse_at_85%_55%,rgba(6,182,212,.13),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="section-shell">
          <a href="/opportunities" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to opportunities</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.42fr]">
            <div>
              <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> {role.status} opportunity</span>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{role.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{role.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">{role.skills.map(skill => <Pill key={skill}>{skill}</Pill>)}</div>
            </div>
            <Card hover={false} className="p-6">
              <h2 className="font-display text-xl text-white">Role Snapshot</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan" />{role.location}</p>
                <p className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-cyan" />{role.duration}</p>
                <p className="flex items-center gap-3"><Briefcase className="h-5 w-5 text-cyan" />{role.compensation}</p>
              </div>
              <Button href="/contact" className="mt-7 w-full">Join Talent Pool</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-28">
        <div className="grid gap-6 lg:grid-cols-[.7fr_1fr]">
          <Card hover={false} className="p-7">
            <span className="eyebrow">What you'll do</span>
            <h2 className="font-display text-3xl text-white">Build with a real team.</h2>
            <p className="mt-4 leading-7 text-slate-400">This dedicated role page is ready for the future Google Form workflow, but applications are intentionally not linked directly yet.</p>
          </Card>
          <Card hover={false} className="p-7">
            <h2 className="font-display text-2xl text-white">Responsibilities</h2>
            <div className="mt-6 space-y-4">
              {role.responsibilities.map(item => <p key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />{item}</p>)}
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default function OpportunityDetail() {
  const { slug } = useParams()
  const role = openOpportunities.find(item => item.slug === slug)

  if (!role) return <Navigate to="/opportunities" replace />
  if (role.slug === 'ai-software-development-intern') return <AISoftwareInternshipPage role={role} />
  if (role.slug === 'digital-marketing-growth-intern') return <MarketingInternshipPage role={role} />
  if (role.slug === 'business-development-intern') return <BusinessDevelopmentInternshipPage role={role} />

  return <GenericOpportunityPage role={role} />
}
