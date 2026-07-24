import { Seo } from '../components/Seo'
import { COMPANY_INFO } from '../constants/company'

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Política de Privacidade | Castillo Reparação Automotiva"
        description="Política de privacidade da Castillo Reparação Automotiva."
      />

      <section className="pt-36 pb-24 md:pt-44">
        <div className="container-page max-w-2xl prose-invert">
          <h1 className="text-[28px] md:text-[36px] font-bold text-white mb-8">
            Política de Privacidade
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-light leading-relaxed">
            <p>
              A {COMPANY_INFO.fullName} respeita a privacidade de quem visita este site. Este documento
              explica, de forma simples, quais informações podem ser coletadas e como são utilizadas.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Quais dados coletamos</h2>
              <p>
                Este site não possui formulário de contato. O único canal de comunicação é o WhatsApp,
                através do qual você compartilha voluntariamente as informações necessárias para solicitar
                um orçamento (como fotos do veículo e dados de contato).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Como usamos essas informações</h2>
              <p>
                As informações enviadas por WhatsApp são usadas exclusivamente para avaliar o veículo,
                elaborar orçamentos e prestar o serviço solicitado. Não compartilhamos seus dados com
                terceiros para fins de marketing.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Cookies e navegação</h2>
              <p>
                Este site pode utilizar cookies técnicos para funcionamento básico e, futuramente, ferramentas
                de análise de tráfego, com o único objetivo de entender e melhorar a experiência de navegação.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Contato</h2>
              <p>
                Dúvidas sobre esta política podem ser enviadas pelo WhatsApp {COMPANY_INFO.whatsappDisplay}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
