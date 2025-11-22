import { motion } from "motion/react";
import { useState } from "react";

const Tap = () => {
  const [status, setStatus] = useState("idle");
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <motion.button
        whileTap={{ scale: 0.92, rotate: 3 }}
        onTapStart={() => setStatus("tap start")}
        onTap={() => setStatus("tapped")}
        onTapCancel={() => setStatus("tap cancel")}
        style={{ width: 140, height: 60, background: "#ef4444", color: "white", borderRadius: 12 }}
      >
        tap
      </motion.button>
      <div>status: {status}</div>
    </div>
  );
};

export default Tap;