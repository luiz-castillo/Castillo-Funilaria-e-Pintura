import type { Service } from '../types/service'

export const SERVICES: Service[] = [
  {
    id: 'funilaria',
    icon: 'Wrench',
    title: 'Funilaria',
    shortDescription: 'Correção de amassados, alinhamento de estrutura e restauração da carroceria com precisão milimétrica.',
  },
  {
    id: 'recuperacao-de-colisoes',
    icon: 'ShieldAlert',
    title: 'Recuperação de Colisões',
    shortDescription: 'Diagnóstico completo e reparo estrutural para devolver o veículo às condições originais de fábrica.',
  },
  {
    id: 'pintura-completa',
    icon: 'SprayCan',
    title: 'Pintura Geral / Completa',
    shortDescription: 'Repintura total com cabine climatizada e cor idêntica à original de fábrica.',
  },
  {
    id: 'pintura-localizada',
    icon: 'Paintbrush',
    title: 'Pintura Localizada',
    shortDescription: 'Reparo pontual em para-lamas, portas e para-choques sem repintar o veículo inteiro.',
  },
  {
    id: 'preparo-de-superficie',
    icon: 'Layers',
    title: 'Preparo de Superfície',
    shortDescription: 'Lixamento a seco com equipamentos Mirka — sem poeira, sem contaminação, acabamento perfeito.',
  },
  {
    id: 'polimento',
    icon: 'Sparkles',
    title: 'Polimento Automotivo',
    shortDescription: 'Remoção de riscos e oxidação com equipamentos Sata, devolvendo o brilho original da pintura.',
  },
  {
    id: 'polimento-de-farois',
    icon: 'Lightbulb',
    title: 'Polimento de Faróis',
    shortDescription: 'Remoção do amarelamento e opacidade, recuperando transparência e segurança na iluminação.',
  },
  {
    id: 'substituicao-de-pecas',
    icon: 'PackageCheck',
    title: 'Substituição de Peças',
    shortDescription: 'Troca de componentes originais ou compatíveis com ajuste e acabamento de fábrica.',
  },
  {
    id: 'revitalizacao-de-para-choques',
    icon: 'CarFront',
    title: 'Revitalização de Para-choques',
    shortDescription: 'Reparo e revitalização de para-choques riscados, trincados ou amassados.',
  },
]
