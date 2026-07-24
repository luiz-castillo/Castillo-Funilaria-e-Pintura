import { useRef, useState, useCallback } from 'react'
import { GripVertical } from 'lucide-react'
import type { BeforeAfterSliderProps } from './BeforeAfterSlider.types'

export function BeforeAfterSlider({ vehicle, serviceType, description, beforeSrc, afterSrc }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as Element).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => {
    dragging.current = false
  }

  return (
    <div className="rounded-[16px] border-2 border-white/25 bg-surface overflow-hidden">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative aspect-[4/3] w-full select-none cursor-ew-resize touch-none"
      >
        {/* DEPOIS — camada base */}
        <div className="absolute inset-0">
          {afterSrc ? (
            <img src={afterSrc} alt={`${vehicle} depois do serviço`} className="h-full w-full object-cover" draggable={false} />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-black-900 via-surface to-black-950 flex items-center justify-center">
              <span className="text-gray text-sm tracking-wide">FOTO DEPOIS (em breve)</span>
            </div>
          )}
          <span className="absolute top-4 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-black-950">
            DEPOIS
          </span>
        </div>

        {/* ANTES — camada recortada pela posição do slider */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          {beforeSrc ? (
            <img src={beforeSrc} alt={`${vehicle} antes do serviço`} className="h-full w-full object-cover grayscale" draggable={false} />
          ) : (
            <div className="h-full w-full bg-black-950 flex items-center justify-center border-r border-border">
              <span className="text-gray text-sm tracking-wide">FOTO ANTES (em breve)</span>
            </div>
          )}
          <span className="absolute top-4 left-4 rounded-full border border-border bg-black-950/80 px-3 py-1 text-xs font-bold text-white">
            ANTES
          </span>
        </div>

        {/* handle */}
        <div className="absolute inset-y-0 w-0.5 bg-orange-500" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 shadow-lg">
            <GripVertical className="h-4 w-4 text-black-950" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm font-semibold text-white">{vehicle}</p>
        <p className="text-xs text-orange-500 mt-0.5">{serviceType}</p>
        <p className="text-sm text-gray-light mt-2">{description}</p>
      </div>
    </div>
  )
}
