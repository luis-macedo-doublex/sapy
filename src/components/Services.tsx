import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Settings, Zap, Monitor, Wrench, BarChart2, Shield, X, ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const ICONS = [Settings, Zap, Monitor, BarChart2, Wrench, Shield]

export function Services() {
  const { t } = useLanguage()
  const { services } = t
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeModal, setActiveModal] = useState<number | null>(null)

  const activeService = activeModal !== null ? services.items[activeModal] : null
  const ActiveIcon = activeModal !== null ? ICONS[activeModal] : null

  return (
    <section id="servicos" ref={ref} className="py-24 lg:py-32 bg-primary dot-grid-blue">
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
                {services.label}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight"
            >
              {services.headingLine1}
              <br />
              <span className="outline-white">{services.headingLine2}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-base text-white/70 leading-relaxed"
          >
            {services.description}
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.items.map(({ number, title, text, tags }, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="bg-primary p-8 group hover:bg-primary-dark transition-colors duration-300 cursor-pointer"
                onClick={() => setActiveModal(i)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2.5 bg-white/10 group-hover:bg-white/15 transition-colors">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="font-display text-5xl font-bold text-white/10 leading-none">
                    {number}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-3">
                  {title}
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed mb-6">{text}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-semibold tracking-wide border border-white/20 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* "Ver detalhes" hint */}
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors">
                  <ArrowRight size={14} />
                  <span className="font-body text-xs font-semibold tracking-wide">
                    {services.modal.ctaLabel === 'Solicitar Proposta'
                      ? 'Ver detalhes'
                      : services.modal.ctaLabel === 'Solicitar Propuesta'
                      ? 'Ver detalles'
                      : 'View details'}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-200"
          >
            {services.cta}
          </a>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeModal !== null && activeService && ActiveIcon && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-white z-50 overflow-y-auto shadow-2xl"
            >
              {/* Panel header */}
              <div className="sticky top-0 bg-primary px-8 py-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-white/15">
                    <ActiveIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-white/60 tracking-widest uppercase mb-1">
                      {activeService.number}
                    </p>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-white/60 hover:text-white transition-colors mt-1 shrink-0"
                  aria-label={services.modal.closeLabel}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Panel content */}
              <div className="px-8 py-8">
                {/* Description */}
                <p className="font-body text-base text-slate-muted leading-relaxed mb-8">
                  {activeService.text}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeService.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold tracking-wide border border-primary/25 text-primary bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Methodology */}
                <div className="mb-8">
                  <h4 className="font-display text-sm font-bold text-slate-text tracking-widest uppercase mb-3 flex items-center gap-2">
                    <div className="w-4 h-px bg-primary" />
                    {services.modal.methodologyLabel}
                  </h4>
                  <p className="font-body text-sm text-slate-muted leading-relaxed">
                    {activeService.detail.methodology}
                  </p>
                </div>

                {/* Scope */}
                <div className="mb-8">
                  <h4 className="font-display text-sm font-bold text-slate-text tracking-widest uppercase mb-4 flex items-center gap-2">
                    <div className="w-4 h-px bg-primary" />
                    {services.modal.scopeLabel}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {activeService.detail.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 p-0.5 bg-primary/10 rounded-sm">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="font-body text-sm text-slate-muted leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contato"
                  onClick={() => setActiveModal(null)}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary-dark transition-colors duration-200 w-full"
                >
                  {services.modal.ctaLabel}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
