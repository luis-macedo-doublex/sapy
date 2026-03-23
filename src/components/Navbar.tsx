import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoSrc from '../images/sapyamericalatina_logo.jpeg'
import { useLanguage } from '../contexts/LanguageContext'
import type { Language } from '../i18n/translations'

const LANG_OPTIONS: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t.navbar.about, href: '#sobre' },
    { label: t.navbar.companies, href: '#empresas' },
    { label: t.navbar.services, href: '#servicos' },
    { label: t.navbar.differentials, href: '#diferenciais' },
    { label: t.navbar.contact, href: '#contato' },
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

            {/* Language switcher */}
            <div
              className={`flex items-center gap-px text-xs font-semibold tracking-wider border ${
                scrolled ? 'border-gray-200' : 'border-white/30'
              }`}
            >
              {LANG_OPTIONS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-2.5 py-1.5 transition-colors duration-200 ${
                    language === code
                      ? scrolled
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary'
                      : scrolled
                      ? 'text-slate-muted hover:text-primary'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

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
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <span className="font-body text-xs text-slate-muted uppercase tracking-widest">
                  Idioma
                </span>
                <div className="flex items-center gap-px border border-gray-200 text-xs font-semibold">
                  {LANG_OPTIONS.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => setLanguage(code)}
                      className={`px-2.5 py-1.5 transition-colors ${
                        language === code
                          ? 'bg-primary text-white'
                          : 'text-slate-muted hover:text-primary'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
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
