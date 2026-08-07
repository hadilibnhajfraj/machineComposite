import React, { useState, useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AppRouter from './routes/AppRouter'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LanguageBar from './components/LanguageBar/LanguageBar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { getLangFromPathname, delocalizePath } from './i18n/langRoutes'
import { loadLanguage } from './i18n'

/* Height of the fixed LanguageBar — keep in sync with LanguageBar.css */
const LANG_BAR_H = 40

function AppContent() {
  const location = useLocation()
  const [showGlobalNav, setShowGlobalNav] = useState(false)
  const { i18n } = useTranslation()

  /* The URL is the source of truth for language: /fr/*, /es/*, ... = that language,
     unprefixed = English. Keeps i18n state in sync with whatever URL was navigated to
     (including a hard refresh or a search-engine crawl of a localized URL directly). */
  useEffect(() => {
    const urlLang = getLangFromPathname(location.pathname)
    if (i18n.language !== urlLang) {
      // Ensure the language bundle is loaded before switching, so nothing ever
      // flashes raw i18n keys while a lazy-loaded translation file is in flight.
      loadLanguage(urlLang).then(() => i18n.changeLanguage(urlLang))
    }
    localStorage.setItem('cbi-lang', urlLang)
  }, [location.pathname])

  /* RTL switch for Arabic */
  useEffect(() => {
    document.documentElement.dir  = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  useEffect(() => {
    const isHome = delocalizePath(location.pathname) === '/'

    if (!isHome) {
      setShowGlobalNav(true)
      return () => {}
    }

    setShowGlobalNav(window.scrollY > window.innerHeight - 80)

    const handleScroll = () => {
      setShowGlobalNav(window.scrollY > window.innerHeight - 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  return (
    /* paddingTop = LanguageBar height so page content starts below it */
    <div style={{ paddingTop: LANG_BAR_H }}>
      <ScrollToTop />
      <LanguageBar />
      {showGlobalNav && <Navbar />}
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
