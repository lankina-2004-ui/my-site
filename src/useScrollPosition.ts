import { useLayoutEffect, useRef } from 'react'

export default function useScrollPosition() {
  const previousRoute = useRef(`${window.location.pathname}${window.location.hash}`)

  useLayoutEffect(() => {
    const route = `${window.location.pathname}${window.location.hash}`
    const openProjectFromTop = previousRoute.current !== route &&
      /^#\/(gramy|my-sound|mysound|japan)$/.test(window.location.hash)
    previousRoute.current = route
    const key = `scroll-position:${route}`
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    let target = 0
    if (!openProjectFromTop) {
      try { target = Number(sessionStorage.getItem(key)) || 0 } catch { /* Storage can be unavailable. */ }
    }
    let restoring = true
    let frame = 0
    const started = performance.now()
    const restore = () => {
      window.scrollTo(0, target)
      const imagesReady = Array.from(document.images).every(image => image.complete)
      if ((Math.abs(window.scrollY - target) < 2 && imagesReady && document.fonts.status === 'loaded') || performance.now() - started > 5000) {
        restoring = false
      } else {
        frame = requestAnimationFrame(restore)
      }
    }
    frame = requestAnimationFrame(restore)
    const save = () => {
      if (restoring) return
      try { sessionStorage.setItem(key, String(window.scrollY)) } catch { /* Storage can be unavailable. */ }
    }
    window.addEventListener('scroll', save, { passive: true })
    window.addEventListener('pagehide', save)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', save)
      window.removeEventListener('pagehide', save)
      window.history.scrollRestoration = previousRestoration
    }
  }, [window.location.pathname, window.location.hash])
}
