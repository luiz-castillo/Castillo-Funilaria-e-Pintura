import { Link } from 'react-router-dom'
import { CarFront } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Button } from '../components/Button'
import { ROUTES } from '../constants/routes'

export function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada | Castillo Reparação Automotiva" description="Página não encontrada." />
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container-page text-center max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 mb-6">
            <CarFront className="h-8 w-8" />
          </div>
          <h1 className="text-5xl font-extrabold text-white">404</h1>
          <p className="mt-4 text-base text-gray-light">
            Essa página saiu de rota. Vamos te levar de volta ao caminho certo.
          </p>
          <Link to={ROUTES.home} className="inline-block mt-8">
            <Button size="lg">Voltar para o início</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
