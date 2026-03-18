import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          React 19 + Vite 8 + Tailwind 4
        </h1>
        <p className="text-gray-600 text-lg">
          Projeto configurado com sucesso! 🚀
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Testar Tailwind
        </button>
      </div>
    </div>
  )
}

export default App
