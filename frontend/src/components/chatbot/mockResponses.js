import { BACKEND_PLACEHOLDER } from './constants'
export function sendMessage() { // TODO: replace with FastAPI POST /chat when the LangGraph backend is connected.
  return { role: 'assistant', text: BACKEND_PLACEHOLDER, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
}
