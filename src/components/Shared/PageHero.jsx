import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Link from './LocalizedLink'
import './PageHero.css'

export default function PageHero({
  image, imageWebp, imageWidth, imageHeight, imageAlt, imageTitle, imageCaption,
  subtitle, title, breadcrumbs,
}) {
  const { t } = useTranslation()
  return (
    <section className="ph">
      {/* Background photo — slow zoom in. A real <img> (not a CSS background) so it can
          carry real alt text, dimensions and loading hints; pages with no photo keep the
          CSS gradient fallback defined on .ph itself. */}
      {image && (
        <motion.div
          className="ph__bg"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        >
          <picture>
            {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
            <img
              src={image}
              alt={imageAlt || ''}
              title={imageTitle}
              width={imageWidth}
              height={imageHeight}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="ph__img"
            />
          </picture>
          {imageCaption && <figcaption className="ph__caption">{imageCaption}</figcaption>}
        </motion.div>
      )}

      {/* Dark overlay */}
      <div className="ph__overlay" />

      {/* Centred text block */}
      <div className="ic-container ph__content">
        {/* Subtitle — fades down */}
        <motion.p
          className="ph__subtitle"
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>

        {/* Title — fades up */}
        <motion.h1
          className="ph__title"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {/* Breadcrumb — fades up, later */}
        <motion.nav
          className="ph__breadcrumb"
          aria-label={t('common.breadcrumb')}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
        >
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={crumb.label}>
              {i > 0 && <span className="ph__sep" aria-hidden="true">/</span>}
              {crumb.path
                ? <Link to={crumb.path} className="ph__crumb ph__crumb--link">{crumb.label}</Link>
                : <span className="ph__crumb ph__crumb--active">{crumb.label}</span>
              }
            </React.Fragment>
          ))}
        </motion.nav>
      </div>
    </section>
  )
}
