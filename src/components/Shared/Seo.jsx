import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ALL_LANG_CODES, delocalizePath, localizePath, getLangFromPathname } from '../../i18n/langRoutes'
import { setJsonLd } from './jsonLd'

const SITE = 'https://probargfrp.com'
const ORG_ID = `${SITE}/#organization`
const WEBSITE_ID = `${SITE}/#website`
const LOGO_ID = `${SITE}/#logo`

const OG_LOCALES = {
  en: 'en_US', fr: 'fr_FR', es: 'es_ES', it: 'it_IT', pt: 'pt_PT', ar: 'ar_AR', ru: 'ru_RU',
}

const TOP_LEVEL_NAV_KEYS = {
  about: 'nav.about',
  'production-lines': 'nav.productionLines',
  applications: 'nav.applications',
  projects: 'nav.projects',
  contact: 'nav.contact',
}

// schema.org WebPage subtype per top-level page; detail pages (productionLineDetail.*,
// applicationDetail.*) resolve to ItemPage since each describes one specific item.
const PAGE_TYPE = {
  home: 'WebPage',
  about: 'AboutPage',
  productionLines: 'CollectionPage',
  applications: 'CollectionPage',
  projects: 'WebPage',
  contact: 'ContactPage',
}

function getPageType(page) {
  if (page.startsWith('productionLineDetail.') || page.startsWith('applicationDetail.')) return 'ItemPage'
  return PAGE_TYPE[page] || 'WebPage'
}

// Only pages with a real, page-specific photo get their own primaryImageOfPage — every
// other page honestly falls back to the brand logo rather than reusing an unrelated photo.
const PAGE_IMAGE = {
  home: '/images/product-10.webp',
  productionLines: '/images/product-10.webp',
  applications: '/images/project-11.webp',
}

function setMeta(selector, attr, value, createEl, attrs) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement(createEl)
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function Seo({ page }) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const lang = getLangFromPathname(location.pathname)
    const basePath = delocalizePath(location.pathname)

    const rawTitle = t(`seo.${page}.title`)
    const suffix = t('seo.titleSuffix')
    // Avoid duplicating the brand name when the base title already ends with it
    const title = rawTitle.includes('CBI Tunisia') ? rawTitle : rawTitle + suffix
    const description = t(`seo.${page}.description`)
    const keywords = t(`seo.${page}.keywords`)
    const url = `${SITE}${localizePath(basePath, lang)}`

    document.title = title

    // ── Standard meta ── (html lang/dir attributes are set in App.jsx)
    setMeta('meta[name="description"]', 'content', description, 'meta', { name: 'description' })
    setMeta('meta[name="keywords"]', 'content', keywords, 'meta', { name: 'keywords' })
    // Explicit even though "index, follow" is the default absent any directive — removes
    // any ambiguity for Search Console / third-party auditing tools.
    setMeta('meta[name="robots"]', 'content', 'index, follow', 'meta', { name: 'robots' })

    // ── Open Graph ──
    setMeta('meta[property="og:title"]', 'content', title, 'meta', { property: 'og:title' })
    setMeta('meta[property="og:description"]', 'content', description, 'meta', { property: 'og:description' })
    setMeta('meta[property="og:type"]', 'content', 'website', 'meta', { property: 'og:type' })
    setMeta('meta[property="og:url"]', 'content', url, 'meta', { property: 'og:url' })
    setMeta('meta[property="og:site_name"]', 'content', 'PROBAR by CBI Tunisia', 'meta', { property: 'og:site_name' })
    setMeta('meta[property="og:image"]', 'content', `${SITE}/images/probar-logo.png`, 'meta', { property: 'og:image' })
    setMeta('meta[property="og:image:width"]', 'content', '512', 'meta', { property: 'og:image:width' })
    setMeta('meta[property="og:image:height"]', 'content', '512', 'meta', { property: 'og:image:height' })
    setMeta('meta[property="og:locale"]', 'content', OG_LOCALES[lang] || 'en_US', 'meta', { property: 'og:locale' })

    // ── Twitter Card ──
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image', 'meta', { name: 'twitter:card' })
    setMeta('meta[name="twitter:title"]', 'content', title, 'meta', { name: 'twitter:title' })
    setMeta('meta[name="twitter:description"]', 'content', description, 'meta', { name: 'twitter:description' })
    setMeta('meta[name="twitter:image"]', 'content', `${SITE}/images/probar-logo.png`, 'meta', { name: 'twitter:image' })

    // ── Canonical ──
    setMeta('link[rel="canonical"]', 'href', url, 'link', { rel: 'canonical' })

    // ── hreflang alternates (one per language + x-default) ──
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
    ALL_LANG_CODES.forEach((code) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = code
      link.href = `${SITE}${localizePath(basePath, code)}`
      document.head.appendChild(link)
    })
    const xDefault = document.createElement('link')
    xDefault.rel = 'alternate'
    xDefault.hreflang = 'x-default'
    xDefault.href = `${SITE}${basePath}`
    document.head.appendChild(xDefault)

    // ── BreadcrumbList JSON-LD ──
    const segs = basePath.split('/').filter(Boolean)
    const pageTitle = rawTitle.split(' | ')[0]
    let acc = ''
    const items = [{ name: t('nav.home'), path: '/' }]
    segs.forEach((seg) => {
      acc += `/${seg}`
      const label = TOP_LEVEL_NAV_KEYS[seg] ? t(TOP_LEVEL_NAV_KEYS[seg]) : pageTitle
      items.push({ name: label, path: acc })
    })
    setJsonLd('breadcrumb-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: items.map((it, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: it.name,
        item: `${SITE}${localizePath(it.path, lang)}`,
      })),
    })

    // ── WebPage JSON-LD ── (ties this page to the sitewide WebSite/Organization entities
    // and the BreadcrumbList above via @id references, per Google's linked-entity guidance)
    const pageImagePath = PAGE_IMAGE[page]
    const primaryImage = pageImagePath
      ? { '@type': 'ImageObject', url: `${SITE}${pageImagePath}` }
      : { '@id': LOGO_ID }

    setJsonLd('webpage-jsonld', {
      '@context': 'https://schema.org',
      '@type': getPageType(page),
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      primaryImageOfPage: primaryImage,
      breadcrumb: { '@id': `${url}#breadcrumb` },
    })
  }, [page, t, i18n.language, location.pathname])

  return null
}
