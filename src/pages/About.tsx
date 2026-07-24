import { motion } from 'framer-motion'
import { Award, HeartHandshake, ShieldCheck } from 'lucide-react'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'
import { STATS } from '../constants/content'
import { COMPANY_INFO } from '../constants/company'

export function About() {
  return (
    <>
      <Seo
        title="Sobre a Castillo | Funilaria e Pintura em Vila Nova Cachoeirinha, São Paulo"
        description="Conheça a Castillo Reparação Automotiva: quase 40 anos de experiência em funilaria e pintura na Vila Nova Cachoeirinha, Zona Norte de São Paulo."
      />

      <section className="pt-36 pb-20 md:pt-44">
        <div className="container-page max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-500 text-sm font-semibold tracking-wide uppercase">
              Sobre a Castillo
            </span>
            <h1 className="mt-3 text-[32px] md:text-[44px] font-bold text-white text-balance">
              Por que somos <span className="text-gradient-orange">diferentes</span> de uma oficina comum
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-light leading-relaxed">
              A Castillo Reparação Automotiva atua em {COMPANY_INFO.city} - {COMPANY_INFO.state} há quase{' '}
              {COMPANY_INFO.yearsExperience} anos, especializada em funilaria, pintura automotiva e recuperação
              de colisões. Não tratamos o seu carro como mais um número: cada veículo é reparado com o mesmo
              cuidado que teríamos com o nosso próprio.
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-light leading-relaxed">
              Atendimento particular e para lojas de revenda, com um sistema próprio de orçamento — sem
              achismo — e equipamentos Mirka (lixamento a seco, sem poeira) e Sata para um acabamento de
              precisão em cada etapa do processo.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.id} className="rounded-[16px] border border-border bg-surface p-6 text-center">
                <p className="text-gradient-orange text-3xl font-extrabold">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm text-gray-light">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-start gap-3">
              <Award className="h-6 w-6 text-orange-500" />
              <p className="text-sm text-gray-light">
                Quase 40 anos de experiência prática em funilaria e pintura.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <HeartHandshake className="h-6 w-6 text-orange-500" />
              <p className="text-sm text-gray-light">
                Atendimento humano, transparente e acolhedor do início ao fim.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-orange-500" />
              <p className="text-sm text-gray-light">
                Garantia de retrabalho sem custo em qualquer serviço realizado por nós.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page max-w-3xl">
          <SectionHeading align="left" title="Onde estamos" />
          <p className="text-base text-gray-light leading-relaxed">
            Atendemos a região da {COMPANY_INFO.neighborhood} e toda a Zona Norte de São Paulo, no endereço{' '}
            {COMPANY_INFO.address}, de {COMPANY_INFO.hours.days.toLowerCase()} das {COMPANY_INFO.hours.time}.
          </p>
        </div>
      </section>
    </>
  )
}
