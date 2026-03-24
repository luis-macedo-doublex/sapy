import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Check } from 'lucide-react'
import logoSrc from '../images/Logo SAP.jpg'
import { useLanguage } from '../contexts/LanguageContext'
import type { Language } from '../i18n/translations'

const LANG_OPTIONS: { code: Language; flag: string; label: string; short: string }[] = [
  { code: 'pt', flag: '🇧🇷', label: 'Português', short: 'PT' },
  { code: 'es', flag: '🇪🇸', label: 'Español',   short: 'ES' },
  { code: 'en', flag: '🇺🇸', label: 'English',   short: 'EN' },
]

function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANG_OPTIONS.find((l) => l.code === language)!

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`
          flex items-center gap-2 px-3 py-1.5 rounded-sm
          font-body text-xs font-semibold tracking-widest uppercase
          transition-all duration-200 select-none outline-none
          ${scrolled
            ? 'text-slate-text hover:text-primary hover:bg-primary/5'
            : 'text-white/80 hover:text-white hover:bg-white/10'
          }
        `}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.short}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <ChevronDown size={12} strokeWidth={2.5} />
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="
              absolute right-0 top-full mt-2 w-40
              bg-white border border-gray-100
              shadow-[0_8px_24px_rgba(0,0,0,0.12)]
              overflow-hidden z-50
            "
          >
            {LANG_OPTIONS.map(({ code, flag, label }) => {
              const isActive = language === code
              return (
                <button
                  key={code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => { setLanguage(code); setOpen(false) }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3
                    font-body text-sm transition-colors duration-150
                    ${isActive
                      ? 'bg-primary/5 text-primary font-semibold'
                      : 'text-slate-text hover:bg-gray-50 font-normal'
                    }
                  `}
                >
                  <span className="text-lg leading-none shrink-0">{flag}</span>
                  <span className="flex-1 text-left">{label}</span>
                  {isActive && (
                    <Check size={13} strokeWidth={2.5} className="text-primary shrink-0" />
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t.navbar.about,    href: '#sobre'       },
    { label: t.navbar.sectors,  href: '#setores'     },
    { label: t.navbar.services, href: '#servicos'    },
    { label: t.navbar.cases,    href: '#projetos'    },
    { label: t.navbar.contact,  href: '#contato'     },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="bg-white rounded p-1 shadow-sm">
              <img src={logoSrc} alt="SAPY América Latina" className="h-10 w-auto" />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? 'text-slate-text hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}

            <LanguageSwitcher scrolled={scrolled} />

            <a
              href="#contato"
              className={`ml-2 px-5 py-2 text-sm font-semibold tracking-wide border transition-all duration-200 ${
                scrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              {t.navbar.cta}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-slate-text' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-medium text-slate-text hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}

              {/* Mobile language switcher */}
              <div className="pt-3 border-t border-gray-100">
                <p className="font-body text-xs text-slate-muted uppercase tracking-widest mb-3">
                  Idioma
                </p>
                <div className="flex gap-2">
                  {LANG_OPTIONS.map(({ code, flag, label }) => {
                    const isActive = language === code
                    return (
                      <button
                        key={code}
                        onClick={() => setLanguage(code)}
                        className={`
                          flex-1 flex flex-col items-center gap-1.5 py-3 border text-center
                          transition-all duration-200
                          ${isActive
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 text-slate-muted hover:border-primary/40 hover:text-primary'
                          }
                        `}
                      >
                        <span className="text-xl leading-none">{flag}</span>
                        <span className="font-body text-xs font-semibold tracking-widest uppercase">
                          {label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-2 text-sm font-semibold text-center border border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                {t.navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
