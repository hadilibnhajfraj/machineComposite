import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import ProductionLines from '../../components/ProductionLines/ProductionLines'
import Certifications from '../../components/Certifications/Certifications'
import Contact from '../../components/Contact/Contact'

export default function ProductionLinesPage() {
  const { t } = useTranslation()

  const BREADCRUMBS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.productionLines') },
  ]

  return (
    <div className="ic-products-page">
      <Seo page="productionLines" />
      <PageHero
        image="/images/heroes/production-lines.jpg"
        subtitle={t('productionLines.eyebrow')}
        title={t('productionLines.title')}
        breadcrumbs={BREADCRUMBS}
      />
      <ProductionLines />
      <Certifications />
      <Contact />
    </div>
  )
}
