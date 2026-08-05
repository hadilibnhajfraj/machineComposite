import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, scaleIn, viewportOnce } from '../Shared/AnimationVariants'
import './Certifications.css'

const CERT_KEYS = ['cert1', 'cert2', 'cert3', 'cert4', 'cert5', 'cert6']

export default function Certifications({ background }) {
  const { t } = useTranslation()

  const CERTS = CERT_KEYS.map((key) => ({
    code: t(`certifications.${key}.code`),
    num: t(`certifications.${key}.num`),
    year: t(`certifications.${key}.year`),
    label: t(`certifications.${key}.label`),
    org: t(`certifications.${key}.org`),
  }))

  return (
    <section className="ic-cert section-pad" id="certifications" style={background ? { background } : undefined}>
      <div className="ic-container">
        <SectionTitle
          eyebrow={t('certifications.eyebrow')}
          title={t('certifications.title')}
          subtitle={t('certifications.subtitle')}
          align="center"
        />

        <motion.div
          className="ic-cert__grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {CERTS.map((cert) => (
            <motion.div key={`${cert.code}${cert.num}`} variants={scaleIn} className="ic-cert__card">
              <div className="ic-cert__logo">
                <span className="ic-cert__logo-code">{cert.code}</span>
                {cert.num && <span className="ic-cert__logo-num">{cert.num}</span>}
                {cert.year && <span className="ic-cert__logo-year">:{cert.year}</span>}
              </div>
              <div className="ic-cert__info">
                <strong className="ic-cert__label">{cert.label}</strong>
                <span className="ic-cert__org">{cert.org}</span>
              </div>
              <div className="ic-cert__badge">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t('certifications.certifiedLabel')}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
