import React from 'react'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import Link from '../../components/Shared/LocalizedLink'
import { localizePath, getLangFromPathname } from '../../i18n/langRoutes'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  FiArrowRight, FiTrendingUp, FiShield, FiFeather, FiZap,
} from 'react-icons/fi'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import SectionTitle from '../../components/Shared/SectionTitle'
import FAQ from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'
import { APP_META, getAppBySlug } from '../../components/Applications/appMeta'
import { LINE_META } from '../../components/ProductionLines/lineMeta'
import { APP_TO_LINES } from '../../data/crossLinks'
import { fadeUp, fadeLeft, stagger, scaleIn, viewportOnce } from '../../components/Shared/AnimationVariants'
import './ApplicationDetailPage.css'

const ADVANTAGE_ICONS = [FiTrendingUp, FiShield, FiFeather, FiZap]

export default function ApplicationDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const location = useLocation()
  const app = getAppBySlug(slug)

  if (!app) {
    const lang = getLangFromPathname(location.pathname)
    return <Navigate to={localizePath('/applications', lang)} replace />
  }

  const { key } = app
  const d = (field) => t(`applicationDetail.${key}.${field}`)
  const c = (field) => t(`applicationDetail.common.${field}`)

  const USE_CASES = [1, 2, 3, 4].map((n) => d(`useCase${n}`))

  const ADVANTAGES = [1, 2, 3, 4].map((n, i) => ({
    icon: ADVANTAGE_ICONS[i],
    title: d(`advantage${n}Title`),
    desc: d(`advantage${n}Desc`),
  }))

  const OTHER_APPS = APP_META.filter((a) => a.key !== key)
  const RELATED_LINES = LINE_META.filter((l) => (APP_TO_LINES[key] || []).includes(l.key))

  const BREADCRUMBS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.applications'), path: '/applications' },
    { label: d('heroTitle') },
  ]

  return (
    <div className="ic-apd">
      <Seo page={`applicationDetail.${key}`} />
      <PageHero
        subtitle={d('heroSubtitle')}
        title={d('heroTitle')}
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── Overview ── */}
      <section className="ic-apd-overview section-pad">
        <div className="ic-container ic-apd-overview__inner">
          <h2 className="ic-apd-overview__eyebrow">{c('overviewTitle')}</h2>
          <motion.p
            className="ic-apd-overview__lead"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            {d('introLead')}
          </motion.p>
        </div>
      </section>

      {/* ── Why Composites ── */}
      <section className="ic-apd-why section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="ic-container ic-apd-text-block">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <div className="accent-bar"><span /><em>{c('whyEyebrow')}</em></div>
            <h2 className="ic-apd-heading">{d('whyTitle')}</h2>
            <p>{d('whyPara1')}</p>
            <p>{d('whyPara2')}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Industry Challenges ── */}
      <section className="ic-apd-challenges section-pad" style={{ background: 'var(--black)' }}>
        <div className="ic-container ic-apd-text-block ic-apd-text-block--center">
          <div className="accent-bar" style={{ justifyContent: 'center' }}><span /><em>{c('challengesEyebrow')}</em></div>
          <h2 className="ic-apd-heading ic-apd-heading--light">{d('challengesTitle')}</h2>
          <p>{d('challengesPara1')}</p>
          <p>{d('challengesPara2')}</p>
        </div>
      </section>

      {/* ── Typical Use Cases ── */}
      <section className="ic-apd-usecases section-pad">
        <div className="ic-container">
          <SectionTitle eyebrow={c('useCasesEyebrow')} title={d('useCasesTitle')} subtitle={d('useCasesIntro')} align="center" />
          <motion.div className="ic-apd-usecases__grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
            {USE_CASES.map((uc) => (
              <motion.div key={uc} variants={scaleIn} className="ic-apd-usecases__tag">{uc}</motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Advantages Over Steel ── */}
      <section className="ic-apd-advantages section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="ic-container">
          <SectionTitle eyebrow={c('advantagesEyebrow')} title={d('advantagesTitle')} align="center" />
          <motion.div className="ic-apd-grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
            {ADVANTAGES.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={scaleIn} className="ic-apd-card">
                <div className="ic-apd-card__icon"><Icon /></div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Long-Term Performance ── */}
      <section className="ic-apd-performance section-pad">
        <div className="ic-container ic-apd-text-block">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <div className="accent-bar"><span /><em>{c('performanceEyebrow')}</em></div>
            <h2 className="ic-apd-heading">{d('performanceTitle')}</h2>
            <p>{d('performancePara1')}</p>
            <p>{d('performancePara2')}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Maintenance Benefits ── */}
      <section className="ic-apd-maintenance section-pad" style={{ background: 'var(--blue)' }}>
        <div className="ic-container ic-apd-text-block ic-apd-text-block--center">
          <div className="accent-bar" style={{ justifyContent: 'center' }}><span /><em>{c('maintenanceEyebrow')}</em></div>
          <h2 className="ic-apd-heading ic-apd-heading--light">{d('maintenanceTitle')}</h2>
          <p>{d('maintenancePara1')}</p>
          <p>{d('maintenancePara2')}</p>
          <p className="ic-apd-inlink">
            <Link to="/about">{c('aboutLinkText')}</Link>
          </p>
        </div>
      </section>

      {/* ── Related Production Lines ── */}
      <section className="ic-apd-related section-pad">
        <div className="ic-container">
          <SectionTitle
            eyebrow={c('relatedLinesEyebrow')}
            title={c('relatedLinesTitle')}
            align="center"
          />
          <motion.div
            className="ic-apd-other__grid"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {RELATED_LINES.map((l) => (
              <motion.div key={l.slug} variants={scaleIn}>
                <Link to={`/production-lines/${l.slug}`} className="ic-apd-other__link">
                  {t(`productionLines.${l.key}.title`)} — {t(`productionLines.${l.key}.highlight`)}
                  <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Explore other applications ── */}
      <section className="ic-apd-other section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="ic-container">
          <SectionTitle eyebrow={t('applications.eyebrow')} title={t('applications.title')} align="center" />
          <div className="ic-apd-other__grid">
            {OTHER_APPS.map((a) => (
              <Link key={a.slug} to={`/applications/${a.slug}`} className="ic-apd-other__link">
                {t(`applications.${a.key}.title`)}
                <FiArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={[
          { qKey: `applicationDetail.${key}.faqQ1`, aKey: `applicationDetail.${key}.faqA1` },
          { qKey: `applicationDetail.${key}.faqQ2`, aKey: `applicationDetail.${key}.faqA2` },
        ]}
        eyebrowKey="faq.eyebrow"
        titleKey="faq.title"
        subtitleKey={`applicationDetail.${key}.faqSubtitle`}
      />

      <Contact />
    </div>
  )
}
