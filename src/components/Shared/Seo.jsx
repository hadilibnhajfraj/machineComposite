import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

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

  useEffect(() => {
    const baseTitle = t(`seo.${page}.title`)
    const suffix = t('seo.titleSuffix')
    // Avoid duplicating the brand name when the base title already ends with it
    const title = baseTitle.includes('CBI Tunisia') ? baseTitle : baseTitle + suffix
    const description = t(`seo.${page}.description`)
    const url = `https://www.cbi-tunisia.com${window.location.pathname}`

    document.title = title

    setMeta('meta[name="description"]', 'content', description, 'meta', { name: 'description' })
    setMeta('meta[property="og:title"]', 'content', title, 'meta', { property: 'og:title' })
    setMeta('meta[property="og:description"]', 'content', description, 'meta', { property: 'og:description' })
    setMeta('meta[property="og:type"]', 'content', 'website', 'meta', { property: 'og:type' })
    setMeta('meta[property="og:url"]', 'content', url, 'meta', { property: 'og:url' })
    setMeta('meta[property="og:image"]', 'content', 'https://www.cbi-tunisia.com/images/probar-logo.png', 'meta', { property: 'og:image' })
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image', 'meta', { name: 'twitter:card' })
    setMeta('link[rel="canonical"]', 'href', url, 'link', { rel: 'canonical' })
  }, [page, t, i18n.language])

  return null
}
