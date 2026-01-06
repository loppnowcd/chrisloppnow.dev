import React, { useState } from 'react';
import PhotoFrame from './PhotoFrame';
import SkillTree from './SkillTree';

// 🔹 NOVO: painel de skill
import SkillPanel from "./components/SkillPanel";
import { skills } from "./Skills";

function App() {

  // 🔹 NOVO: estado que controla o painel
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    // CONTAINER PRINCIPAL
    <div className="h-screen w-full bg-black text-white overflow-y-scroll snap-y snap-mandatory">

      {/* SEÇÃO 1: HERO */}
      <section className="h-screen w-full snap-start flex items-center justify-center px-4 relative">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">

          <div className="flex justify-center order-2 md:order-1">
            <PhotoFrame />
          </div>

          <div className="order-1 md:order-2">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Olá, eu sou Chris
            </h1>
            <p className="text-xl md:text-2xl text-purple-400 mb-8">
              Desenvolvedor Full Stack
            </p>
            <p className="text-lg mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">
              Transformo ideias em código. Especializado em criar soluções web modernas e eficientes.
            </p>

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

            {/* 🔹 BOTÃO TEMPORÁRIO DE TESTE (VAI SUMIR DEPOIS) */}
            <div className="mt-8">
              <button
                onClick={() => setSelectedSkill(skills[0])}
                className="border border-purple-500 text-purple-400 px-4 py-2 rounded hover:bg-purple-500 hover:text-black transition"
              >
                Testar SkillPanel
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 2: SKILL TREE */}
      <section className="h-screen w-full snap-start bg-black flex items-center justify-center overflow-hidden">
        <SkillTree onSelectSkill={setSelectedSkill} />
      </section>

      {/* SEÇÃO 3: PROJETOS */}
      <section className="h-screen w-full snap-start flex flex-col justify-center px-4 bg-black">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Projetos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-bold mb-3 text-white">Nome do Projeto</h3>
              <p className="text-gray-400 mb-4">
                Descrição breve do que o projeto faz e quais tecnologias foram usadas.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded">React</span>
                <span className="bg-green-900 text-green-200 text-xs px-3 py-1 rounded">Node.js</span>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300">Ver projeto →</a>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-bold mb-3 text-white">Outro Projeto</h3>
              <p className="text-gray-400 mb-4">
                Mais um projeto interessante que você desenvolveu.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-yellow-900 text-yellow-200 text-xs px-3 py-1 rounded">JS</span>
                <span className="bg-red-900 text-red-200 text-xs px-3 py-1 rounded">HTML/CSS</span>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300">Ver projeto →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: FOOTER */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 bg-black">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Vamos Conversar?</h2>
          <p className="text-gray-400 mb-8 text-xl">
            Estou sempre aberto a novas oportunidades e projetos.
          </p>
          <a
            href="mailto:chris@exemplo.com"
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-300 hover:to-pink-500 transition"
          >
            chris@exemplo.com
          </a>

          <div className="mt-12 text-gray-600 text-sm">
            © 2025 Chris. Desenvolvido com React & Magia Arcana.
          </div>
        </div>
      </section>

      {/* 🔹 PAINEL (fica fora das seções) */}
      <SkillPanel
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

    </div>
  );
}

export default App;
