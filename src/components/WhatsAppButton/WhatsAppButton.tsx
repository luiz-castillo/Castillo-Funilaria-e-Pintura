import { motion } from 'framer-motion'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'

export function WhatsAppButton() {
  const { openWhatsApp } = useWhatsApp()

  return (
    <motion.button
      type="button"
      onClick={() => openWhatsApp()}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-black-950 shadow-[0_8px_24px_rgba(249,115,22,0.35)] md:h-16 md:w-16"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.button>
  )
}
