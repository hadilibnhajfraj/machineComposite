// Maps each production line to the applications it's most relevant to, and vice versa.
// ProBar/ProMesh are general-purpose GFRP reinforcement, relevant everywhere; the other
// four lines are cross-linked only to the applications their stated use case fits.
export const LINE_TO_APPS = {
  rebar:    ['construction', 'infrastructure', 'roads', 'marine', 'industrial', 'water'],
  mesh:     ['construction', 'infrastructure', 'roads', 'marine', 'industrial', 'water'],
  bent:     ['construction', 'industrial'],
  tank:     ['industrial', 'water'],
  pipe:     ['infrastructure', 'industrial'],
  profiles: ['construction', 'roads'],
}

export const APP_TO_LINES = Object.keys(LINE_TO_APPS).reduce((acc, lineKey) => {
  LINE_TO_APPS[lineKey].forEach((appKey) => {
    if (!acc[appKey]) acc[appKey] = []
    acc[appKey].push(lineKey)
  })
  return acc
}, {})
