import { motion } from "motion/react";

const SpringParams = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{ type: "spring", bounce: 0.4 }}
        style={{ width: 100, height: 40, background: "#22c55e", borderRadius: 8 }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{ type: "spring", stiffness: 160, damping: 24 }}
        style={{ width: 100, height: 40, background: "#3b82f6", borderRadius: 8 }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{ type: "spring", mass: 2, stiffness: 140, damping: 18 }}
        style={{ width: 100, height: 40, background: "#f43f5e", borderRadius: 8 }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{ type: "spring", duration: 0.6 }}
        style={{ width: 100, height: 40, background: "#a78bfa", borderRadius: 8 }}
      />
    </div>
  );
};

export default SpringParams;