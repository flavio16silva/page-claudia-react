import { useEffect } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  useLocation
} from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Inicio } from './components/home'
import { Footer } from './components/footer'
import { Sobre } from './components/sobre'
import { Empresas } from './components/empresas'
import { Contato } from './components/contato'

// Rolar ao topo em cada página
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export { App }