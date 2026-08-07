import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiPlus } from 'react-icons/fi'
import SectionTitle from '../Shared/SectionTitle'
import { stagger, fadeUp, viewportOnce } from '../Shared/AnimationVariants'
import { setJsonLd, removeJsonLd } from '../Shared/jsonLd'
import './FAQ.css'

const DEFAULT_FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'].map((key) => ({
  qKey: `faq.${key}`,
  aKey: `faq.a${key.slice(1)}`,
}))

/* Pass `items` (array of { qKey, aKey }) to render a page-specific set instead of the
   default global 7. Pass `eyebrow`/`title`/`subtitle` i18n keys to override the heading
   copy for that set. Omit both to keep the original sitewide FAQ unchanged. */
export default function FAQ({ items, eyebrowKey, titleKey, subtitleKey }) {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(0)
  const faqItems = items && items.length ? items : DEFAULT_FAQ_KEYS

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(({ qKey, aKey }) => ({
        '@type': 'Question',
        name: t(qKey),
        acceptedAnswer: { '@type': 'Answer', text: t(aKey) },
      })),
    }
    setJsonLd('faq-jsonld', schema)
    return () => removeJsonLd('faq-jsonld')
  }, [t, i18n.language, faqItems])

  return (
    <section className="ic-faq section-pad" id="faq">
      <div className="ic-container ic-faq__inner">
        <SectionTitle
          eyebrow={t(eyebrowKey || 'faq.eyebrow')}
          title={t(titleKey || 'faq.title')}
          subtitle={t(subtitleKey || 'faq.subtitle')}
          align="center"
        />

        <motion.div className="ic-faq__list" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger}>
          {faqItems.map(({ qKey, aKey }, i) => {
            const isOpen = open === i
            return (
              <motion.div key={qKey} variants={fadeUp} className={`ic-faq__item${isOpen ? ' ic-faq__item--open' : ''}`}>
                <button
                  className="ic-faq__question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{t(qKey)}</span>
                  <FiPlus className="ic-faq__icon" />
                </button>
                <div className="ic-faq__answer-wrap">
                  <p className="ic-faq__answer">{t(aKey)}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
