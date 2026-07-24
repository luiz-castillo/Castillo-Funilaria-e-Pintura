import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { SERVICES } from '../constants/services'
import { ROUTES } from '../constants/routes'
import { ICON_MAP } from '../constants/iconMap'

export function Services() {
  return (
    <>
      <Seo
        title="Serviços | Funilaria e Pintura Automotiva em São Paulo | Castillo"
        description="Funilaria, pintura completa, pintura localizada, polimento e recuperação de colisões na Zona Norte de São Paulo. Conheça os serviços da Castillo."
      />

      <section className="pt-36 pb-24 md:pt-44">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Serviços"
            title="Tudo que a Castillo faz pelo seu veículo"
            subtitle="Do reparo pontual à recuperação estrutural completa, sempre com o mesmo padrão de acabamento."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = (ICON_MAP)[service.icon]
              return (
                <Link
                  key={service.id}
                  to={ROUTES.serviceDetail(service.id)}
                  className="group rounded-[16px] border border-border bg-surface p-7 transition-all duration-300 hover:border-orange-500/60 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-white">{service.title}</h2>
                  <p className="mt-2 text-sm text-gray-light leading-relaxed">{service.shortDescription}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 group-hover:gap-2.5 transition-all">
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
