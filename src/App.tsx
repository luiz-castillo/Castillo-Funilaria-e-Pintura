import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { router } from './routes/router'

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Analytics />
    </HelmetProvider>
  )
}

export default App
