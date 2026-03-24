import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const { about } = t
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" ref={ref} className="py-24 lg:py-32 bg-white line-grid-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {about.label}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: bold statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-none text-slate-text tracking-tight"
            >
              {about.heading.split('\n').map((line, i) =>
                line === about.headingOutline ? (
                  <span key={i}>
                    <span className="outline-primary">{line}</span>
                    <br />
                  </span>
                ) : (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                )
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-base text-slate-muted leading-relaxed mt-8 max-w-md"
            >
              {about.p1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="font-body text-base text-slate-muted leading-relaxed mt-4 max-w-md"
            >
              {about.p2}
            </motion.p>

          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-0 divide-y divide-gray-100">
            {about.pillars.map(({ number, title, text }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="py-7 flex gap-6 group hover:bg-gray-50/80 -mx-4 px-4 transition-colors rounded"
              >
                <span className="font-display text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors leading-none mt-1 shrink-0">
                  {number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-text tracking-tight mb-2">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-slate-muted leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
