import { SectionHeading } from '../../components/SectionHeading'
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider'
import type { BeforeAfterItem } from '../../types/service'
import antesFarol from '../assets/gallery/IMG-20260814-WA0011.jpg'
import depoisFarol from '../assets/gallery/IMG-20260814-WA0010.jpg'
import antesParachoque from '../assets/gallery/IMG-20260820-WA0004.jpg'
import depoisParachoque from '../assets/gallery/IMG-20260820-WA0000.jpg'

// O primeiro card já usa fotos reais enviadas pela Castillo.
// Os demais seguem como placeholder até novas fotos serem enviadas.
const PLACEHOLDER_PROJECTS: BeforeAfterItem[] = [
  {
    id: 'p1',
    vehicle: 'Ford KA',
    serviceType: 'Polimento dos Faróis + Recuperação e Pintura das portas do lado direito',
    description: 'Revitalização dos Faróis e recuperação das portas, com pintura.',
    before: antesFarol,
    after: depoisFarol,
  },
  {
    id: 'p2',
    vehicle: 'Toyota Corolla',
    serviceType: 'Troca do Para-choque',
    description: 'Troca do Para-choque após colisão frontal, com pintura completa do para-choque.',
    before: 'antesParachoque',
    after: 'depoisParachoque',
  },
  {
    id: 'p3',
    vehicle: 'Em breve',
    serviceType: 'Em breve',
    description: 'Em breve',
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
