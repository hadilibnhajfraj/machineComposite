import React from 'react'
import PageHero from '../../components/Shared/PageHero'
import ProductionLines from '../../components/ProductionLines/ProductionLines'
import Certifications from '../../components/Certifications/Certifications'
import Contact from '../../components/Contact/Contact'

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Production Lines' },
]

export default function ProductionLinesPage() {
  return (
    <div className="ic-products-page">
      <PageHero
        image="/images/heroes/production-lines.jpg"
        subtitle="Our Solutions"
        title="Advanced Production Line Systems"
        breadcrumbs={BREADCRUMBS}
      />
      <ProductionLines />
      <Certifications />
      <Contact />
    </div>
  )
}
