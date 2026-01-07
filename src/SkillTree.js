import React from 'react';
import './SkillTree.css';
import { skills as skillData } from './Skills';

/*
  POSIÇÕES DAS SKILLS
*/
const skillPositions = [
  { id: 'html', left: '9.3%', top: '50%' },
  { id: 'css', left: '31.3%', top: '27%' },
  { id: 'js', left: '31.3%', top: '74%' },
  { id: 'git', left: '19.9%', top: '50%' },

  { id: 'sql', left: '31.3%', top: '50%' },
  { id: 'csharp', left: '42%', top: '50%' },
  { id: 'dotnet', left: '53.5%', top: '73.5%' },

  { id: 'docker', left: '53.5%', top: '28%' },
  { id: 'react', left: '53.5%', top: '50%' },
  { id: 'ts', left: '65%', top: '50%' },

  { id: 'azure', left: '65.1%', top: '73.5%' },
  { id: 'n8n', left: '74.5%', top: '49.5%' },
];

/*
  CONEXÕES ENTRE SKILLS (ÁRVORE LEVE)
*/
const connections = [
  ['html', 'git'],
  ['git', 'js'],
  ['git', 'css'],
  ['git', 'sql'],
  ['sql', 'csharp'],
  ['csharp', 'dotnet'],
  ['csharp', 'react'],
  ['csharp', 'docker'],
  ['dotnet', 'azure'],
  ['react', 'ts'],
  ['ts', 'n8n'],
];

const SkillTree = ({ onSelectSkill, activeSkill }) => {
  return (
    <div className={`skill-tree-container ${activeSkill ? 'has-active' : ''}`}>
      <h2 className="skill-tree-title">
        Habilidades Técnicas
      </h2>

      <div className="tree-board">

        {/* 🔹 LINHAS DA SKILL TREE (FICAM ATRÁS DAS BADGES) */}
        <svg
          className="skill-tree-lines"
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          {connections.map(([from, to], index) => {
            const start = skillPositions.find(s => s.id === from);
            const end = skillPositions.find(s => s.id === to);
            if (!start || !end) return null;

            return (
              <line
                key={index}
                x1={start.left}
                y1={start.top}
                x2={end.left}
                y2={end.top}
                stroke="rgba(168, 85, 247, 0.25)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* 🔹 BADGES */}
        {skillPositions.map((pos) => {
          const skill = skillData.find(s => s.id === pos.id);
          if (!skill) return null;

          const isActive = activeSkill?.id === skill.id;
          const isInactive = activeSkill && !isActive;

          return (
            <div
              key={skill.id}
              className={`skill-badge-wrapper ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
              style={{
                left: pos.left,
                top: pos.top,
                zIndex: 2
              }}
              onClick={() => onSelectSkill(skill)}
            >
              <div className="skill-badge-inner">
                <img src={skill.badge} alt={skill.name} />
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default SkillTree;