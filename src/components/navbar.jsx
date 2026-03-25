import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerClass = "max-w-7xl mx-auto px-12 md:px-24 lg:px-32"

  const navItems = [
    { path: "/", label: "inicio" },
    { path: "/sobre", label: "sobre" },
    { path: "/projetos", label: "habilidades" },
    { path: "/formacao", label: "empresariais" },
    { path: "/resumo", label: "consultoria" },
    { path: "/contato", label: "contato" }
  ]
  return (
    <nav className="absolute top-8 left-0 right-0 z-50" >
      <div className={containerClass}>
        <div className="flex items-center h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none order-first"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className="hidden md:flex md:space-x-12">
            {navItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `uppercase text-sm lg:text-lg tracking-widest transition-colors
                    ${isActive ? "text-red-400" : "text-white "}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {isMenuOpen && (
            <div className="absolute top-24 left-0 bg-black/95 backdrop-blur-sm md:hidden w-64 border-r border-gray-800 shadow-xl">
              <ul className="flex flex-col items-center py-4 px-6 space-y-4">
                {navItems.map(item => (
                  <li key={item.path} className="w-full">
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `uppercase text-sm tracking-widest transition-colors block py-2 w-full text-center
                    ${isActive ? "text-red-400" : "text-white hover:text-red-400"}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}



export { Navbar }

