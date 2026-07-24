export const ROUTES = {
  home: '/',
  about: '/sobre',
  services: '/servicos',
  serviceDetail: (slug: string) => `/servicos/${slug}`,
  gallery: '/galeria',
  contact: '/contato',
  privacy: '/politica-de-privacidade',
} as const

export const MENU_ITEMS = [
  { label: 'Início', to: ROUTES.home },
  { label: 'Sobre', to: ROUTES.about },
  { label: 'Serviços', to: ROUTES.services },
  { label: 'Galeria', to: ROUTES.gallery },
  { label: 'Contato', to: ROUTES.contact },
] as const
