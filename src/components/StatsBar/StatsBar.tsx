import { STATS } from '../../constants/content'
import { Counter } from './Counter'

export function StatsBar() {
  return (
    <section className="relative border-y border-orange-500/25 bg-surface/40 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: 'radial-gradient(500px circle at 50% 0%, rgba(249,115,22,0.06), transparent 70%)' }}
      />
      <div className="container-page relative grid grid-cols-1 sm:grid-cols-3 gap-10 py-14 text-center">
        {STATS.map((stat) => (
          <div key={stat.id}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-gray-light">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
