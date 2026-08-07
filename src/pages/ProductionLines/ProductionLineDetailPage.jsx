import React, { useEffect } from 'react'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import Link from '../../components/Shared/LocalizedLink'
import { localizePath, getLangFromPathname } from '../../i18n/langRoutes'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  FiArrowRight, FiSettings, FiShield, FiTrendingUp, FiLayers,
  FiCheckCircle, FiDatabase, FiActivity, FiAward,
} from 'react-icons/fi'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import SectionTitle from '../../components/Shared/SectionTitle'
import DiagramPlaceholder from '../../components/Shared/DiagramPlaceholder'
import FAQ from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'
import { LINE_META, getLineBySlug } from '../../components/ProductionLines/lineMeta'
import { APP_META } from '../../components/Applications/appMeta'
import { LINE_TO_APPS } from '../../data/crossLinks'
import { fadeUp, fadeLeft, stagger, scaleIn, viewportOnce } from '../../components/Shared/AnimationVariants'
import { setJsonLd, removeJsonLd } from '../../components/Shared/jsonLd'
import './ProductionLineDetailPage.css'

const SITE = 'https://probargfrp.com'
const BENEFIT_ICONS = [FiTrendingUp, FiShield, FiLayers, FiCheckCircle]
const ADVANTAGE_ICONS = [FiSettings, FiActivity, FiDatabase, FiAward]

// Only ProBar has a photo that genuinely depicts it (the rebar stockyard photo); every
// other line honestly falls back to the brand logo rather than reusing an unrelated photo.
const LINE_IMAGE = { rebar: '/images/product-10.webp' }

export default function ProductionLineDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const location = useLocation()
  const line = getLineBySlug(slug)

  if (!line) {
    const lang = getLangFromPathname(location.pathname)
    return <Navigate to={localizePath('/production-lines', lang)} replace />
  }

  const { key } = line
  const d = (field) => t(`lineDetail.${key}.${field}`)
  const c = (field) => t(`lineDetail.common.${field}`)

  const STAGES = [1, 2, 3, 4].map((n) => ({
    title: d(`stage${n}Title`),
    desc: d(`stage${n}Desc`),
  }))

  const BENEFITS = [1, 2, 3, 4].map((n, i) => ({
    icon: BENEFIT_ICONS[i],
    title: d(`benefit${n}Title`),
    desc: d(`benefit${n}Desc`),
  }))

  const ADVANTAGES = [1, 2, 3, 4].map((n, i) => ({
    icon: ADVANTAGE_ICONS[i],
    title: d(`advantage${n}Title`),
    desc: d(`advantage${n}Desc`),
  }))

  const OTHER_LINES = LINE_META.filter((l) => l.key !== key)
  const RELATED_APPS = APP_META.filter((a) => (LINE_TO_APPS[key] || []).includes(a.key))

  useEffect(() => {
    const lang = getLangFromPathname(location.pathname)
    const url = `${SITE}${localizePath(`/production-lines/${line.slug}`, lang)}`
    const image = LINE_IMAGE[key]
      ? { '@type': 'ImageObject', url: `${SITE}${LINE_IMAGE[key]}` }
      : { '@id': `${SITE}/#logo` }

    setJsonLd('product-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${url}#product`,
      url,
      name: d('heroTitle'),
      description: d('introLead'),
      category: 'GFRP Composite Reinforcement',
      brand: { '@type': 'Brand', name: 'PROBAR' },
      manufacturer: { '@id': `${SITE}/#organization` },
      image,
    })
    return () => removeJsonLd('product-jsonld')
  }, [key, t, location.pathname])

  const BREADCRUMBS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.productionLines'), path: '/production-lines' },
    { label: d('heroTitle') },
  ]

  return (
    <div className="ic-lpd">
      <Seo page={`productionLineDetail.${key}`} />
      <PageHero
        subtitle={d('heroSubtitle')}
        title={d('heroTitle')}
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── Overview ── */}
      <section className="ic-lpd-overview section-pad">
        <div className="ic-container ic-lpd-overview__inner">
          <h2 className="ic-lpd-overview__eyebrow">{c('overviewTitle')}</h2>
          <motion.p
            className="ic-lpd-overview__lead"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            {d('introLead')}
          </motion.p>
        </div>
      </section>

      {/* ── Production Workflow ── */}
      <section className="ic-lpd-workflow section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="ic-container">
          <SectionTitle
            eyebrow={c('workflowEyebrow')}
            title={d('workflowTitle')}
            subtitle={d('workflowIntro')}
            align="center"
          />

          <DiagramPlaceholder
            label={c('diagramPlaceholderLabel')}
            caption={d('diagramCaption1')}
          />

          <motion.div
            className="ic-lpd-stages"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {STAGES.map((s, i) => (
              <motion.div key={s.title} variants={scaleIn} className="ic-lpd-stage">
                <span className="ic-lpd-stage__num">{String(i + 1).padStart(2, '0')}</span>
                <strong>{s.title}</strong>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Engineering Process ── */}
      <section className="ic-lpd-process section-pad">
        <div className="ic-container ic-lpd-process__inner">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeLeft}
          >
            <div className="accent-bar"><span /><em>{c('processEyebrow')}</em></div>
            <h2 className="ic-lpd-process__title">{d('processTitle')}</h2>
            <p>{d('processPara1')}</p>
            <p>{d('processPara2')}</p>
          </motion.div>

          <DiagramPlaceholder
            label={c('diagramPlaceholderLabel')}
            caption={d('diagramCaption2')}
          />
        </div>
      </section>

      {/* ── Manufacturing Philosophy ── */}
      <section className="ic-lpd-philosophy section-pad" style={{ background: 'var(--black)' }}>
        <div className="ic-container ic-lpd-philosophy__inner">
          <div className="accent-bar" style={{ justifyContent: 'center' }}><span /><em>{c('philosophyEyebrow')}</em></div>
          <h2 className="ic-lpd-philosophy__title">{d('philosophyTitle')}</h2>
          <p>{d('philosophyPara1')}</p>
          <p>{d('philosophyPara2')}</p>
        </div>
      </section>

      {/* ── Customer Benefits ── */}
      <section className="ic-lpd-benefits section-pad">
        <div className="ic-container">
          <SectionTitle
            eyebrow={c('benefitsEyebrow')}
            title={d('benefitsTitle')}
            align="center"
          />
          <motion.div
            className="ic-lpd-grid"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={scaleIn} className="ic-lpd-card">
                <div className="ic-lpd-card__icon"><Icon /></div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Operational Advantages ── */}
      <section className="ic-lpd-advantages section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="ic-container">
          <SectionTitle
            eyebrow={c('advantagesEyebrow')}
            title={d('advantagesTitle')}
            align="center"
          />
          <motion.div
            className="ic-lpd-grid"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {ADVANTAGES.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={scaleIn} className="ic-lpd-card">
                <div className="ic-lpd-card__icon"><Icon /></div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Related Applications ── */}
      <section className="ic-lpd-related section-pad">
        <div className="ic-container">
          <SectionTitle
            eyebrow={c('relatedApplicationsEyebrow')}
            title={c('relatedApplicationsTitle')}
            align="center"
          />
          <motion.div
            className="ic-lpd-other__grid"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {RELATED_APPS.map((a) => (
              <motion.div key={a.slug} variants={scaleIn}>
                <Link to={`/applications/${a.slug}`} className="ic-lpd-other__link">
                  {t(`applications.${a.key}.title`)}
                  <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Long-form SEO content ── */}
      <section className="ic-lpd-seo section-pad">
        <div className="ic-container ic-lpd-seo__inner">
          <h2>{d('seoTitle')}</h2>
          <p>{d('seoPara1')}</p>
          <p>{d('seoPara2')}</p>
          <p className="ic-lpd-inlink">
            <Link to="/production-lines#certifications">{c('certLinkText')}</Link>
          </p>
        </div>
      </section>

      {/* ── Explore other lines ── */}
      <section className="ic-lpd-other section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="ic-container">
          <SectionTitle eyebrow={t('productionLines.eyebrow')} title={t('productionLines.title')} align="center" />
          <div className="ic-lpd-other__grid">
            {OTHER_LINES.map((l) => (
              <Link key={l.slug} to={`/production-lines/${l.slug}`} className="ic-lpd-other__link">
                {t(`productionLines.${l.key}.title`)} <em>{t(`productionLines.${l.key}.highlight`)}</em>
                <FiArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={[
          { qKey: `lineDetail.${key}.faqQ1`, aKey: `lineDetail.${key}.faqA1` },
          { qKey: `lineDetail.${key}.faqQ2`, aKey: `lineDetail.${key}.faqA2` },
        ]}
        eyebrowKey="faq.eyebrow"
        titleKey="faq.title"
        subtitleKey={`lineDetail.${key}.faqSubtitle`}
      />

      <Contact />
    </div>
  )
}
