import React, { useMemo } from 'react';
import ReactFlow, { 
  Handle, 
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css'; 
import './SkillTree.css';

const BadgeNode = ({ data }) => {
  return (
    <div className="skill-node-custom">
      {/* Handles em todas as direções para conexões flexíveis */}
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <div className="badge-wrapper">
        <img src={data.imageSrc} alt={data.label} />
      </div>
      <div className="skill-name">{data.label}</div>
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
    </div>
  );
};

const SkillTree = () => {
  const nodeTypes = useMemo(() => ({ badge: BadgeNode }), []);

  // --- LAYOUT SIMÉTRICO E PROFISSIONAL ---
  // Vamos usar um eixo central (X = 400)
  const nodes = [
    // NÍVEL 1: A Fundação (Centralizados no topo)
    { id: 'html', type: 'badge', position: { x: 250, y: 0 }, data: { label: 'HTML5', imageSrc: '/images/badges/badgehtml.png' } },
    { id: 'css', type: 'badge', position: { x: 400, y: 0 }, data: { label: 'CSS3', imageSrc: '/images/badges/badgecss.png' } },
    { id: 'js', type: 'badge', position: { x: 550, y: 0 }, data: { label: 'JavaScript', imageSrc: '/images/badges/badgejavascript.png' } },
    
    // NÍVEL 2: O Controle (O Funil)
    { id: 'git', type: 'badge', position: { x: 400, y: 150 }, data: { label: 'Git', imageSrc: '/images/badges/badgegit.png' } },
    
    // NÍVEL 3: A Bifurcação (Back-end ESQ | Front/Modern DIR)
    { id: 'sql', type: 'badge', position: { x: 250, y: 280 }, data: { label: 'SQL', imageSrc: '/images/badges/badgesql.png' } },
    { id: 'react', type: 'badge', position: { x: 550, y: 280 }, data: { label: 'React', imageSrc: '/images/badges/badgereact.png' } },

    // NÍVEL 4: Aprofundamento
    { id: 'csharp', type: 'badge', position: { x: 250, y: 410 }, data: { label: 'C#', imageSrc: '/images/badges/badgecsharp.png' } },
    { id: 'ts', type: 'badge', position: { x: 550, y: 410 }, data: { label: 'TypeScript', imageSrc: '/images/badges/badgetypescript.png' } },

    // NÍVEL 5: Frameworks & Infra
    { id: 'dotnet', type: 'badge', position: { x: 250, y: 540 }, data: { label: '.NET', imageSrc: '/images/badges/badgedotnet.png' } },
    { id: 'docker', type: 'badge', position: { x: 550, y: 540 }, data: { label: 'Docker', imageSrc: '/images/badges/badgedocker.png' } },

    // NÍVEL 6: Convergência Final (Cloud & Automação)
    { id: 'azure', type: 'badge', position: { x: 400, y: 680 }, data: { label: 'Azure', imageSrc: '/images/badges/badgeazure.png' } },
    { id: 'n8n', type: 'badge', position: { x: 400, y: 810 }, data: { label: 'n8n', imageSrc: '/images/badges/badgen8n.png' } },
  ];

  // --- CONEXÕES SUAVES (BEZIER) ---
  // type: 'default' cria curvas Bézier naturais e elegantes.
  const edges = [
    // Fundação -> Git
    { id: 'e-html-git', source: 'html', target: 'git', type: 'default', className: 'edge-elegant' },
    { id: 'e-css-git', source: 'css', target: 'git', type: 'default', className: 'edge-elegant' },
    { id: 'e-js-git', source: 'js', target: 'git', type: 'default', className: 'edge-elegant' },

    // Git distribui
    { id: 'e-git-sql', source: 'git', target: 'sql', type: 'default', className: 'edge-elegant' },
    { id: 'e-git-react', source: 'git', target: 'react', type: 'default', className: 'edge-elegant' },

    // Coluna da Esquerda (Back)
    { id: 'e-sql-csharp', source: 'sql', target: 'csharp', type: 'default', className: 'edge-elegant' },
    { id: 'e-csharp-dotnet', source: 'csharp', target: 'dotnet', type: 'default', className: 'edge-elegant' },

    // Coluna da Direita (Front/Modern)
    { id: 'e-react-ts', source: 'react', target: 'ts', type: 'default', className: 'edge-elegant' },
    { id: 'e-ts-docker', source: 'ts', target: 'docker', type: 'default', className: 'edge-elegant' },

    // Convergência para Azure
    { id: 'e-dotnet-azure', source: 'dotnet', target: 'azure', type: 'default', className: 'edge-elegant' },
    { id: 'e-docker-azure', source: 'docker', target: 'azure', type: 'default', className: 'edge-elegant' },

    // Final
    { id: 'e-azure-n8n', source: 'azure', target: 'n8n', type: 'default', className: 'edge-elegant' },
  ];

  return (
    <div className="rpg-container-flow">
      {/* TÍTULO COM ESPAÇAMENTO CORRETO */}
      <h2 className="skill-tree-title">
        Skill Tree
      </h2>
      
      <div style={{ width: '100%', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-right"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          panOnDrag={false}
        >
        </ReactFlow>
      </div>
    </div>
  );
};

export default SkillTree;