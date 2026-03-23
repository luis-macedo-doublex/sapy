import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, MapPin, RefreshCw } from 'lucide-react'

const ITEMS = [
  {
    icon: Users,
    title: 'Time Multidisciplinar',
    text: 'Engenheiros de controle, elétrica, software e processo trabalhando de forma integrada em cada projeto.',
  },
  {
    icon: MapPin,
    title: 'Presença Local',
    text: 'Atendimento com profissionais locais que conhecem a cultura, normas e realidade do seu negócio.',
  },
  {
    icon: Award,
    title: 'Padrão Internacional',
    text: 'Metodologias e processos alinhados às melhores práticas europeias e certificações internacionais.',
  },
  {
    icon: RefreshCw,
    title: 'Ciclo Completo',
    text: 'Da concepção ao suporte pós-operação — garantia de continuidade e evolução do seu sistema.',
  },
]

export function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="diferenciais" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          {/* Left column: visual block */}
          <div className="relative">
            {/* Background shape */}
            <div className="absolute inset-0 -left-6 -top-6 border border-primary/10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative bg-primary p-10 lg:p-14"
            >
              <div className="font-display text-8xl lg:text-9xl font-bold text-white/10 leading-none mb-6 select-none">
                POR<br />QUÊ
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                ESCOLHER
                <br />
                A SAPY?
              </h2>
              <p className="font-body text-sm text-white/70 leading-relaxed mt-6 max-w-xs">
                Porque entregamos mais do que automação — entregamos resultado industrial com
                suporte real, do primeiro ao último dia de operação.
              </p>

              {/* Decorative line */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-white/30" />
                <span className="font-body text-xs text-white/50 tracking-widest uppercase">
                  Nossos Diferenciais
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right column: differential items */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Diferenciais
              </span>
            </motion.div>

            <div className="flex flex-col gap-0 divide-y divide-gray-100">
              {ITEMS.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                  className="py-7 flex items-start gap-5 group hover:bg-gray-50/80 -mx-4 px-4 transition-colors rounded"
                >
                  <div className="p-2.5 bg-primary/8 group-hover:bg-primary/12 transition-colors shrink-0 mt-0.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-text tracking-tight mb-1">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-slate-muted leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
