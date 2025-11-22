import { motion } from "motion/react";
import { useState } from "react";

const LayoutTiming = () => {
  const [wide, setWide] = useState(false);
  const [visible, setVisible] = useState(true);

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
        Using: layout transition duration and transition.layout for separate
        timing
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          style={{
            background: "#ef4444",
            color: "white",
            borderRadius: 12,
            padding: 16,
            width: wide ? 240 : 120,
          }}
        >
          direct
        </motion.div>
        <motion.div
          layout
          transition={{ layout: { duration: 0.3 }, duration: 0.8 }}
          animate={{ opacity: visible ? 1 : 0 }}
          style={{
            background: "#3b82f6",
            color: "white",
            borderRadius: 12,
            padding: 16,
            width: wide ? 240 : 120,
          }}
        >
          separated
        </motion.div>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={() => setWide((v) => !v)}>toggle width</button>
        <button onClick={() => setVisible((v) => !v)}>toggle opacity</button>
      </div>
    </>
  );
};

export default LayoutTiming;