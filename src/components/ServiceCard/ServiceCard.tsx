import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../../types/service'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { ICON_MAP } from '../../constants/iconMap'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = (ICON_MAP)[service.icon]
  const { openWhatsApp } = useWhatsApp()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      className="group rounded-[16px] border-2 border-orange-500/50 bg-surface p-7 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
        {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-gray-light leading-relaxed">{service.shortDescription}</p>

      <button
        type="button"
        onClick={() => openWhatsApp(`Olá! Gostaria de um orçamento para ${service.title.toLowerCase()}.`)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 group-hover:gap-2.5 transition-all"
      >
        Solicitar orçamento
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  )
}
