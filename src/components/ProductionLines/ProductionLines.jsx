import React from 'react'
import Link from '../Shared/LocalizedLink'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, scaleIn, viewportOnce } from '../Shared/AnimationVariants'
import { LINE_META } from './lineMeta'
import './ProductionLines.css'

export default function ProductionLines() {
  const { t } = useTranslation()

  return (
    <section className="ic-pl section-pad">
      <div className="ic-container">
        <SectionTitle
          eyebrow={t('productionLines.eyebrow')}
          title={t('productionLines.sectionTitle')}
          subtitle={t('productionLines.subtitle')}
        />

        <motion.div className="ic-pl__grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
          {LINE_META.map((line) => (
            <motion.div
              key={line.id}
              variants={scaleIn}
              className={`ic-pl__card ic-pl__card--${line.pattern}`}
              style={{ '--card-bg': line.gradient }}
            >
              <div className="ic-pl__card-bg" />
              <div className="ic-pl__card-overlay" />
              <div className="ic-pl__card-content">
                <span className="ic-tag">{line.tag}</span>
                <h3 className="ic-pl__card-title">
                  {t(`productionLines.${line.key}.title`)}
                  <em className="ic-pl__card-highlight">{t(`productionLines.${line.key}.highlight`)}</em>
                </h3>
                <p className="ic-pl__card-desc">{t(`productionLines.${line.key}.desc`)}</p>
                <Link to={`/production-lines/${line.slug}`} className="btn-discover">
                  {t('productionLines.discoverMore')} <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
