import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiArrowRight, FiDatabase, FiCpu, FiActivity, FiBarChart2, FiCheckCircle } from 'react-icons/fi'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import Statistics from '../../components/Statistics/Statistics'
import Contact from '../../components/Contact/Contact'
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn, viewportOnce } from '../../components/Shared/AnimationVariants'
import './AboutPage.css'

export default function AboutPage() {
  const { t } = useTranslation()

  const COMPETENCIES = [
    { title: t('aboutPage.comp1Title'), desc: t('aboutPage.comp1Desc') },
    { title: t('aboutPage.comp2Title'), desc: t('aboutPage.comp2Desc') },
    { title: t('aboutPage.comp3Title'), desc: t('aboutPage.comp3Desc') },
    { title: t('aboutPage.comp4Title'), desc: t('aboutPage.comp4Desc') },
    { title: t('aboutPage.comp5Title'), desc: t('aboutPage.comp5Desc') },
    { title: t('aboutPage.comp6Title'), desc: t('aboutPage.comp6Desc') },
  ]

  const VALUES = [
    { title: t('aboutPage.value1Title'), desc: t('aboutPage.value1Desc') },
    { title: t('aboutPage.value2Title'), desc: t('aboutPage.value2Desc') },
    { title: t('aboutPage.value3Title'), desc: t('aboutPage.value3Desc') },
    { title: t('aboutPage.value4Title'), desc: t('aboutPage.value4Desc') },
  ]

  const POSITIONING_TAGS = [
    t('aboutPage.positioningTag1'),
    t('aboutPage.positioningTag2'),
    t('aboutPage.positioningTag3'),
    t('aboutPage.positioningTag4'),
  ]

  const INNOVATION_ITEMS = [
    { icon: FiDatabase,   title: t('aboutPage.innovation1Title'), desc: t('aboutPage.innovation1Desc') },
    { icon: FiCpu,        title: t('aboutPage.innovation2Title'), desc: t('aboutPage.innovation2Desc') },
    { icon: FiActivity,   title: t('aboutPage.innovation3Title'), desc: t('aboutPage.innovation3Desc') },
    { icon: FiBarChart2,  title: t('aboutPage.innovation4Title'), desc: t('aboutPage.innovation4Desc') },
  ]

  const PEOPLE_FUNCTIONS = [
    t('aboutPage.peopleFunc1'),
    t('aboutPage.peopleFunc2'),
    t('aboutPage.peopleFunc3'),
    t('aboutPage.peopleFunc4'),
    t('aboutPage.peopleFunc5'),
  ]

  const BREADCRUMBS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about') },
  ]

  return (
    <div className="ic-about-page">
      <Seo page="about" />
      <PageHero
        subtitle={t('aboutPage.heroSubtitle')}
        title={t('aboutPage.heroTitle')}
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── Mission ── */}
      <section className="ic-ap-mission section-pad">
        <div className="ic-container ic-ap-mission__inner">
          <motion.div
            className="ic-ap-mission__copy"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeLeft}
          >
            <div className="accent-bar"><span /><em>{t('aboutPage.missionEyebrow')}</em></div>
            <h2 className="ic-ap-mission__heading">
              {t('aboutPage.missionHeading1')}<br />
              <span style={{ color: 'var(--orange)' }}>{t('aboutPage.missionHeading2')}</span>
            </h2>
            <p>{t('aboutPage.missionPara1')}</p>
            <p>{t('aboutPage.missionPara2')}</p>
            <p>{t('aboutPage.missionPara3')}</p>
            <div className="ic-ap-mission__actions">
              <Link to="/contact" className="btn-primary">
                {t('aboutPage.missionCta')} <FiArrowRight />
              </Link>
              <Link to="/production-lines" className="btn-ghost-dark">
                {t('aboutPage.productionLinesLinkText')} <FiArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="ic-ap-mission__values"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="ic-ap-value">
                <strong>{v.title}</strong>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Engineering Positioning ── */}
      <section className="ic-ap-positioning section-pad">
        <div className="ic-container">
          <motion.div
            className="ic-ap-positioning__inner"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            <div className="accent-bar" style={{ justifyContent: 'center' }}>
              <span /><em>{t('aboutPage.positioningEyebrow')}</em>
            </div>
            <h2 className="ic-ap-positioning__statement">{t('aboutPage.positioningStatement')}</h2>
            <p className="ic-ap-positioning__intro">{t('aboutPage.positioningIntro')}</p>

            <div className="ic-ap-positioning__tags">
              {POSITIONING_TAGS.map((tag) => (
                <span key={tag} className="ic-ap-positioning__tag">{tag}</span>
              ))}
            </div>

            <p className="ic-ap-positioning__closing">{t('aboutPage.positioningClosing')}</p>

            <Link to="/applications" className="ic-ap-positioning__link">
              {t('aboutPage.applicationsLinkText')} <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Leadership & Execution ── */}
      <section className="ic-ap-leadership section-pad">
        <div className="ic-container ic-ap-leadership__inner">
          <motion.div
            className="ic-ap-leadership__quote-wrap"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeLeft}
          >
            <div className="accent-bar"><span /><em>{t('aboutPage.leadershipEyebrow')}</em></div>
            <h2 className="ic-ap-leadership__quote">{t('aboutPage.leadershipQuote')}</h2>
          </motion.div>

          <motion.div
            className="ic-ap-leadership__body"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeRight}
          >
            <span className="ic-ap-leadership__label">{t('aboutPage.leadershipTitle')}</span>
            <p>{t('aboutPage.leadershipPara1')}</p>
            <p>{t('aboutPage.leadershipPara2')}</p>
            <p>{t('aboutPage.leadershipPara3')}</p>
            <Link to="/projects" className="btn-ghost-dark">
              {t('aboutPage.projectsLinkText')} <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Innovation & Digital Backbone ── */}
      <section className="ic-ap-innovation section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="ic-container">
          <motion.div
            className="ic-ap-innovation__header"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            <div className="accent-bar" style={{ justifyContent: 'center' }}>
              <span /><em>{t('aboutPage.innovationEyebrow')}</em>
            </div>
            <h2 className="ic-ap-innovation__title">{t('aboutPage.innovationTitle')}</h2>
            <p className="ic-ap-innovation__intro">{t('aboutPage.innovationIntro')}</p>
          </motion.div>

          <motion.div
            className="ic-ap-innovation__grid"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {INNOVATION_ITEMS.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={scaleIn} className="ic-ap-innovation__card">
                <div className="ic-ap-innovation__icon-wrap"><Icon /></div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Core Competencies ── */}
      <section className="ic-ap-competencies section-pad" style={{ background: 'var(--black)' }}>
        <div className="ic-container">
          <motion.div
            className="ic-ap-competencies__header"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            <div className="accent-bar" style={{ justifyContent: 'center' }}>
              <span /><em>{t('aboutPage.competenciesEyebrow')}</em>
            </div>
            <h2 className="ic-ap-competencies__title">{t('aboutPage.competenciesTitle')}</h2>
            <p className="ic-ap-competencies__intro">{t('aboutPage.competenciesIntro')}</p>
          </motion.div>

          <motion.div
            className="ic-ap-competencies__grid"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {COMPETENCIES.map((item, i) => (
              <motion.div key={item.title} variants={scaleIn} className="ic-ap-competencies__card">
                <span className="ic-ap-competencies__num">{String(i + 1).padStart(2, '0')}</span>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="ic-ap-competencies__cta">
            <Link to="/production-lines#certifications" className="btn-ghost-dark">
              {t('aboutPage.certificationsLinkText')} <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── People & Governance ── */}
      <section className="ic-ap-people section-pad">
        <div className="ic-container ic-ap-people__inner">
          <motion.div
            className="ic-ap-people__copy"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeLeft}
          >
            <div className="accent-bar"><span /><em>{t('aboutPage.peopleEyebrow')}</em></div>
            <h2 className="ic-ap-people__title">{t('aboutPage.peopleTitle')}</h2>
            <p>{t('aboutPage.peoplePara1')}</p>
            <p>{t('aboutPage.peoplePara3')}</p>
          </motion.div>

          <motion.div
            className="ic-ap-people__functions"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeRight}
          >
            <p className="ic-ap-people__functions-intro">{t('aboutPage.peoplePara2')}</p>
            <motion.ul
              className="ic-ap-people__list"
              initial="hidden" whileInView="visible"
              viewport={viewportOnce} variants={stagger}
            >
              {PEOPLE_FUNCTIONS.map((fn) => (
                <motion.li key={fn} variants={fadeUp} className="ic-ap-people__list-item">
                  <FiCheckCircle className="ic-ap-people__list-icon" />
                  {fn}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <Statistics />
      <Contact />
    </div>
  )
}
