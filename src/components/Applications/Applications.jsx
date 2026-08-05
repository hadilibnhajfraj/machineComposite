import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, scaleIn, viewportOnce } from '../Shared/AnimationVariants'
import { APP_META } from './appMeta'
import './Applications.css'

export default function Applications() {
  const { t } = useTranslation()

  return (
    <section className="ic-apps section-pad" id="applications">
      <div className="ic-container">
        <SectionTitle
          eyebrow={t('applications.eyebrow')}
          title={t('applications.title')}
          subtitle={t('applications.subtitle')}
          align="center"
        />

        <motion.div className="ic-apps__grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
          {APP_META.map(({ key, slug, icon: Icon }) => (
            <motion.div key={key} variants={scaleIn} className="ic-apps__card">
              <div className="ic-apps__icon-wrap">
                <Icon className="ic-apps__icon" />
              </div>
              <div className="ic-apps__body">
                <h3 className="ic-apps__title">{t(`applications.${key}.title`)}</h3>
                <p className="ic-apps__desc">{t(`applications.${key}.desc`)}</p>
                <Link to={`/applications/${slug}`} className="ic-apps__link">
                  {t('applications.learnMore')} <FiArrowRight />
                </Link>
              </div>
              <div className="ic-apps__card-hover-bar" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
