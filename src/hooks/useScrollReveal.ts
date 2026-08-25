import { useEffect, useRef, useState } from 'react'

interface Options {
  threshold?: number
  once?: boolean
}

/**
 * Reveals content once it enters the viewport.
 * Keeps entry/exit animation logic out of individual section components.
 */
export function useScrollReveal<T extends HTMLElement>({ threshold = 0.15, once = true }: Options = {}) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
