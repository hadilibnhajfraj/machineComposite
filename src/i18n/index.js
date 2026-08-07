import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLangFromPathname } from './langRoutes'

// Each language file is ~85–150KB of JSON. Loading all 7 upfront (previous approach)
// meant every visitor downloaded ~730KB of translation data regardless of which one
// language they need. Load only what's actually needed, on demand, instead.
const loaders = {
  en: () => import('./en.json'),
  fr: () => import('./fr.json'),
  es: () => import('./es.json'),
  it: () => import('./it.json'),
  pt: () => import('./pt.json'),
  ar: () => import('./ar.json'),
  ru: () => import('./ru.json'),
}

const loadedLangs = new Set()

export async function loadLanguage(lang) {
  if (loadedLangs.has(lang) || !loaders[lang]) return
  const mod = await loaders[lang]()
  i18n.addResourceBundle(lang, 'translation', mod.default, true, true)
  loadedLangs.add(lang)
}

// The URL is the source of truth for language (see langRoutes.js).
const initialLang = getLangFromPathname(window.location.pathname)

i18n
  .use(initReactI18next)
  .init({
    resources: {},
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  })

// Resolves once the initial language (and English, needed for fallbackLng) are loaded —
// main.jsx waits on this before the first render so nothing renders with missing keys.
export const i18nReady = (async () => {
  await loadLanguage(initialLang)
  if (initialLang !== 'en') await loadLanguage('en')
})()

export default i18n
