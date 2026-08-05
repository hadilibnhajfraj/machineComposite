import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../../components/Shared/Seo'
import PageHero from '../../components/Shared/PageHero'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

export default function ProjectsPage() {
  const { t } = useTranslation()

  const BREADCRUMBS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.projects') },
  ]

  return (
    <div>
      <Seo page="projects" />
      <PageHero
        subtitle={t('projects.eyebrow')}
        title={t('projects.title')}
        breadcrumbs={BREADCRUMBS}
      />
      <Projects />
      <Contact />
    </div>
  )
}
