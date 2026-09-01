const knowledge = {
  contact: { email: 'info@kodnexus.com', phone: '+91 9135738848', address: 'Jaitpur, Khadda Colony, New Delhi 110044', website: 'https://www.kodnexus.com' },
  services: {
    ai: 'Kodnexus builds AI solutions that help businesses make technology more useful in day-to-day work. This can include intelligent assistants, AI automation, AI and RAG-based knowledge solutions, and custom AI-powered workflows. It is useful for teams that need faster access to information or smarter processes. For example, a business can use an AI assistant to answer questions from its internal knowledge base.',
    software: 'Kodnexus develops robust digital products around important business workflows, including custom software, full-stack web applications, SaaS platforms, and backend systems. This helps businesses replace disconnected or manual processes with software designed for their needs.',
    automation: 'Kodnexus builds connected automation systems that reduce repetitive manual work and help business workflows move faster. Depending on the requirement, this can include workflow automation, API integrations, customer communication automation, AI-powered processes, and internal tools.',
    hackathons: 'Kodnexus runs high-energy hackathons and build days that help teams turn ideas into working prototypes. These are useful for students, institutions, and organizations that want hands-on AI innovation experiences.',
    training: 'Kodnexus provides practical, confidence-building training programs for the AI-native workplace. They are designed for students, teams, and organizations looking to build useful technology skills through hands-on learning.',
    placement: 'Kodnexus offers placement support with career-ready guidance and industry preparation for emerging talent. It is intended to help learners build confidence, improve their readiness, and prepare for technology opportunities.',
  },
  products: {
    linkedin: 'LinkedIn AI Autopilot is a Coming Soon AI-powered content and growth automation product for maintaining a consistent professional LinkedIn presence. It is planned to support industry and topic research, post, caption and hashtag generation, AI visuals, content planning, scheduling, and performance-aware planning. It is designed for founders, professionals, startups, agencies, consultants, and businesses.',
    testvision: 'TestVision AI is a Coming Soon workflow-to-video automation product. It is planned to turn website and software workflows into professional demos, tutorials, and training videos through browser workflow automation, Playwright-based recording, step-by-step capture, AI narration, and voice/video synchronization.',
    whatsappflow: 'WhatsAppFlow is a Coming Soon WhatsApp business automation product for appointments, bookings, customer communication, and follow-ups. Planned capabilities include automated conversations, availability checks, confirmations, reminders, information collection, rescheduling or cancellation flows, and human handoff. It is relevant for clinics, restaurants, salons, consultants, coaching businesses, and other service businesses.',
    mailflow: 'MailFlow AI is a Coming Soon AI-assisted business email workflow. It is planned to support Excel or CSV upload, AI-assisted data formatting, HTML templates, personalization, bulk email workflows, business email integration, and delivery/status tracking. Sending capacity depends on the connected email provider and its applicable limits.',
    callpilot: 'CallPilot AI is a Coming Soon AI voice automation product for business calling workflows. Planned capabilities include outbound calls, lead qualification, follow-ups, appointment scheduling, reminders, customer information collection, CRM integration, call logs, and human handoff. Suitable third-party voice and communication infrastructure may be integrated depending on the final use case.',
  },
  projects: {
    doctors: "Doctor's The Family is a healthcare and service-booking website for home physiotherapy and rehabilitation in Delhi NCR. The project includes service pages, WhatsApp-based appointment booking, therapist team profiles, patient testimonials, and a blog. The website lists WordPress and Elementor as its stack.",
    grinspire: 'Grinspire Welfare Foundation is an NGO platform with a tiered membership system, donation flow, and volunteer application. The project includes membership applications, donation functionality, and contact or volunteer forms. The website lists React, Vite, and Tailwind CSS as its stack.',
    rag: 'RAG-Based AI Knowledge Assistant is an intelligent Retrieval-Augmented Generation project that lets users interact with business-specific documents and knowledge through natural language. It retrieves relevant context from a connected knowledge base before generating grounded, context-aware responses. Its listed capabilities include document ingestion, semantic retrieval, conversational question answering, source-aware responses, and scalable AI architecture.',
  },
}

const contactLine = `For detailed assistance, please email us at ${knowledge.contact.email} or contact us at ${knowledge.contact.phone}. Our team will get back to you within 24 hours.`
const greeting = 'Hello! 👋\n\nWelcome to kodnexus. I can help with company information, services, upcoming products, projects, hackathons, opportunities, and contact details. How can I help you today?'
const fallbackResponse = `I'm Kodnexus's AI Assistant, so I can mainly help with Kodnexus-related information.\n\nFor anything else, please contact our team at:\n📞 ${knowledge.contact.phone}\n📧 ${knowledge.contact.email}`
const processingErrorResponse = `Sorry, I couldn't process that message right now. Please contact the Kodnexus team directly at ${knowledge.contact.phone} or ${knowledge.contact.email}.`

const responses = [
  { terms: ['mohammad sufian', 'sufian'], text: 'Mohammad Sufian is the Co-Founder & Chief Technology Officer (CTO) at kodnexus. He leads the technology vision, software architecture, and engineering strategy, with a focus on AI automation, full-stack applications, SaaS platforms, and scalable backend systems.' },
  { terms: ['md mozammil', 'mozammil'], text: 'Md Mozammil is the Founder & Chief Executive Officer (CEO) of kodnexus. He leads the company vision, business strategy, client relationships, and strategic partnerships.' },
  { terms: ['habiba shahid', 'habiba'], text: 'Habiba Shahid is the Co-Founder & Chief Operating Officer (COO) at kodnexus. She oversees day-to-day operations, project coordination, client communication, and delivery management.' },
  { terms: ['cto', 'chief technology officer'], text: 'Mohammad Sufian is the Co-Founder & Chief Technology Officer (CTO) at kodnexus.' },
  { terms: ['ceo', 'chief executive officer'], text: 'Md Mozammil is the Founder & Chief Executive Officer (CEO) of kodnexus.' },
  { terms: ['coo', 'chief operating officer'], text: 'Habiba Shahid is the Co-Founder & Chief Operating Officer (COO) at kodnexus.' },
  { terms: ['founder', 'founders', 'founded', 'co-founder', 'leadership'], text: 'The kodnexus leadership team listed on the website is Md Mozammil, Founder & CEO; Mohammad Sufian, Co-Founder & CTO; and Habiba Shahid, Co-Founder & COO.' },
  { terms: ['linkedin ai autopilot', 'linkedin autopilot'], text: knowledge.products.linkedin },
  { terms: ['testvision', 'test vision'], text: knowledge.products.testvision },
  { terms: ['whatsappflow', 'whatsapp flow'], text: knowledge.products.whatsappflow },
  { terms: ['mailflow', 'mail flow'], text: knowledge.products.mailflow },
  { terms: ['callpilot', 'call pilot'], text: knowledge.products.callpilot },
  { terms: ['product available', 'products available', 'available products', 'launch date', 'when launch', 'product launch', 'early access', 'waitlist'], text: `Kodnexus products are currently marked as Coming Soon. No public launch dates or product pricing are listed. You can contact the team to express interest or ask about early access.\n\n${contactLine}` },
  { terms: ['product', 'products', 'saas'], text: 'Kodnexus is building five Coming Soon products: LinkedIn AI Autopilot, TestVision AI, WhatsAppFlow, MailFlow AI, and CallPilot AI. They cover LinkedIn content automation, workflow-to-video automation, WhatsApp business workflows, AI-assisted email workflows, and AI voice automation. No public launch dates or pricing are listed.' },
  { terms: ['rag chatbot', 'rag project', 'knowledge assistant', 'rag based'], text: knowledge.projects.rag },
  { terms: ["doctor's the family", 'doctors the family', 'physiotherapy project'], text: knowledge.projects.doctors },
  { terms: ['grinspire', 'welfare foundation'], text: knowledge.projects.grinspire },
  { terms: ['featured project', 'featured projects', 'case study', 'case studies', 'portfolio'], text: "The Featured Projects section includes Doctor's The Family, Grinspire Welfare Foundation, and RAG-Based AI Knowledge Assistant. Ask me about any of these projects for a concise overview." },
  { terms: ['ai solution', 'ai solutions', 'intelligent agent', 'intelligent agents', 'ai chatbot', 'chatbot', 'llm', 'generative ai'], text: `${knowledge.services.ai}\n\n${contactLine}` },
  { terms: ['software development', 'software', 'saas development', 'saas platform', 'digital solution'], text: `${knowledge.services.software}\n\n${contactLine}` },
  { terms: ['automation', 'workflow automation', 'automate'], text: `${knowledge.services.automation}\n\n${contactLine}` },
  { terms: ['web development', 'website development', 'web application', 'website'], text: `${knowledge.services.software}\n\n${contactLine}` },
  { terms: ['placement support', 'placement'], text: `${knowledge.services.placement}\n\n${contactLine}` },
  { terms: ['training', 'workshop', 'workshops'], text: `${knowledge.services.training}\n\n${contactLine}` },
  { terms: ['service', 'services', 'what do you do', 'specialize'], text: `Kodnexus currently offers AI Solutions, Software Development, Automation, Hackathons, Training, and Placement Support. The team builds practical technology solutions for businesses while also supporting students and institutions through hands-on learning and career preparation.\n\n${contactLine}` },
  { terms: ['upcoming hackathon', 'next hackathon', 'hackathons coming', 'hackathon date', 'hackathon'], text: `The website currently lists the kodnexus AI Hackathon 2026 as live for September 18, 2026 in Bengaluru. It also lists GenAI Buildathon and AI for Healthcare as upcoming, with details coming soon. Students, professionals, and curious builders are welcome; you can register through the Hackathon page. No prize information is currently listed.\n\n${contactLine}` },
  { terms: ['internship', 'internships', 'career', 'careers', 'opening', 'openings', 'opportunity', 'opportunities', 'business development', 'digital marketing'], text: `The website currently lists AI / Software Development Intern, Digital Marketing & Growth Intern, and Business Development Intern roles as closed. It also shows Java Instructor, Python Instructor, AI Automation Trainer, and Campus Ambassador as coming soon. I do not see a current open role listed; please check the Opportunities page or contact the team for the latest openings.\n\n${contactLine}` },
  { terms: ['pricing', 'price', 'cost', 'quote'], text: `The website does not list public pricing for the Coming Soon products. For services or early-access information, please contact the team with your requirements.\n\n${contactLine}` },
  { terms: ['where is kodnexus based', 'where are you based', 'where is kodnexus located', 'based'], text: `Kodnexus is listed at ${knowledge.contact.address}.\n\n${contactLine}` },
  { terms: ['contact', 'email', 'phone', 'location', 'located', 'address', 'google map', 'map', 'book meeting', 'meeting'], text: `Contact kodnexus:\n\nEmail: ${knowledge.contact.email}\nPhone: ${knowledge.contact.phone}\nAddress: ${knowledge.contact.address}\nWebsite: ${knowledge.contact.website}\n\nYou can book a meeting through the existing Contact page booking flow.\n\n${contactLine}` },
  { terms: ['vision', 'mission'], text: 'Kodnexus’s mission is to help organizations and students use technology with more confidence, creativity, and measurable purpose. Its vision is a world where opportunity expands because the tools to build are within reach of every curious mind.' },
  { terms: ['company', 'about', 'kodnexus'], text: 'Kodnexus is a technology company that builds AI solutions, software, automation, and practical learning experiences. It works with businesses, institutions, and emerging talent to turn technology into meaningful outcomes.' },
]

const normalize = (value) => String(value ?? '').toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ').trim()
const matches = (message, terms) => {
  const words = message.split(' ')
  return terms.some((term) => {
    const normalizedTerm = normalize(term)
    if (normalizedTerm.includes(' ')) return message.includes(normalizedTerm)
    return words.some((word) => word === normalizedTerm || word.startsWith(normalizedTerm))
  })
}

export function sendMessage(message) {
  try {
    const normalizedMessage = normalize(message)
    let text
    if (!normalizedMessage) text = fallbackResponse
    else if (matches(normalizedMessage, ['thank', 'thanks', 'great', 'awesome'])) text = 'You’re welcome! If you need anything else about kodnexus, I’m here to help.'
    else if (matches(normalizedMessage, ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'])) text = greeting
    else text = responses.find(({ terms }) => matches(normalizedMessage, terms))?.text || fallbackResponse
    return { role: 'assistant', text: typeof text === 'string' && text.trim() ? text : fallbackResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  } catch {
    return { role: 'assistant', text: processingErrorResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  }
}
