import React, { useMemo } from 'react';
import ReactFlow, { 
  Background, 
  Handle, 
  Position,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css'; // Importa estilos base obrigatórios
import './SkillTree.css';

// --- NÓ CUSTOMIZADO (A Badge) ---
// O React Flow usa isso para renderizar cada item
const BadgeNode = ({ data }) => {
  return (
    <div className="skill-node-custom">
      {/* Handles são os pontos invisíveis onde as linhas conectam.
          Colocamos um em cada lado para conexões flexíveis. */}
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


// --- CONFIGURAÇÃO DA ÁRVORE ---
const SkillTree = () => {
  // Define o tipo de nó customizado que criamos acima
  const nodeTypes = useMemo(() => ({ badge: BadgeNode }), []);

  // --- DEFINIÇÃO DOS NÓS (Posições X/Y baseadas no seu diagrama) ---
  const nodes = [
    // LINHA 1 (Topo)
    { id: 'html', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'HTML5', imageSrc: '/images/badges/badgehtml.png' } },
    { id: 'css', type: 'badge', position: { x: 150, y: 0 }, data: { label: 'CSS3', imageSrc: '/images/badges/badgecss.png' } },
    { id: 'js', type: 'badge', position: { x: 300, y: 0 }, data: { label: 'JavaScript', imageSrc: '/images/badges/badgejavascript.png' } },
    
    // LINHA 2 (Git e SQL)
    { id: 'git', type: 'badge', position: { x: 150, y: 150 }, data: { label: 'Git', imageSrc: '/images/badges/badgegit.png' } },
    { id: 'sql', type: 'badge', position: { x: 350, y: 150 }, data: { label: 'SQL', imageSrc: '/images/badges/badgesql.png' } },
    
    // LINHA 3 (C#)
    { id: 'csharp', type: 'badge', position: { x: 350, y: 300 }, data: { label: 'C#', imageSrc: '/images/badges/badgecsharp.png' } },
    
    // LINHA 4 (.NET e Docker)
    { id: 'dotnet', type: 'badge', position: { x: 500, y: 300 }, data: { label: '.NET', imageSrc: '/images/badges/badgedotnet.png' } },
    { id: 'docker', type: 'badge', position: { x: 700, y: 300 }, data: { label: 'Docker', imageSrc: '/images/badges/badgedocker.png' } },
    
    // LINHA 5 (React e TS)
    { id: 'react', type: 'badge', position: { x: 700, y: 450 }, data: { label: 'React', imageSrc: '/images/badges/badgereact.png' } },
    { id: 'ts', type: 'badge', position: { x: 900, y: 450 }, data: { label: 'TypeScript', imageSrc: '/images/badges/badgetypescript.png' } },

    // LINHA 6 (Azure e n8n)
    { id: 'azure', type: 'badge', position: { x: 700, y: 600 }, data: { label: 'Azure', imageSrc: '/images/badges/badgeazure.png' } },
    { id: 'n8n', type: 'badge', position: { x: 900, y: 600 }, data: { label: 'n8n', imageSrc: '/images/badges/badgen8n.png' } },
  ];


  // --- DEFINIÇÃO DAS CONEXÕES (Cabos de Energia) ---
  // Usamos 'className' para definir a cor do cabo (azul, roxo, laranja)
  // type: 'smoothstep' cria aquelas linhas com curvas suaves e ângulos retos, estilo diagrama técnico.
  const edges = [
    // Caminho Azul (Front Base)
    { id: 'e-html-git', source: 'html', target: 'git', type: 'smoothstep', className: 'edge-blue' },
    { id: 'e-css-git', source: 'css', target: 'git', type: 'smoothstep', className: 'edge-blue' },
    { id: 'e-js-git', source: 'js', target: 'git', type: 'smoothstep', className: 'edge-blue' },

    // Caminho Roxo (Back-end)
    { id: 'e-git-sql', source: 'git', target: 'sql', type: 'smoothstep', className: 'edge-purple' },
    { id: 'e-sql-csharp', source: 'sql', target: 'csharp', type: 'smoothstep', className: 'edge-purple' },
    { id: 'e-csharp-dotnet', source: 'csharp', target: 'dotnet', type: 'smoothstep', className: 'edge-purple' },

    // Caminho Laranja (Conexões Infra/Moderno)
    { id: 'e-dotnet-docker', source: 'dotnet', target: 'docker', type: 'smoothstep', className: 'edge-orange' },
    { id: 'e-docker-react', source: 'docker', target: 'react', type: 'smoothstep', className: 'edge-orange' },

    // Ramificações Finais
    { id: 'e-react-ts', source: 'react', target: 'ts', type: 'smoothstep', className: 'edge-blue' },
    { id: 'e-react-azure', source: 'react', target: 'azure', type: 'smoothstep', className: 'edge-orange' },
    { id: 'e-azure-n8n', source: 'azure', target: 'n8n', type: 'smoothstep', className: 'edge-orange' },
  ];


  return (
    <div className="rpg-container-flow">
      {/* O Título fica fora do fluxo */}
      <h2 className="text-4xl font-bold mb-8 text-center uppercase tracking-widest bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent filter drop-shadow-lg">
        Skill Tree
      </h2>
      
      {/* O Componente Principal do React Flow */}
      <div style={{ width: '100%', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView // Centraliza e dá zoom automaticamente para caber tudo
          attributionPosition="bottom-right"
          nodesDraggable={false} // Trava os nós para o usuário não bagunçar
          nodesConnectable={false}
          zoomOnScroll={false} // Desabilita zoom com scroll para não atrapalhar a navegação da página
          panOnScroll={false}
        >
          {/* Opcional: Adiciona um fundo de grid sutil */}
          <Background color="#444" gap={20} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default SkillTree;