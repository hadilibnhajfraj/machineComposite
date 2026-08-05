import React from 'react'
import Seo from '../../components/Shared/Seo'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/About/AboutSection'
import ProductionLines from '../../components/ProductionLines/ProductionLines'
import Applications from '../../components/Applications/Applications'
import Certifications from '../../components/Certifications/Certifications'
import Projects from '../../components/Projects/Projects'
import FAQ from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Seo page="home" />
      <Hero />
      <AboutSection />
      <ProductionLines />
      <Applications />
      <Certifications />
      <Projects />
      <FAQ />
      <Contact />
    </>
  )
}
