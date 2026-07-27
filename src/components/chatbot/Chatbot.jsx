import { useEffect, useState } from 'react'
import ChatWindow from './ChatWindow'
import FloatingButton from './FloatingButton'
import { QUICK_ACTIONS } from './constants'
import { sendMessage } from './mockResponses'
import { handleQuickAction } from './quickActionHandlers'
export default function Chatbot() { const [open,setOpen]=useState(false); const [hasOpened,setHasOpened]=useState(false); const [messages,setMessages]=useState([]); const [actions,setActions]=useState(QUICK_ACTIONS); useEffect(()=>{const close=e=>e.key==='Escape'&&setOpen(false); addEventListener('keydown',close); return()=>removeEventListener('keydown',close)},[]); const send=text=>setMessages(items=>[...items,{id:Date.now(),role:'user',text,time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})},{id:Date.now()+1,...sendMessage(text)}]); const action=text=>{setActions(items=>items.filter(item=>item!==text));setOpen(false);handleQuickAction(text)}; return <div className="fixed bottom-[18px] right-[18px] z-[90] sm:bottom-6 sm:right-6"><ChatWindow open={open} onClose={()=>setOpen(false)} onMinimize={()=>setOpen(false)} messages={messages} actions={actions} onAction={action} onSend={send} />{!open&&<FloatingButton onClick={()=>{setHasOpened(true);setOpen(true)}} hasUnread={!hasOpened} />}</div> }
