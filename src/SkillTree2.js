import React from 'react';
import './SkillTree.css';

const SkillNode = ({ name, imageSrc, level }) => {
  return (
    <div className={`skill-node ${level}`}>
      <div className="hexagon-border">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="skill-name">{name}</div>
    </div>
  );
};

const SkillTree = () => {
  return (
    <div className="rpg-container-horizontal">
      <h2 className="rpg-title">Skill Progression</h2>
      
      <div className="talent-tree-grid">
        
        {/* COLUNA 1: INICIADO (Tier 1) */}
        <div className="tier-column">
          <h3 className="tier-title">Iniciado</h3>
          <div className="nodes-wrapper">
            <SkillNode name="HTML5" imageSrc="/badges/badgehtml.jpg" level="tier-1" />
            <SkillNode name="CSS3" imageSrc="/badges/badgecss.jpg" level="tier-1" />
            {/* JAVASCRIPT AQUI - O NÓ CENTRAL */}
            <SkillNode name="JavaScript" imageSrc="/badges/badgejavascript.jpg" level="tier-1" /> 
            <SkillNode name="Git" imageSrc="/badges/badgegit.jpg" level="tier-1" />
          </div>
        </div>

        {/* CONECTOR VISUAL (Setas) */}
        <div className="connector-column">
          <div className="arrow-right"></div>
          <div className="arrow-right"></div>
          <div className="arrow-right"></div>
        </div>

        {/* COLUNA 2: ADEPTO (Tier 2) */}
        <div className="tier-column">
          <h3 className="tier-title">Adepto</h3>
          <div className="nodes-wrapper">
            {/* TypeScript alinhado com JS (evolução) */}
            <SkillNode name="TypeScript" imageSrc="/badges/badgetypescript.jpg" level="tier-2" />
            <SkillNode name="C#" imageSrc="/badges/badgecsharp.jpg" level="tier-2" />
            <SkillNode name="SQL" imageSrc="/badges/badgesql.jpg" level="tier-2" />
            <SkillNode name="Docker" imageSrc="/badges/badgedocker.jpg" level="tier-2" />
          </div>
        </div>

        {/* CONECTOR VISUAL */}
        <div className="connector-column">
           <div className="arrow-right"></div>
           <div className="arrow-right"></div>
        </div>

        {/* COLUNA 3: MESTRE (Tier 3) */}
        <div className="tier-column">
          <h3 className="tier-title">Mestre</h3>
          <div className="nodes-wrapper">
            <SkillNode name="React" imageSrc="/badges/badgereact.jpg" level="tier-3" />
            <SkillNode name=".NET Core" imageSrc="/badges/badgedotnet.jpg" level="tier-3" />
            <SkillNode name="Azure" imageSrc="/badges/badgeazure.jpg" level="tier-3" />
            <SkillNode name="n8n" imageSrc="/badges/badgen8n.jpg" level="tier-3" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillTree;