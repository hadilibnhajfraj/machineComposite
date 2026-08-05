import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { fadeLeft, fadeRight, stagger, viewportOnce } from '../Shared/AnimationVariants'
import './AboutSection.css'

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false)
  const { t } = useTranslation()

  const BULLETS = [
    t('about.bullet1'),
    t('about.bullet2'),
    t('about.bullet3'),
    t('about.bullet4'),
  ]

  return (
    <section className="ic-about section-pad" id="about">
      <div className="ic-container ic-about__inner">

        {/* ── LEFT: copy ── */}
        <motion.div className="ic-about__left" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
          <div className="accent-bar">
            <span />
            <em>{t('about.eyebrow')}</em>
          </div>

          <h2 className="ic-about__heading">
            {t('about.heading1')}
            <span className="ic-about__heading--accent"> {t('about.heading2')}</span>
          </h2>

          <p className="ic-about__lead">{t('about.lead')}</p>

          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.4 }} className="ic-about__expanded">
              <p>{t('about.expanded1')}</p>
              <p>{t('about.expanded2')}</p>
            </motion.div>
          )}

          <motion.ul className="ic-about__bullets" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
            {BULLETS.map((b) => (
              <motion.li key={b} variants={fadeLeft} className="ic-about__bullet">
                <FiCheckCircle className="ic-about__bullet-icon" />
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <div className="ic-about__actions">
            <button className="btn-ghost-dark" onClick={() => setExpanded(!expanded)}>
              {expanded ? t('about.showLess') : t('about.readMore')} <FiArrowRight />
            </button>
            <Link to="/about" className="btn-primary">
              {t('about.ourStory')} <FiArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* ── RIGHT: Vimeo embed ── */}
        <motion.div className="ic-about__right" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
          <div className="ic-about__video-wrap">
            <div className="ic-about__video-border" />
            <iframe
              className="ic-about__iframe"
              src="https://player.vimeo.com/video/1171765397?autoplay=0&title=0&byline=0&portrait=0&badge=0&dnt=1"
              title="CBI Tunisia — Company Overview"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <div className="ic-about__video-badge">
              <strong>{t('about.yearsBadge')}</strong>
              <span>{t('about.yearsLabel')}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
