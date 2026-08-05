import React from 'react'
import { motion } from 'framer-motion'
import { FiImage } from 'react-icons/fi'
import { fadeUp, viewportOnce } from './AnimationVariants'
import './DiagramPlaceholder.css'

export default function DiagramPlaceholder({ label, caption }) {
  return (
    <motion.div
      className="ic-diagram"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <div className="ic-diagram__box">
        <FiImage className="ic-diagram__icon" />
        <span className="ic-diagram__label">{label}</span>
      </div>
      {caption && <p className="ic-diagram__caption">{caption}</p>}
    </motion.div>
  )
}
