import React from 'react'
import Link from '../Shared/LocalizedLink'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowRight } from 'react-icons/fi'
import { FaDraftingCompass, FaHardHat, FaClipboardCheck, FaChalkboardTeacher } from 'react-icons/fa'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, scaleIn, viewportOnce } from '../Shared/AnimationVariants'
import './Projects.css'

const CAPABILITY_META = [
  { id: 1, titleKey: 'c1title', descKey: 'c1desc', icon: FaDraftingCompass, gradient: 'linear-gradient(145deg, #1a1507 0%, #2d2408 60%, #1a1507 100%)', pattern: 'diagonal' },
  { id: 2, titleKey: 'c2title', descKey: 'c2desc', icon: FaHardHat,         gradient: 'linear-gradient(145deg, #0d1a20 0%, #0d2530 60%, #0d1a20 100%)', pattern: 'grid'     },
  { id: 3, titleKey: 'c3title', descKey: 'c3desc', icon: FaClipboardCheck, gradient: 'linear-gradient(145deg, #1a0f0d 0%, #251510 60%, #1a0f0d 100%)', pattern: 'circles' },
  { id: 4, titleKey: 'c4title', descKey: 'c4desc', icon: FaChalkboardTeacher, gradient: 'linear-gradient(145deg, #0d1020 0%, #111830 60%, #0d1020 100%)', pattern: 'lines'   },
]

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section className="ic-proj section-pad" id="projects">
      <div className="ic-container">
        <SectionTitle
          eyebrow={t('projects.eyebrow')}
          title={t('projects.sectionTitle')}
          subtitle={t('projects.subtitle')}
        />

        <motion.div className="ic-proj__grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
          {CAPABILITY_META.map((cap) => {
            const Icon = cap.icon
            return (
              <motion.article
                key={cap.id}
                variants={scaleIn}
                className={`ic-proj__card ic-proj__card--${cap.pattern}`}
                style={{ '--proj-bg': cap.gradient }}
              >
                <div className="ic-proj__card-bg" />
                <div className="ic-proj__card-overlay">
                  <div className="ic-proj__card-content">
                    <span className="ic-tag"><Icon style={{ marginRight: 6 }} />{t(`projects.${cap.titleKey}`)}</span>
                    <h3 className="ic-proj__card-title">{t(`projects.${cap.titleKey}`)}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.6, marginTop: 8 }}>
                      {t(`projects.${cap.descKey}`)}
                    </p>
                  </div>
                </div>
                <div className="ic-proj__card-strip">
                  <span className="ic-proj__card-strip-title">{t(`projects.${cap.titleKey}`)}</span>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '56px', display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">
            {t('projects.ctaButton')} <FiArrowRight />
          </Link>
          <Link to="/applications" className="btn-ghost-dark">
            {t('projects.applicationsLinkText')} <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
