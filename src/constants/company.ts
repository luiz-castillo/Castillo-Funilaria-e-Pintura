export const COMPANY_INFO = {
  name: 'Castillo',
  fullName: 'Castillo Reparação Automotiva',
  yearsExperience: 40,
  city: 'São Paulo',
  state: 'SP',
  neighborhood: 'Vila Nova Cachoeirinha',
  address: 'Rua Nicolau Tolentino de Almeida, 85 - Vila Nova Cachoeirinha, São Paulo - SP, 02671-020',
  zip: '02671-020',
  whatsapp: '5511983103910',
  whatsappDisplay: '(11) 98310-3910',
  instagram: '@castilho1975',
  instagramUrl: 'https://instagram.com/castilho1975',
  hours: {
    days: 'Segunda a sexta-feira',
    time: '8h às 18h',
  },
  mapsQuery: 'Rua Nicolau Tolentino de Almeida, 85, Vila Nova Cachoeirinha, São Paulo - SP, 02671-020',
} as const

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site e gostaria de solicitar um orçamento para o meu veículo.'

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`
}
