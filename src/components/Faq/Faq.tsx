import { SectionHeading } from '../SectionHeading'
import { FAQ_ITEMS } from '../../constants/content'
import { FaqAccordionItem } from './FaqAccordionItem'

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-30">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" align="left" />
        <div>
          {FAQ_ITEMS.map((item) => (
            <FaqAccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
