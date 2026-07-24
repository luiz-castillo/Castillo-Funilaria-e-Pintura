import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Button } from '../Button'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { scrollToSection } from '../../utils/scrollToSection'
import { COMPANY_INFO } from '../../constants/company'

export function HeroContent() {
  const { openWhatsApp } = useWhatsApp()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-xl"
    >
      <div className="flex items-center gap-1.5 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
        ))}
        <span className="ml-2 text-sm text-gray-light">
          Quase {COMPANY_INFO.yearsExperience} anos de experiência
        </span>
      </div>

      <h1 className="text-[32px] leading-[1.1] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-extrabold text-white text-balance">
        Devolvemos a beleza do seu carro com precisão de quem faz isso há{' '}
        <span className="text-gradient-orange">quase 40 anos</span>.
      </h1>

      <p className="mt-6 text-base md:text-lg text-gray-light max-w-md">
        Funilaria, pintura e recuperação de colisões em {COMPANY_INFO.city}, com equipamentos Mirka
        e Sata e garantia em cada serviço.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row gap-4">
        <Button size="lg" onClick={() => openWhatsApp()}>
          Solicitar Orçamento
        </Button>
        <Button size="lg" variant="secondary" onClick={() => scrollToSection('antes-e-depois')}>
          Ver Antes e Depois
        </Button>
      </div>
    </motion.div>
  )
}
