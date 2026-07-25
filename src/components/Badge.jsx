export default function Badge({ children, className = '' }) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}
