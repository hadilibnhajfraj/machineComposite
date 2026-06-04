import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, scaleIn, viewportOnce } from '../Shared/AnimationVariants'
import './Certifications.css'

const CERTS = [
  { code: 'ISO', num: '9001', year: '2015', label: 'Quality Management System', org: 'International Organization for Standardization' },
  { code: 'ISO', num: '14001', year: '2015', label: 'Environmental Management', org: 'International Organization for Standardization' },
  { code: 'CE',  num: '',     year: '',      label: 'European Conformity Mark', org: 'European Union Regulation' },
  { code: 'ASTM',num: 'D7957',year: '',      label: 'Composite Rebar Standard', org: 'American Society for Testing & Materials' },
  { code: 'ISO', num: '45001',year: '2018',  label: 'Occupational Health & Safety', org: 'International Organization for Standardization' },
  { code: 'ACI', num: '440',  year: '',      label: 'FRP Reinforcement Standard', org: 'American Concrete Institute' },
]

export default function Certifications() {
  return (
    <section className="ic-cert section-pad">
      <div className="ic-container">
        <SectionTitle
          eyebrow="Quality Assurance"
          title="CERTIFICATIONS & STANDARDS"
          subtitle="Our manufacturing processes are validated by the world's most rigorous quality and safety standards."
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
                Certified
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
