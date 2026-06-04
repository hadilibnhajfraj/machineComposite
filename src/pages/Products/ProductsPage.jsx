import React from 'react'
import { motion } from 'framer-motion'
import PageHero from '../../components/Shared/PageHero'
import ProductionLines from '../../components/ProductionLines/ProductionLines'
import Applications from '../../components/Applications/Applications'
import Certifications from '../../components/Certifications/Certifications'
import Contact from '../../components/Contact/Contact'
import { fadeUp, viewportOnce } from '../../components/Shared/AnimationVariants'
import './ProductsPage.css'

const SPECS = [
  { label: 'Production Capacity', value: 'Up to 5 t/h', sub: 'per rebar line' },
  { label: 'Fiber Compatibility', value: 'GFRP / BFRP / CFRP', sub: 'all composite types' },
  { label: 'Bar Diameters', value: 'Ø 4 – 32 mm', sub: 'continuous range' },
  { label: 'Line Footprint', value: '18 – 80 m', sub: 'modular layout' },
  { label: 'Automation Level', value: 'PLC / SCADA', sub: 'Industry 4.0 ready' },
  { label: 'Certifications', value: 'ISO / CE / ASTM', sub: 'globally accepted' },
]

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Products' },
]

export default function ProductsPage() {
  return (
    <div className="ic-products-page">
      <PageHero
        image="/images/heroes/products.jpg"
        subtitle="Our Capabilities"
        title="Advanced Production Line Systems"
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── Specs Bar ── */}
      <section className="ic-pp-specs">
        <div className="ic-container">
          <motion.div
            className="ic-pp-specs__grid"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {SPECS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="ic-pp-spec">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                <small>{s.sub}</small>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ProductionLines />
      <Applications />
      <Certifications />
      <Contact />
    </div>
  )
}
