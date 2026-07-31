const email = 'info@kodnexus.com'
const phone = '+91 9135738848'
const address = 'Jaitpur, khadda colony, New Delhi 110044'

const founderResponse = `Kodnexus was founded by Mohammad Sufian (AI Engineer) and Md Mozammil (Software Engineer).

Together they are building AI-powered products, automation systems, enterprise software solutions and technology-focused learning experiences.`

const sufianBio = `Mohammad Sufian is an AI Engineer passionate about Generative AI, Agentic AI, intelligent automation and modern AI solutions. He specializes in building scalable AI products, AI agents and automation systems that solve real-world business problems. His vision is to make advanced AI practical, accessible and impactful for startups, educational institutions and enterprises.`

const mozammilBio = `Md Mozammil is a Software Engineer specializing in scalable web applications, full-stack development and modern software architecture. He focuses on developing reliable digital products with clean engineering practices while transforming innovative ideas into production-ready software solutions.`

const greeting = `Hello! 👋

Welcome to Kodnexus.

I'm your virtual assistant.

I can help you with:
• Company Information
• AI Services
• Web Development
• Automation
• Founders
• Hackathons
• Internships
• Contact Details
• Meeting Booking

How can I help you today?`

const responses = [
  { terms: ['mohammad sufian', 'sufian'], text: sufianBio },
  { terms: ['md mozammil', 'mozammil'], text: mozammilBio },
  { terms: ['founder', 'founders', 'co-founder', 'owner', 'ceo', 'team'], text: founderResponse },
  { terms: ['service', 'services', 'ai development', 'software development', 'web development', 'website', 'automation', 'python', 'machine learning', 'llm', 'generative ai', 'chatbot'], text: `Kodnexus services:
• AI development and intelligent products
• Software and web development
• Automation systems and AI agents
• Python, machine learning and Generative AI solutions
• Technology training and workshops` },
  { terms: ['hackathon', 'hackathons', 'training', 'workshop'], text: 'Kodnexus Hackathons are high-energy build experiences where students and teams collaborate, prototype practical ideas and ship working AI solutions. We also offer hands-on training and workshops for every experience level.' },
  { terms: ['internship', 'internships', 'career', 'careers'], text: 'Kodnexus offers technology-focused learning and internship opportunities for emerging builders. Contact us with your profile and area of interest to learn about current openings.' },
  { terms: ['project', 'projects', 'portfolio', 'technology'], text: 'Kodnexus builds AI-powered products, automation systems, enterprise software solutions and modern web applications designed for real-world impact.' },
  { terms: ['contact', 'email', 'phone', 'location', 'located', 'address', 'google map', 'map', 'book meeting', 'meeting', 'call'], text: `Contact Kodnexus:

Email: ${email}
Phone: ${phone}
Address: ${address}
Location: ${address}
Google Map: Visit our Contact page
Book Meeting: Visit our Contact page or email us to schedule a meeting.` },
  { terms: ['company', 'about', 'vision', 'mission', 'kodnexus'], text: 'Kodnexus makes advanced AI practical, accessible and impactful for startups, educational institutions and enterprises through intelligent products, automation systems and modern software solutions.' },
  { terms: ['pricing', 'price', 'cost', 'quote'], text: `Pricing depends on the scope of your requirements. Please contact us at ${email} and we will help you with the right option.` },
]

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ').trim()
const matches = (message, terms) => {
  const words = message.split(' ')
  return terms.some((term) => {
    const normalizedTerm = normalize(term)
    if (normalizedTerm.includes(' ')) return message.includes(normalizedTerm)
    return words.some((word) => word === normalizedTerm || word.startsWith(normalizedTerm))
  })
}

export function sendMessage(message) {
  const normalizedMessage = normalize(message)
  let text

  if (matches(normalizedMessage, ['thank', 'thanks', 'great', 'awesome'])) {
    text = `You're most welcome! 😊

Thank you for visiting Kodnexus.

If you need any further assistance, feel free to ask anytime.

Have a wonderful day! 🚀`
  } else if (matches(normalizedMessage, ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
    text = greeting
  } else {
    text = responses.find(({ terms }) => matches(normalizedMessage, terms))?.text || `I'm sorry, I couldn't find that information yet.

Please contact us at:

${email}

or visit our Contact page for more assistance.`
  }

  return { role: 'assistant', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
}
