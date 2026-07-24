import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone } from 'lucide-react'
import { InstagramIcon } from '../icons/InstagramIcon'
import { COMPANY_INFO } from '../../constants/company'
import { MENU_ITEMS, ROUTES } from '../../constants/routes'
import logo from '../../assets/logo/castillo-logo.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-black-950">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} alt="Castillo Reparação Automotiva" className="h-10 w-auto" />
          <p className="mt-3 text-sm text-gray max-w-xs">
            Reparação automotiva de alto padrão em {COMPANY_INFO.city} - {COMPANY_INFO.state}. Quase{' '}
            {COMPANY_INFO.yearsExperience} anos cuidando do seu veículo como se fosse nosso.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Navegação</h3>
          <ul className="space-y-3">
            {MENU_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-gray hover:text-orange-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Contato</h3>
          <ul className="space-y-3 text-sm text-gray">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-orange-500" />
              {COMPANY_INFO.whatsappDisplay}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-orange-500" />
              {COMPANY_INFO.address}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-orange-500" />
              {COMPANY_INFO.hours.days}, {COMPANY_INFO.hours.time}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Redes sociais</h3>
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray hover:text-orange-500"
          >
            <InstagramIcon className="h-4 w-4" />
            {COMPANY_INFO.instagram}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray">
          <span>© {year} {COMPANY_INFO.fullName}. Todos os direitos reservados.</span>
          <Link to={ROUTES.privacy} className="hover:text-orange-500">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
