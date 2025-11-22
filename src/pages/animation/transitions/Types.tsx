import { motion } from "motion/react";

const Types = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
        style={{ width: 80, height: 40, background: "#0ea5e9", borderRadius: 8 }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        style={{ width: 80, height: 40, background: "#10b981", borderRadius: 8 }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{ type: "spring", duration: 0.6 }}
        style={{ width: 80, height: 40, background: "#8b5cf6", borderRadius: 8 }}
      />
    </div>
  );
};

export default Types;