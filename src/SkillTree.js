import React from 'react';
import './SkillTree.css';

const skills = [
  // --- INÍCIO (Esquerda) ---
  { id: 'html', name: 'HTML5', src: '/images/badges/badgehtml.png', left: '5%', top: '30%' },
  { id: 'css', name: 'CSS3', src: '/images/badges/badgecss.png', left: '5%', top: '70%' },
  { id: 'js', name: 'JavaScript', src: '/images/badges/badgejavascript.png', left: '15%', top: '50%' },

  // --- O MIOLO (Centro-Esquerda) ---
  { id: 'git', name: 'Git', src: '/images/badges/badgegit.png', left: '25%', top: '50%' },
  { id: 'sql', name: 'SQL', src: '/images/badges/badgesql.png', left: '35%', top: '30%' },
  { id: 'csharp', name: 'C#', src: '/images/badges/badgecsharp.png', left: '35%', top: '70%' },

  // --- AVANÇADO (Centro-Direita) ---
  { id: 'dotnet', name: '.NET', src: '/images/badges/badgedotnet.png', left: '45%', top: '50%' },
  { id: 'docker', name: 'Docker', src: '/images/badges/badgedocker.png', left: '55%', top: '30%' },
  { id: 'react', name: 'React', src: '/images/badges/badgereact.png', left: '55%', top: '70%' },

  // --- FINAL (Direita) ---
  { id: 'ts', name: 'TypeScript', src: '/images/badges/badgetypescript.png', left: '65%', top: '50%' },
  { id: 'azure', name: 'Azure', src: '/images/badges/badgeazure.png', left: '75%', top: '30%' },
  { id: 'n8n', name: 'n8n', src: '/images/badges/badgen8n.png', left: '75%', top: '70%' },
];

const SkillTree = () => {
  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">Skill Tree</h2>
      
      {/* O TABULEIRO */}
      <div 
        className="tree-board" 
        style={{ backgroundImage: "url('/images/treebackground.jpg')" }}
      >
        {/* Renderizando as Badges */}
        {skills.map((skill) => (
          <div 
            key={skill.id}
            className="skill-badge-wrapper"
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