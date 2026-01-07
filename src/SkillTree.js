import React from 'react';
import './SkillTree.css';
import { skills as skillData } from './Skills';

// DICA: Use o "Inspecionar Elemento" do navegador para ajustar 
// o 'left' e 'top' visualmente e depois copie os números para cá.

const skillPositions = [
  { id: 'html', left: '9.3%', top: '50%' },
  { id: 'css', left: '31.3%', top: '27%' },
  { id: 'js', left: '31.3%', top: '74%' },
  { id: 'git', left: '19.9%', top: '50%' },

  { id: 'sql', left: '31.3%', top: '50%' },
  { id: 'csharp', left: '42%', top: '50%' },
  { id: 'dotnet', left: '53.5%', top: '73.5%' },

  { id: 'docker', left: '65%', top: '28%' },
  { id: 'react', left: '53.5%', top: '50%' },
  { id: 'ts', left: '65%', top: '50%' },

  { id: 'azure', left: '65.1%', top: '73.5%' },
  { id: 'n8n', left: '74.5%', top: '49.5%' },
];

const SkillTree = ({ onSelectSkill, activeSkill }) => {
  return (
    <div className={`skill-tree-container ${activeSkill ? 'dimmed' : ''}`}>
      <h2 className="skill-tree-title">
        Habilidades Técnicas
      </h2>

      <div className="tree-board">
        {skillPositions.map((pos) => {
          const skill = skillData.find(s => s.id === pos.id);

          // Caso ainda não exista no Skills.js, não renderiza
          if (!skill) return null;

          return (
            <div
              key={skill.id}
              className={`skill-badge-wrapper ${
              activeSkill?.id === skill.id ? 'active' : 'inactive'
              }`}
              style={{ left: pos.left, top: pos.top }}
              onClick={() => onSelectSkill(skill)}
              >

              <div className="skill-badge-inner">
                <img src={skill.badge} alt={skill.name} />
              </div>

              {/* Tooltip removido — painel assume essa função */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillTree;
