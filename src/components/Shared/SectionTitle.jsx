import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from './AnimationVariants'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const textAlign = align === 'center' ? 'center' : 'left'
  const alignItems = align === 'center' ? 'center' : 'flex-start'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      style={{ display: 'flex', flexDirection: 'column', alignItems, textAlign, marginBottom: '48px' }}
    >
      <div className="accent-bar" style={{ justifyContent: alignItems }}>
        <span />
        <em style={{ color: 'var(--orange)' }}>{eyebrow}</em>
      </div>

      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          lineHeight: 1.05,
          color: light ? '#FFFFFF' : '#0057B8',
          letterSpacing: '0.02em',
          marginBottom: subtitle ? '18px' : 0,
          maxWidth: '720px',
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: light ? 'rgba(255,255,255,0.70)' : '#555555',
            maxWidth: '560px',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
