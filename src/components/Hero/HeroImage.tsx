import { motion } from 'framer-motion'

/**
 * Original abstract illustration representing precision paintwork —
 * layered panels + a light sweep, standing in for a real vehicle photo
 * until the client provides their own gallery.
 */
export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
      className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none"
    >
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-surface to-black-950 border border-orange-500/20 overflow-hidden">
        <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#27272A" />
              <stop offset="100%" stopColor="#18181B" />
            </linearGradient>
          </defs>

          {/* layered panels evoking body panels being aligned */}
          <rect x="40" y="80" width="320" height="60" rx="14" fill="url(#panel)" stroke="#F97316" strokeOpacity="0.15" />
          <rect x="70" y="160" width="260" height="60" rx="14" fill="url(#panel)" stroke="#F97316" strokeOpacity="0.15" />
          <rect x="40" y="240" width="320" height="60" rx="14" fill="url(#panel)" stroke="#F97316" strokeOpacity="0.15" />
          <rect x="70" y="320" width="260" height="60" rx="14" fill="url(#panel)" stroke="#F97316" strokeOpacity="0.15" />

          {/* diagonal light sweep — the signature element */}
          <rect x="-40" y="0" width="140" height="560" fill="url(#sweep)" transform="rotate(18 200 250)" />

          {/* precision alignment marks */}
          <circle cx="60" cy="110" r="4" fill="#F97316" />
          <circle cx="340" cy="110" r="4" fill="#F97316" />
          <circle cx="90" cy="350" r="4" fill="#F97316" />
          <circle cx="310" cy="350" r="4" fill="#F97316" />

          {/* extra orange accent line — bottom edge */}
          <rect x="40" y="410" width="320" height="4" rx="2" fill="#F97316" fillOpacity="0.6" />
        </svg>
      </div>
    </motion.div>
  )
}
