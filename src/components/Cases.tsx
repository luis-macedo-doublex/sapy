import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

import imgValeMosaic from '../images/projetos/vale-mosaic.jpg'
import imgUfv from '../images/projetos/ufv-455mw.jpg'
import imgCitrusJuice from '../images/projetos/citrus-juice.jpg'
import imgBiocom from '../images/projetos/biocom.jpg'
import imgAdm from '../images/projetos/adm.jpg'
import imgGsInima from '../images/projetos/gs-inima.jpg'
import imgMatsa from '../images/projetos/matsa.jpg'
import imgCadasa from '../images/projetos/cadasa.jpg'

const caseImages: Record<string, string> = {
  'case-01': imgValeMosaic,
  'case-02': imgUfv,
  'case-03': imgCitrusJuice,
  'case-04': imgBiocom,
  'case-05': imgAdm,
  'case-06': imgGsInima,
  'case-07': imgMatsa,
  'case-08': imgCadasa,
}

const caseCountries: Record<string, { flag: string; name: string }> = {
  'case-01': { flag: '🇧🇷', name: 'Brasil' },
  'case-02': { flag: '🇧🇷', name: 'Brasil' },
  'case-03': { flag: '🇧🇷', name: 'Brasil' },
  'case-04': { flag: '🇦🇴', name: 'Angola' },
  'case-05': { flag: '🇧🇷', name: 'Brasil' },
  'case-06': { flag: '🇧🇷', name: 'Brasil' },
  'case-07': { flag: '🇪🇸', name: 'Espanha' },
  'case-08': { flag: '🇵🇦', name: 'Panamá' },
}

export function Cases() {
  const { t } = useLanguage()
  const { cases } = t
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedCase, setExpandedCase] = useState<string | null>(null)

  const sectorIds = ['all', ...Array.from(new Set(cases.items.map((c) => c.sectorId)))]

  const filtered =
    activeFilter === 'all'
      ? cases.items
      : cases.items.filter((c) => c.sectorId === activeFilter)

  const sectorLabels: Record<string, string> = Object.fromEntries(
    cases.items.map((c) => [c.sectorId, c.sector])
  )

  return (
    <section id="projetos" ref={ref} className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                {cases.label}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-bold text-slate-text leading-none tracking-tight"
            >
              {cases.headingLine1}
              <br />
              <span className="outline-primary">{cases.headingLine2}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-base text-slate-muted leading-relaxed"
          >
            {cases.description}
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {sectorIds.map((id) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wide border transition-all duration-200 ${
                activeFilter === id
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-200 text-slate-muted hover:border-primary/40 hover:text-primary'
              }`}
            >
              {id === 'all' ? cases.filterAll : sectorLabels[id]}
            </button>
          ))}
        </motion.div>

        {/* Cases */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => {
              const isExpanded = expandedCase === item.id
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-white border border-gray-100 hover:border-primary/20 transition-colors duration-300"
                >
                  {/* Card header — always visible */}
                  <div
                    className="cursor-pointer"
                    onClick={() => setExpandedCase(isExpanded ? null : item.id)}
                  >
                    <div className="flex items-stretch justify-between gap-0">
                      {/* Project photo */}
                      {caseImages[item.id] && (
                        <div className="hidden sm:block w-48 lg:w-64 shrink-0 overflow-hidden">
                          <img
                            src={caseImages[item.id]}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-6 lg:p-8">
                        {/* Sector badge + country + metric */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-2.5 py-1 text-xs font-semibold tracking-wide bg-primary/8 text-primary border border-primary/15">
                            {item.sector}
                          </span>
                          {caseCountries[item.id] && (
                            <span className="flex items-center gap-1.5 text-xs text-slate-muted">
                              <span className="text-base leading-none">{caseCountries[item.id].flag}</span>
                              {caseCountries[item.id].name}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-text tracking-tight mb-3">
                          {item.title}
                        </h3>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs font-medium border border-gray-200 text-slate-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expand toggle */}
                      <button className="shrink-0 p-4 text-slate-muted hover:text-primary transition-colors self-start mt-4">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-8 pt-0">
                          <div className="border-t border-gray-100 pt-6 grid md:grid-cols-3 gap-6">
                            {/* Challenge */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full" />
                                <span className="font-body text-xs font-semibold tracking-widest text-slate-muted uppercase">
                                  {cases.challengeLabel}
                                </span>
                              </div>
                              <p className="font-body text-sm text-slate-muted leading-relaxed">
                                {item.challenge}
                              </p>
                            </div>

                            {/* Solution */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-primary/60 rounded-full" />
                                <span className="font-body text-xs font-semibold tracking-widest text-slate-muted uppercase">
                                  {cases.solutionLabel}
                                </span>
                              </div>
                              <p className="font-body text-sm text-slate-muted leading-relaxed">
                                {item.solution}
                              </p>
                            </div>

                            {/* Result */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="font-body text-xs font-semibold tracking-widest text-slate-muted uppercase">
                                  {cases.resultLabel}
                                </span>
                              </div>
                              <p className="font-body text-sm text-slate-muted leading-relaxed">
                                {item.result}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 flex justify-end">
                            <a
                              href="#contato"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                            >
                              {cases.viewDetail}
                              <ArrowRight size={16} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Ver mais */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Ver mais projetos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
