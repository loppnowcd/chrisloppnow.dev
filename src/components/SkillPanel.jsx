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
          background: "rgba(0, 0, 0, 0.5)",
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
          width: "320px",
          background: "#111",
          color: "#fff",
          padding: "16px",
          zIndex: 50
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            float: "right"
          }}
        >
          ✕
        </button>

        <h2 style={{ marginTop: "40px" }}>
          {skill.name}
        </h2>
      </aside>
    </>
  );
}
