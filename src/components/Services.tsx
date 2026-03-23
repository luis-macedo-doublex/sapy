import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Settings, Zap, Monitor, Wrench, BarChart2, Shield } from 'lucide-react'

const SERVICES = [
  {
    number: '01',
    icon: Settings,
    title: 'Automação Industrial',
    text: 'Projeto, programação e implantação de sistemas de controle para processos industriais contínuos e discretos.',
    tags: ['PLCs', 'DCS', 'SCADA'],
  },
  {
    number: '02',
    icon: Zap,
    title: 'Engenharia Elétrica',
    text: 'Dimensionamento, instalação e comissionamento de painéis elétricos, CCMs e infraestrutura de potência.',
    tags: ['Painéis', 'CCM', 'Comissionamento'],
  },
  {
    number: '03',
    icon: Monitor,
    title: 'Sistemas MES/SCADA',
    text: 'Desenvolvimento de interfaces HMI/SCADA e integração com sistemas MES para visibilidade total da produção.',
    tags: ['MES', 'HMI', 'OPC-UA'],
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Indústria 4.0 & IIoT',
    text: 'Conectividade de campo, coleta de dados em tempo real e dashboards analíticos para decisão orientada a dados.',
    tags: ['IIoT', 'Analytics', 'Edge'],
  },
  {
    number: '05',
    icon: Wrench,
    title: 'Manutenção & Suporte',
    text: 'Atendimento técnico especializado, manutenção preventiva e corretiva de sistemas automatizados.',
    tags: ['24/7', 'Preventiva', 'Corretiva'],
  },
  {
    number: '06',
    icon: Shield,
    title: 'Cybersegurança OT',
    text: 'Avaliação de vulnerabilidades, segmentação de redes industriais e implementação de políticas de segurança OT/ICS.',
    tags: ['OT Security', 'ICS', 'ISA-99'],
  },
]

export function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
                Nossos Serviços
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight"
            >
              O QUE
              <br />
              <span className="outline-white">ENTREGAMOS</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-base text-white/70 leading-relaxed"
          >
            Do projeto básico ao comissionamento, oferecemos soluções completas para cada fase do
            ciclo de vida dos seus ativos industriais.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {SERVICES.map(({ number, icon: Icon, title, text, tags }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="bg-primary p-8 group hover:bg-primary-dark transition-colors duration-300 cursor-default"
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

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-semibold tracking-wide border border-white/20 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
            Solicite uma Proposta
          </a>
        </motion.div>
      </div>
    </section>
  )
}
