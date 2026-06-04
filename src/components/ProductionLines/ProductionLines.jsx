import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, scaleIn, viewportOnce } from '../Shared/AnimationVariants'
import './ProductionLines.css'

const LINE_META = [
  { id: 1, key: 'rebar',    gradient: 'linear-gradient(145deg, #0d0d0d 0%, #1e1507 50%, #2a1e08 100%)', pattern: 'diagonal', tag: 'GFRP'         },
  { id: 2, key: 'mesh',     gradient: 'linear-gradient(145deg, #0d0d0d 0%, #0f1a12 50%, #162211 100%)', pattern: 'grid',     tag: 'Mesh'         },
  { id: 3, key: 'bent',     gradient: 'linear-gradient(145deg, #0d0d0d 0%, #1a1a1a 50%, #222222 100%)', pattern: 'hex',      tag: 'Bent'         },
  { id: 4, key: 'tank',     gradient: 'linear-gradient(145deg, #0d0d0d 0%, #0d1a1f 50%, #0d2226 100%)', pattern: 'dots',     tag: 'Tank'         },
  { id: 5, key: 'pipe',     gradient: 'linear-gradient(145deg, #0d0d0d 0%, #1a0f0d 50%, #221513 100%)', pattern: 'circles',  tag: 'Pipe'         },
  { id: 6, key: 'profiles', gradient: 'linear-gradient(145deg, #0d0d0d 0%, #0f0d1a 50%, #171525 100%)', pattern: 'lines',    tag: 'Profiles'     },
]

export default function ProductionLines() {
  const { t } = useTranslation()

  return (
    <section className="ic-pl section-pad">
      <div className="ic-container">
        <SectionTitle
          eyebrow={t('productionLines.eyebrow')}
          title={t('productionLines.title')}
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
                <Link to="/products" className="btn-discover">
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
