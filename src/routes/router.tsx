import { lazy, Suspense, type ReactElement } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../pages/Home'
import { PageLoader } from '../components/PageLoader'
import { ROUTES } from '../constants/routes'

const About = lazy(() => import('../pages/About').then((m) => ({ default: m.About })))
const Services = lazy(() => import('../pages/Services').then((m) => ({ default: m.Services })))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail').then((m) => ({ default: m.ServiceDetail })))
const Gallery = lazy(() => import('../pages/Gallery').then((m) => ({ default: m.Gallery })))
const Contact = lazy(() => import('../pages/Contact').then((m) => ({ default: m.Contact })))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })))
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })))

function withSuspense(element: ReactElement) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <Home /> },
      { path: ROUTES.about, element: withSuspense(<About />) },
      { path: ROUTES.services, element: withSuspense(<Services />) },
      { path: '/servicos/:slug', element: withSuspense(<ServiceDetail />) },
      { path: ROUTES.gallery, element: withSuspense(<Gallery />) },
      { path: ROUTES.contact, element: withSuspense(<Contact />) },
      { path: ROUTES.privacy, element: withSuspense(<PrivacyPolicy />) },
      { path: '*', element: withSuspense(<NotFound />) },
    ],
  },
])
