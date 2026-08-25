import { Seo } from '../components/Seo'
import { ContactSection } from '../features/home/ContactSection'

export function Contact() {
  return (
    <>
      <Seo
        title="Contato | Castillo Reparação Automotiva - Vila Nova Cachoeirinha, SP"
        description="Fale com a Castillo pelo WhatsApp (11) 98310-3910. Atendimento de segunda a sexta, das 8h às 18h, na Vila Nova Cachoeirinha, São Paulo."
      />
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  )
}
