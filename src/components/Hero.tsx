import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const STATS = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '200+', label: 'Projetos Entregues' },
  { value: '3', label: 'Países de Atuação' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary dot-grid-blue">
      {/* Geometric accent shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45vw] h-full bg-primary-dark/40 clip-diagonal" />
        <div className="absolute bottom-0 left-0 w-72 h-72 border border-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/3 right-12 w-40 h-40 border border-white/10 rounded-full" />
        {/* Horizontal rule accent */}
        <div className="absolute top-1/2 left-0 w-1/3 h-px bg-white/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-white/60" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              Engenharia de Alta Performance
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-white tracking-tight mb-4"
          >
            SOLUÇÕES
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none outline-white tracking-tight mb-4"
          >
            EM AUTOMAÇÃO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-white tracking-tight"
          >
            INDUSTRIAL
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-body text-base lg:text-lg text-white/70 mt-8 max-w-xl leading-relaxed"
          >
            Unindo expertise ibérica e inovação brasileira para transformar processos industriais
            com tecnologia de ponta.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-200"
            >
              Conheça Nossos Serviços
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              Fale com um Especialista
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 pt-10 border-t border-white/20 grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl"
        >
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {value}
              </div>
              <div className="font-body text-xs text-white/60 mt-1 leading-tight tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
