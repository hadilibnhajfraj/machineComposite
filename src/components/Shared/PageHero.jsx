import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PageHero.css'

export default function PageHero({ image, subtitle, title, breadcrumbs }) {
  return (
    <section className="ph">
      {/* Background image — slow zoom in */}
      <motion.div
        className="ph__bg"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      />

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
          aria-label="Breadcrumb"
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
