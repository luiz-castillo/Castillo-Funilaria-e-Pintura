import { motion } from 'framer-motion'
import { Star, UserCircle2 } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'
import { TESTIMONIALS } from '../../constants/content'

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-30 bg-surface/30">
      <div className="container-page">
        <SectionHeading eyebrow="Depoimentos" title="Posso confiar na Castillo?" />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[16px] border-2 border-orange-500/50 bg-black-950 p-7"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-light leading-relaxed">{t.comment}</p>
              <div className="mt-6 flex items-center gap-3">
                <UserCircle2 className="h-9 w-9 text-gray" />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray">{t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
