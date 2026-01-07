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
  CONEXÕES ENTRE SKILLS
*/
const connections = [
  ['html', 'git'],
  ['git', 'css'],
  ['git', 'js'],
  ['git', 'sql'],
  ['sql', 'csharp'],
  ['csharp', 'dotnet'],
  ['csharp', 'react'],
  ['csharp', 'docker'],
  ['dotnet', 'azure'],
  ['react', 'ts'],
  ['ts', 'n8n'],
];

/* Utilitário: "50%" -> 50 */
const percent = (value) => parseFloat(value);

const SkillTree = ({ onSelectSkill, activeSkill }) => {
  return (
    <div className={`skill-tree-container ${activeSkill ? 'has-active' : ''}`}>
      <h2 className="skill-tree-title">
        Habilidades Técnicas
      </h2>

      <div className="tree-board">

        {/* 🔹 LINHAS (ENERGIA / FLUXO) */}
        <svg
        className="skill-tree-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
        }}
>

          {/* DEFINIÇÕES VISUAIS DO SVG */}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.25" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* DESENHO DAS CONEXÕES */}
          {connections.map(([from, to], index) => {
            const start = skillPositions.find(s => s.id === from);
            const end = skillPositions.find(s => s.id === to);
            if (!start || !end) return null;

            return (
              <path
                key={index}
                d={`
                  M ${percent(start.left)}% ${percent(start.top)}%
                  C
                  ${percent(start.left) + 6}% ${percent(start.top)}%,
                  ${percent(end.left) - 6}% ${percent(end.top)}%,
                  ${percent(end.left)}% ${percent(end.top)}%
                `}
                fill="none"
                stroke="url(#skillGradient)"
                strokeWidth="1.2"
                opacity="0.4"
                filter="url(#glow)"
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