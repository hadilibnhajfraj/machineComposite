import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import useNavLinks from '../Shared/useNavLinks'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './Hero.css'

/* ── Slides — replace src/poster with real files in /public/ ── */
const SLIDES = [
  { id: 1, type: 'image', src: '/images/product-10.png',  alt: 'GFRP Rebar Industrial Production Line' },
  { id: 2, type: 'video', src: '/videos/production-line.mp4', poster: '/images/product-2.jpg'          },
  { id: 3, type: 'image', src: '/images/project-11.png',  alt: 'Composite Manufacturing Factory'       },
  { id: 4, type: 'video', src: '/videos/factory-process.mp4', poster: '/images/product-3.jpg'          },
]

/* ── Animation variants ── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
})

const slideLeft = (delay = 0) => ({
  hidden:  { opacity: 0, x: -60, skewX: 3 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

/* ── Video management ── */
function manageSlideVideos(swiper) {
  const allVideos = swiper.el.querySelectorAll('video')
  allVideos.forEach(v => { v.pause(); v.currentTime = 0 })
  const activeVideo = swiper.slides[swiper.activeIndex]?.querySelector('video')
  if (activeVideo) activeVideo.play().catch(() => {})
}

/* ── Stat counter ── */
function StatItem({ end, suffix, label, delay, separator = '' }) {
  return (
    <motion.div className="ic-hero__stat" variants={fadeUp(delay)}>
      <span className="ic-hero__stat-num">
        <CountUp end={end} suffix={suffix} separator={separator} duration={2.4} enableScrollSpy scrollSpyOnce delay={delay} />
      </span>
      <span className="ic-hero__stat-label">{label}</span>
    </motion.div>
  )
}

/* ── Embedded hero navbar ── */
function HeroNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const { links: NAV_LINKS, isActive } = useNavLinks()

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <>
      <nav className="ic-hnav">
        <div className="ic-container ic-hnav__inner">
          <Link to="/" className="ic-hnav__logo">
            <img src="/images/probar-logo.png" alt="CBI Tunisia" className="ic-logo-img" draggable="false" />
          </Link>
          <ul className="ic-hnav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className={`ic-hnav__link${isActive(l.path) ? ' ic-hnav__link--active' : ''}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ic-hnav__right">
            <Link to="/contact" className="ic-hnav__cta">{t('nav.getQuote')}</Link>
            <button className="ic-hnav__burger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="ic-hnav__overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />
            <motion.aside className="ic-hnav__drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <div className="ic-hnav__drawer-head">
                <Link to="/" className="ic-hnav__logo" onClick={() => setMobileOpen(false)}>
                  <img src="/images/probar-logo.png" alt="CBI Tunisia" className="ic-logo-img" draggable="false" />
                </Link>
                <button className="ic-hnav__drawer-close" onClick={() => setMobileOpen(false)}><HiX /></button>
              </div>
              <ul className="ic-hnav__drawer-links">
                {NAV_LINKS.map((l, i) => (
                  <motion.li key={l.path} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.08 }}>
                    <Link to={l.path} className={`ic-hnav__drawer-link${isActive(l.path) ? ' ic-hnav__drawer-link--active' : ''}`} onClick={() => setMobileOpen(false)}>
                      <FiArrowRight />{l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="ic-hnav__drawer-foot">
                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  {t('nav.getFreeQuote')}
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Main Hero ── */
export default function Hero() {
  const { t } = useTranslation()

  const STATS = [
    { end: 10,   suffix: '+', label: t('hero.statsExperience') },
    { end: 1000, suffix: '+', label: t('hero.statsTensile'), separator: ',' },
    { end: 75,   suffix: '%', label: t('hero.statsWeight')     },
    { end: 100,  suffix: '',  label: t('hero.statsLifespan')   },
  ]

  return (
    <section className="ic-hero" id="ic-hero">

      {/* 1. Fullscreen Swiper Slider */}
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        loop
        speed={1200}
        onSlideChange={manageSlideVideos}
        onSwiper={(swiper) => {
          const activeVideo = swiper.slides[swiper.activeIndex]?.querySelector('video')
          if (activeVideo) activeVideo.play().catch(() => {})
        }}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="hero-slide">
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.alt} className="hero-slide__media" loading={slide.id === 1 ? 'eager' : 'lazy'} />
            ) : (
              <video className="hero-slide__media" autoPlay muted loop playsInline preload="metadata" poster={slide.poster}>
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 2. Dark overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* 3. Navbar */}
      <HeroNav />

      {/* 4. Hero content */}
      <div className="ic-container ic-hero__body">

        <motion.div className="ic-hero__eyebrow" initial="hidden" animate="visible" variants={fadeUp(0.15)}>
          <span className="ic-hero__eyebrow-bar" />
          <span className="ic-hero__eyebrow-text">{t('hero.eyebrow')}</span>
        </motion.div>

        <h1 className="ic-hero__title">
          <motion.span className="ic-hero__line ic-hero__line--white"   initial="hidden" animate="visible" variants={slideLeft(0.28)}>{t('hero.line1')}</motion.span>
          <motion.span className="ic-hero__line ic-hero__line--orange"  initial="hidden" animate="visible" variants={slideLeft(0.42)}>{t('hero.line2')}</motion.span>
          <motion.span className="ic-hero__line ic-hero__line--outline" initial="hidden" animate="visible" variants={slideLeft(0.56)}>{t('hero.line3')}</motion.span>
        </h1>

        <motion.p className="ic-hero__sub" initial="hidden" animate="visible" variants={fadeUp(0.72)}>
          {t('hero.subtitle')}
        </motion.p>

        <motion.div className="ic-hero__buttons" initial="hidden" animate="visible" variants={fadeUp(0.86)}>
          <Link to="/production-lines" className="ic-hero__btn-primary">
            <span>{t('hero.exploreBtn')}</span>
            <FiArrowRight className="ic-hero__btn-icon" />
          </Link>
          <Link to="/contact" className="ic-hero__btn-secondary">
            <span>{t('hero.contactBtn')}</span>
            <FiArrowRight className="ic-hero__btn-icon" />
          </Link>
        </motion.div>

        <motion.div className="ic-hero__stats" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.05 } } }}>
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="ic-hero__stat-divider" aria-hidden="true" />}
              <StatItem {...stat} delay={1.05 + i * 0.1} />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* 5. Scroll cue */}
      <motion.a href="#about" className="ic-hero__scroll-cue" aria-label="Scroll down" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ opacity: { delay: 1.8 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}>
        <FiChevronDown />
        <span>{t('hero.scroll')}</span>
      </motion.a>
    </section>
  )
}
