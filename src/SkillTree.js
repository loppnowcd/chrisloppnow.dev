import React from 'react';
import './SkillTree.css';

// Componente da Badge (Sem alterações)
const SkillNode = ({ name, imageSrc, style }) => (
  <div className="skill-node" style={style}>
    <div className="badge-wrapper">
      {/* Usando .png para transparência */}
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
        {/* --- CAMADA DE CONEXÕES (SVG) --- 
            Desenhando as linhas com base no novo layout.
            Usei cores para diferenciar os caminhos.
        */}
        <svg className="connections-svg" width="100%" height="100%" viewBox="0 0 700 500" preserveAspectRatio="none">
          
          {/* CAMINHO DA BASE (Front-end Inicial) - AZUL */}
          {/* HTML -> Git */}
          <path d="M50 50 L 150 150" className="connection-line front-branch" />
          {/* CSS -> Git */}
          <path d="M150 50 L 150 150" className="connection-line front-branch" />
          {/* JS -> Git */}
          <path d="M250 50 L 150 150" className="connection-line front-branch" />

          {/* CAMINHO DO BACK-END (A espinha dorsal) - ROXO */}
          {/* Git -> SQL */}
          <path d="M150 150 L 250 150" className="connection-line back-branch" />
          {/* SQL -> C# */}
          <path d="M250 150 L 250 250" className="connection-line back-branch" />
          {/* C# -> .NET */}
          <path d="M250 250 L 350 250" className="connection-line back-branch" />

          {/* CAMINHO DA INFRA/MODERNO - LARANJA/CINZA */}
          {/* .NET -> Docker */}
          <path d="M350 250 L 450 250" className="connection-line core-branch" />
          {/* Docker -> React */}
          <path d="M450 250 L 450 350" className="connection-line core-branch" />
          
          {/* RAMIFICAÇÕES FINAIS */}
          {/* React -> TypeScript (Volta pro Azul/Front) */}
          <path d="M450 350 L 550 350" className="connection-line front-branch" />
          {/* React -> Azure (Infra) */}
          <path d="M450 350 L 450 450" className="connection-line core-branch" />
          {/* Azure -> n8n (Automação) */}
          <path d="M450 450 L 550 450" className="connection-line core-branch" />

        </svg>

        {/* --- O GRID DE POSICIONAMENTO --- 
            Mapeando cada badge para sua posição no desenho.
        */}
        <div className="nodes-grid" style={{ 
            display: 'grid', 
            // Grid de 7x5 para caber o layout novo
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gridTemplateRows: 'repeat(5, 1fr)', 
            width: '100%', 
            maxWidth: '1000px',
            height: '500px',
            // Pequeno ajuste para alinhar os nós com as pontas das linhas SVG
            padding: '20px 0'
          }}>
          
          {/* LINHA 1: A Base */}
          <div style={{ gridColumn: 1, gridRow: 1 }}> <SkillNode name="HTML5" imageSrc="/images/badges/badgehtml.png" /> </div>
          <div style={{ gridColumn: 2, gridRow: 1 }}> <SkillNode name="CSS3" imageSrc="/images/badges/badgecss.png" /> </div>
          <div style={{ gridColumn: 3, gridRow: 1 }}> <SkillNode name="JavaScript" imageSrc="/images/badges/badgejavascript.png" /> </div>

          {/* LINHA 2: O Centro */}
          <div style={{ gridColumn: 2, gridRow: 2 }}> <SkillNode name="Git" imageSrc="/images/badges/badgegit.png" /> </div>
          <div style={{ gridColumn: 3, gridRow: 2 }}> <SkillNode name="SQL" imageSrc="/images/badges/badgesql.png" /> </div>

          {/* LINHA 3: Back-end & Infra */}
          <div style={{ gridColumn: 3, gridRow: 3 }}> <SkillNode name="C#" imageSrc="/images/badges/badgecsharp.png" /> </div>
          <div style={{ gridColumn: 4, gridRow: 3 }}> <SkillNode name=".NET" imageSrc="/images/badges/badgedotnet.png" /> </div>
          <div style={{ gridColumn: 5, gridRow: 3 }}> <SkillNode name="Docker" imageSrc="/images/badges/badgedocker.png" /> </div>

          {/* LINHA 4: Front-end Moderno */}
          <div style={{ gridColumn: 5, gridRow: 4 }}> <SkillNode name="React" imageSrc="/images/badges/badgereact.png" /> </div>
          <div style={{ gridColumn: 6, gridRow: 4 }}> <SkillNode name="TypeScript" imageSrc="/images/badges/badgetypescript.png" /> </div>

          {/* LINHA 5: Cloud & Automação */}
          <div style={{ gridColumn: 5, gridRow: 5 }}> <SkillNode name="Azure" imageSrc="/images/badges/badgeazure.png" /> </div>
          <div style={{ gridColumn: 6, gridRow: 5 }}> <SkillNode name="n8n" imageSrc="/images/badges/badgen8n.png" /> </div>

        </div>
      </div>
    </div>
  );
};

export default SkillTree;