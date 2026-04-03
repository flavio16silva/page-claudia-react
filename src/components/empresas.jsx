import { empresas } from "../data/empresas"
import { empresaServicos } from "../data/servicos-emp"
import { FaWhatsapp, FaStar } from 'react-icons/fa'

const Empresas = () => {
  return (
    <>
      <div id="empresas" className="py-16">
        <div className="container mx-auto mb-3 p-2 relative z-10">
          <div className="flex flex-col md:flex-row gap-0 mt-8 ">
            {/* Lado ESQUERDO - Imagem tocando na borda */}
            <div className="md:w-3/5 bg-orange-700 items-center justify-center">
              <div className="mt-5 text-center">
                <h2 className="efeito_titulo mb-4 mt-10 title text-3xl font-bold text-white">
                  Serviços Empresariais
                </h2>
                <p className="mb-32 p-6 text-justify text-xl text-white max-w-3xl mx-auto">
                  Com expertise em avaliação psicológica, gestão de equipes e programas de bem-estar,
                  promovo o aprimoramento da sua equipe com o desempenho individual e coletivo nas empresas.
                </p>
              </div>
              <img
                src="/maos_unidas.png"
                alt="Serviços Empresariais"
                className="w-full h-125 md:h-150 object-cover"
                loading="lazy"
              />
            </div>

            {/* Lado DIREITO - Cards */}
            <div className="md:w-2/3 p-6 space-y-6">
              {empresas.map((empresa) => (
                <div
                  key={empresa.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-3">
                    {empresa.title}
                  </h3>
                  <p className="text-gray-700 text-justify mb-4 leading-relaxed">
                    {empresa.description}
                  </p>
                  <div className="border-l-4 border-orange-700 pl-4 mt-4">
                    <strong className="block mb-2 text-orange-700">Melhorias:</strong>
                    <p className="text-gray-600 text-justify leading-relaxed">
                      {empresa.improvements}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Serviços: Palestras, Workshop, Persona... */}
        <div className="bg-orange-700 py-12">
          <div className="container mx-auto px-4">
            <h2 className="efeito_titulo mb-6 mt-n2 title text-center text-2xl font-bold text-white">Sua empresa e as pessoas bem cuidadas de verdade.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {empresaServicos.map(servico => (
                <div key={servico.id}
                  className="bg-orange-700 p-4 rounded-xl shadow-md hover:shadow-2xl hover:scale-102 hover:-translate-y-1 transition-all duration-500 ease-out border border-gray-100 flex flex-col h-full"
                >

                  <p className="text-white text-xl font-semibold text-center pt-4 mb-4">
                    {servico.title}
                  </p>
                  <p className="text-white text-lg text-justify italic mb-4 grow">
                    {servico.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-12 shadow-inner">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
                Vamos caminhar juntos?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sem achismo. Sem projetos para cumprir exigência.
                É trabalho para resolver.
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
              {/* <p className="text-sm text-gray-500 mt-6">
              Atendimento presencial e online • Primeira conversa sem compromisso
            </p> */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 text-orange-600 font-bold">
                <span className="flex items-center gap-1"><FaStar /> Adequação normativa</span>
                <span className="flex items-center gap-1"><FaStar /> Competência técnica</span>
                <span className="flex items-center gap-1"><FaStar /> Impacto real</span>
                <span className="flex items-center gap-1"><FaStar /> Versatilidade</span>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>

  )
}

export { Empresas }