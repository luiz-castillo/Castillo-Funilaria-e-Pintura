declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Sends a GA4 page_view event. Safe to call even if gtag.js failed to load
 * (ad blocker, offline, etc.) — it just silently no-ops in that case.
 */
export function trackPageView(path: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  // page_title is deliberately omitted: several routes are lazy-loaded, so
  // document.title can still hold the previous page's value at this point.
  // gtag.js reads document.title itself when it actually dispatches the
  // hit (a moment later), by which point react-helmet-async has updated it.
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
  })
}

/**
 * Sends a custom GA4 event. Safe no-op if gtag.js isn't available.
 * Use for meaningful conversions — e.g. a WhatsApp CTA click.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
