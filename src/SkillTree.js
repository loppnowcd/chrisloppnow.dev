import React from 'react';
import './SkillTree.css';

const SkillNode = ({ name, imageSrc }) => {
  return (
    <div className="skill-node">
      {/* O caminho começa com /images pois está na pasta public */}
      <img src={imageSrc} alt={name} />
      <div className="skill-name">{name}</div>
    </div>
  );
};

const SkillTree = () => {
  return (
    <div className="rpg-container">
      <h2 className="rpg-title">Skill Tree</h2>

      {/* NÍVEL 4: INFRA E AUTOMAÇÃO */}
      <div className="tree-level">
        <SkillNode name="Azure Cloud" imageSrc="/badges/badgeazure.jpg" />
        <SkillNode name="Docker" imageSrc="/badges/badgedocker.jpg" />
        <SkillNode name="n8n Automation" imageSrc="/badges/badgen8n.jpg" />
      </div>

      {/* NÍVEL 3: FRAMEWORKS */}
      <div className="tree-level">
        <SkillNode name="React" imageSrc="/badges/badgereact.jpg" />
        <SkillNode name=".NET Core" imageSrc="/badges/badgedotnet.jpg" />
      </div>

      {/* NÍVEL 2: LINGUAGENS */}
      <div className="tree-level">
        <SkillNode name="TypeScript" imageSrc="/badges/badgetypescript.jpg" />
        <SkillNode name="C#" imageSrc="/badges/badgecsharp.jpg" />
        <SkillNode name="SQL" imageSrc="/badges/badgesql.jpg" />
      </div>

      {/* NÍVEL 1: FUNDAÇÃO */}
      <div className="tree-level">
        <SkillNode name="HTML5" imageSrc="/badges/badgehtml.jpg" />
        <SkillNode name="Git" imageSrc="/badges/badgegit.jpg" />
        <SkillNode name="CSS3" imageSrc="/badges/badgecss.jpg" />
      </div>
    </div>
  );
};

export default SkillTree;