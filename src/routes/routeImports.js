/* Single source of truth for the lazy-loaded page chunks: AppRouter's React.lazy() calls
   and the hover/focus prefetch helper both read from here, so the two can't drift apart. */
export const ROUTE_IMPORTS = {
  '/': () => import('../pages/Home/Home'),
  '/about': () => import('../pages/About/AboutPage'),
  '/production-lines': () => import('../pages/ProductionLines/ProductionLinesPage'),
  '/applications': () => import('../pages/Applications/ApplicationsPage'),
  '/projects': () => import('../pages/Projects/ProjectsPage'),
  '/contact': () => import('../pages/Contact/ContactPage'),
}

const prefetched = new Set()

/* Kicks off the chunk download ahead of navigation (on link hover/focus) so the click
   itself feels instant. Safe to call repeatedly — only fetches each chunk once. */
export function prefetchRoute(path) {
  if (prefetched.has(path) || !ROUTE_IMPORTS[path]) return
  prefetched.add(path)
  ROUTE_IMPORTS[path]().catch(() => prefetched.delete(path))
}
