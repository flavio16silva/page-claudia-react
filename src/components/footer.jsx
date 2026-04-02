import { contatos } from "../data/contatos"
import { FaDove, FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="bg-orange-700 text-white py-8 mt-12">
      <div className="container mx-auto px-4">

        {/* Frase de acolhimento */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-8">
          <FaDove className="text-2xl md:text-3xl shrink-0 text-white/80" />
          <p className="text-center text-xl md:text-2xl text-white max-w-2xl">
            Aqui, sua história encontra um espaço seguro para ser ouvida.
          </p>
        </div>

        <div className="border-t border-white/20 my-6"></div>

        {/* 4 COLUNAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* COLUNA 1 - Informações da profissional */}
          <div>
            <p className="text-base font-semibold">Dra. Claudia Palma</p>
            <p className="text-sm text-white/80 mt-1">Psicóloga</p>
            <p className="text-sm text-white/80">CRP: 03/17035</p>
          </div>

          {/* COLUNA 2 - Links da navbar */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white transition"
                >
                  Início
                </Link>
              </li>

              <li>
                <Link to="/sobre" className="text-sm text-white/80 hover:text-white transition cursor-pointer"
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link to="/empresas"
                  className="text-sm text-white/80 hover:text-white transition cursor-pointer"
                >
                  Empresas
                </Link>
              </li>

              <li>
                <Link to="/contato" className="text-sm text-white/80 hover:text-white transition cursor-pointer"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 - Ícones de contato */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contato</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {contatos.map(contato => (
                <a
                  key={contato.id}
                  href={contato.href}
                  className={`transition hover:scale-110 ${contato.cor}`}
                  aria-label={contato.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contato.icone size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 4 - Copyright e crédito */}
          <div>
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} - Direitos reservados
            </p>
            <div className="flex justify-center md:justify-start mt-2">
              <a
                href="https://www.linkedin.com/in/flavio-leite-silva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
              >
                Produzido por Flávio Silva
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer >
  )
}

export { Footer }