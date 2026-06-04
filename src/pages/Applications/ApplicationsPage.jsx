import React from 'react'
import PageHero from '../../components/Shared/PageHero'
import Applications from '../../components/Applications/Applications'
import Contact from '../../components/Contact/Contact'

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Applications' },
]

export default function ApplicationsPage() {
  return (
    <div className="ic-products-page">
      <PageHero
        image="/images/heroes/applications.jpg"
        subtitle="Where We Apply"
        title="Industry Applications"
        breadcrumbs={BREADCRUMBS}
      />
      <Applications />
      <Contact />
    </div>
  )
}
