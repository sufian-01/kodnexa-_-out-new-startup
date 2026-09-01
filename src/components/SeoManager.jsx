import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { openOpportunities } from '../data/opportunities'

const SITE_URL = 'https://kodnexus.com'
const SITE_NAME = 'kodnexus'
const MD_MOZAMMIL_ID = `${SITE_URL}/about#md-mozammil`
const MD_MOZAMMIL_LINKEDIN = 'https://www.linkedin.com/in/mmozammil/'

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  email: 'info@kodnexus.com',
  telephone: '+919135738848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jaitpur, khadda colony',
    addressLocality: 'New Delhi',
    postalCode: '110044',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/kodnexusofficial/',
    'https://www.instagram.com/kodnexus?igsh=MWdjamVvcWxvd2R1cw==',
    'https://wa.me/919135738848',
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Mohammad Sufian',
      jobTitle: 'Co-Founder & Chief Technology Officer (CTO)',
      url: 'https://www.linkedin.com/in/mohammad-sufian-08077a2b8',
    },
    { '@id': MD_MOZAMMIL_ID },
    {
      '@type': 'Person',
      name: 'Habiba Shahid',
      jobTitle: 'Co-Founder & Chief Operating Officer (COO)',
      url: 'https://www.linkedin.com/in/habiba-shahid-5ab717325/',
    },
  ],
}

const mdMozammil = {
  '@type': 'Person',
  '@id': MD_MOZAMMIL_ID,
  name: 'Md Mozammil',
  jobTitle: 'Founder & Chief Executive Officer (CEO)',
  url: `${SITE_URL}/about`,
  sameAs: [MD_MOZAMMIL_LINKEDIN],
  worksFor: { '@id': `${SITE_URL}/#organization` },
}

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: 'Kodnexus AI Solutions',
  url: `${SITE_URL}/`,
  description: 'AI solutions, business automation, software development and practical technology learning from kodnexus in New Delhi, India.',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

const professionalService = {
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#professional-service`,
  name: 'kodnexus AI Solutions and Software Development',
  url: `${SITE_URL}/services`,
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
  areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'City', name: 'New Delhi' }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'kodnexus services',
    itemListElement: ['AI Solutions', 'Software Development', 'Automation', 'Hackathons', 'Training', 'Placement Support'].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
}

const pages = {
  '/': {
    title: 'AI Solutions, Automation & Software Development | kodnexus',
    description: 'kodnexus builds AI solutions, business automation, AI software and practical learning experiences for ambitious teams in India and beyond.',
    path: '/',
  },
  '/about': {
    title: 'About kodnexus | AI Solutions, Software & Automation Team',
    description: 'Meet the kodnexus leadership team building practical AI solutions, AI automation, software products and learning experiences from New Delhi, India.',
    path: '/about',
  },
  '/services': {
    title: 'Services - AI Solutions, Software Development and Automation | kodnexus',
    description: 'Explore kodnexus AI solutions, AI agents, RAG chatbot development, business automation, software and SaaS development, training and placement support.',
    path: '/services',
  },
  '/hackathon': {
    title: 'AI Hackathons - kodnexus Labs',
    description: 'Discover kodnexus AI hackathons and build days for students, professionals and teams to prototype practical AI software and automation ideas.',
    path: '/hackathon',
  },
  '/opportunities': {
    title: 'Opportunities and Internships - kodnexus',
    description: 'Explore kodnexus internships, training programs and open opportunities for students, freshers and builders.',
    path: '/opportunities',
  },
  '/contact': {
    title: 'Contact kodnexus - Start a Conversation',
    description: 'Contact kodnexus in New Delhi for AI solutions, AI automation, AI software development, workflow automation, SaaS development and technology partnerships.',
    path: '/contact',
  },
}

function canonicalFor(path) {
  return `${SITE_URL}${path === '/' ? '/' : path}`
}

function setMeta(attribute, key, content) {
  if (!content) return
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function setStructuredData(page) {
  const url = canonicalFor(page.path)
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      mdMozammil,
      website,
      professionalService,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }

  let script = document.getElementById('structured-data')
  if (!script) {
    script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

function getPage(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (pages[path]) return pages[path]

  const opportunityMatch = path.match(/^\/opportunities\/([^/]+)$/)
  if (opportunityMatch) {
    const role = openOpportunities.find((item) => item.slug === opportunityMatch[1])
    if (role) {
      return {
        title: `${role.title} - kodnexus Opportunities`,
        description: role.summary,
        path,
      }
    }
  }

  return pages['/']
}

export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = getPage(pathname)
    const canonical = canonicalFor(page.path)

    document.title = page.title
    document.documentElement.lang = 'en'
    setCanonical(canonical)
    setMeta('name', 'description', page.description)
    setMeta('name', 'robots', 'index, follow')
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setStructuredData(page)
  }, [pathname])

  return null
}
