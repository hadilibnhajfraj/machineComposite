import React from 'react'
import PageHero from '../../components/Shared/PageHero'
import Contact from '../../components/Contact/Contact'

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Contact' },
]

export default function ContactPage() {
  return (
    <div>
      <PageHero
        image="/images/heroes/contact.jpg"
        subtitle="Get In Touch"
        title="Contact CBI Tunisia"
        breadcrumbs={BREADCRUMBS}
      />
      <Contact />
    </div>
  )
}
