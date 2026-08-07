// Single source of truth for URL-based language routing.
// English is the default/unprefixed language; the other 6 get a leading /xx segment
// so every language has its own crawlable, indexable, hreflang-able URL.
export const LANG_CODES = ['fr', 'es', 'it', 'pt', 'ar', 'ru']
export const ALL_LANG_CODES = ['en', ...LANG_CODES]

export function getLangFromPathname(pathname) {
  const seg = pathname.split('/')[1]
  return LANG_CODES.includes(seg) ? seg : 'en'
}

// Strips a leading language segment (if present), returning the unprefixed "base" path.
export function delocalizePath(pathname) {
  const seg = pathname.split('/')[1]
  if (LANG_CODES.includes(seg)) {
    const rest = pathname.slice(seg.length + 1)
    return rest === '' ? '/' : rest
  }
  return pathname
}

// Applies a language prefix to a base (unprefixed) path. English = no prefix.
export function localizePath(basePath, lang) {
  if (!LANG_CODES.includes(lang)) return basePath
  return basePath === '/' ? `/${lang}` : `/${lang}${basePath}`
}
