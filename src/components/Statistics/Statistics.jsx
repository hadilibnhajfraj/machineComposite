import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiAward, FiTrendingUp, FiFeather, FiShield } from 'react-icons/fi'
import { stagger, fadeUp, viewportOnce } from '../Shared/AnimationVariants'
import './Statistics.css'

function StatCard({ icon: Icon, value, suffix, labelKey }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { t } = useTranslation()

  return (
    <motion.div ref={ref} className="ic-stat__card" variants={fadeUp}>
      <div className="ic-stat__icon-wrap">
        <Icon className="ic-stat__icon" />
      </div>
      <div className="ic-stat__value">
        {inView ? (
          <CountUp end={value} duration={2.4} useEasing suffix={suffix} separator="," />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="ic-stat__label">{t(labelKey)}</div>
    </motion.div>
  )
}

const STAT_DEFS = [
  { icon: FiAward,      value: 10,   suffix: '+', labelKey: 'statistics.yearsLabel'    },
  { icon: FiTrendingUp, value: 1000, suffix: '+', labelKey: 'statistics.tensileLabel'  },
  { icon: FiFeather,    value: 75,   suffix: '%', labelKey: 'statistics.weightLabel'   },
  { icon: FiShield,     value: 100,  suffix: '',  labelKey: 'statistics.lifespanLabel' },
]

export default function Statistics() {
  const { t } = useTranslation()

  return (
    <section className="ic-stat">
      <div className="ic-stat__bg-overlay" aria-hidden="true" />
      <div className="ic-container ic-stat__container">
        <motion.div className="ic-stat__header" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <div className="accent-bar" style={{ justifyContent: 'center' }}>
            <span /><em>{t('statistics.eyebrow')}</em>
          </div>
          <h2 className="ic-stat__title">{t('statistics.title')}</h2>
          <p className="ic-stat__subtitle">{t('statistics.subtitle')}</p>
        </motion.div>

        <motion.div className="ic-stat__grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
          {STAT_DEFS.map((s) => (
            <StatCard key={s.labelKey} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
