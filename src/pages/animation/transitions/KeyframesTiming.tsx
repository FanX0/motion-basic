import { motion } from "motion/react";

const KeyframesTiming = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <motion.div
        animate={{ x: [0, 120, 120, 0] }}
        transition={{ duration: 1.8, times: [0, 0.4, 0.7, 1], ease: "linear" }}
        style={{ width: 80, height: 40, background: "#f59e0b", borderRadius: 8 }}
      />
      <motion.div
        animate={{ x: [0, 80, 160, 0] }}
        transition={{ duration: 2, times: [0, 0.33, 0.66, 1], ease: ["easeIn", "easeOut", "easeInOut"] }}
        style={{ width: 80, height: 40, background: "#ef4444", borderRadius: 8 }}
      />
    </div>
  );
};

export default KeyframesTiming;