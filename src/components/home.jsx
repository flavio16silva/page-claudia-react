import { cards } from "../data/cards"
import { frases } from "../data/frases"
import { escolha } from "../data/escolha"
import { FaWhatsapp } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <div className="bg-orange-700 py-3 pt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w5xl mx-auto">

            <div className="flex-1 texte-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Claudia Palma
              </h2>
              <p className="text-white mb-6">CRP: 00.000</p>

              <div className="bg-red-50 p-5 rounded-xl mb-6">
                <p className="text-lg md:text-xl text-red-700 italic">
                  Como é difícil começar, mas como é fácil conseguir quando você não está sozinho(a).
                </p>
              </div>

              <p className="text-white leading-relaxed text-justify mb-4">
                Acredito que cada pessoa tem dentro de si a força para se transformar.
                Minha missão é caminhar ao seu lado, oferecendo um espaço seguro para
                que você possa se reconhecer, se acolher e construir uma vida mais leve.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white ring-2 ring-red-200 mb-4 ">
                <img
                  src="/clau_foto.png"
                  alt="Dra. Claudia Palma"
                  className="w-full h-full object-cover animate-breathingZoom"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white py-12 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Pronto para dar o primeiro passo?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Agende sua conversa e comece sua jornada.
            </p>

            <div className="flex justify-center">

              <div className="relative inline-block">
                {/* Fundo pulsante */}
                <div className="absolute inset-0 bg-red-400 rounded-full blur-xl animate-pulseBright"></div>

                {/* Botão principal */}
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 bg-red-400 text-white px-8 py-4 rounded-full 
                     font-semibold text-lg shadow-xl hover:shadow-2xl 
                     transition-all duration-300 z-10 hover:bg-orange-700
                     animate-pulseButton"
                >
                  {/* Ícone WhatsApp */}
                  <FaWhatsapp size={24} />
                  <span>Agende sua conversa</span>
                </a>
              </div>
            </div>

            {/* Texto adicional */}
            <p className="text-sm text-gray-500 mt-6">
              Atendimento presencial e online • Primeira conversa sem compromisso
            </p>

          </div>
        </div>
      </div>

      <div id="mural" className="py-5 pt-32 bg-orange-700">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">
            Você não precisa enfrentar isso sozinho(a)!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map(card => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 md:opacity-0 md:group-hover:opacity-100 
                transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xl md:text-2xl font-bold text-center px-4 
                  transform transition-transform duration-300 md:group-hover:scale-105">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {frases.map(frase => (
              <div key={frase.id}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-102 hover:-translate-y-1 transition-all duration-500 ease-out border border-gray-100 flex flex-col h-full"
              >
                <p className="text-gray-700 text-lg text-justify italic mb-4 grow">
                  {frase.texto}
                </p>
                <p className="text-gray-500 text-sm font-semibold text-right pt-4">
                  - {frase.autor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orange-700 py-4">
        <div className="container mx-auto px-4">
          <p className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12 mt-10">
            Por que caminhar comigo?
          </p>

          {/* GRID DOS CARDS - 4 CARDS EM 2 COLUNAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {escolha.map(item => (
              <div
                key={item.id}
                className="bg-orange-700 p-6 rounded-xl 
                  transition-all duration-400 ease-out 
                  hover:shadow-xl hover:bg-red-300 
                  text-center border-2 border-white/50">
                <item.icone className="text-4xl text-white mb-2" />
                <h3 className="text-xl text-white font-bold mb-6">{item.title}</h3>
                <p className="text-white">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-12 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Estou aqui para ajudar você.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fale, desabafe, pense, supere seus desafios.
            </p>

            <div className="flex justify-center">

              <div className="relative inline-block">
                {/* Fundo pulsante */}
                <div className="absolute inset-0 bg-red-500 rounded-full blur-xl"></div>

                {/* Botão principal */}
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 bg-red-400 text-white px-8 py-4 rounded-full 
                     font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-orange-700
                     transition-all duration-300 z-10
                     animate-pulseButton"
                >
                  {/* Ícone WhatsApp */}
                  <FaWhatsapp size={24} />
                  <span>Ainda com dúvida? Vamos conversar!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }