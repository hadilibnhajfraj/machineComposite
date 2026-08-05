export const LINE_META = [
  { id: 1, key: 'rebar',    slug: 'probar',              gradient: 'linear-gradient(145deg, #0d0d0d 0%, #1e1507 50%, #2a1e08 100%)', pattern: 'diagonal', tag: 'GFRP'     },
  { id: 2, key: 'mesh',     slug: 'promesh',              gradient: 'linear-gradient(145deg, #0d0d0d 0%, #0f1a12 50%, #162211 100%)', pattern: 'grid',     tag: 'Mesh'     },
  { id: 3, key: 'bent',     slug: 'bent-elements',        gradient: 'linear-gradient(145deg, #0d0d0d 0%, #1a1a1a 50%, #222222 100%)', pattern: 'hex',      tag: 'Bent'     },
  { id: 4, key: 'tank',     slug: 'composite-tank',       gradient: 'linear-gradient(145deg, #0d0d0d 0%, #0d1a1f 50%, #0d2226 100%)', pattern: 'dots',     tag: 'Tank'     },
  { id: 5, key: 'pipe',     slug: 'composite-pipe',       gradient: 'linear-gradient(145deg, #0d0d0d 0%, #1a0f0d 50%, #221513 100%)', pattern: 'circles',  tag: 'Pipe'     },
  { id: 6, key: 'profiles', slug: 'composite-profiles',   gradient: 'linear-gradient(145deg, #0d0d0d 0%, #0f0d1a 50%, #171525 100%)', pattern: 'lines',    tag: 'Profiles' },
]

export function getLineBySlug(slug) {
  return LINE_META.find((l) => l.slug === slug)
}
