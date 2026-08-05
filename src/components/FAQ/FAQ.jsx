import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiPlus } from 'react-icons/fi'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, fadeUp, viewportOnce } from '../Shared/AnimationVariants'
import './FAQ.css'

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']

export default function FAQ() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(0)

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_KEYS.map((key) => ({
        '@type': 'Question',
        name: t(`faq.${key}`),
        acceptedAnswer: { '@type': 'Answer', text: t(`faq.a${key.slice(1)}`) },
      })),
    }
    let el = document.getElementById('faq-jsonld')
    if (!el) {
      el = document.createElement('script')
      el.id = 'faq-jsonld'
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
    return () => { el?.remove() }
  }, [t, i18n.language])

  return (
    <section className="ic-faq section-pad" id="faq">
      <div className="ic-container ic-faq__inner">
        <SectionTitle
          eyebrow={t('faq.eyebrow')}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          align="center"
        />

        <motion.div className="ic-faq__list" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
          {FAQ_KEYS.map((key, i) => {
            const isOpen = open === i
            return (
              <motion.div key={key} variants={fadeUp} className={`ic-faq__item${isOpen ? ' ic-faq__item--open' : ''}`}>
                <button
                  className="ic-faq__question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{t(`faq.${key}`)}</span>
                  <FiPlus className="ic-faq__icon" />
                </button>
                <div className="ic-faq__answer-wrap">
                  <p className="ic-faq__answer">{t(`faq.a${key.slice(1)}`)}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
