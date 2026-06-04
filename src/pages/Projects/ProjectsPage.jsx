import React from 'react'
import PageHero from '../../components/Shared/PageHero'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Projects' },
]

export default function ProjectsPage() {
  return (
    <div>
      <PageHero
        image="/images/heroes/projects.jpg"
        subtitle="Our Portfolio"
        title="Global Projects & Installations"
        breadcrumbs={BREADCRUMBS}
      />
      <Projects />
      <Contact />
    </div>
  )
}
