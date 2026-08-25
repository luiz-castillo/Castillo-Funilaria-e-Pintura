import { MessageCircle, Clock, MapPin } from 'lucide-react'
import { InstagramIcon } from '../../components/icons/InstagramIcon'
import { SectionHeading } from '../../components/SectionHeading'
import { Button } from '../../components/Button'
import { MapEmbed } from '../../components/MapEmbed'
import { COMPANY_INFO } from '../../constants/company'
import { useWhatsApp } from '../../hooks/useWhatsApp'

export function ContactSection() {
  const { openWhatsApp } = useWhatsApp()

  return (
    <section id="contato" className="py-24 md:py-30 bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contato"
          title="Como fazer meu orçamento?"
          subtitle="Fale direto com a gente pelo WhatsApp — é o jeito mais rápido de começar."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[16px] border border-border bg-black-950 p-8 flex flex-col gap-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-gray-light">{COMPANY_INFO.whatsappDisplay}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Endereço</p>
                <p className="text-sm text-gray-light">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Horário</p>
                <p className="text-sm text-gray-light">
                  {COMPANY_INFO.hours.days}, {COMPANY_INFO.hours.time}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
                <InstagramIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Instagram</p>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-light hover:text-orange-500"
                >
                  {COMPANY_INFO.instagram}
                </a>
              </div>
            </div>

            <Button size="lg" onClick={() => openWhatsApp()} className="mt-2 w-full">
              Solicitar Orçamento pelo WhatsApp
            </Button>
          </div>

          <MapEmbed />
        </div>
      </div>
    </section>
  )
}
