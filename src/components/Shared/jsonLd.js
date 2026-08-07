/* Shared helper for injecting/removing <script type="application/ld+json"> tags by id.
   Used by any component that needs to emit structured data tied to its own mount lifecycle
   (Seo, FAQ, Product schema on detail pages, etc.) so every caller stays consistent. */
export function setJsonLd(id, schema) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(schema)
}

export function removeJsonLd(id) {
  document.getElementById(id)?.remove()
}
