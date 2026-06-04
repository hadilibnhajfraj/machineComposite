import React, { useState, useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useTranslation } from 'react-i18next'
import theme from './theme'
import AppRouter from './routes/AppRouter'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LanguageBar from './components/LanguageBar/LanguageBar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

/* Height of the fixed LanguageBar — keep in sync with LanguageBar.css */
const LANG_BAR_H = 40

function AppContent() {
  const location = useLocation()
  const [showGlobalNav, setShowGlobalNav] = useState(false)
  const { i18n } = useTranslation()

  /* RTL switch for Arabic */
  useEffect(() => {
    document.documentElement.dir  = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  useEffect(() => {
    const isHome = location.pathname === '/'

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}
