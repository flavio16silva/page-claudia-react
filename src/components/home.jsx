import { cards } from "../data/cards"
import { frases } from "../data/frases"
import { escolha } from "../data/escolha"
import { useState, useEffect } from "react"

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalItems = escolha.length

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalItems)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, totalItems])

  return (
    <>
      <div id="mural" className="py-5 pt-32 bg-red-300">
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xl md:text-2xl font-bold text-center px-4 transform transition-transform duration-300 group-hover:scale-105">
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
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
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

      <div className="bg-red-200 py-2">
        <div className="container mx-auto px-4">
          <p className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12 mt-10">Por que caminhar comigo?</p>
          <div className="block md:hidden relative overflow-hidden min-h-64">
            {escolha.map((item, index) => (
              <div key={item.id}
                className={`transition-opacity duration-500 ${index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0"
                  }`}
              >
                <div className="bg-white p-2 rounded-xl shadow-md text-center max-w-md mx-auto"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <item.icone className="text-4xl text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SLIDE */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {escolha.map(item => (
                <div key={item.id} className="w-full shrink-0">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md mx-auto">
                    <item.icone className="text-4xl text-green-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pontinhos dos cards */}
          <div className="flex justify-center gap-2 mt-1">
            {escolha.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }