import { FaBuilding, FaWarehouse, FaShieldAlt, FaIndustry, FaBolt, FaAnchor } from 'react-icons/fa'

export const APP_META = [
  { key: 'construction',   slug: 'urban-civil-construction',          icon: FaBuilding  },
  { key: 'infrastructure', slug: 'public-infrastructure-transport',   icon: FaBolt      },
  { key: 'roads',          slug: 'logistics-platforms',               icon: FaWarehouse },
  { key: 'marine',         slug: 'coastal-marine-infrastructure',     icon: FaAnchor    },
  { key: 'industrial',     slug: 'industrial-facilities',             icon: FaIndustry  },
  { key: 'water',          slug: 'maintenance-sensitive-environments',icon: FaShieldAlt },
]

export function getAppBySlug(slug) {
  return APP_META.find((a) => a.slug === slug)
}
