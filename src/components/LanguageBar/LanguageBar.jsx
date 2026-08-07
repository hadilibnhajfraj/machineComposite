import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { delocalizePath, localizePath } from '../../i18n/langRoutes'
import './LanguageBar.css'

const LANGUAGES = [
  { code: 'en', country: 'US', name: 'English' },
  { code: 'fr', country: 'FR', name: 'French' },
  { code: 'it', country: 'IT', name: 'Italian' },
  { code: 'es', country: 'ES', name: 'Spanish' },
  { code: 'pt', country: 'PT', name: 'Portuguese' },
  { code: 'ar', country: 'SA', name: 'Arabic' },
  { code: 'ru', country: 'RU', name: 'Russian' },
]

const SOCIALS = [
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/21623116224',
    label: 'WhatsApp'
  },
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/Probartunisia',
    label: 'Facebook'
  },
 {
  icon: FiMail,
  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=contact@probargfrp.com',
  label: 'Email'
},
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/@cbitunisia',
    label: 'YouTube'
  },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/composite-building-innovation/posts/?feedView=all',
    label: 'LinkedIn'
  }
];

export default function LanguageBar() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const changeLanguage = (code) => {
    // Navigate to the equivalent URL in the new language; App.jsx's location-watching
    // effect picks up the URL change and syncs i18n + localStorage from there.
    const basePath = delocalizePath(location.pathname)
    const newPath = localizePath(basePath, code)
    navigate(`${newPath}${location.search}${location.hash}`)
  }

  return (
    <div className="lang-bar" role="navigation" aria-label={t('common.languageSelector')}>
      <div className="ic-container lang-bar__inner">

        {/* Left spacer — keeps flags centered on desktop */}
        <div className="lang-bar__spacer" aria-hidden="true" />

        {/* Center: flag-only buttons */}
        <div className="lang-bar__flags" role="list">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="listitem"
              className={`lang-bar__flag${i18n.language === lang.code ? ' lang-bar__flag--active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
              title={lang.name}
              aria-label={`Switch to ${lang.name}`}
              aria-pressed={i18n.language === lang.code}
            >
              <ReactCountryFlag countryCode={lang.country} svg />
            </button>
          ))}
        </div>

        {/* Right: social icons */}
        <div className="lang-bar__socials">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="lang-bar__social"
              aria-label={label}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
