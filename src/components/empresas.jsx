import { empresas } from "../data/empresas"
import { empresaServicos } from "../data/servicos-emp"
import { FaWhatsapp, FaStar } from 'react-icons/fa'

const Empresas = () => {
  return (
    <>
      <div className="py-5 pt-20 relative min-h-screen"
        style={{
          backgroundImage: 'url("/equipe.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}

      >
        <div className="absolute inset-0 bg-opacity-60"></div>

        <div className="container mx-auto mb-5 p-2 relative z-10">
          <div className="empresariais__content mt-5 text-center">
            <h2 className="efeito_titulo mb-4 mt-n2 title text-3xl font-bold text-white">Serviços Empresariais</h2>
            <p className="mb-4 texto_inicio text-white max-w-3xl mx-auto">
              Com expertise em avaliação psicológica, gestão de equipes e programas de bem-estar, promovo o aprimoramento do desempenho individual e coletivo nas empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 max-w-6xl mx-auto">
            {empresas.map((empresa) => (
              <div
                key={empresa.id}
                className="card-glass"
                style={{
                  backgroundImage: `url(${empresa.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="glass-content p-1">
                  <h3 className="card-title text-xl font-bold text-center mb-2 text-white">
                    {empresa.title}
                  </h3>
                  <p className="card-description text-base text-white text-justify mb-2 leading-relaxed">
                    {empresa.description}
                  </p>
                  <div className="card-improvements mt-2 border border-white text-justify bg-opacity-30 p-3 rounded-lg">
                    <strong className="block mb-1 text-white text-base">Melhorias:</strong>
                    <p className="text-white text-base leading-relaxed m-0">{empresa.improvements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >

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
              <span className="flex items-center gap-1"><FaStar /> Aderência às normas</span>
              <span className="flex items-center gap-1"><FaStar /> Competência técnica</span>
              <span className="flex items-center gap-1"><FaStar /> Impacto real</span>
              <span className="flex items-center gap-1"><FaStar /> Versatilidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white py-12 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <span>Aderência às normas</span>
            <span>Competência técnica</span>
            <span>Impacto real</span>
            <span>Versatilidade</span>
          </div>
        </div>
      </div> */}


    </>

  )
}

export { Empresas }


/*


*/