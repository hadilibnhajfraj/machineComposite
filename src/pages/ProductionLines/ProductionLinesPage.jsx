import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import ProductionLines from '../../components/ProductionLines/ProductionLines'
import Certifications from '../../components/Certifications/Certifications'
import FAQ from '../../components/FAQ/FAQ'
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
        image="/images/product-10.png"
        imageWebp="/images/product-10.webp"
        imageWidth={2400}
        imageHeight={1728}
        imageAlt={t('productionLines.heroImageAlt')}
        imageTitle={t('productionLines.heroImageTitle')}
        imageCaption={t('productionLines.heroImageCaption')}
        subtitle={t('productionLines.eyebrow')}
        title={t('productionLines.title')}
        breadcrumbs={BREADCRUMBS}
      />
      <section className="section-pad" style={{ paddingBottom: 0 }}>
        <div className="ic-container">
          <p className="ic-page-intro">{t('productionLines.pageIntro')}</p>
        </div>
      </section>
      <ProductionLines />
      <Certifications background="var(--white)" />
      <FAQ />
      <Contact />
    </div>
  )
}
