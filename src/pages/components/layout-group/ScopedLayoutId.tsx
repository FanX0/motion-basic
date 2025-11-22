import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";

const CardRow = ({ id }: { id: string }) => {
  const [active, setActive] = useState(0);
  return (
    <LayoutGroup id={id}>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: 12 }}>
        {[0, 1, 2].map((i) => (
          <button key={i} onClick={() => setActive(i)} style={{ position: "relative", width: 100, height: 60, background: "#e5e7eb", borderRadius: 12 }}>
            {i === active && (
              <motion.div layoutId="highlight" style={{ position: "absolute", inset: 0, border: "2px solid #8b5cf6", borderRadius: 12 }} />
            )}
            <span style={{ position: "relative" }}>card {i + 1}</span>
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
};

const ScopedLayoutId = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <CardRow id="cards-a" />
      <CardRow id="cards-b" />
    </div>
  );
};

export default ScopedLayoutId;