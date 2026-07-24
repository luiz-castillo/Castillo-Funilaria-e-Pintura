import type { FaqItem, Testimonial } from '../types/service'

export const STATS = [
  { id: 'years', value: 40, suffix: '', label: 'Anos de experiência no mercado' },
  { id: 'satisfaction', value: 98, suffix: '%', label: 'Clientes satisfeitos' },
  { id: 'equipment', value: 100, suffix: '%', label: 'Lixamento a seco (sem poeira)' },
] as const

export interface Differential {
  id: string
  icon: string
  title: string
  description: string
}

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'experiencia',
    icon: 'Award',
    title: 'Quase 40 anos de profissão',
    description:
      'Quatro décadas de experiência prática significam reconhecer o problema certo na primeira análise — e evitar retrabalho.',
  },
  {
    id: 'equipamentos',
    icon: 'Gauge',
    title: 'Equipamentos Mirka e Sata',
    description:
      'Lixamento a seco Mirka, sem poeira no ambiente, e sistemas de pintura Sata para um acabamento de precisão de fábrica.',
  },
  {
    id: 'orcamento',
    icon: 'FileCheck2',
    title: 'Sistema próprio de orçamento',
    description:
      'Avaliação estruturada do veículo, sem "achismo" — você recebe um orçamento claro antes de aprovar qualquer serviço.',
  },
  {
    id: 'atendimento',
    icon: 'HeartHandshake',
    title: 'Atendimento humano e acolhedor',
    description:
      'Cuidamos do seu carro como se fosse nosso, com respeito e transparência do primeiro contato até a entrega.',
  },
  {
    id: 'organizacao',
    icon: 'Building2',
    title: 'Tecnologia, organização e limpeza',
    description:
      'Ambiente de trabalho organizado e processos padronizados — isso se reflete diretamente na qualidade do resultado final.',
  },
  {
    id: 'garantia',
    icon: 'ShieldCheck',
    title: 'Garantia de retrabalho',
    description:
      'Se algo relacionado ao serviço que realizamos apresentar defeito, você retorna e refazemos com prioridade e sem custo.',
  },
]

// Marcas atendidas — placeholder com as montadoras mais comuns no mercado
// brasileiro. Ajustar conforme preferência do cliente.
export const BRANDS = [
  'Toyota',
  'Honda',
  'Volkswagen',
  'Chevrolet',
  'Fiat',
  'Hyundai',
  'Jeep',
  'BMW',
  'Mercedes-Benz',
  'Audi',
]

// Depoimentos placeholder — substituir por avaliações reais (ex: Google Meu Negócio)
// assim que estiverem disponíveis.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Cliente Castillo',
    rating: 5,
    comment:
      'Atendimento diferenciado. Equipe sensacional e melhor qualidade. Preço Justo, trabalho impecável, entrega do serviço no prazo programado. Fizeram um serviço no meu carro, não tinha um detalhe para ser questionado, ficou original. Me surpreendeu.. Apenas gratidão.',
    date: '2025',
  },
  {
    id: 't2',
    name: 'Cliente Castillo',
    rating: 5,
    comment:
      'Serviço do Sérgio foi perfeito. Meu carro que é branco perolizado foi realizado perfeitamente. Serviço que recomendo e farei sempre que precisar. Atendimento muito bom, com informações no detalhe, sempre atencioso, passando orçamento prévio com todo detalhamento do seu carro.',
    date: '2026',
  },
  {
    id: 't3',
    name: 'Cliente Castillo',
    rating: 5,
    comment:
      'Fiz um serviço de funilaria e pintura com o Sérgio e ficou muito bom mesmo! O acabamento ficou ótimo, tudo bem feito e caprichado. Ele foi super prestativo, atencioso e explicou tudo direitinho. Dá pra ver que trabalha com responsabilidade. Recomendo sem dúvida!',
    date: '2026',
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Vocês atendem por seguradora?',
    answer:
      'Não trabalhamos com seguradoras. O atendimento da Castillo é particular e também para lojas de revenda de veículos.',
  },
  {
    id: 'f2',
    question: 'Quanto tempo demora o reparo?',
    answer:
      'O prazo depende da extensão do dano. Após a análise do veículo, você recebe um prazo estimado junto com o orçamento.',
  },
  {
    id: 'f3',
    question: 'Vocês oferecem garantia?',
    answer:
      'Sim. Se o serviço realizado por nós apresentar defeito, você retorna e refazemos com prioridade e sem custo adicional.',
  },
  {
    id: 'f4',
    question: 'Posso enviar fotos do veículo pelo WhatsApp?',
    answer:
      'Sim, esse é o jeito mais rápido de começar. Envie fotos do dano pelo WhatsApp e já adiantamos a avaliação inicial.',
  },
  {
    id: 'f5',
    question: 'Qual o horário de atendimento?',
    answer: 'Atendemos de segunda a sexta-feira, das 8h às 18h.',
  },
]
