/*
 * Generates public/sitemap.xml from a single source of truth (PAGES below) instead of
 * hand-editing XML. Run with: node scripts/generate-sitemap.js
 *
 * LASTMOD: this is a static site with no CMS/database tracking real per-page edit
 * timestamps, so every URL shares one sitewide LASTMOD constant — update it (to the date
 * of the actual content change) whenever you edit page content, then re-run this script.
 * Do NOT wire this into every `npm run build` — that would stamp today's date on every
 * page regardless of whether it actually changed, which is exactly what Google's docs say
 * not to do with <lastmod>.
 */
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://www.cbi-tunisia.com'
const LANGS = ['en', 'fr', 'es', 'it', 'pt', 'ar', 'ru']
const LASTMOD = '2026-08-06' // last content change across the site (see note above)

// One row per unique page. priority/changefreq reflect how central and how often each
// page's content actually changes on this corporate/manufacturer site — not guesses.
const PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/production-lines', priority: '0.9', changefreq: 'monthly' },
  { path: '/production-lines/probar', priority: '0.8', changefreq: 'monthly' },
  { path: '/production-lines/promesh', priority: '0.8', changefreq: 'monthly' },
  { path: '/production-lines/bent-elements', priority: '0.7', changefreq: 'monthly' },
  { path: '/production-lines/composite-tank', priority: '0.7', changefreq: 'monthly' },
  { path: '/production-lines/composite-pipe', priority: '0.7', changefreq: 'monthly' },
  { path: '/production-lines/composite-profiles', priority: '0.7', changefreq: 'monthly' },
  { path: '/applications', priority: '0.9', changefreq: 'monthly' },
  { path: '/applications/urban-civil-construction', priority: '0.8', changefreq: 'monthly' },
  { path: '/applications/public-infrastructure-transport', priority: '0.8', changefreq: 'monthly' },
  { path: '/applications/logistics-platforms', priority: '0.8', changefreq: 'monthly' },
  { path: '/applications/coastal-marine-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { path: '/applications/industrial-facilities', priority: '0.8', changefreq: 'monthly' },
  { path: '/applications/maintenance-sensitive-environments', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.5', changefreq: 'yearly' },
]

function localize(path, lang) {
  if (lang === 'en') return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

function urlBlock({ path, priority, changefreq }) {
  return LANGS.map((lang) => {
    const loc = `${SITE}${localize(path, lang)}`
    const alternates = LANGS.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${localize(path, l)}" />`
    ).join('\n')
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${path}" />`
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${LASTMOD}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      alternates,
      xDefault,
      '  </url>',
    ].join('\n')
  }).join('\n')
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...PAGES.map(urlBlock),
  '</urlset>',
  '',
].join('\n')

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf8')

const urlCount = PAGES.length * LANGS.length
console.log(`sitemap.xml written: ${PAGES.length} pages × ${LANGS.length} languages = ${urlCount} URLs`)
