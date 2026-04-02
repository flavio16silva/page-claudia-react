import {
  FaWhatsapp,
  FaSmile,
  FaCalendarAlt,
  FaUsers,
  FaHeart,
  FaStethoscope,
  FaLeaf
} from 'react-icons/fa'

const Sobre = () => {
  return (
    <>
      {/* SEÇÃO SOBRE MIM */}
      <div id="sobre" className="py-16 bg-orange-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* COLUNA 1 - Jornal */}
            <div className="md:w-1/4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                Olá, <br />
                Sou Claudia <br />
                Palma <br />
              </h1>
            </div>

            {/* COLUNA 2 */}
            <div className="md:w-1/3">
              <div className="relative">
                <span className="text-[120px] font-bold text-white float-left leading-[0.8] mr-3 mt-1">
                  P
                </span>
                <p className="text-lg text-white leading-relaxed mb-4 text-justify mt-10">
                  sicóloga dedicada ao fortalecimento do bem-estar emocional e ao desenvolvimento do equilíbrio psicológico, ajudando você a enfrentar os desafios da vida com mais resiliência.
                </p>
              </div>
              <p className="text-lg text-white leading-relaxed mb-4 text-justify">
                Realizo as avaliações psicológicas e desenvolvo programas de capacitação personalizados, voltados para o aprimoramento de habilidades interpessoais e a criação de ambientes de trabalho mais saudáveis e produtivos.
              </p>

              <p className="text-lg text-white leading-relaxed mb-4 text-justify md:text-justify">
                Minha dedicação às pessoas vai além da escuta. Utilizo técnicas e instrumentos, baseados em evidências científicas, para compreender a fundo suas necessidades mais internas. Cada ferramenta é escolhida com rigor, garantindo um acompanhamento preciso e eficaz, onde você se sente seguro para se abrir e transformar.
              </p>
            </div>

            {/* COLUNA 3 */}
            <div className="md:w-1/3">
              <div className="h-10 md:h-8 "></div>
              <p className="text-lg text-white leading-relaxed mb-4 text-justify md:text-justify">
                Como uma palestrante motivacional, compartilho conhecimentos sobre inteligência emocional, superação e liderança, inspirando pessoas e equipes a atingirem seu pleno potencial.
              </p>
              <p className="text-lg text-white leading-relaxed mb-4 text-justify md:text-justify">
                Minha abordagem é acolhedora e personalizada, respeitando o tempo e as necessidades de cada pessoa que confia em mim sua melhor jornada de autoconhecimento.
              </p>
              <p className="text-lg text-white leading-relaxed mb-4 text-justify md:text-justify">
                Tenho aptidão para identificar os perfis comportamentais e as necessidades que estão ocultas, conectando pessoas ao seu potencial. No ambiente corporativo, essa habilidade se traduz em produtividade real: equipes mais alinhadas, comunicação eficiente e resultados que nascem do bem-estar coletivo. Empresas que investem em pessoas colhem equipes mais fortes e sustentáveis. E isso fortalece laços e pessoas.
              </p>
            </div>
          </div>

          {/*Saiba Mais */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => {
                const section = document.getElementById('habilidades')
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg transition-colors 
              hover:bg-orange-600 hover:text-white cursor-pointer animate-pulseButton"
            >
              Saiba Mais!
              <span className="text-lg">↓</span>
            </button>
          </div>

        </div>
      </div >

      <div className="bg-white py-12 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              Vamos caminhar juntos?
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
                  href="https://wa.me/5571988232921"
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

      {/* Habilidades */}
      <div id="habilidades" className="py-16 bg-orange-700">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Habilidades
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">

            {/* Card 1 - Pesquisa de Clima */}
            <div className="hover:-translate-y-1 transition-all duration-300 ">
              <div className="aspect-square w-96 overflow-hidden mx-auto
              hover:transition-transform duration-500 group-hover:scale-110
              shadow-md hover:shadow-xl">
                <img
                  src="/servicos/empresaEscritorios.jpg"
                  alt="Empresas e Escritórios"
                  className="w-96 h-96 object-cover"
                />
              </div>
              <div className="p-6 text-center w-96 mx-auto">
                <h4 className="text-xl font-bold text-white mb-3">
                  Pesquisa de Clima
                </h4>
                <p className="text-white leading-relaxed text-justify">
                  A pesquisa de clima organizacional é crucial para compreender a percepção dos colaboradores sobre o ambiente de trabalho, identificando áreas de melhoria como comunicação e motivação. Isso permite desenvolver estratégias que aumentam a satisfação e a produtividade.
                </p>
              </div>
            </div>

            {/* Card 2 - Avaliação Psicológica */}
            <div className="hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-square w-96 overflow-hidden mx-auto
              hover:transition-transform duration-500 group-hover:scale-110 shadow-md hover:shadow-xl">
                <img
                  src="/servicos/porteArmas.jpg"
                  alt="Avaliação para Posse de Armas"
                  className="w-96 h-96 object-cover"
                />
              </div>
              <div className="p-6 text-center w-96 mx-auto">
                <h4 className="text-xl font-bold text-white mb-3">
                  Avaliação Psicológica
                </h4>
                <p className="text-white leading-relaxed text-justify">
                  Realizo avaliações psicológicas para investigar a aptidão psicológica e mental de indivíduos que buscam o manuseio de armas de fogo. Utilizo técnicas, mecanismos e instrumentos específicos garantindo que a responsabilidade seja atendida.
                </p>
              </div>
            </div>

            {/* Card 3 - Recrutamento e Seleção */}
            <div className="hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-square w-96 overflow-hidden mx-auto
              hover:transition-transform duration-500 group-hover:scale-110 shadow-md hover:shadow-xl">
                <img
                  src="/servicos/recSel.jpg"
                  alt="Recrutamento e Seleção"
                  className="w-96 h-96 object-cover"
                />
              </div>
              <div className="p-6 text-center w-96 mx-auto">
                <h4 className="text-xl font-bold text-white mb-3">
                  Recrutamento e Seleção
                </h4>
                <p className="text-white leading-relaxed text-justify">
                  Identificar candidatos alinhados não apenas com as habilidades técnicas mas também com a cultura e valores da empresa. Contribuindo na construção de ambientes de trabalho coesos e produtivos.
                </p>
              </div>
            </div>

            {/* Card 4 - Psicoterapia */}
            <div className="hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-square w-96 overflow-hidden mx-auto
              hover:transition-transform duration-500 group-hover:scale-110 shadow-md hover:shadow-xl">
                <img
                  src="/servicos/psicoterapia.png"
                  alt="Psicoterapia"
                  className="w-96 h-96 object-cover"
                />
              </div>
              <div className="p-6 text-center w-96 mx-auto">
                <h4 className="text-xl font-bold text-white mb-3">
                  Psicoterapia
                </h4>
                <p className="text-white leading-relaxed text-justify">
                  As palavras se tornam pontes para o autoconhecimento, guiando jornadas de transformação e crescimento interior. Na escuta atenta, a alma encontra espaço para desvelar suas narrativas e cicatrizar suas feridas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Caminhos a seguir */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-orange-700 mb-10">
            Caminho do Acolhimento
          </h3>
          <p className="text-xl text-center text-orange-700 font-bold mb-6">Trilha da nossa jornada para seu autoconhecimento:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

            {/* Card 1: Emoções */}
            <div className="bg-orange-700 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl p-6 text-center border border-white backdrop-blur-sm">
              <FaSmile className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-white font-medium">Emoções</p>
            </div>

            {/* Card 2: Rotina */}
            <div className="bg-orange-700 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl p-6 text-center border border-white/20 backdrop-blur-sm">
              <FaCalendarAlt className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-white font-medium">Rotina</p>
            </div>

            {/* Card 3: Relacionamentos */}
            <div className="bg-orange-700 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl p-6 text-center border border-white/20 backdrop-blur-sm">
              <FaUsers className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-white font-medium">Relacionamentos</p>
            </div>

            {/* Card 4: Aprender a se amar */}
            <div className="bg-orange-700 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl p-6 text-center border border-white/20 backdrop-blur-sm">
              <FaHeart className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-white font-medium">Aprender a se amar</p>
            </div>

            {/* Card 5: Diagnóstico */}
            <div className="bg-orange-700 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl p-6 text-center border border-white/20 backdrop-blur-sm">
              <FaStethoscope className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-white font-medium">Diagnóstico</p>
            </div>

            <div className="bg-orange-700 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl rounded-xl p-6 text-center border border-white/20 backdrop-blur-sm">
              <FaLeaf className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-white font-medium">Tranquilidade</p>
            </div>

          </div>
        </div>
      </div>



    </>


  )
}

export { Sobre }