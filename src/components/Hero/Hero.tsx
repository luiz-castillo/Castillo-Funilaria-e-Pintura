import { HeroContent } from './HeroContent'
import { HeroImage } from './HeroImage'

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(600px circle at 15% 20%, rgba(249,115,22,0.08), transparent 60%)',
        }}
      />
      <div className="container-page relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  )
}
