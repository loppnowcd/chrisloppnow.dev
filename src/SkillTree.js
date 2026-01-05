import React from 'react';
import './SkillTree.css';

const SkillTree = () => {
  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">Skill Tree</h2>
      
      {/* AQUI ESTÁ A MÁGICA:
         Colocamos o background via 'style' inline.
         O React vai escrever isso direto no HTML final, ignorando a verificação do Webpack.
      */}
      <div 
        className="tree-board" 
        style={{ backgroundImage: "url('/images/treebackground.jpg')" }}
      >
        {/* Futuras badges aqui */}
      </div>
    </div>
  );
};

export default SkillTree;