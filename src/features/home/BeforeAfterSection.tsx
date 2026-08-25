import { SectionHeading } from '../../components/SectionHeading'
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider'
import type { BeforeAfterItem } from '../../types/service'
import antesReal from '../../assets/gallery/antes-01.jpeg'
import depoisReal from '../../assets/gallery/depois-01.jpeg'

// O primeiro card já usa fotos reais enviadas pela Castillo.
// Os demais seguem como placeholder até novas fotos serem enviadas.
const PLACEHOLDER_PROJECTS: BeforeAfterItem[] = [
  {
    id: 'p1',
    vehicle: 'Toyota Yaris XL',
    serviceType: 'Funilaria + Pintura Localizada',
    description: 'Reparo do para-choque traseiro com pintura localizada e acabamento sem transição visível.',
    before: antesReal,
    after: depoisReal,
  },
  {
    id: 'p2',
    vehicle: 'SUV compacto',
    serviceType: 'Recuperação de Colisão',
    description: 'Recuperação estrutural após colisão frontal, com pintura completa do capô e para-choque.',
    before: '',
    after: '',
  },
  {
    id: 'p3',
    vehicle: 'Hatch',
    serviceType: 'Polimento + Faróis',
    description: 'Remoção de riscos na pintura e polimento dos faróis para recuperar transparência.',
    before: '',
    after: '',
  },
]

export function BeforeAfterSection() {
  return (
    <section id="antes-e-depois" className="py-24 md:py-30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Prova real"
          title="Antes e Depois"
          subtitle="Arraste a barra para ver a diferença. Em breve, com fotos reais dos veículos atendidos pela Castillo."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_PROJECTS.map((project) => (
            <BeforeAfterSlider
              key={project.id}
              vehicle={project.vehicle}
              serviceType={project.serviceType}
              description={project.description}
              beforeSrc={project.before || undefined}
              afterSrc={project.after || undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
