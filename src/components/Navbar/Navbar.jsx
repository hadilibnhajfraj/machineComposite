import React, { useState } from 'react'
import Link from '../Shared/LocalizedLink'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'
import useNavLinks from '../Shared/useNavLinks'
import { prefetchRoute } from '../../routes/routeImports'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const { links: NAV_LINKS, isActive } = useNavLinks()

  return (
    <>
      <nav className="ic-snav">
        <div className="ic-container ic-snav__inner">

          <Link to="/" className="ic-snav__logo">
            <picture>
              <source srcSet="/images/probar-logo.webp" type="image/webp" />
              <img
                src="/images/probar-logo.png"
                alt={t('common.logoAlt')}
                title={t('common.logoAlt')}
                width={746}
                height={334}
                loading="eager"
                decoding="async"
                className="ic-logo-img"
                draggable="false"
              />
            </picture>
          </Link>

          <ul className="ic-snav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className={`ic-snav__link${isActive(l.path) ? ' ic-snav__link--active' : ''}`}
                  onMouseEnter={() => prefetchRoute(l.path)}
                  onFocus={() => prefetchRoute(l.path)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ic-snav__right">
            <Link to="/contact" className="ic-snav__cta">{t('nav.getQuote')}</Link>
            <button className="ic-snav__burger" onClick={() => setOpen(true)} aria-label={t('common.openMenu')}>
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div className="ic-snav__overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside className="ic-snav__drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <div className="ic-snav__drawer-head">
                <Link to="/" className="ic-snav__logo" onClick={() => setOpen(false)}>
                  <picture>
                    <source srcSet="/images/probar-logo.webp" type="image/webp" />
                    <img
                      src="/images/probar-logo.png"
                      alt={t('common.logoAlt')}
                      title={t('common.logoAlt')}
                      width={746}
                      height={334}
                      loading="lazy"
                      decoding="async"
                      className="ic-logo-img"
                      draggable="false"
                    />
                  </picture>
                </Link>
                <button className="ic-snav__drawer-close" onClick={() => setOpen(false)}><HiX /></button>
              </div>
              <ul className="ic-snav__drawer-links">
                {NAV_LINKS.map((l, i) => (
                  <motion.li key={l.path} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.08 }}>
                    <Link to={l.path} className={`ic-snav__drawer-link${isActive(l.path) ? ' ic-snav__drawer-link--active' : ''}`} onClick={() => setOpen(false)}>
                      <FiArrowRight />{l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="ic-snav__drawer-foot">
                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setOpen(false)}>
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
