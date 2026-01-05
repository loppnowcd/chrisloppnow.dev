import React from 'react';
import './SkillTree.css';

const SkillTree = () => {
  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">Skill Tree</h2>
      
      {/* Este é o tabuleiro onde a mágica vai acontecer */}
      <div className="tree-board">
        {/* No próximo passo, colocaremos as badges aqui dentro */}
      </div>
    </div>
  );
};

export default SkillTree;