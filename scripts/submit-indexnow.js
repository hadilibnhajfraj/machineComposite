/*
 * Pings IndexNow (the protocol Yandex, Bing, Seznam and Naver all consume) with every URL
 * in sitemap.xml, so those engines re-crawl the site promptly instead of waiting for their
 * next scheduled pass. No account/verification needed — just the key file already published
 * at public/<key>.txt, which proves domain ownership by being hosted on the site itself.
 *
 * Run this AFTER a real deploy (it needs the live site to be reachable), e.g. as a post-
 * deploy CI step whenever content changes: node scripts/submit-indexnow.js
 */
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://www.cbi-tunisia.com'
const KEY = 'e10e2b61f7c4569958590b332821c28b' // must match public/<KEY>.txt

const sitemap = readFileSync(resolve(__dirname, '../public/sitemap.xml'), 'utf8')
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])

const body = {
  host: new URL(SITE).host,
  key: KEY,
  keyLocation: `${SITE}/${KEY}.txt`,
  urlList,
}

const res = await fetch('https://yandex.com/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
})

console.log(`IndexNow: submitted ${urlList.length} URLs — status ${res.status} ${res.statusText}`)
