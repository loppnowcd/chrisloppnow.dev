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
        <SkillNode name="Azure Cloud" imageSrc="/images/badges/azure.png" />
        <SkillNode name="Docker" imageSrc="/images/badges/docker.png" />
        <SkillNode name="n8n Automation" imageSrc="/images/badges/n8n.png" />
      </div>

      {/* NÍVEL 3: FRAMEWORKS */}
      <div className="tree-level">
        <SkillNode name="React" imageSrc="/images/badges/react.png" />
        <SkillNode name=".NET Core" imageSrc="/images/badges/dotnet.png" />
      </div>

      {/* NÍVEL 2: LINGUAGENS */}
      <div className="tree-level">
        <SkillNode name="TypeScript" imageSrc="/images/badges/typescript.png" />
        <SkillNode name="C#" imageSrc="/images/badges/csharp.png" />
        <SkillNode name="SQL" imageSrc="/images/badges/sql.png" />
      </div>

      {/* NÍVEL 1: FUNDAÇÃO */}
      <div className="tree-level">
        <SkillNode name="HTML5" imageSrc="/images/badges/html.png" />
        <SkillNode name="Git" imageSrc="/images/badges/git.png" />
        <SkillNode name="CSS3" imageSrc="/images/badges/css.png" />
      </div>
    </div>
  );
};

export default SkillTree;