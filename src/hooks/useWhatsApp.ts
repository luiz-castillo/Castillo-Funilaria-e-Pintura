import { useCallback } from 'react'
import { buildWhatsAppLink } from '../constants/company'

export function useWhatsApp() {
  const openWhatsApp = useCallback((message?: string) => {
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }, [])

  return { openWhatsApp }
}
