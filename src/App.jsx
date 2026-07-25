import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Hackathon = lazy(() => import('./pages/Hackathon'))

export default function App() {
  return <><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a><Navbar /><Suspense fallback={<main id="main-content" className="grid min-h-screen place-items-center"><span className="h-8 w-8 animate-spin rounded-full border-2 border-indigo border-t-transparent" /></main>}><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/hackathon" element={<Hackathon />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></Suspense><Footer /></>
}
