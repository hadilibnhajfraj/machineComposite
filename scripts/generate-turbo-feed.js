/*
 * Generates public/turbo.xml — a Yandex Turbo Pages RSS feed for the Russian-language
 * pages, built entirely from src/i18n/ru.json (the same, already-translated/approved
 * content the live React pages render — nothing new is authored here).
 *
 * This feed being valid does NOT make Turbo pages live: that still requires manually
 * adding/verifying the feed URL in Yandex Webmaster ("Turbo Pages" section), an account
 * action that can't be done from code. Run: node scripts/generate-turbo-feed.js
 */
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://www.cbi-tunisia.com'
const PUB_DATE = 'Thu, 06 Aug 2026 00:00:00 +0100' // matches sitemap.xml's LASTMOD; update both together

const ru = JSON.parse(readFileSync(resolve(__dirname, '../src/i18n/ru.json'), 'utf8'))

function esc(str) {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Rich items: the 6 production-line + 6 application detail pages, where ru.json carries
// full body copy (intro, process/why, challenges, FAQ) — the strongest Turbo candidates,
// since Turbo Pages are built for exactly this kind of standalone informational content.
function lineItem(key, slug) {
  const d = ru.lineDetail[key]
  const html = [
    `<h1>${esc(d.heroTitle)}</h1>`,
    `<p>${esc(d.introLead)}</p>`,
    `<h2>${esc(d.processTitle)}</h2>`,
    `<p>${esc(d.processPara1)}</p>`,
    `<p>${esc(d.processPara2)}</p>`,
    `<h2>${esc(d.philosophyTitle)}</h2>`,
    `<p>${esc(d.philosophyPara1)}</p>`,
    `<p>${esc(d.philosophyPara2)}</p>`,
    `<h2>${esc(d.faqSubtitle)}</h2>`,
    `<p><strong>${esc(d.faqQ1)}</strong></p>`,
    `<p>${esc(d.faqA1)}</p>`,
    `<p><strong>${esc(d.faqQ2)}</strong></p>`,
    `<p>${esc(d.faqA2)}</p>`,
  ].join('\n            ')
  return { link: `${SITE}/ru/production-lines/${slug}`, title: d.heroTitle, description: d.introLead, html }
}

function appItem(key, slug) {
  const d = ru.applicationDetail[key]
  const html = [
    `<h1>${esc(d.heroTitle)}</h1>`,
    `<p>${esc(d.introLead)}</p>`,
    `<h2>${esc(d.whyTitle)}</h2>`,
    `<p>${esc(d.whyPara1)}</p>`,
    `<p>${esc(d.whyPara2)}</p>`,
    `<h2>${esc(d.challengesTitle)}</h2>`,
    `<p>${esc(d.challengesPara1)}</p>`,
    `<p>${esc(d.challengesPara2)}</p>`,
    `<h2>${esc(d.faqSubtitle)}</h2>`,
    `<p><strong>${esc(d.faqQ1)}</strong></p>`,
    `<p>${esc(d.faqA1)}</p>`,
    `<p><strong>${esc(d.faqQ2)}</strong></p>`,
    `<p>${esc(d.faqA2)}</p>`,
  ].join('\n            ')
  return { link: `${SITE}/ru/applications/${slug}`, title: d.heroTitle, description: d.introLead, html }
}

// Simpler items: index/utility pages where ru.json only guarantees seo.title/description —
// still real, approved copy, just a shorter turbo:content block.
function simpleItem(pageKey, path) {
  const s = ru.seo[pageKey]
  const html = [`<h1>${esc(s.title.split(' | ')[0])}</h1>`, `<p>${esc(s.description)}</p>`].join('\n            ')
  return { link: `${SITE}/ru${path}`, title: s.title, description: s.description, html }
}

const LINE_SLUGS = { rebar: 'probar', mesh: 'promesh', bent: 'bent-elements', tank: 'composite-tank', pipe: 'composite-pipe', profiles: 'composite-profiles' }
const APP_SLUGS = { construction: 'urban-civil-construction', infrastructure: 'public-infrastructure-transport', roads: 'logistics-platforms', marine: 'coastal-marine-infrastructure', industrial: 'industrial-facilities', water: 'maintenance-sensitive-environments' }

const items = [
  simpleItem('home', ''),
  simpleItem('about', '/about'),
  simpleItem('productionLines', '/production-lines'),
  ...Object.entries(LINE_SLUGS).map(([key, slug]) => lineItem(key, slug)),
  simpleItem('applications', '/applications'),
  ...Object.entries(APP_SLUGS).map(([key, slug]) => appItem(key, slug)),
  simpleItem('projects', '/projects'),
  simpleItem('contact', '/contact'),
]

const itemsXml = items.map(({ link, title, description, html }) => [
  '    <item turbo="true">',
  `      <link>${esc(link)}</link>`,
  `      <turbo:source>${esc(link)}</turbo:source>`,
  `      <title>${esc(title)}</title>`,
  `      <description>${esc(description)}</description>`,
  `      <pubDate>${PUB_DATE}</pubDate>`,
  '      <turbo:content><![CDATA[',
  `            ${html}`,
  '      ]]></turbo:content>',
  '    </item>',
].join('\n')).join('\n')

const xml = `<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:turbo="http://turbo.yandex.ru" version="2.0">
  <channel>
    <title>PROBAR by CBI Tunisia</title>
    <link>${SITE}/ru</link>
    <description>${esc(ru.seo.home.description)}</description>
    <language>ru</language>
${itemsXml}
  </channel>
</rss>
`

writeFileSync(resolve(__dirname, '../public/turbo.xml'), xml, 'utf8')
console.log(`turbo.xml written: ${items.length} Russian-language items`)
