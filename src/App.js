import React from 'react';
import PhotoFrame from './PhotoFrame';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Componente de fotos */}
          <div className="flex justify-center">
            <PhotoFrame />
          </div>

          {/* Conteúdo de texto */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Olá, eu sou Chris
            </h1>
            <p className="text-xl md:text-2xl text-purple-400 mb-8">
            Desenvolvedor Full Stack
            </p>
            <p className="text-lg mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">
            Transformo ideias em código. Especializado em criar soluções web modernas e eficientes.
            </p>
            
            {/* Botões de contato */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/seu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projetos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold mb-3">Nome do Projeto</h3>
              <p className="text-gray-400 mb-4">
                Descrição breve do que o projeto faz e quais tecnologias foram usadas.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-blue-600 text-xs px-3 py-1 rounded">React</span>
                <span className="bg-green-600 text-xs px-3 py-1 rounded">Node.js</span>
                <span className="bg-purple-600 text-xs px-3 py-1 rounded">PostgreSQL</span>
              </div>
              <a href="#" className="text-blue-400 hover:underline">Ver projeto →</a>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold mb-3">Outro Projeto</h3>
              <p className="text-gray-400 mb-4">
                Mais um projeto interessante que você desenvolveu.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-yellow-600 text-xs px-3 py-1 rounded">JavaScript</span>
                <span className="bg-red-600 text-xs px-3 py-1 rounded">HTML/CSS</span>
              </div>
              <a href="#" className="text-blue-400 hover:underline">Ver projeto →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Skills */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚛️</div>
              <p className="font-semibold">React</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🟢</div>
              <p className="font-semibold">Node.js</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🐘</div>
              <p className="font-semibold">PostgreSQL</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🐍</div>
              <p className="font-semibold">Python</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contato */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 mb-4">Vamos trabalhar juntos?</p>
          <a 
            href="mailto:seu@email.com" 
            className="text-xl text-blue-400 hover:underline"
          >
            seu@email.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;