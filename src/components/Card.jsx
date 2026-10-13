import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, as: Tag = 'article' }) {
  const classes = `rounded-2xl border border-slate-200 bg-white shadow-sm text-slate-800 dark:border-slate-800 dark:bg-[#0c1222] dark:text-white dark:shadow-card ${className}`
  return hover ? <motion.article whileHover={{ y: -6 }} transition={{ duration: .22 }} className={`${classes} hover:border-indigo-400/40`}>{children}</motion.article> : <Tag className={classes}>{children}</Tag>
}
