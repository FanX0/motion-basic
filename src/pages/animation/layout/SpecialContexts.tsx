import { motion } from "motion/react";
import { useState } from "react";

const SpecialContexts = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative">
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: layout within absolute header and scroll container contexts
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 0,
          right: 0,
          height: 48,
          background: "#111827",
          color: "white",
          display: "grid",
          placeItems: "center",
        }}
      >
        fixed header
      </div>
      <div
        style={{
          marginTop: 56,
          height: 240,
          overflow: "auto",
          border: "1px solid #ccc",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            padding: 8,
          }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              layout
              style={{
                background: "#a78bfa",
                color: "white",
                borderRadius: 12,
                padding: 8,
                minHeight: 60,
                height: expanded === i ? 140 : 60,
              }}
            >
              <div>item {i + 1}</div>
              <button onClick={() => setExpanded((v) => (v === i ? null : i))}>
                toggle
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialContexts;