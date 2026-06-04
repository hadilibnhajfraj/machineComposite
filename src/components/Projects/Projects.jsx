import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiX, FiArrowRight, FiMapPin, FiCalendar } from 'react-icons/fi'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, scaleIn, viewportOnce } from '../Shared/AnimationVariants'
import './Projects.css'

const PROJECT_META = [
  { id: 1, titleKey: 'p1title', descKey: 'p1desc', category: 'Production Lines', location: 'Algeria',  year: '2023', gradient: 'linear-gradient(145deg, #1a1507 0%, #2d2408 60%, #1a1507 100%)', pattern: 'diagonal' },
  { id: 2, titleKey: 'p2title', descKey: 'p2desc', category: 'Production Lines', location: 'Morocco',  year: '2023', gradient: 'linear-gradient(145deg, #0d1a20 0%, #0d2530 60%, #0d1a20 100%)', pattern: 'grid'     },
  { id: 3, titleKey: 'p3title', descKey: 'p3desc', category: 'Turnkey Projects', location: 'Saudi Arabia', year: '2022', gradient: 'linear-gradient(145deg, #1a1a1a 0%, #252525 60%, #1a1a1a 100%)', pattern: 'mesh'  },
  { id: 4, titleKey: 'p4title', descKey: 'p4desc', category: 'Infrastructure',   location: 'UAE',      year: '2022', gradient: 'linear-gradient(145deg, #1a0f0d 0%, #251510 60%, #1a0f0d 100%)', pattern: 'circles' },
  { id: 5, titleKey: 'p5title', descKey: 'p5desc', category: 'Production Lines', location: 'Poland',   year: '2021', gradient: 'linear-gradient(145deg, #0d1020 0%, #111830 60%, #0d1020 100%)', pattern: 'lines'   },
  { id: 6, titleKey: 'p6title', descKey: 'p6desc', category: 'Infrastructure',   location: 'Tunisia',  year: '2021', gradient: 'linear-gradient(145deg, #0f1700 0%, #1a2500 60%, #0f1700 100%)', pattern: 'dots'    },
]

export default function Projects() {
  const [active, setActive]     = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const { t } = useTranslation()

  const CATEGORIES = [
    { key: 'filterAll',        label: t('projects.filterAll')        },
    { key: 'filterProduction', label: t('projects.filterProduction') },
    { key: 'filterTurnkey',    label: t('projects.filterTurnkey')    },
    { key: 'filterInfra',      label: t('projects.filterInfra')      },
  ]

  const CAT_MAP = {
    [t('projects.filterAll')]:        'All',
    [t('projects.filterProduction')]: 'Production Lines',
    [t('projects.filterTurnkey')]:    'Turnkey Projects',
    [t('projects.filterInfra')]:      'Infrastructure',
  }

  const filtered = active === 'All'
    ? PROJECT_META
    : PROJECT_META.filter((p) => p.category === active)

  return (
    <section className="ic-proj section-pad" id="projects">
      <div className="ic-container">
        <SectionTitle
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="ic-proj__filters">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              className={`ic-proj__filter${active === (CAT_MAP[label] ?? 'All') ? ' ic-proj__filter--active' : ''}`}
              onClick={() => setActive(CAT_MAP[label] ?? 'All')}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div className="ic-proj__grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.article
                key={proj.id}
                layout
                variants={scaleIn}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`ic-proj__card ic-proj__card--${proj.pattern}`}
                style={{ '--proj-bg': proj.gradient }}
                onClick={() => setLightbox(proj)}
              >
                <div className="ic-proj__card-bg" />
                <div className="ic-proj__card-overlay">
                  <div className="ic-proj__card-content">
                    <span className="ic-tag">{proj.category}</span>
                    <h3 className="ic-proj__card-title">{t(`projects.${proj.titleKey}`)}</h3>
                    <div className="ic-proj__card-meta">
                      <span><FiMapPin />{proj.location}</span>
                      <span><FiCalendar />{proj.year}</span>
                    </div>
                    <button className="btn-discover ic-proj__card-btn">
                      {t('projects.viewProject')} <FiArrowRight />
                    </button>
                  </div>
                </div>
                <div className="ic-proj__card-strip">
                  <span className="ic-proj__card-strip-title">{t(`projects.${proj.titleKey}`)}</span>
                  <span className="ic-tag" style={{ fontSize: '0.62rem' }}>{proj.category}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <Link to="/projects" className="btn-primary">
            {t('projects.viewAll')} <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="ic-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <motion.div
              className="ic-lightbox__panel"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`ic-lightbox__hero ic-lightbox__hero--${lightbox.pattern}`} style={{ '--proj-bg': lightbox.gradient }} />
              <button className="ic-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close"><FiX /></button>
              <div className="ic-lightbox__body">
                <span className="ic-tag">{lightbox.category}</span>
                <h2 className="ic-lightbox__title">{t(`projects.${lightbox.titleKey}`)}</h2>
                <div className="ic-lightbox__meta">
                  <span><FiMapPin />{lightbox.location}</span>
                  <span><FiCalendar />{lightbox.year}</span>
                </div>
                <p className="ic-lightbox__desc">{t(`projects.${lightbox.descKey}`)}</p>
                <Link to="/projects" className="btn-primary" onClick={() => setLightbox(null)}>
                  {t('projects.fullCaseStudy')} <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
