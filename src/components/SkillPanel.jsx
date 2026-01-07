// src/components/SkillPanel.jsx

export default function SkillPanel({ skill, onClose }) {
  if (!skill) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 40
        }}
      />

      {/* Painel */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "360px",
          background: "linear-gradient(180deg, #0b0b0f, #111)",
          color: "#fff",
          padding: "24px",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          boxShadow: "-10px 0 40px rgba(0,0,0,0.6)"
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
            src={skill.badge}
            alt={skill.name}
            style={{
              width: "56px",
              height: "56px",
              filter:
                "drop-shadow(0 0 12px rgba(168, 85, 247, 0.8))"
            }}
          />

          <div style={{ flex: 1 }}>
            <h2 style={{ margin: 0, fontSize: "1.6rem" }}>
              {skill.name}
            </h2>
            <span style={{ color: "#c084fc", fontWeight: 600 }}>
              {skill.level}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#aaa",
              fontSize: "20px",
              cursor: "pointer"
            }}
          >
            ✕
          </button>
        </div>

        {/* Nível visual */}
        <div>
          <p style={{ marginBottom: "8px", color: "#999" }}>
            Nível de domínio
          </p>

          <div style={{ display: "flex", gap: "6px" }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                style={{
                  width: "18px",
                  height: "6px",
                  borderRadius: "4px",
                  background:
                    n <= skill.levelScore
                      ? "linear-gradient(to right, #a855f7, #ec4899)"
                      : "#333"
                }}
              />
            ))}
          </div>
        </div>

        {/* O que eu faço com isso */}
        <div>
          <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>
            O que eu faço com isso
          </h3>
          <ul style={{ paddingLeft: "18px", color: "#ddd" }}>
            {skill.description.map((item, index) => (
              <li key={index} style={{ marginBottom: "6px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Evidências */}
        <div>
          <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>
            Evidências
          </h3>
          <ul style={{ paddingLeft: "18px", color: "#aaa" }}>
            {skill.evidence.map((item, index) => (
              <li key={index} style={{ marginBottom: "6px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Rodapé */}
        <div style={{ fontSize: "0.85rem", color: "#666" }}>
          Clique fora do painel para fechar
        </div>
      </aside>
    </>
  );
}
