import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Seo({ page }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const title = t(`seo.${page}.title`) + t('seo.titleSuffix')
    const description = t(`seo.${page}.description`)

    document.title = title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description)

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', description)
  }, [page, t, i18n.language])

  return null
}
