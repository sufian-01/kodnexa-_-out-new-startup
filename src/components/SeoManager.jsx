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
  url: `${SITE_URL}/`,
  publisher: { '@id': `${SITE_URL}/#organization` },
}

const pages = {
  '/': {
    title: 'kodnexus - Intelligence, in motion.',
    description: 'kodnexus builds AI solutions, automation and learning experiences for ambitious teams.',
    path: '/',
  },
  '/about': {
    title: 'About kodnexus - Leadership, Mission and Vision',
    description: 'Learn about kodnexus, its mission, vision, story and leadership team building AI solutions, software products and learning experiences.',
    path: '/about',
  },
  '/services': {
    title: 'Services - AI Solutions, Software Development and Automation | kodnexus',
    description: 'Explore kodnexus services including AI solutions, software development, automation, hackathons, training and placement support.',
    path: '/services',
  },
  '/hackathon': {
    title: 'AI Hackathons - kodnexus Labs',
    description: 'Discover kodnexus AI hackathons, build days, mentors, judges and practical prototype-building experiences for curious builders.',
    path: '/hackathon',
  },
  '/opportunities': {
    title: 'Opportunities and Internships - kodnexus',
    description: 'Explore kodnexus internships, training programs and open opportunities for students, freshers and builders.',
    path: '/opportunities',
  },
  '/contact': {
    title: 'Contact kodnexus - Start a Conversation',
    description: 'Contact kodnexus for AI solutions, software development, automation, hackathons, training and technology partnerships.',
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
