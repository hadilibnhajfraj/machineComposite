import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { LANG_CODES, getLangFromPathname } from '../../i18n/langRoutes'

// Drop-in replacement for react-router-dom's <Link> that automatically prefixes
// internal `to` paths with the current URL language segment, so navigating while
// on /fr/... stays on /fr/..., not silently back to the unprefixed English routes.
export default function Link({ to, ...props }) {
  const location = useLocation()
  const lang = getLangFromPathname(location.pathname)

  let href = to
  if (lang !== 'en' && typeof to === 'string' && to.startsWith('/')) {
    const toSeg = to.split('/')[1]
    // Don't double-prefix a path that's already language-prefixed
    if (!LANG_CODES.includes(toSeg)) {
      href = to === '/' ? `/${lang}` : `/${lang}${to}`
    }
  }

  return <RouterLink to={href} {...props} />
}
