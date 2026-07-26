import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, as: Tag = 'article' }) {
  const classes = `rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.055] to-white/[.015] shadow-card ${className}`
  return hover ? <motion.article whileHover={{ y: -6 }} transition={{ duration: .22 }} className={`${classes} hover:border-indigo-400/40`}>{children}</motion.article> : <Tag className={classes}>{children}</Tag>
}
