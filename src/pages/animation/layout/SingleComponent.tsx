import { motion } from "motion/react";
import { useState } from "react";

const SingleComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [justifyEnd, setJustifyEnd] = useState(false);

  return (
    <>
      <div
        style={{
          marginBottom: 12,
          background: "#e5e7eb",
          padding: 8,
          fontSize: 12,
        }}
      >
        Using: layout to animate size/position; flex reflow changes
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: justifyEnd ? "flex-end" : "flex-start",
          gap: 16,
        }}
      >
        <motion.div
          layout
          style={{
            background: "#3b82f6",
            color: "white",
            borderRadius: 12,
            padding: 16,
            width: expanded ? 240 : 120,
            height: expanded ? 160 : 80,
          }}
        >
          box
        </motion.div>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={() => setExpanded((v) => !v)}>toggle size</button>
        <button onClick={() => setJustifyEnd((v) => !v)}>toggle flex</button>
      </div>
    </>
  );
};

export default SingleComponent;
