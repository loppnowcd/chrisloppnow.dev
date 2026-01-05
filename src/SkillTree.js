// src/SkillTree.js
import React from 'react';
import './SkillTree.css'; // Garante que o CSS acima é carregado

const SkillTree = () => {
  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">Skill Tree</h2>
      
      {/* O tabuleiro que receberá a imagem de fundo via CSS */}
      <div className="tree-board">
        {/* Aqui entrarão as badges no futuro */}
      </div>
    </div>
  );
};

export default SkillTree;