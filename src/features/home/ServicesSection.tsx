import { SectionHeading } from '../../components/SectionHeading'
import { ServiceCard } from '../../components/ServiceCard'
import { SERVICES } from '../../constants/services'

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-30">
      <div className="container-page">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços especializados em acabamento automotivo"
          subtitle="Do reparo pontual à recuperação estrutural completa — sempre com o mesmo padrão de precisão."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
