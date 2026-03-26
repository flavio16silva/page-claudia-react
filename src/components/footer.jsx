import { contatos } from "../data/contatos"
import { FaDove, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-white py-4 mt-12">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-8">
          <FaDove className="text-2xl md:text-3xl shrink-0 text-white/80" />
          <p className="text-center text-xl md:text-2xl md:text-center text-white max-w-2xl">
            Aqui, sua história encontra um espaço seguro para ser ouvida.
          </p>
        </div>

        <div className="border-t border-white/20 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-base font-semibold">Dra. Claudia Palma - Psicóloga</p>
            <p className="text-base text-white">CRP: 03/17035</p>
          </div>

          <div className="flex gap-6">
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

          <div className="text-center md:text-right">
            <p className="text-base text-white">
              © {new Date().getFullYear()} - Direitos reservados
            </p>
            <div className="flex justify-center md:justify-end mt-1">
              <a
                href="https://www.linkedin.com/in/flavio-leite-silva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:text-red-400 transition-colors flex items-center gap-1"
              >
                Produzido por Flávio Silva
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }