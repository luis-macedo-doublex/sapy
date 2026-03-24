import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, FlaskConical, Package, Mountain, Shield, Truck } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const ICONS = [Zap, FlaskConical, Package, Mountain, Shield, Truck]

export function Sectors() {
  const { t } = useLanguage()
  const { sectors } = t
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="setores" ref={ref} className="py-24 lg:py-32 bg-white line-grid-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                {sectors.label}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-bold text-slate-text leading-none tracking-tight"
            >
              {sectors.headingLine1}
              <br />
              <span className="outline-primary">{sectors.headingLine2}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-base text-slate-muted leading-relaxed"
          >
            {sectors.description}
          </motion.p>
        </div>

        {/* Sectors grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.items.map(({ id, name, description, services, highlight }, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group border border-gray-100 hover:border-primary/30 p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden"
              >
                {/* Subtle bg accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/3 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32" />

                <div className="relative">
                  {/* Icon */}
                  <div className="p-3 bg-primary/8 group-hover:bg-primary/12 transition-colors inline-flex mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-text tracking-tight mb-3">
                    {name}
                  </h3>
                  <p className="font-body text-sm text-slate-muted leading-relaxed mb-5">
                    {description}
                  </p>

                  {/* Highlight badge */}
                  <div className="mb-5 inline-flex">
                    <span className="px-2.5 py-1 text-xs font-semibold tracking-wide bg-primary/8 text-primary border border-primary/15">
                      {highlight}
                    </span>
                  </div>

                  {/* Related services */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-body text-xs text-slate-muted/70 uppercase tracking-wider mb-2">
                      Serviços relacionados
                    </p>
                    <ul className="flex flex-col gap-1">
                      {services.map((svc) => (
                        <li key={svc} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary/40 rounded-full shrink-0" />
                          <span className="font-body text-xs text-slate-muted">{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
