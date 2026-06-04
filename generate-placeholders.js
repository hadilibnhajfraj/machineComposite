// Run once with: node generate-placeholders.js
// Generates SVG placeholder images in public/images/
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, 'public', 'images')

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

const colors = [
  ['#0D1F3C', '#1565C0'],
  ['#0A2840', '#0288D1'],
  ['#0A1F2E', '#0097A7'],
  ['#112240', '#1976D2'],
  ['#0D1F3C', '#42A5F5'],
  ['#0A2840', '#1565C0'],
]

const images = [
  { name: 'project-1', label: 'Résidentiel', icon: '🏗️' },
  { name: 'project-2', label: 'Infrastructure', icon: '🌉' },
  { name: 'project-3', label: 'Industriel', icon: '🏭' },
  { name: 'project-4', label: 'Transport', icon: '🚇' },
  { name: 'project-5', label: 'Maritime', icon: '⚓' },
  { name: 'project-6', label: 'Hôtellerie', icon: '🏨' },
  { name: 'product-1', label: 'Coffrage', icon: '🔩' },
  { name: 'product-2', label: 'Levage', icon: '🏗️' },
  { name: 'product-3', label: 'Outillage', icon: '🔧' },
  { name: 'product-4', label: 'Automatisation', icon: '⚙️' },
  { name: 'product-5', label: 'Coffrage', icon: '🔩' },
  { name: 'product-6', label: 'Levage', icon: '🚛' },
  { name: 'about-main', label: 'À Propos', icon: '🏢' },
  { name: 'avatar-1', label: 'Client', icon: '👤' },
  { name: 'avatar-2', label: 'Client', icon: '👤' },
  { name: 'avatar-3', label: 'Client', icon: '👤' },
  { name: 'avatar-4', label: 'Client', icon: '👤' },
]

images.forEach((img, i) => {
  const [bg1, accent] = colors[i % colors.length]
  const isAvatar = img.name.startsWith('avatar')
  const w = isAvatar ? 120 : 800
  const h = isAvatar ? 120 : 500

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${accent}22"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${accent}" stroke-width="0.4" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  <text x="${w/2}" y="${h/2 - 16}" font-size="${isAvatar ? 40 : 64}" text-anchor="middle" dominant-baseline="middle">${img.icon}</text>
  <text x="${w/2}" y="${h/2 + (isAvatar ? 28 : 52)}" font-family="Arial,sans-serif" font-size="${isAvatar ? 11 : 18}" font-weight="600" fill="${accent}" text-anchor="middle" opacity="0.9">${img.label}</text>
</svg>`

  fs.writeFileSync(path.join(dir, `${img.name}.jpg`), svg)
  console.log(`✓ ${img.name}.jpg`)
})

console.log('\n✅ Toutes les images générées dans public/images/')
