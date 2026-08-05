import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiSend, FiCheckCircle } from 'react-icons/fi'
import SectionTitle from '../Shared/SectionTitle'
import { fadeLeft, fadeRight, viewportOnce } from '../Shared/AnimationVariants'
import './Contact.css'

const INIT = { name: '', email: '', phone: '', company: '', message: '' }

export default function Contact() {
  const [form,    setForm]    = useState(INIT)
  const [errors,  setErrors]  = useState({})
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  const CONTACT_INFO = [
    { icon: FiMapPin, label: t('contact.headquarters'), value: t('contact.hqValue')      },
    { icon: FiMapPin, label: t('contact.factory'),      value: t('contact.factoryValue') },
    { icon: FiPhone,  label: t('contact.phone'),        value: t('contact.phoneValue')   },
    { icon: FiMail,   label: t('contact.email'),        value: t('contact.emailValue')   },
    { icon: FiGlobe,  label: t('contact.website'),      value: t('contact.websiteValue') },
  ]

  function validate(form) {
    const errs = {}
    if (!form.name.trim())    errs.name    = t('contact.nameRequired')
    if (!form.email.trim())   errs.email   = t('contact.emailRequired')
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = t('contact.emailInvalid')
    if (!form.message.trim()) errs.message = t('contact.messageRequired')
    return errs
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)

    // No form backend is connected yet — open a pre-filled email as an interim,
    // honest fallback so submissions aren't silently discarded.
    const subject = encodeURIComponent(
      `Website inquiry from ${form.name}${form.company ? ' — ' + form.company : ''}`
    )
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.company ? `Company: ${form.company}` : null,
      '',
      form.message,
    ].filter(Boolean)
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:contact@cbi-tunisia.com?subject=${subject}&body=${body}`

    setTimeout(() => { setLoading(false); setSent(true) }, 600)
  }

  return (
    <section className="ic-contact section-pad" id="contact">
      <div className="ic-container ic-contact__inner">

        {/* Left: info */}
        <motion.div className="ic-contact__info" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
          <SectionTitle
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />

          <ul className="ic-contact__details">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label} className="ic-contact__detail">
                  <div className="ic-contact__detail-icon"><Icon /></div>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="ic-contact__map">
            <iframe
              title="CBI Tunisia location"
              src="https://www.google.com/maps?q=06+Rue+Luxembourg,+Bab+Bhar,+Tunis,+Tunisia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div className="ic-contact__form-wrap" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
          {sent ? (
            <div className="ic-contact__success">
              <FiCheckCircle className="ic-contact__success-icon" />
              <h3>{t('contact.successTitle')}</h3>
              <p>{t('contact.successMsg')}</p>
              <button className="btn-primary" onClick={() => { setSent(false); setForm(INIT) }}>
                {t('contact.sendAnother')}
              </button>
            </div>
          ) : (
            <form className="ic-contact__form" onSubmit={handleSubmit} noValidate>
              <h3 className="ic-contact__form-title">{t('contact.formTitle')}</h3>

              <div className="ic-contact__row">
                <div className="ic-contact__field">
                  <label htmlFor="name">{t('contact.fullName')} <span className="ic-required">*</span></label>
                  <input id="name" name="name" type="text" placeholder={t('contact.namePlaceholder')} value={form.name} onChange={handleChange} className={errors.name ? 'ic-input--error' : ''} />
                  {errors.name && <span className="ic-error">{errors.name}</span>}
                </div>
                <div className="ic-contact__field">
                  <label htmlFor="email">{t('contact.emailAddress')} <span className="ic-required">*</span></label>
                  <input id="email" name="email" type="email" placeholder={t('contact.emailPlaceholder')} value={form.email} onChange={handleChange} className={errors.email ? 'ic-input--error' : ''} />
                  {errors.email && <span className="ic-error">{errors.email}</span>}
                </div>
              </div>

              <div className="ic-contact__row">
                <div className="ic-contact__field">
                  <label htmlFor="phone">{t('contact.phoneNumber')}</label>
                  <input id="phone" name="phone" type="tel" placeholder={t('contact.phonePlaceholder')} value={form.phone} onChange={handleChange} />
                </div>
                <div className="ic-contact__field">
                  <label htmlFor="company">{t('contact.company')}</label>
                  <input id="company" name="company" type="text" placeholder={t('contact.companyPlaceholder')} value={form.company} onChange={handleChange} />
                </div>
              </div>

              <div className="ic-contact__field">
                <label htmlFor="message">{t('contact.message')} <span className="ic-required">*</span></label>
                <textarea id="message" name="message" rows={5} placeholder={t('contact.messagePlaceholder')} value={form.message} onChange={handleChange} className={errors.message ? 'ic-input--error' : ''} />
                {errors.message && <span className="ic-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary ic-contact__submit" disabled={loading}>
                {loading ? (<>{t('contact.sending')} <span className="ic-spinner" /></>) : (<>{t('contact.sendMessage')} <FiSend /></>)}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
