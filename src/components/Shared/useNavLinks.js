import { useLocation } from 'react-router-dom'
    import { useTranslation } from 'react-i18next'

export default function useNavLinks() {
  const { t } = useTranslation()
  const location = useLocation()

  const links = [
    { label: t('nav.home'),            path: '/' },
    { label: t('nav.about'),           path: '/about' },
    { label: t('nav.productionLines'), path: '/production-lines' },
    { label: t('nav.applications'),    path: '/applications' },
    { label: t('nav.projects'),        path: '/projects' },
    { label: t('nav.contact'),         path: '/contact' },
  ]

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return { links, isActive }
}
