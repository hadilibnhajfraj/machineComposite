import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import Contact from '../../components/Contact/Contact'

export default function ContactPage() {
  const { t } = useTranslation()

  const BREADCRUMBS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.contact') },
  ]

  return (
    <div>
      <Seo page="contact" />
      <PageHero
        image="/images/heroes/contact.jpg"
        subtitle={t('contact.eyebrow')}
        title={t('contact.title')}
        breadcrumbs={BREADCRUMBS}
      />
      <Contact />
    </div>
  )
}
