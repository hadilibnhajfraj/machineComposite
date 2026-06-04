import React from 'react'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/About/AboutSection'
import ProductionLines from '../../components/ProductionLines/ProductionLines'
import Statistics from '../../components/Statistics/Statistics'
import Applications from '../../components/Applications/Applications'
import Certifications from '../../components/Certifications/Certifications'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductionLines />
      <Statistics />
      <Applications />
      <Certifications />
      <Projects />
      <Contact />
    </>
  )
}
