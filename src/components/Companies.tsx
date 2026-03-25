import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Cpu, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function FlagES() {
  return (
    <svg viewBox="0 0 20 14" className="w-5 h-3.5 shrink-0 rounded-sm overflow-hidden shadow-sm" aria-label="España">
      <rect width="20" height="14" fill="#c60b1e" />
      <rect y="3.5" width="20" height="7" fill="#ffc400" />
    </svg>
  )
}

function FlagBR() {
  return (
    <svg viewBox="0 0 20 14" className="w-5 h-3.5 shrink-0 rounded-sm overflow-hidden shadow-sm" aria-label="Brasil">
      <rect width="20" height="14" fill="#009c3b" />
      <polygon points="10,1.5 19,7 10,12.5 1,7" fill="#fedf00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
    </svg>
  )
}

export function Companies() {
  const { t } = useLanguage()
  const { companies } = t
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const cards = [
    {
      id: 'savilcon',
      name: 'Grupo Savilcon',
      Flag: FlagES,
      icon: Globe,
      color: 'bg-primary',
      text: 'text-white',
      tag: companies.savilcon.tag,
      origin: companies.savilcon.origin,
      description: companies.savilcon.description,
      highlights: companies.savilcon.highlights,
      link: 'https://www.savilcon.com' as string | null,
      linkLabel: companies.savilcon.linkLabel as string | null,
    },
    {
      id: 'authomathika',
      name: 'Authomathika',
      Flag: FlagBR,
      icon: Cpu,
      color: 'bg-white border border-gray-100',
      text: 'text-primary',
      tag: companies.authomathika.tag,
      origin: companies.authomathika.origin,
      description: companies.authomathika.description,
      highlights: companies.authomathika.highlights,
      link: 'https://authomathika.doublex.ai/',
      linkLabel: companies.authomathika.linkLabel,
    },
  ]

  return (
    <section id="empresas" ref={ref} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                {companies.label}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-bold text-slate-text leading-none tracking-tight"
            >
              {companies.heading.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-base text-slate-muted leading-relaxed"
          >
            {companies.description}
          </motion.p>
        </div>

        {/* Company cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {cards.map(({ id, name, origin, Flag, icon: Icon, color, text, tag, description, highlights, link, linkLabel }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className={`relative ${color} p-8 lg:p-10 overflow-hidden group flex flex-col`}
            >
              {/* Decorative corner */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${
                  id === 'savilcon' ? 'bg-primary-dark/30' : 'bg-gray-50'
                } -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none`}
              />

              {/* Tag */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-8 self-start ${
                  id === 'savilcon' ? 'bg-white/15 text-white/80' : 'bg-primary/10 text-primary'
                }`}
              >
                <Icon size={12} />
                {tag}
              </div>

              <h3 className={`font-display text-4xl font-bold ${text} tracking-tight mb-1`}>
                {name}
              </h3>

              <div className="flex items-center gap-2 mb-6">
                <Flag />
                <p
                  className={`font-body text-sm font-medium ${
                    id === 'savilcon' ? 'text-white/60' : 'text-slate-muted'
                  }`}
                >
                  {origin}
                </p>
              </div>

              <p
                className={`font-body text-sm leading-relaxed mb-8 ${
                  id === 'savilcon' ? 'text-white/80' : 'text-slate-muted'
                }`}
              >
                {description}
              </p>

              <ul className="flex flex-col gap-2 flex-1">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        id === 'savilcon' ? 'bg-white/60' : 'bg-primary'
                      }`}
                    />
                    <span
                      className={`font-body text-sm ${
                        id === 'savilcon' ? 'text-white/80' : 'text-slate-muted'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {link && linkLabel && (
                <div className={`mt-8 pt-6 border-t ${id === 'savilcon' ? 'border-white/20' : 'border-gray-100'}`}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link ${id === 'savilcon' ? 'text-white/70 hover:text-white' : 'text-primary hover:text-primary-dark'}`}
                  >
                    {linkLabel}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div className="flex-1 h-px bg-gray-200" />
          <span className="font-body text-sm text-slate-muted px-4">
            {companies.bridge}{' '}
            <strong className="text-primary font-semibold">SAPY América Latina</strong>
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>
      </div>
    </section>
  )
}
