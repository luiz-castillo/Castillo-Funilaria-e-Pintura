import { useEffect, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface CounterProps {
  value: number
  suffix?: string
}

export function Counter({ value, suffix = '' }: CounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 900
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(progress * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, value])

  return (
    <span ref={ref} className="text-gradient-orange text-4xl md:text-5xl font-extrabold">
      {display}
      {suffix}
    </span>
  )
}
