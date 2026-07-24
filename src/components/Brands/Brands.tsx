import { SectionHeading } from '../SectionHeading'
import { BRANDS } from '../../constants/content'

export function Brands() {
  return (
    <section className="py-20 border-y border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Confiança"
          title="Marcas atendidas"
          subtitle="Atendemos veículos de todas as marcas, com o mesmo padrão de cuidado."
        />

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-sm md:text-base font-semibold tracking-wide text-gray hover:text-gray-light transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
