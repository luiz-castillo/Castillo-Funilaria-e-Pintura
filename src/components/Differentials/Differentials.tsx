import { motion } from 'framer-motion'
import { SectionHeading } from '../SectionHeading'
import { DIFFERENTIALS } from '../../constants/content'
import { ICON_MAP } from '../../constants/iconMap'

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Por que a Castillo"
          title="Por que escolher a Castillo"
          subtitle="Não é só experiência. É a soma de processo, equipamento e cuidado com cada cliente."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = (ICON_MAP)[item.icon]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[16px] border-2 border-white/25 bg-surface p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-light leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
