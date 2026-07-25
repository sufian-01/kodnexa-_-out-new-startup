import { images } from '../assets/images'

const imageForLabel = (label) => {
  if (label.includes('HERO')) return images.hero
  if (label.includes('HACKATHON')) return images.hackathon
  if (label.includes('FOUNDER') || label.includes('STORY')) return images.founder
  if (label.includes('MENTOR')) return images.mentor
  if (label.includes('JUDGE')) return images.judge
  if (label.includes('FLOWDESK')) return images.flowdesk
  if (label.includes('CAMPUS')) return images.campus
  if (label.includes('SIGNAL')) return images.signal
  if (label.includes('PROJECT')) return images.service
  return images.gallery
}

export default function ImagePlaceholder({ label, dimensions, className = '' }) {
  return <div role="img" aria-label={`${label} placeholder. ${dimensions}`} className={`relative grid min-h-[220px] place-items-center overflow-hidden rounded-2xl border border-dashed border-indigo-300/35 bg-[linear-gradient(135deg,rgba(99,102,241,.14),rgba(6,182,212,.05))] ${className}`}>
    <img src={imageForLabel(label)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
    <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-60" />
    <div className="relative text-center"><img src={images.icon} alt="" className="mx-auto h-12 w-12 rounded-xl object-contain" /><p className="mt-3 font-display text-sm font-semibold tracking-[.16em] text-white">{label}</p><p className="mt-1 text-xs text-slate-400">{dimensions}</p></div>
  </div>
}
