import { Component } from 'react'

const fallback = 'Sorry, the Kodnexus AI Assistant could not load right now. Please contact our team at +91 9135738848 or info@kodnexus.com.'

export default class ChatbotErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Chatbot error:', error)
  }

  render() {
    if (this.state.hasError) return <div role="status" className="fixed bottom-6 right-6 z-[90] max-w-xs rounded-2xl border border-white/10 bg-panel p-4 text-sm leading-6 text-slate-300 shadow-card">{fallback}</div>
    return this.props.children
  }
}
