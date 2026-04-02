import { Navbar } from './components/navbar'
import { Inicio } from './components/home'
import { Footer } from './components/footer'
import { Sobre } from './components/sobre'
import { Empresas } from './components/empresas'
import { Contato } from './components/contato'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from 'react-router-dom'

const Layout = () => {
  return (
    <>
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
        {/* <Route index element={<Home />} />
        <Route path="/resumo" element={<Resumo />} />
        <Route path="/contato" element={<Contato />} /> */}
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )

}

export { App }

