import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export function Credentials() {
  const { t } = useLanguage()
  const { credentials } = t
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="credenciais" ref={ref} className="py-24 lg:py-32 bg-primary dot-grid-blue">
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
              <div className="w-8 h-px bg-white/50" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
                {credentials.label}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight"
            >
              {credentials.headingLine1}
              <br />
              <span className="outline-white">{credentials.headingLine2}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-base text-white/70 leading-relaxed"
          >
            {credentials.description}
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-16"
        >
          {credentials.stats.map(({ value, label }) => (
            <div key={label} className="bg-primary px-8 py-8 text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {value}
              </div>
              <div className="font-body text-xs text-white/60 mt-2 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {credentials.certs.map(({ code, name, description }, i) => (
            <motion.div
              key={code}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
              className="bg-primary p-8 group hover:bg-primary-dark transition-colors duration-300"
            >
              {/* Icon + code */}
              <div className="flex items-start justify-between mb-5">
                <div className="p-2.5 bg-white/10 group-hover:bg-white/15 transition-colors">
                  <ShieldCheck size={18} className="text-white" />
                </div>
                <span className="font-display text-xs font-bold tracking-widest text-white/20 uppercase">
                  {code}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white tracking-tight mb-3">
                {name}
              </h3>
              <p className="font-body text-sm text-white/65 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-12 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-200"
          >
            {credentials.ctaLabel}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
