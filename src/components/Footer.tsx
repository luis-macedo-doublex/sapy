import logoSrc from '../images/sapyamericalatina_logo.jpeg'
import { useLanguage } from '../contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const { footer } = t

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <div className="bg-white rounded p-1.5 inline-block mb-5">
              <img src={logoSrc} alt="SAPY América Latina" className="h-10 w-auto" />
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              {footer.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-body text-xs text-white/50">{footer.available}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-5">
              {footer.navLabel}
            </p>
            <ul className="flex flex-col gap-3">
              {footer.links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-5">
              {footer.contactLabel}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contato@sapyamericalatina.com"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  contato@sapyamericalatina.com
                </a>
              </li>
              <li>
                <span className="font-body text-sm text-white/70">{footer.location1}</span>
              </li>
              <li>
                <span className="font-body text-sm text-white/70">{footer.location2}</span>
              </li>
              <li>
                <span className="font-body text-sm text-white/70">{footer.location3}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} SAPY América Latina. {footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-xs text-white/40">Grupo Savilcon · Authomathika</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
