import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  FiLinkedin, FiFacebook, FiInstagram, FiYoutube,
  FiMapPin, FiPhone, FiMail, FiArrowRight,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const SOCIALS = [
  { icon: FiLinkedin,  href: '#', label: 'LinkedIn'  },
  { icon: FiFacebook,  href: '#', label: 'Facebook'  },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiYoutube,   href: '#', label: 'YouTube'   },
  { icon: FaWhatsapp,  href: '#', label: 'WhatsApp'  },
]

export default function Footer() {
  const { t } = useTranslation()

  const QUICK_LINKS = [
    { label: t('footer.homeLink'),       path: '/'        },
    { label: t('footer.aboutLink'),      path: '/about'   },
    { label: t('footer.productionLink'), path: '/products'},
    { label: t('footer.projectsLink'),   path: '/projects'},
    { label: t('footer.contactLink'),    path: '/contact' },
  ]

  const SOLUTIONS = [
    { label: t('footer.sol1'), path: '/products' },
    { label: t('footer.sol2'), path: '/products' },
    { label: t('footer.sol3'), path: '/products' },
    { label: t('footer.sol4'), path: '/products' },
    { label: t('footer.sol5'), path: '/products' },
    { label: t('footer.sol6'), path: '/products' },
  ]

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
              <img src="/images/probar-logo.png" alt="CBI Tunisia" className="ic-logo-img" draggable="false" />
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
                <span>CBI Tunisia,<br />Tunis, Tunisia</span>
              </li>
              <li className="ic-footer__contact-item">
                <FiPhone className="ic-footer__contact-icon" />
                <a href="tel:+21671000000">+216 71 000 000</a>
              </li>
              <li className="ic-footer__contact-item">
                <FiMail className="ic-footer__contact-icon" />
                <a href="mailto:contact@cbi-tunisia.com">contact@cbi-tunisia.com</a>
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
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
            <a href="#">{t('footer.certifications')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
