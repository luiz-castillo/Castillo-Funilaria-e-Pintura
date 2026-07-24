import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('max-w-2xl mb-14', align === 'center' && 'mx-auto text-center')}
    >
      {eyebrow && (
        <span className="text-orange-500 text-sm font-semibold tracking-wide uppercase">
          {eyebrow}
        </span>
      )}
      <div className={cn('mt-3 h-[3px] w-10 rounded-full bg-orange-500', align === 'center' && 'mx-auto')} />
      <h2
        className={cn(
          'mt-4 text-[32px] md:text-[40px] font-bold text-balance',
          light ? 'text-white' : 'text-white',
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-gray-light text-base md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
