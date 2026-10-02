import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../../lib/analytics'

/**
 * Mounted once inside the router. This app's gtag config has
 * send_page_view disabled (see index.html), so this is what actually
 * reports page views — including client-side navigations, which gtag's
 * own automatic tracking would otherwise miss entirely.
 */
export function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  return null
}
