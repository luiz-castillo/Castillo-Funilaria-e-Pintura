import { motion } from 'framer-motion'
import { SectionHeading } from '../SectionHeading'
import { WORK_STEPS } from './HowWeWork.data'
import { ICON_MAP } from '../../constants/iconMap'

export function HowWeWork() {
  return (
    <section id="como-trabalhamos" className="py-24 md:py-30 bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Processo"
          title="Como trabalhamos"
          subtitle="Transparência do primeiro contato até a entrega do veículo."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_STEPS.map((step, index) => {
            const Icon = (ICON_MAP)[step.icon]
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-[16px] border-2 border-orange-500/50 bg-black-950 p-6"
              >
                <span className="absolute top-5 right-5 text-xs font-bold text-gray">
                  0{index + 1}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-orange-500/10 text-orange-500">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-light leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
