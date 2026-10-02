import { useCallback } from 'react'
import { buildWhatsAppLink } from '../constants/company'
import { trackEvent } from '../lib/analytics'

export function useWhatsApp() {
  const openWhatsApp = useCallback((message?: string) => {
    trackEvent('whatsapp_click', {
      page_path: window.location.pathname,
      message_preview: message ? message.slice(0, 60) : undefined,
    })
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }, [])

  return { openWhatsApp }
}
