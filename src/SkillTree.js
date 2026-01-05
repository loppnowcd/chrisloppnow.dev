import React from 'react';
import './SkillTree.css';

// Componente individual da Badge
const SkillNode = ({ name, imageSrc, style }) => (
  <div className="skill-node" style={style}>
    <div className="badge-wrapper">
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
        {/* CAMADA DE LINHAS (SVG)
           Desenha as conexões atrás dos ícones.
           Ajustei as coordenadas para conectar os novos nós separados.
        */}
        <svg className="connections-svg" width="100%" height="100%" viewBox="0 0 450 300" preserveAspectRatio="none">
          
          {/* Caminho Front-end (Linha de Cima) */}
          <path d="M150 50 L250 50" className="connection-line" /> {/* HTML -> CSS */}
          <path d="M250 50 L350 50" className="connection-line" /> {/* CSS -> React */}
          
          {/* Caminho Core (Linha do Meio) */}
          <path d="M50 150 L150 150" className="connection-line" /> {/* Git -> JS */}
          <path d="M150 150 L250 150" className="connection-line" /> {/* JS -> TS */}
          <path d="M250 150 L350 150" className="connection-line" /> {/* TS -> n8n */}

          {/* Caminho Back-end (Linha de Baixo) */}
          <path d="M150 250 L250 250" className="connection-line" /> {/* SQL -> C# */}
          <path d="M250 250 L350 250" className="connection-line" /> {/* C# -> .NET */}
          <path d="M350 250 L450 250" className="connection-line" /> {/* .NET -> Azure */}

          {/* Conexões Verticais/Diagonais (Interligações) */}
          <path d="M150 150 L150 50" className="connection-line" />  {/* JS se conecta com HTML */}
          <path d="M150 150 L150 250" className="connection-line" /> {/* JS se conecta com SQL */}
          <path d="M350 250 L350 150" className="connection-line" /> {/* .NET se conecta com n8n (Opcional visual) */}
        </svg>

        {/* GRID DE ÍCONES 
           Agora com 5 Colunas para caber Azure e Docker confortavelmente
        */}
        <div className="nodes-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gridTemplateRows: 'repeat(3, 1fr)', 
            width: '100%', 
            maxWidth: '900px', // Aumentei um pouco a largura máxima
            height: '400px' 
          }}>
          
          {/* --- COLUNA 1: FERRAMENTAS --- */}
          <div style={{ gridColumn: 1, gridRow: 2, justifySelf: 'center', alignSelf: 'center' }}>
             <SkillNode name="Git" imageSrc="/badges/badgegit.jpg" />
          </div>

          {/* --- COLUNA 2: FUNDAÇÃO --- */}
          {/* Topo: HTML */}
          <div style={{ gridColumn: 2, gridRow: 1, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="HTML5" imageSrc="/badges/badgehtml.jpg" />
          </div>
          {/* Meio: JavaScript */}
          <div style={{ gridColumn: 2, gridRow: 2, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="JavaScript" imageSrc="/badges/badgejavascript.jpg" />
          </div>
          {/* Baixo: SQL */}
          <div style={{ gridColumn: 2, gridRow: 3, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="SQL" imageSrc="/badges/badgesql.jpg" />
          </div>

          {/* --- COLUNA 3: ESTRUTURA --- */}
          {/* Topo: CSS (Agora separado!) */}
          <div style={{ gridColumn: 3, gridRow: 1, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="CSS3" imageSrc="/badges/badgecss.jpg" />
          </div>
          {/* Meio: TypeScript */}
          <div style={{ gridColumn: 3, gridRow: 2, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="TypeScript" imageSrc="/badges/badgetypescript.jpg" />
          </div>
          {/* Baixo: C# */}
          <div style={{ gridColumn: 3, gridRow: 3, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="C#" imageSrc="/badges/badgecsharp.jpg" />
          </div>

          {/* --- COLUNA 4: FRAMEWORKS & AUTOMAÇÃO --- */}
          {/* Topo: React */}
          <div style={{ gridColumn: 4, gridRow: 1, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="React" imageSrc="/badges/badgereact.jpg" />
          </div>
          {/* Meio: n8n */}
          <div style={{ gridColumn: 4, gridRow: 2, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="n8n" imageSrc="/badges/badgen8n.jpg" />
          </div>
          {/* Baixo: .NET */}
          <div style={{ gridColumn: 4, gridRow: 3, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name=".NET" imageSrc="/badges/badgedotnet.jpg" />
          </div>

          {/* --- COLUNA 5: INFRA & CLOUD --- */}
          {/* Meio: Docker (Pode ficar aqui ou na linha de baixo) */}
          <div style={{ gridColumn: 5, gridRow: 2, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="Docker" imageSrc="/badges/badgedocker.jpg" />
          </div>
          {/* Baixo: Azure */}
          <div style={{ gridColumn: 5, gridRow: 3, justifySelf: 'center', alignSelf: 'center' }}>
            <SkillNode name="Azure" imageSrc="/badges/badgeazure.jpg" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SkillTree;