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
        image="/images/project-11.png"
        imageWebp="/images/project-11.webp"
        imageWidth={2400}
        imageHeight={1728}
        imageAlt={t('applications.heroImageAlt')}
        imageTitle={t('applications.heroImageTitle')}
        imageCaption={t('applications.heroImageCaption')}
        subtitle={t('applications.eyebrow')}
        title={t('applications.title')}
        breadcrumbs={BREADCRUMBS}
      />
      <section className="section-pad" style={{ paddingBottom: 0 }}>
        <div className="ic-container">
          <p className="ic-page-intro">{t('applications.pageIntro')}</p>
        </div>
      </section>
      <Applications />
      <FAQ />
      <Contact />
    </div>
  )
}
