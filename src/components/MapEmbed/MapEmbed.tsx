import { COMPANY_INFO } from '../../constants/company'

export function MapEmbed() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.mapsQuery)}&z=16&output=embed`

  return (
    <div className="overflow-hidden rounded-[16px] border border-border h-full min-h-[320px]">
      <iframe
        title="Localização da Castillo Reparação Automotiva"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
