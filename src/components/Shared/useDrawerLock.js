import { useEffect } from 'react'

/* Shared behavior for the mobile nav drawers (Navbar.jsx, Hero.jsx's HeroNav):
   - locks body scroll while the drawer is open, restoring the exact prior value on close
   - closes on Escape for keyboard users
   Both drawers already close on backdrop click (their own onClick handler) and on route
   change (their own location-watching effect) — this hook only owns scroll-lock + Escape. */
export default function useDrawerLock(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])
}
