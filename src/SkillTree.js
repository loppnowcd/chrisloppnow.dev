import React from 'react';
import './SkillTree.css';

// DICA: Use o "Inspecionar Elemento" do navegador para ajustar 
// o 'left' e 'top' visualmente e depois copie os números para cá.

const skills = [

  { id: 'html', name: 'HTML5', src: '/images/badges/badgehtml.png', left: '9.3%', top: '50%' },
  { id: 'css', name: 'CSS3', src: '/images/badges/badgecss.png', left: '36%', top: '29%' },
  { id: 'js', name: 'JavaScript', src: '/images/badges/badgejavascript.png', left: '36%', top: '71%' },
  { id: 'git', name: 'Git', src: '/images/badges/badgegit.png', left: '22.9%', top: '50%' },
  
  { id: 'sql', name: 'SQL', src: '/images/badges/badgesql.png', left: '36.3%', top: '50%' },
  { id: 'csharp', name: 'C#', src: '/images/badges/badgecsharp.png', left: '50%', top: '50%' },
  { id: 'dotnet', name: '.NET', src: '/images/badges/badgedotnet.png', left: '63.5%', top: '70.5%' },
  
  { id: 'docker', name: 'Docker', src: '/images/badges/badgedocker.png', left: '63.5%', top: '30%' },
  { id: 'react', name: 'React', src: '/images/badges/badgereact.png', left: '63.5%', top: '50%' },
  { id: 'ts', name: 'TypeScript', src: '/images/badges/badgetypescript.png', left: '77%', top: '50%' },
  
  { id: 'azure', name: 'Azure', src: '/images/badges/badgeazure.png', left: '77%', top: '70.5%' },
  { id: 'n8n', name: 'n8n', src: '/images/badges/badgen8n.png', left: '90.5%', top: '49.5%' },
];

const SkillTree = () => {
  return (
    <div className="skill-tree-container">
      {/* TÍTULO NOVO: "Habilidades" branco, "técnicas" roxo */}
      <h2 className="skill-tree-title">
        Habilidades <span className="highlight">técnicas</span>
      </h2>
      
      <div 
        className="tree-board" 
        style={{ backgroundImage: "url('/images/treebackground.jpg')" }}
      >
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