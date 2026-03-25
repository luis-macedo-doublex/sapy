import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

type FormData = {
  name: string
  email: string
  company: string
  message: string
}

export function Contact() {
  const { t } = useLanguage()
  const { contact } = t
  const { form } = contact
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000))
    console.log(data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contato" ref={ref} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {contact.label}
            </span>
            <div className="w-8 h-px bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-slate-text leading-none tracking-tight"
          >
            {contact.heading}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          {/* Left: info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-primary p-8 lg:p-10 flex flex-col justify-between dot-grid-blue"
          >
            <div>
              <h3 className="font-display text-3xl font-bold text-white tracking-tight mb-4">
                {contact.panelHeading.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h3>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-10">
                {contact.panelDesc}
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 shrink-0">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">
                      {contact.emailLabel}
                    </div>
                    <a
                      href="mailto:comercial@authomathika.com.br"
                      className="font-body text-sm text-white hover:text-white/80 transition-colors"
                    >
                      comercial@authomathika.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 shrink-0">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">
                      {contact.phoneLabel}
                    </div>
                    <a
                      href="tel:+5516999945002"
                      className="font-body text-sm text-white hover:text-white/80 transition-colors"
                    >
                      +55 (16) 99994-5002 / 99223-6031
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 shrink-0">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">
                      {contact.locationLabel}
                    </div>
                    <span className="font-body text-sm text-white">
                      {contact.location1}
                      <br />
                      <span className="text-white/60">{contact.location2}</span>
                      <br />
                      <span className="text-white/60">{contact.location3}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <a
                href="https://wa.me/5516999945002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-primary px-6 py-3 text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors w-full"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {contact.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={40} className="text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-slate-text mb-2">
                  {form.successTitle}
                </h3>
                <p className="font-body text-sm text-slate-muted">{form.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-semibold text-slate-text uppercase tracking-widest mb-2">
                      {form.nameLabel}
                    </label>
                    <input
                      {...register('name', { required: form.nameError })}
                      placeholder={form.namePlaceholder}
                      className={`w-full px-4 py-3 border font-body text-sm text-slate-text placeholder-slate-faint bg-white focus:outline-none focus:border-primary transition-colors ${
                        errors.name ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-body text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-body text-xs font-semibold text-slate-text uppercase tracking-widest mb-2">
                      {form.emailLabel}
                    </label>
                    <input
                      {...register('email', {
                        required: form.emailRequired,
                        pattern: { value: /^\S+@\S+$/i, message: form.emailInvalid },
                      })}
                      type="email"
                      placeholder={form.emailPlaceholder}
                      className={`w-full px-4 py-3 border font-body text-sm text-slate-text placeholder-slate-faint bg-white focus:outline-none focus:border-primary transition-colors ${
                        errors.email ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-body text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold text-slate-text uppercase tracking-widest mb-2">
                    {form.companyLabel}
                  </label>
                  <input
                    {...register('company')}
                    placeholder={form.companyPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 font-body text-sm text-slate-text placeholder-slate-faint bg-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold text-slate-text uppercase tracking-widest mb-2">
                    {form.messageLabel}
                  </label>
                  <textarea
                    {...register('message', { required: form.messageError })}
                    rows={5}
                    placeholder={form.messagePlaceholder}
                    className={`w-full px-4 py-3 border font-body text-sm text-slate-text placeholder-slate-faint bg-white focus:outline-none focus:border-primary transition-colors resize-none ${
                      errors.message ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-body text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 text-sm font-semibold tracking-wide hover:bg-primary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {form.sending}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {form.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
