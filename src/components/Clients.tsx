import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

type Client = { name: string; sector: string; flag: string; country: string }

const clients: Client[] = [
  { name: 'Vale Mosaic', sector: 'Fertilizantes', flag: '🇧🇷', country: 'Brasil' },
  { name: 'ADM', sector: 'Processamento de Soja', flag: '🇧🇷', country: 'Brasil' },
  { name: 'Adimax', sector: 'Alimentação Animal', flag: '🇧🇷', country: 'Brasil' },
  { name: 'GS Inima', sector: 'Saneamento', flag: '🇧🇷', country: 'Brasil' },
  { name: 'UFV 455MW', sector: 'Energia Solar', flag: '🇧🇷', country: 'Brasil' },
  { name: 'SENAI', sector: 'Educação Industrial', flag: '🇧🇷', country: 'Brasil' },
  { name: 'Biocom', sector: 'Sucroenergético', flag: '🇦🇴', country: 'Angola' },
  { name: 'CADASA', sector: 'Usina de Açúcar', flag: '🇵🇦', country: 'Panamá' },
  { name: 'Ingenio Alianza', sector: 'Sucroenergético', flag: '🇲🇽', country: 'México' },
  { name: 'MATSA', sector: 'Mineração', flag: '🇪🇸', country: 'Espanha' },
  { name: 'Zabeel Mall', sector: 'Infraestrutura', flag: '🇦🇪', country: 'Emirados Árabes' },
  { name: 'Projeto ZEP', sector: 'Energia', flag: '🇧🇷', country: 'Brasil' },
]

const presenceCountries = [
  { flag: '🇧🇷', name: 'Brasil' },
  { flag: '🇦🇴', name: 'Angola' },
  { flag: '🇵🇦', name: 'Panamá' },
  { flag: '🇲🇽', name: 'México' },
  { flag: '🇪🇸', name: 'Espanha' },
  { flag: '🇵🇾', name: 'Paraguai' },
  { flag: '🇺🇾', name: 'Uruguai' },
  { flag: '🇦🇪', name: 'Emirados Árabes' },
]

export function Clients() {
  const { t } = useLanguage()
  const { clients: ct } = t
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="clientes" ref={ref} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {ct.label}
            </span>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-bold text-slate-text leading-none tracking-tight"
            >
              {ct.headingLine1}
              <br />
              <span className="outline-primary">{ct.headingLine2}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-body text-base text-slate-muted leading-relaxed"
            >
              {ct.description}
            </motion.p>
          </div>
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="bg-white border border-gray-100 hover:border-primary/20 p-4 transition-colors duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl leading-none">{client.flag}</span>
                <span className="font-body text-xs text-slate-muted">{client.country}</span>
              </div>
              <div className="font-display text-sm font-bold text-slate-text leading-tight mb-1">
                {client.name}
              </div>
              <div className="font-body text-xs text-slate-muted">{client.sector}</div>
            </motion.div>
          ))}
        </div>

        {/* Geographic presence strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-primary/40" />
            <span className="font-body text-xs font-semibold tracking-[0.15em] text-slate-muted uppercase">
              {ct.presenceLabel}
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            {presenceCountries.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5">
                <span className="text-base leading-none">{c.flag}</span>
                <span className="font-body text-xs text-slate-muted">{c.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
