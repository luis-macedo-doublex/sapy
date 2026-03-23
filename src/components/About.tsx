import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PILLARS = [
  {
    number: '01',
    title: 'Expertise Técnica',
    text: 'Equipe multidisciplinar com décadas de atuação em projetos de automação industrial complexos.',
  },
  {
    number: '02',
    title: 'Presença Global',
    text: 'Joint venture ibero-brasileira com capilaridade na América Latina e conexão direta com o mercado europeu.',
  },
  {
    number: '03',
    title: 'Inovação Contínua',
    text: 'Metodologias ágeis e tecnologias emergentes aplicadas à realidade industrial de cada cliente.',
  },
]

export function About() {
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
            Sobre a SAPY
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
              UMA NOVA
              <br />
              <span className="outline-primary">REFERÊNCIA</span>
              <br />
              EM AUTOMAÇÃO
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-base text-slate-muted leading-relaxed mt-8 max-w-md"
            >
              A SAPY América Latina nasce da fusão entre a experiência consolidada do{' '}
              <strong className="text-slate-text font-semibold">Grupo Savilcon</strong> — referência
              ibérica em engenharia — e o dinamismo tecnológico da{' '}
              <strong className="text-slate-text font-semibold">Authomathika</strong>, empresa
              brasileira de automação industrial.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="font-body text-base text-slate-muted leading-relaxed mt-4 max-w-md"
            >
              Juntas, criam uma plataforma de alta performance para atender às demandas mais
              exigentes do mercado industrial latino-americano.
            </motion.p>

            {/* Highlight metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 pl-6 border-l-2 border-primary"
            >
              <div className="font-display text-5xl font-bold text-primary">100%</div>
              <div className="font-body text-sm text-slate-muted mt-1">
                foco em resultados reais e mensuráveis para o cliente
              </div>
            </motion.div>
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-0 divide-y divide-gray-100">
            {PILLARS.map(({ number, title, text }, i) => (
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
