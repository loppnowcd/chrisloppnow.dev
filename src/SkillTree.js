import React from 'react';
import './SkillTree.css';

// DICA: Use o "Inspecionar Elemento" do navegador para ajustar 
// o 'left' e 'top' visualmente e depois copie os números para cá.

const skills = [
  // --- O AVATAR / LOGO (Slot 1 ou Central?) ---
  // Se o slot extra for no começo, use este. Se for no fim, mova para o final.
  { id: 'avatar', name: 'Chris', src: '/images/image1end.jpeg', left: '5%', top: '50%' }, 

  // --- HABILIDADES TÉCNICAS ---
  { id: 'html', name: 'HTML5', src: '/images/badges/badgehtml.png', left: '12%', top: '50%' },
  { id: 'css', name: 'CSS3', src: '/images/badges/badgecss.png', left: '19%', top: '50%' },
  { id: 'js', name: 'JavaScript', src: '/images/badges/badgejavascript.png', left: '26%', top: '30%' },
  { id: 'git', name: 'Git', src: '/images/badges/badgegit.png', left: '26%', top: '70%' },
  
  { id: 'sql', name: 'SQL', src: '/images/badges/badgesql.png', left: '40%', top: '50%' },
  { id: 'csharp', name: 'C#', src: '/images/badges/badgecsharp.png', left: '55%', top: '30%' },
  { id: 'dotnet', name: '.NET', src: '/images/badges/badgedotnet.png', left: '55%', top: '70%' },
  
  { id: 'docker', name: 'Docker', src: '/images/badges/badgedocker.png', left: '70%', top: '30%' },
  { id: 'react', name: 'React', src: '/images/badges/badgereact.png', left: '70%', top: '50%' },
  { id: 'ts', name: 'TypeScript', src: '/images/badges/badgetypescript.png', left: '70%', top: '70%' },
  
  { id: 'azure', name: 'Azure', src: '/images/badges/badgeazure.png', left: '85%', top: '40%' },
  { id: 'n8n', name: 'n8n', src: '/images/badges/badgen8n.png', left: '85%', top: '60%' },
];

const SkillTree = () => {
  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">Skill Tree</h2>
      
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
              {/* Se for o Avatar, usamos borda redonda, se for badge, normal */}
              <img 
                src={skill.src} 
                alt={skill.name} 
                style={skill.id === 'avatar' ? { borderRadius: '50%', border: '2px solid #a855f7' } : {}}
              />
            </div>
            <div className="skill-tooltip">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;