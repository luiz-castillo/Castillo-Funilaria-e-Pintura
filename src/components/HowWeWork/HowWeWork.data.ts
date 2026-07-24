export interface WorkStep {
  id: string
  icon: string
  title: string
  description: string
}

export const WORK_STEPS: WorkStep[] = [
  {
    id: 'orcamento',
    icon: 'MessageCircle',
    title: 'Solicite o orçamento',
    description: 'Envie fotos do veículo pelo WhatsApp e conte o que aconteceu.',
  },
  {
    id: 'analise',
    icon: 'Search',
    title: 'Análise do veículo',
    description: 'Avaliamos o dano pessoalmente e montamos um orçamento detalhado.',
  },
  {
    id: 'aprovacao',
    icon: 'CheckCircle2',
    title: 'Aprovação',
    description: 'Você aprova o serviço e o prazo antes de qualquer trabalho começar.',
  },
  {
    id: 'execucao',
    icon: 'Hammer',
    title: 'Execução',
    description: 'Reparo executado com equipamentos Mirka e Sata e acabamento de precisão.',
  },
]
