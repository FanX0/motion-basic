import { motion } from "motion/react";
import { useState } from "react";

const ScaleCorrection = () => {
  const [wide, setWide] = useState(false);

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
        Using: layout on parent & child for scale correction; layout="position"
      </div>
      <motion.div
        layout
        style={{
          display: "grid",
          placeItems: "center",
          width: wide ? 320 : 160,
          height: 160,
          borderRadius: 24,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          background: "#f59e0b",
          padding: 12,
        }}
      >
        <motion.div
          layout
          style={{ background: "white", borderRadius: 16, padding: 12 }}
        >
          child
        </motion.div>
      </motion.div>
      <motion.div
        layout="position"
        style={{
          marginTop: 12,
          width: wide ? 320 : 160,
          height: 20,
          background: "#111827",
          color: "white",
        }}
      >
        position-only
      </motion.div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={() => setWide((v) => !v)}>toggle aspect</button>
      </div>
    </>
  );
};

export default ScaleCorrection;