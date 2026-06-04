import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHero from '../../components/Shared/PageHero'
import Statistics from '../../components/Statistics/Statistics'
import Contact from '../../components/Contact/Contact'
import { fadeUp, fadeLeft, stagger, viewportOnce } from '../../components/Shared/AnimationVariants'
import './AboutPage.css'

const TIMELINE = [
  { year: '2009', title: 'Foundation', desc: 'CBI Tunisia founded by a team of composite engineering specialists with a focus on GFRP production technology in Tunis, Tunisia.' },
  { year: '2011', title: 'First GFRP Production Line', desc: 'Commissioned the first GFRP rebar production line, serving North African construction and infrastructure markets.' },
  { year: '2014', title: 'ISO 9001 Certification', desc: 'Achieved ISO 9001:2015 certification and expanded composite production line operations to 15+ countries.' },
  { year: '2016', title: 'International Expansion', desc: 'Delivered first major turnkey production line projects to Middle East and European clients, establishing global presence.' },
  { year: '2019', title: 'Technology Advancement', desc: 'Launched advanced GFRP mesh and bent elements production line technologies, expanding the CBI product portfolio.' },
  { year: '2022', title: 'Global Leadership', desc: 'Recognized as a leading composite technology provider; serving 40+ countries with 100+ industrial production lines delivered worldwide.' },
]

const VALUES = [
  { title: 'Innovation', desc: 'Continuous R&D investment in next-generation composite materials and automated manufacturing process technologies.' },
  { title: 'Quality', desc: 'Every CBI production system meets international standards ISO, ASTM, and GOST, validated by rigorous in-house testing.' },
  { title: 'Partnership', desc: 'Long-term client relationships backed by comprehensive technical support, commissioning, and operator training programs.' },
  { title: 'Sustainability', desc: 'GFRP composite materials eliminate corrosion, reducing maintenance costs and extending infrastructure service life by decades.' },
]

const BREADCRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'About' },
]

export default function AboutPage() {
  return (
    <div className="ic-about-page">
      <PageHero
        image="/images/heroes/about.jpg"
        subtitle="About CBI Tunisia"
        title="Engineering The Future Of Composite Manufacturing"
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── Mission ── */}
      <section className="ic-ap-mission section-pad">
        <div className="ic-container ic-ap-mission__inner">
          <motion.div
            className="ic-ap-mission__copy"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeLeft}
          >
            <div className="accent-bar"><span /><em>Our Mission</em></div>
            <h2 className="ic-ap-mission__heading">
              Advancing the World's<br />
              <span style={{ color: 'var(--orange)' }}>Composite Construction</span>
            </h2>
            <p>
              Our mission is to engineer, manufacture, and commission high-performance composite
              production systems — delivering GFRP and composite manufacturing technologies that
              set the standard for quality and durability in international markets.
            </p>
            <p>
              CBI Tunisia partners with manufacturers, engineering firms, and construction companies
              to advance industrial production through advanced composite technology. Every
              turnkey production line we deliver is backed by comprehensive technical support and training.
            </p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '16px' }}>
              Work With Us <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="ic-ap-mission__values"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={stagger}
          >
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="ic-ap-value">
                <strong>{v.title}</strong>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="ic-ap-timeline section-pad" style={{ background: 'var(--black)' }}>
        <div className="ic-container">
          <motion.div
            className="ic-ap-timeline__header"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            <div className="accent-bar" style={{ justifyContent: 'center' }}>
              <span /><em>Company History</em>
            </div>
            <h2 className="ic-ap-timeline__title">15 YEARS OF INNOVATION</h2>
          </motion.div>

          <div className="ic-ap-timeline__track">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                className={`ic-ap-timeline__item${i % 2 === 0 ? '' : ' ic-ap-timeline__item--right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="ic-ap-timeline__card">
                  <span className="ic-ap-timeline__year">{item.year}</span>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
                <div className="ic-ap-timeline__dot" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Statistics />
      <Contact />
    </div>
  )
}
