import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import antesReal from '../assets/gallery/antes-01.jpeg'
import depoisReal from '../assets/gallery/depois-01.jpeg'

const PROJECTS = [
  { id: 'g1', vehicle: 'Toyota Yaris XL', serviceType: 'Funilaria + Pintura Localizada', description: 'Reparo do para-choque traseiro com pintura sem transição visível.', before: antesReal, after: depoisReal },
  { id: 'g2', vehicle: 'SUV compacto', serviceType: 'Recuperação de Colisão', description: 'Recuperação estrutural após colisão frontal.' },
  { id: 'g3', vehicle: 'Hatch', serviceType: 'Polimento + Faróis', description: 'Remoção de riscos e polimento de faróis.' },
  { id: 'g4', vehicle: 'Picape', serviceType: 'Pintura Completa', description: 'Repintura total com cor idêntica à original de fábrica.' },
  { id: 'g5', vehicle: 'Sedã premium', serviceType: 'Revitalização de Para-choque', description: 'Reparo de para-choque trincado e revitalização do acabamento.' },
  { id: 'g6', vehicle: 'Hatch premium', serviceType: 'Substituição de Peças', description: 'Troca de componentes com ajuste e acabamento de fábrica.' },
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
