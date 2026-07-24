import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Button } from '../components/Button'
import { SERVICES } from '../constants/services'
import { ROUTES } from '../constants/routes'
import { ICON_MAP } from '../constants/iconMap'
import { useWhatsApp } from '../hooks/useWhatsApp'
import { COMPANY_INFO } from '../constants/company'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find((s) => s.id === slug)
  const { openWhatsApp } = useWhatsApp()

  if (!service) {
    return <Navigate to={ROUTES.services} replace />
  }

  const Icon = (ICON_MAP)[service.icon]

  return (
    <>
      <Seo
        title={`${service.title} em São Paulo | Castillo Reparação Automotiva`}
        description={`${service.shortDescription} Atendimento na Zona Norte de São Paulo, região da ${COMPANY_INFO.neighborhood}.`}
      />

      <section className="pt-36 pb-24 md:pt-44">
        <div className="container-page max-w-2xl">
          <Link
            to={ROUTES.services}
            className="inline-flex items-center gap-1.5 text-sm text-gray-light hover:text-orange-500 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Serviços
          </Link>

          <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-orange-500/10 text-orange-500">
            {Icon && <Icon className="h-7 w-7" />}
          </div>

          <h1 className="mt-6 text-[28px] md:text-[36px] font-bold text-white">{service.title}</h1>
          <p className="mt-4 text-base md:text-lg text-gray-light leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="mt-10 rounded-[16px] border border-border bg-surface p-7">
            <h2 className="text-sm font-semibold text-white mb-3">Como funciona o atendimento</h2>
            <p className="text-sm text-gray-light leading-relaxed">
              Envie fotos do veículo pelo WhatsApp e conte o que aconteceu. Nossa equipe analisa o caso e
              retorna com um orçamento detalhado e o prazo estimado, antes de qualquer serviço começar.
            </p>
          </div>

          <Button
            size="lg"
            className="mt-8"
            onClick={() => openWhatsApp(`Olá! Gostaria de um orçamento para ${service.title.toLowerCase()}.`)}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </section>
    </>
  )
}
