import React from 'react';
import './SkillTree.css';

// Componente da Badge
const SkillNode = ({ name, imageSrc, style }) => (
  <div className="skill-node" style={style}>
    <div className="badge-wrapper">
      {/* ATENÇÃO: Usando .png para a transparência funcionar */}
      <img src={imageSrc} alt={name} />
    </div>
    <div className="skill-name">{name}</div>
  </div>
);

const SkillTree = () => {
  return (
    <div className="rpg-container-horizontal">
      <h2 className="rpg-title">Skill Tree</h2>

      <div className="tree-wrapper">
        {/* CAMADA DE CONEXÕES (SVG) - O "Esqueleto" da Árvore */}
        <svg className="connections-svg" width="100%" height="100%" viewBox="0 0 600 400" preserveAspectRatio="none">
          
          {/* RAMIFICAÇÃO PRINCIPAL (Git -> JS) */}
          <path d="M50 200 L150 200" className="connection-line main-branch" />

          {/* A GRANDE RAMIFICAÇÃO DO JS (Centro) */}
          {/* Para cima (Front-end) */}
          <path d="M150 200 Q 200 100, 250 100" className="connection-line front-branch" />
          {/* Para o meio (Core) */}
          <path d="M150 200 L 250 200" className="connection-line core-branch" />
          {/* Para baixo (Back-end) */}
          <path d="M150 200 Q 200 300, 250 300" className="connection-line back-branch" />

          {/* SUB-RAMIFICAÇÕES */}
          {/* Front-end: HTML/CSS -> React */}
          <path d="M250 100 L 350 100" className="connection-line front-branch" />
          <path d="M350 100 L 450 100" className="connection-line front-branch" />

          {/* Core: TS -> n8n -> Docker */}
          <path d="M250 200 L 350 200" className="connection-line core-branch" />
          <path d="M350 200 L 450 200" className="connection-line core-branch" />

          {/* Back-end: SQL -> C# -> .NET -> Azure */}
          <path d="M250 300 L 350 300" className="connection-line back-branch" />
          <path d="M350 300 L 450 300" className="connection-line back-branch" />
          <path d="M450 300 L 550 300" className="connection-line back-branch" />

          {/* CONEXÕES CRUZADAS (Opcional, para mais complexidade) */}
          <path d="M350 100 L 350 200" className="connection-line cross-branch" style={{opacity: 0.5}} />
          <path d="M350 300 L 350 200" className="connection-line cross-branch" style={{opacity: 0.5}} />
        </svg>

        {/* O GRID DE POSICIONAMENTO */}
        <div className="nodes-grid" style={{ 
            display: 'grid', 
            // Grid mais fino para posicionamento preciso
            gridTemplateColumns: 'repeat(6, 1fr)', 
            gridTemplateRows: 'repeat(5, 1fr)', 
            width: '100%', 
            maxWidth: '1000px',
            height: '500px' 
          }}>
          
          {/* NÓ INICIAL: Git */}
          <div style={{ gridColumn: 1, gridRow: 3 }}>
             <SkillNode name="Git" imageSrc="/images/badges/badgegit.png" />
          </div>

          {/* NÓ CENTRAL: JavaScript */}
          <div style={{ gridColumn: 2, gridRow: 3 }}>
            <SkillNode name="JavaScript" imageSrc="/images/badges/badgejavascript.png" />
          </div>

          {/* --- RAMO SUPERIOR (Front-end) --- */}
          <div style={{ gridColumn: 3, gridRow: 1 }}>
            <SkillNode name="HTML5" imageSrc="/images/badges/badgehtml.png" />
          </div>
          <div style={{ gridColumn: 3, gridRow: 2 }}>
            <SkillNode name="CSS3" imageSrc="/images/badges/badgecss.png" />
          </div>
          <div style={{ gridColumn: 4, gridRow: 1, gridRowSpan: 2, alignSelf: 'center' }}>
            <SkillNode name="React" imageSrc="/images/badges/badgereact.png" />
          </div>

          {/* --- RAMO DO MEIO (Core/Ferramentas) --- */}
          <div style={{ gridColumn: 3, gridRow: 3 }}>
            <SkillNode name="TypeScript" imageSrc="/images/badges/badgetypescript.png" />
          </div>
          <div style={{ gridColumn: 4, gridRow: 3 }}>
            <SkillNode name="n8n" imageSrc="/images/badges/badgen8n.png" />
          </div>
          <div style={{ gridColumn: 5, gridRow: 3 }}>
            <SkillNode name="Docker" imageSrc="/images/badges/badgedocker.png" />
          </div>

          {/* --- RAMO INFERIOR (Back-end) --- */}
          <div style={{ gridColumn: 3, gridRow: 4 }}>
            <SkillNode name="SQL" imageSrc="/images/badges/badgesql.png" />
          </div>
          <div style={{ gridColumn: 4, gridRow: 4 }}>
            <SkillNode name="C#" imageSrc="/images/badges/badgecsharp.png" />
          </div>
          <div style={{ gridColumn: 5, gridRow: 4 }}>
            <SkillNode name=".NET" imageSrc="/images/badges/badgedotnet.png" />
          </div>
          <div style={{ gridColumn: 6, gridRow: 4 }}>
            <SkillNode name="Azure" imageSrc="/images/badges/badgeazure.png" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SkillTree;