import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contato = () => {
  return (
    <>
      <div id="contato" className="py-16 bg-orange-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Entre em contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Esquerda */}
            <div className="flex flex-col items-center text-center">
              <img src="/clauInteira.jpeg" alt="Dra. Claudia" className="w-72 h-96 rounded-4xl object-cover shadow-lg mb-6" />
              <p className="text-white italic">Sua mensagem é o primeiro passo. Ficarei feliz em conversar com você.</p>
              <p className="text-white mt-2">— Dra. Claudia Palma</p>
            </div>

            {/* Direita */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white py-8 shadow-inner rounded-4xl w-full">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
                      Fale comigo!
                    </h2>
                    <p className="text-lg text-orange-700 mb-6">
                      Aqui estão meus canais.
                    </p>

                    <div className="flex flex-col items-center gap-6">

                      {/* WhatsApp - PADRÃO */}
                      <div className="relative inline-block w-full max-w-xs md:max-w-md">
                        <div className="absolute inset-0 bg-red-400 rounded-full blur-xl animate-pulseBright"></div>
                        <a
                          href="https://wa.me/5571988232921"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center justify-center gap-2 md:gap-3 bg-white text-orange-700 
                         px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg 
                         shadow-lg hover:shadow-2xl transition-all duration-300 z-10 
                         hover:bg-orange-700 hover:text-white animate-pulseButton w-full"
                        >
                          <FaWhatsapp size={20} className="md:w-6 md:h-6" />
                          <span>(71) 98823-2921</span>
                        </a>
                      </div>

                      {/* E-mail - PADRÃO (corrigido) */}
                      <div className="relative inline-block w-full max-w-xs md:max-w-md">
                        <div className="absolute inset-0 bg-red-400 rounded-full blur-xl animate-pulseBright"></div>
                        <a
                          href="mailto:claudiapalma35@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center justify-center gap-2 md:gap-3 bg-white text-orange-700 
                         px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg 
                         shadow-lg hover:shadow-2xl transition-all duration-300 z-10 
                         hover:bg-orange-700 hover:text-white animate-pulseButton w-full"
                        >
                          <FaEnvelope size={20} className="md:w-6 md:h-6" />
                          <span>claudiapalma35@gmail.com</span>
                        </a>
                      </div>

                      {/* Linkedin - PADRÃO */}
                      <div className="relative inline-block w-full max-w-xs md:max-w-md">
                        <div className="absolute inset-0 bg-red-400 rounded-full blur-xl animate-pulseBright"></div>
                        <a
                          href="https://www.linkedin.com/in/claudia-palma-silva/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center justify-center gap-2 md:gap-3 bg-white text-orange-700 
                         px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg 
                         shadow-lg hover:shadow-2xl transition-all duration-300 z-10 
                         hover:bg-orange-700 hover:text-white animate-pulseButton w-full"
                        >
                          <FaLinkedin size={20} className="md:w-6 md:h-6" />
                          <span>in/claudia-palma-silva</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center text-orange-700 mt-8 mb-6">
        <p className="text-xl">
          Transformando vidas através de atendimento humanizado.
        </p>
      </div>
    </>
  )
}

export { Contato } 