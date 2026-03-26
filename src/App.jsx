import { Navbar } from './components/navbar'
import { Inicio } from './components/home'
import { Footer } from './components/footer'
import { Sobre } from './components/sobre'

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
        {/* <Route index element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/formacao" element={<Formacao />} />
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

