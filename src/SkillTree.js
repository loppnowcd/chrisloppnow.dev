import React from 'react';
import './SkillTree.css';
import { skills as skillData } from './Skills';

/*
  POSIÇÕES DAS SKILLS (em % do board)
*/
const skillPositions = [
  { id: 'html', left: '9.3%', top: '50%' },
  { id: 'git', left: '19.9%', top: '50%' },

  { id: 'css', left: '31.3%', top: '27%' },
  { id: 'sql', left: '31.3%', top: '50%' },
  { id: 'js', left: '31.3%', top: '74%' },

  { id: 'csharp', left: '42%', top: '50%' },

  { id: 'docker', left: '53.5%', top: '28%' },
  { id: 'react', left: '53.5%', top: '50%' },
  { id: 'dotnet', left: '53.5%', top: '73.5%' },

  { id: 'ts', left: '65%', top: '50%' },
  { id: 'azure', left: '65.1%', top: '73.5%' },

  { id: 'n8n', left: '74.5%', top: '49.5%' },
];

/*
  CONEXÕES (LINHAS RETAS)
*/
const connections = [
  ['html', 'git'],

  ['git', 'css'],
  ['git', 'sql'],
  ['git', 'js'],

  ['sql', 'csharp'],

  ['csharp', 'docker'],
  ['csharp', 'react'],
  ['csharp', 'dotnet'],

  ['react', 'ts'],
  ['dotnet', 'azure'],
  ['ts', 'n8n'],
];

/* "50%" -> 50 */
const percent = (value) => parseFloat(value);

const SkillTree = ({ onSelectSkill, activeSkill }) => {
  return (
    <div className={`skill-tree-container ${activeSkill ? 'has-active' : ''}`}>
      <h2 className="skill-tree-title">
        Habilidades Técnicas
      </h2>

      <div className="tree-board">

        {/* ===== LINHAS ENERGIZADAS ===== */}
        <svg
          className="skill-tree-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
            </linearGradient>

            <filter id="energyGlow">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>
          </defs>

          {connections.map(([from, to], index) => {
            const start = skillPositions.find(s => s.id === from);
            const end = skillPositions.find(s => s.id === to);
            if (!start || !end) return null;

            return (
              <line
                key={index}
                x1={percent(start.left)}
                y1={percent(start.top)}
                x2={percent(end.left)}
                y2={percent(end.top)}
                stroke="url(#energyGradient)"
                strokeWidth="1.2"
                className="skill-energy-line"
                filter="url(#energyGlow)"
              />
            );
          })}
        </svg>

        {/* ===== BADGES ===== */}
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