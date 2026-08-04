import { useLayoutEffect } from 'react'

const revealSelector = [
  '.about__description',
  '.about__collage',
  '.about__tag',
  '.portfolio__decoration',
  '.portfolio__heading',
  '.portfolio__project',
  '.footer__visual',
  '.footer__blog',
  '.footer__social',
  '.case-hero__image',
  '.case-section',
  '.case-design',
  '.case-gallery__item',
  '.case-next',
].join(', ')

function useScrollReveal() {
  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))

    if (elements.length === 0) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 45}ms`)
    })

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('scroll-reveal--visible'))

      return () => {
        elements.forEach((element) => {
          element.classList.remove('scroll-reveal', 'scroll-reveal--visible')
          element.style.removeProperty('--reveal-delay')
        })
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('scroll-reveal--visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()

      elements.forEach((element) => {
        element.classList.remove('scroll-reveal', 'scroll-reveal--visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])
}

export default useScrollReveal
