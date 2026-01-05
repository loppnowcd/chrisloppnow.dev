// src/SkillTree.js
import React from 'react';
import './SkillTree.css';

// --- MAPA DE POSICIONAMENTO PRECISO ---
// As coordenadas (%) foram medidas para encaixar no centro dos slots da imagem de fundo.
const skills = [
  // --- NÓ 1 (Extrema Esquerda) ---
  { id: 'html', name: 'HTML5', src: '/images/badges/badgehtml.png', left: '8.5%', top: '49.6%' },
  
  // --- NÓ 2 ---
  { id: 'css', name: 'CSS3', src: '/images/badges/badgecss.png', left: '22%', top: '49.6%' },
  
  // --- NÓS 3 & 4 (Primeira Bifurcação) ---
  { id: 'js', name: 'JavaScript', src: '/images/badges/badgejavascript.png', left: '35.5%', top: '28.4%' },
  { id: 'git', name: 'Git', src: '/images/badges/badgegit.png', left: '35.5%', top: '70.8%' },

  // --- NÓ 5 (Centro) ---
  { id: 'sql', name: 'SQL', src: '/images/badges/badgesql.png', left: '49.5%', top: '49.6%' },
  
  // --- NÓS 6 & 7 (Segunda Bifurcação) ---
  { id: 'csharp', name: 'C#', src: '/images/badges/badgecsharp.png', left: '63.2%', top: '28.4%' },
  { id: 'dotnet', name: '.NET', src: '/images/badges/badgedotnet.png', left: '63.2%', top: '70.8%' },
  
  // --- NÓS 8, 9, 10 (Terceira Ramificação) ---
  { id: 'docker', name: 'Docker', src: '/images/badges/badgedocker.png', left: '76.8%', top: '28.4%' },
  { id: 'react', name: 'React', src: '/images/badges/badgereact.png', left: '76.8%', top: '49.6%' },
  { id: 'ts', name: 'TypeScript', src: '/images/badges/badgetypescript.png', left: '76.8%', top: '70.8%' },
  
  // --- NÓ 11 (Extrema Direita) ---
  { id: 'azure', name: 'Azure', src: '/images/badges/badgeazure.png', left: '90.5%', top: '49.6%' },
  
  // --- NÓ 12 (Sem slot na imagem atual) ---
  // { id: 'n8n', name: 'n8n', src: '/images/badges/badgen8n.png', left: '?', top: '?' } 
];

const SkillTree = () => {
  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">Skill Tree</h2>
      
      {/* O TABULEIRO */}
      <div 
        className="tree-board" 
        // Certifique-se que a imagem salva é a última que geramos (image_35.png)
        style={{ backgroundImage: "url('/images/treebackground.jpg')" }}
      >
        {/* Renderizando as Badges */}
        {skills.map((skill) => (
          <div 
            key={skill.id}
            className="skill-badge-wrapper"
            // As coordenadas mágicas entram aqui
            style={{ left: skill.left, top: skill.top }}
          >
            <div className="skill-badge-inner">
              <img src={skill.src} alt={skill.name} />
            </div>
            <div className="skill-tooltip">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;