import React from 'react'
import Link from '../Shared/LocalizedLink'
import { useTranslation } from 'react-i18next'
import {
  FiLinkedin, FiFacebook, FiYoutube,
  FiMapPin, FiPhone, FiMail, FiArrowRight,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { LINE_META } from '../ProductionLines/lineMeta'
import './Footer.css'

const SOCIALS = [
  { icon: FiLinkedin, href: 'https://www.linkedin.com/company/composite-building-innovation/posts/?feedView=all', label: 'LinkedIn' },
  { icon: FiFacebook, href: 'https://www.facebook.com/Probartunisia', label: 'Facebook' },
  { icon: FiYoutube,  href: 'https://www.youtube.com/@cbitunisia', label: 'YouTube' },
  { icon: FaWhatsapp, href: 'https://wa.me/21623116224', label: 'WhatsApp' },
]

export default function Footer() {
  const { t } = useTranslation()

  const QUICK_LINKS = [
    { label: t('footer.homeLink'),       path: '/'                },
    { label: t('footer.aboutLink'),      path: '/about'           },
    { label: t('footer.productionLink'), path: '/production-lines'},
    { label: t('footer.projectsLink'),   path: '/projects'        },
    { label: t('footer.contactLink'),    path: '/contact'         },
  ]

  const SOL_LABELS = [t('footer.sol1'), t('footer.sol2'), t('footer.sol3'), t('footer.sol4'), t('footer.sol5'), t('footer.sol6')]
  const SOLUTIONS = LINE_META.map((line, i) => ({
    label: SOL_LABELS[i],
    path: `/production-lines/${line.slug}`,
  }))

  return (
    <footer className="ic-footer">
      <div className="ic-footer__top-line" />

      {/* CTA Band */}
      <div className="ic-footer__cta-band">
        <div className="ic-container ic-footer__cta-inner">
          <div>
            <h3 className="ic-footer__cta-title">{t('footer.ctaTitle')}</h3>
            <p className="ic-footer__cta-sub">{t('footer.ctaSub')}</p>
          </div>
          <Link to="/contact" className="btn-primary ic-footer__cta-btn">
            {t('footer.requestQuote')} <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="ic-container ic-footer__main">
        <div className="ic-footer__grid">

          {/* Brand */}
          <div className="ic-footer__brand">
            <Link to="/" className="ic-footer__logo">
              <picture>
                <source srcSet="/images/probar-logo.webp" type="image/webp" />
                <img
                  src="/images/probar-logo.png"
                  alt={t('common.logoAlt')}
                  title={t('common.logoAlt')}
                  width={746}
                  height={334}
                  loading="lazy"
                  decoding="async"
                  className="ic-logo-img"
                  draggable="false"
                />
              </picture>
            </Link>
            <p className="ic-footer__brand-desc">{t('footer.brandDesc')}</p>
            <div className="ic-footer__socials">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="ic-footer__social" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="ic-footer__col">
            <h4 className="ic-footer__col-title">{t('footer.quickLinks')}</h4>
            <ul className="ic-footer__col-links">
              {QUICK_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="ic-footer__link">
                    <FiArrowRight className="ic-footer__link-arrow" />{l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="ic-footer__col">
            <h4 className="ic-footer__col-title">{t('footer.solutions')}</h4>
            <ul className="ic-footer__col-links">
              {SOLUTIONS.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="ic-footer__link">
                    <FiArrowRight className="ic-footer__link-arrow" />{l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="ic-footer__col">
            <h4 className="ic-footer__col-title">{t('footer.contactInfo')}</h4>
            <ul className="ic-footer__contact-list">
              <li className="ic-footer__contact-item">
                <FiMapPin className="ic-footer__contact-icon" />
                <span>{t('contact.hqValue')}</span>
              </li>
              <li className="ic-footer__contact-item">
                <FiPhone className="ic-footer__contact-icon" />
                <a href="tel:+21692776001">+216 92 776 001</a>
              </li>
              <li className="ic-footer__contact-item">
                <FiMail className="ic-footer__contact-icon" />
                <a href="mailto:contact@probargfrp.com">contact@probargfrp.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ic-footer__bottom">
        <div className="ic-container ic-footer__bottom-inner">
          <span>© {new Date().getFullYear()} {t('footer.copyright')}</span>
          <div className="ic-footer__legal">
            <Link to="/production-lines#certifications">{t('footer.certifications')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
