import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../i18n/translations'
import type { Language } from '../i18n/translations'

type T = typeof translations['pt']

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: T
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const META: Record<Language, { title: string; description: string; lang: string }> = {
  pt: {
    title: 'SAPY | Engenharia & EPC Internacional',
    description:
      'SAPY América Latina — Soluções completas de automação industrial e engenharia EPC. Joint venture entre Grupo Savilcon (Espanha) e Authomathika (Brasil).',
    lang: 'pt-BR',
  },
  es: {
    title: 'SAPY | Ingeniería & EPC Internacional',
    description:
      'SAPY América Latina — Soluciones completas de automatización industrial e ingeniería EPC. Joint venture entre Grupo Savilcon (España) y Authomathika (Brasil).',
    lang: 'es',
  },
  en: {
    title: 'SAPY | International Engineering & EPC',
    description:
      'SAPY América Latina — Complete industrial automation and EPC engineering solutions. Joint venture between Grupo Savilcon (Spain) and Authomathika (Brazil).',
    lang: 'en',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('sapy-lang', lang)
    const m = META[lang]
    document.documentElement.lang = m.lang
    document.title = m.title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', m.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', m.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', m.description)
  }

  useEffect(() => {
    const saved = localStorage.getItem('sapy-lang') as Language | null
    if (saved && ['pt', 'es', 'en'].includes(saved)) {
      setLanguage(saved)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
