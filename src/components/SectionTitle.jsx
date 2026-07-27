import Badge from './Badge'

export default function SectionTitle({ badge, title, description, align = 'left', className = '' }) {
  return <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
    {badge && <Badge>{badge}</Badge>}<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{title}</h2>{description && <p className="mt-5 leading-7 text-slate-400">{description}</p>}
  </div>
}
