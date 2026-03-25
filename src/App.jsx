import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { Footer } from './components/footer'

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
        <Route index element={<Home />} />
        {/* <Route index element={<Home />} />
        <Route path="/sobre" element={<About />} />
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

