import { useEffect, useRef, useState } from 'react'

function useProjectCopyVisibility() {
  const nextProjectRef = useRef<HTMLElement | null>(null)
  const [heroCopyVisible, setHeroCopyVisible] = useState(true)

  useEffect(() => {
    let frameId = 0

    const updateVisibility = () => {
      frameId = 0
      const nextProject = nextProjectRef.current

      setHeroCopyVisible(
        window.innerWidth <= 600 ||
          !nextProject ||
          nextProject.getBoundingClientRect().top >= window.innerHeight,
      )
    }

    const requestUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateVisibility)
      }
    }

    updateVisibility()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return { nextProjectRef, heroCopyVisible }
}

export default useProjectCopyVisibility
