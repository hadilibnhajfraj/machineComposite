import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import Applications from '../../components/Applications/Applications'
import FAQ from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'

export default function ApplicationsPage() {
  const { t } = useTranslation()

  const BREADCRUMBS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.applications') },
  ]

  return (
    <div className="ic-products-page">
      <Seo page="applications" />
      <PageHero
        image="/images/heroes/applications.jpg"
        subtitle={t('applications.eyebrow')}
        title={t('applications.title')}
        breadcrumbs={BREADCRUMBS}
      />
      <Applications />
      <FAQ />
      <Contact />
    </div>
  )
}
