import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU_ITEMS, ROUTES } from '../../constants/routes'
import { Button } from '../Button'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { cn } from '../../utils/cn'
import logo from '../../assets/logo/castillo-logo.png'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openWhatsApp } = useWhatsApp()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'bg-black-950/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent',
      )}
    >
      <div className="container-page flex h-20 md:h-24 items-center justify-between">
        <Link to={ROUTES.home} className="flex items-center" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="Castillo Reparação Automotiva" className="h-9 md:h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'group relative py-1 text-sm font-medium text-gray-light transition-colors hover:text-orange-500',
                  isActive && 'text-orange-500',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-300 ease-out group-hover:scale-x-100',
                      isActive && 'scale-x-100',
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="md" onClick={() => openWhatsApp()}>
            Solicitar Orçamento
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden relative z-20 text-white"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden fixed inset-x-0 top-52 bottom-0 z-50 bg-black/30 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
              className="container-page flex h-full flex-col justify-center gap-8 pb-20"
            >
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'text-3xl font-semibold text-white transition-colors hover:text-orange-500',
                        isActive && 'text-orange-500',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              <Button
                size="lg"
                onClick={() => {
                  setMobileOpen(false)
                  openWhatsApp()
                }}
                className="mt-4 w-full"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
