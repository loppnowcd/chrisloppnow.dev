import React, { useMemo } from 'react';
import ReactFlow, { 
  Handle, 
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css'; 
import './SkillTree.css';

// --- NÓ CUSTOMIZADO (A Badge) ---
const BadgeNode = ({ data }) => {
  return (
    <div className="skill-node-custom">
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      
      <div className="badge-wrapper">
        <img src={data.imageSrc} alt={data.label} />
      </div>
      <div className="skill-name">{data.label}</div>

      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
    </div>
  );
};

const SkillTree = () => {
  const nodeTypes = useMemo(() => ({ badge: BadgeNode }), []);

  // --- DEFINIÇÃO DOS NÓS ---
  const nodes = [
    // LINHA 1 (Topo)
    { id: 'html', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'HTML5', imageSrc: '/images/badges/badgehtml.png' } },
    { id: 'css', type: 'badge', position: { x: 150, y: 0 }, data: { label: 'CSS3', imageSrc: '/images/badges/badgecss.png' } },
    { id: 'js', type: 'badge', position: { x: 300, y: 0 }, data: { label: 'JavaScript', imageSrc: '/images/badges/badgejavascript.png' } },
    
    // LINHA 2
    { id: 'git', type: 'badge', position: { x: 150, y: 150 }, data: { label: 'Git', imageSrc: '/images/badges/badgegit.png' } },
    { id: 'sql', type: 'badge', position: { x: 350, y: 150 }, data: { label: 'SQL', imageSrc: '/images/badges/badgesql.png' } },
    
    // LINHA 3
    { id: 'csharp', type: 'badge', position: { x: 350, y: 300 }, data: { label: 'C#', imageSrc: '/images/badges/badgecsharp.png' } },
    
    // LINHA 4
    { id: 'dotnet', type: 'badge', position: { x: 500, y: 300 }, data: { label: '.NET', imageSrc: '/images/badges/badgedotnet.png' } },
    { id: 'docker', type: 'badge', position: { x: 700, y: 300 }, data: { label: 'Docker', imageSrc: '/images/badges/badgedocker.png' } },
    
    // LINHA 5
    { id: 'react', type: 'badge', position: { x: 700, y: 450 }, data: { label: 'React', imageSrc: '/images/badges/badgereact.png' } },
    { id: 'ts', type: 'badge', position: { x: 900, y: 450 }, data: { label: 'TypeScript', imageSrc: '/images/badges/badgetypescript.png' } },

    // LINHA 6
    { id: 'azure', type: 'badge', position: { x: 700, y: 600 }, data: { label: 'Azure', imageSrc: '/images/badges/badgeazure.png' } },
    { id: 'n8n', type: 'badge', position: { x: 900, y: 600 }, data: { label: 'n8n', imageSrc: '/images/badges/badgen8n.png' } },
  ];

  // --- CONEXÕES ---
  const edges = [
    // Caminho Azul (Front)
    { id: 'e-html-git', source: 'html', target: 'git', type: 'smoothstep', className: 'edge-fluid-blue' },
    { id: 'e-css-git', source: 'css', target: 'git', type: 'smoothstep', className: 'edge-fluid-blue' },
    { id: 'e-js-git', source: 'js', target: 'git', type: 'smoothstep', className: 'edge-fluid-blue' },

    // Caminho Roxo (Back)
    { id: 'e-git-sql', source: 'git', target: 'sql', type: 'smoothstep', className: 'edge-fluid-purple' },
    { id: 'e-sql-csharp', source: 'sql', target: 'csharp', type: 'smoothstep', className: 'edge-fluid-purple' },
    { id: 'e-csharp-dotnet', source: 'csharp', target: 'dotnet', type: 'smoothstep', className: 'edge-fluid-purple' },

    // Caminho Laranja/Misto (Infra)
    { id: 'e-dotnet-docker', source: 'dotnet', target: 'docker', type: 'smoothstep', className: 'edge-fluid-orange' },
    { id: 'e-docker-react', source: 'docker', target: 'react', type: 'smoothstep', className: 'edge-fluid-orange' },

    // Finais
    { id: 'e-react-ts', source: 'react', target: 'ts', type: 'smoothstep', className: 'edge-fluid-blue' },
    { id: 'e-react-azure', source: 'react', target: 'azure', type: 'smoothstep', className: 'edge-fluid-orange' },
    { id: 'e-azure-n8n', source: 'azure', target: 'n8n', type: 'smoothstep', className: 'edge-fluid-orange' },
  ];

  return (
    <div className="rpg-container-flow">
      <h2 className="text-4xl font-bold mb-8 text-center uppercase tracking-widest bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent filter drop-shadow-lg">
        Skill Tree
      </h2>
      
      <div style={{ width: '100%', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-right"
          
          // --- CONFIGURAÇÕES CRÍTICAS PARA O SCROLL ---
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}      // Não dar zoom com a roda
          panOnScroll={false}       // Não arrastar com a roda
          zoomOnDoubleClick={false} // Não dar zoom com clique duplo
          preventScrolling={false}  // O MAIS IMPORTANTE: Permite que a página role!
          panOnDrag={false}         // Desativa o "agarrar" a tela
        >
          {/* Removi o <Background /> aqui */}
        </ReactFlow>
      </div>
    </div>
  );
};

export default SkillTree;