import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import antesFarol from '../assets/gallery/IMG-20260814-WA0011.jpg'
import depoisFarol from '../assets/gallery/IMG-20260814-WA0010.jpg'
import antesParachoque from '../assets/gallery/IMG-20260820-WA0004.jpg'
import depoisParachoque from '../assets/gallery/IMG-20260820-WA0000.jpg'

const PROJECTS = [
  { id: 'g1', vehicle: 'Ford KA', serviceType: 'Polimento dos Faróis+ Recuperação e Pintura das portas do lado direito', description: 'Revitalização dos Faróis e Recuperação das portas do lado direito.', before: antesFarol, after: depoisFarol },
  { id: 'g2', vehicle: 'Toyota Corolla', serviceType: 'Troca do Para-choque', description: 'Troca do Para-choque após colisão frontal, com pintura completa do Para-choque.', before: antesParachoque, after: depoisParachoque },
  { id: 'g3', vehicle: 'Em Breve', serviceType: 'Em Breve', description: 'Em Breve' },
  { id: 'g4', vehicle: 'Em Breve', serviceType: 'Em Breve', description: 'Em Breve.' },
  { id: 'g5', vehicle: 'Em Breve', serviceType: 'Em Breve', description: 'Em Breve.' },
  { id: 'g6', vehicle: 'Em Breve', serviceType: 'Em Breve', description: 'Em Breve.' },
]

export function Gallery() {
  return (
    <>
      <Seo
        title="Galeria de Antes e Depois | Castillo Reparação Automotiva"
        description="Veja exemplos de recuperação de veículos feitos pela Castillo em São Paulo. Arraste a barra para comparar antes e depois."
      />

      <section className="pt-36 pb-24 md:pt-44">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Galeria"
            title="Antes e Depois"
            subtitle="Em breve, atualizada com fotos reais dos veículos atendidos pela Castillo."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <BeforeAfterSlider
                key={project.id}
                vehicle={project.vehicle}
                serviceType={project.serviceType}
                description={project.description}
                beforeSrc={project.before}
                afterSrc={project.after}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
