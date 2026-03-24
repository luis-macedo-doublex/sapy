import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

import adm from '../images/empresas/adm.png'
import atvos from '../images/empresas/atvos.png'
import bunge from '../images/empresas/bunge.png'
import cooperbio from '../images/empresas/cooperbio.png'
import delta from '../images/empresas/delta.png'
import fenix from '../images/empresas/fenix.png'
import longping from '../images/empresas/longping.png'
import mosaic from '../images/empresas/mosaic.png'
import nutrien from '../images/empresas/nutrien.png'
import petrobras from '../images/empresas/petrobras.png'
import raizen from '../images/empresas/raizen.png'
import sada from '../images/empresas/sada.png'
import saomartinho from '../images/empresas/saomartinho.png'
import tereos from '../images/empresas/tereos.png'
import vale from '../images/empresas/vale.png'
import weg from '../images/empresas/weg.png'

const clientLogos = [
  { name: 'Vale', src: vale },
  { name: 'Mosaic', src: mosaic },
  { name: 'Nutrien', src: nutrien },
  { name: 'Petrobras', src: petrobras },
  { name: 'Raízen', src: raizen },
  { name: 'São Martinho', src: saomartinho },
  { name: 'Tereos', src: tereos },
  { name: 'WEG', src: weg },
  { name: 'Delta', src: delta },
  { name: 'Cooperbio', src: cooperbio },
  { name: 'Long Ping', src: longping },
  { name: 'Fênix', src: fenix },
  { name: 'SADA', src: sada },
  { name: 'ADM', src: adm },
  { name: 'Atvos', src: atvos },
  { name: 'Bunge', src: bunge },
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

        {/* Client logo carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mb-12 overflow-hidden marquee-pause"
        >
          {/* fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="marquee-track">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center bg-white border-r border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                style={{ width: '200px', padding: '28px 32px' }}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-14 w-full object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
