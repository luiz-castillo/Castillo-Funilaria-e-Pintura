import { Hero } from '../components/Hero'
import { StatsBar } from '../components/StatsBar'
import { HowWeWork } from '../components/HowWeWork'
import { Differentials } from '../components/Differentials'
import { Brands } from '../components/Brands'
import { Testimonials } from '../components/Testimonials'
import { Faq } from '../components/Faq'
import { ServicesSection } from '../features/home/ServicesSection'
import { BeforeAfterSection } from '../features/home/BeforeAfterSection'
import { ContactSection } from '../features/home/ContactSection'
import { Seo } from '../components/Seo'

export function Home() {
  return (
    <>
      <Seo
        title="Castillo Reparação Automotiva | Funilaria e Pintura Premium em São Paulo"
        description="Funilaria, pintura automotiva e recuperação de colisões em São Paulo - SP. Quase 40 anos de experiência, equipamentos Mirka e Sata, garantia em cada serviço."
      />
      <Hero />
      <StatsBar />
      <ServicesSection />
      <BeforeAfterSection />
      <HowWeWork />
      <Differentials />
      <Brands />
      <Testimonials />
      <Faq />
      <ContactSection />
    </>
  )
}
